// @ts-nocheck
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Map, YMaps, RoutePanel } from "react-yandex-maps";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
    name: yup.string().required(),
    pointFromCoords: yup.array().required(),
    pointToCoords: yup.array().required(),
});

const routePanelOptions = {
    routePanelReverseGeocoding: true,
    autofocus: false,
    routePanelTypes: { auto: true },
    float: "right",
    maxWidth: 270,
    position: {
        top: 15,
        right: 15,
    },
};

export const PassengerForm = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            pointFromCoords: null,
            pointToCoords: null,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <>
            <Box
                component="form"
                sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
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

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
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
