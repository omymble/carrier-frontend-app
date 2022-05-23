// @ts-nocheck
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import ruLocale from 'date-fns/locale/ru';
import {DesktopTimePicker} from '@mui/x-date-pickers/DesktopTimePicker';
import {Button} from "@mui/material";
import {Map, RoutePanel, YMaps} from "react-yandex-maps";
import {useFormik} from "formik";
import * as yup from "yup";
import {IPassenger} from "../../redux/store/models/IPassenger";
import {toUnix} from "../../formatFunctions";
import {API_1, RU_REG_EXP} from "../../consts";


const validationSchema = yup.object({
    name: yup.string().required(),
    telephone: yup
        .string()
        .matches(RU_REG_EXP, 'Phone number is not valid')
        .required(),
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

export const PassengerForm = (props: { addPassenger: Function, telInput: String }) => {

    const handleTimeChange = (tempTime: Date) => {
        formik.setFieldValue("time", tempTime)
    }

    const formik = useFormik({
        initialValues: {
            name: "",
            telephone: props.telInput,
            time: new Date(),
            pointFromCoords: null,
            pointToCoords: null,
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            alert(JSON.stringify(values, null, 2));
            let numTime = toUnix(values.time)
            let newPassenger: IPassenger = {
                name: values.name,
                telephone: values.telephone,
                time: numTime,
                from: {longitude: Number(values.pointFromCoords[0]), latitude: Number(values.pointFromCoords[1])},
                to: {longitude: Number(values.pointToCoords[0]), latitude: Number(values.pointToCoords[1])}
            }
            await props.addPassenger(newPassenger)
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
                <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
                    <DesktopTimePicker
                        id="time"
                        name="time"
                        label="Время поездки"
                        value={formik.values.time}
                        onChange={(val)=>handleTimeChange(val)}
                        renderInput={(params: {id: "time", name: "time", variant: "filled"}) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <br/>

            </Box>


            <YMaps
                query={{
                    apikey: API_1,
                }}
            >
            <Box display={"flex"} justifyContent={"center"} margin={"30px auto 20px"}>
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
            </Box>
            </YMaps>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{mt: 3, mb: 2}}
            >
                Подтвердить
            </Button>
        </>
    );
};
