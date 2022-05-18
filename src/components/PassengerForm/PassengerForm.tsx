// @ts-nocheck
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import ruLocale from 'date-fns/locale/ru';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import {Button, Stack} from "@mui/material";
import {Map, YMaps, RoutePanel} from "react-yandex-maps";
import {useFormik} from "formik";
import * as yup from "yup";
import {IPassenger} from "../../redux/store/models/IPassenger";
import {useState} from "react";

const validationSchema = yup.object({
    name: yup.string().required(),
    telephone: yup.string().required(),
    time: yup.date().required(),
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

export const PassengerForm = (props: { addPassengerOnSubmit: Function }) => {
    const [inputTime, setInputTime] = useState(new Date())
    const handleTimeChange = (inputTime: Date) => {
        setInputTime(inputTime)
        console.log(inputTime)
        formik.setFieldValue("time", inputTime)
    }

    const formik = useFormik({
        initialValues: {
            name: "",
            telephone: "",
            time: inputTime,
            pointFromCoords: null,
            pointToCoords: null,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            console.log(values)
            let numTime = Math.floor(values.time.getTime() / 1000).toFixed(0)
            console.log('unix', numTime)
            let strTime = new Date(numTime * 1000)
            console.log('str', strTime)
            let newPassenger: IPassenger = {
                name: values.name,
                telephone: values.telephone,
                time: values.time,
                from: {longitude: String(values.pointFromCoords[0]), latitude: String(values.pointFromCoords[1])},
                to: {longitude: String(values.pointToCoords[0]), latitude: String(values.pointToCoords[1])}
            }
            props.addPassengerOnSubmit(newPassenger)
        }
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
                <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
                    <TimePicker
                        id="time"
                        name="time"
                        label="Время поездки"
                        variant="filled"
                        value={formik.values.time}
                        // onChange={formik.handleChange}
                        onChange={handleTimeChange}
                        renderInput={(params: {id: "time", name: "time", label: "Время поездки", variant: "filled"}) => <TextField {...params} />}
                    />
                    {/*<Stack spacing={3}>
                    <MobileTimePicker
                        label="For mobile"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <DesktopTimePicker
                        label="For desktop"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <TimePicker
                        value={value}
                        onChange={setValue}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </Stack>*/}
                </LocalizationProvider>
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
                    apikey: "f53fb552-fa13-43bb-80f6-18ef906b6437",
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
};
