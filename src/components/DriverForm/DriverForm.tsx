// @ts-nocheck
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from '@mui/material/MenuItem';
import {Button} from "@mui/material";
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import ruLocale from 'date-fns/locale/ru';
import {DesktopTimePicker} from '@mui/x-date-pickers/DesktopTimePicker';
import {Map, RoutePanel, YMaps} from "react-yandex-maps";
import {useFormik} from "formik";
import * as yup from "yup";
import {IDriver} from "../../redux/store/models/IDriver";
import {API_1, RU_REG_EXP} from "../../consts";
import {toUnix} from "../../formatFunctions";
import Container from "@mui/material/Container";

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
        .matches(RU_REG_EXP, 'Некорректное значение')
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
        top: 10,
        right: 10,
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
            let numTime = toUnix(values.time)
            let newDriver: IDriver = {
                name: values.name,
                id: values.telephone,
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
                    variant="outlined"
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
                    variant="outlined"
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
                    variant="outlined"
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
                        value={formik.values.time}
                        onChange={(val)=>handleTimeChange(val)}
                        renderInput={(params: {id: "time", name: "time", label: "Время поездки"}) => <TextField {...params} />}
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
                    apikey: API_1,
                }}
            >
                <Container sx={{margin: "30px auto 20px"}} >
                {/*<Box display={"flex"} justifyContent={"center"} margin={"30px auto 20px"}>*/}
                <Map
                    modules={["geocode", "suggest"]}
                    defaultState={{
                        center: [59.9311, 30.3609],
                        zoom: 9,
                        controls: [],
                    }}
                    width={"100%"}
                    // height={"40%"}
                    height={'400px'}
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
                {/*</Box>*/}
                </Container>
            </YMaps>
        </>
    );
}