// @ts-nocheck
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from '@mui/material/MenuItem';
import {Button} from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import ruLocale from 'date-fns/locale/ru';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import {Map, YMaps, RoutePanel} from "react-yandex-maps";
import {useFormik} from "formik";
import * as yup from "yup";
import {IDriver} from "../../redux/store/models/IDriver";
import {RU_REG_EXP, API1} from "../../consts";
import {toUnix} from "../../formatFunctions";

const seats = [
    {
        value: 1,
        label: '1',
    },
    {
        value: 2,
        label: '2',
    },
    {
        value: 3,
        label: '3',
    },
    {
        value: 4,
        label: '4',
    },
];

const validationSchema = yup.object({
    name: yup.string().required(),
    telephone: yup
        .string()
        .matches(RU_REG_EXP, 'Phone number is not valid')
        .required(),
    seats: yup.number().required(),
    pointFromCoords: yup.array().required(),
    pointToCoords: yup.array().required(),
});

const routePanelOptions = {
    routePanelReverseGeocoding: true,
    autofocus: false,
    routePanelTypes: {auto: true},
    float: "right",
    maxWidth: 270,
    position: {
        top: 15,
        right: 15,
    },
};

export const DriverForm = (props: { addDriver: Function, telInput: String }) => {
    const handleTimeChange = (tempTime: Date) => {
        formik.setFieldValue("time", tempTime)
    }
    const formik = useFormik({
        initialValues: {
            name: "",
            telephone: props.telInput,
            time: new Date(),
            seats: 1,
            pointFromCoords: null,
            pointToCoords: null,
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            alert(JSON.stringify(values, null, 2));
            console.log(values)
            let numTime = toUnix(values.time)
            let newDriver: IDriver = {
                name: values.name,
                telephone: values.te,
                seats: values.seats,
                time: numTime,
                from: {longitude: Number(values.pointFromCoords[0]), latitude: Number(values.pointFromCoords[1])},
                to: {longitude: Number(values.pointToCoords[0]), latitude: Number(values.pointToCoords[1])}
            }
            await props.addDriver(newDriver)
        },
    });

    return (
        <>
            <Box
                component="form"
                sx={{
                    "& > :not(style)": {m: 1, width: "25ch"},
                }}
                noValidate
                autoComplete="off"
                onSubmit={formik.handleSubmit}
            >
                <TextField
                    id="name"
                    name="name"
                    label="Имя"
                    variant="filled"
                    type="text"
                    required
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                />

                <TextField
                    id="telephone"
                    name="telephone"
                    label="Телефон"
                    variant="filled"
                    type="text"
                    required
                    value={formik.values.telephone}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.telephone)}
                    helperText={formik.touched.name && formik.errors.telephone}
                />
                <br/>
                <TextField
                    id="seats"
                    name="seats"
                    select
                    label="Свободные места"
                    variant="filled"
                    value={formik.values.seats}
                    onChange={formik.handleChange}
                    // error={formik.touched.name && Boolean(formik.errors.name)}
                    // helperText={formik.touched.name && formik.errors.name}
                >
                    {seats.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
                    <DesktopTimePicker
                        id="time"
                        name="time"
                        label="Время поездки"
                        variant="filled"
                        value={formik.values.time}
                        onChange={(val)=>handleTimeChange(val)}
                        renderInput={(params: {id: "time", name: "time", label: "Время поездки", variant: "filled"}) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <br/>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
                >
                    Подтвердить
                </Button>
            </Box>

            <YMaps
                query={{
                    apikey: 'da486eeb-9bb5-4a59-b6df-fbf45c37765d',
                }}
            >
                <Map
                    width={"100%"}
                    height={500}
                    modules={["geocode", "suggest"]}
                    defaultState={{
                        center: [55.751574, 37.573856],
                        zoom: 9,
                        controls: [],
                    }}
                >
                    <RoutePanel
                        instanceRef={async (r) => {
                            if (!r) return;
                            const route = await r.routePanel.getRouteAsync();
                            if (route && !r.routePanel.__eventAdded) {
                                route.model.events.add("requestsuccess", function (x) {
                                    const coords = x.originalEvent.target
                                        .getPoints()
                                        .map((x) => x.properties.get("coordinates"));

                                    formik.setFieldValue("pointFromCoords", coords[0]);
                                    formik.setFieldValue("pointToCoords", coords[1]);
                                });
                                r.routePanel.__eventAdded = true;
                            }
                        }}
                        options={routePanelOptions}
                    />
                </Map>
            </YMaps>
        </>
    );
}