import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {IAuth} from "../../redux/store/models/IAuth";
import {authSlice} from "../../redux/store/reducers/authSlice";
import  {useNavigate, useLocation} from "react-router-dom";
import {queryAPI} from "../../redux/services/queryService";
import {useFormik} from "formik";
import {RU_REG_EXP} from "../../consts";
import * as yup from "yup";


const validationSchema = yup.object({
    telephone: yup
        .string()
        .matches(RU_REG_EXP, 'Phone number is not valid')
        .required()
});

const theme = createTheme();

export const SignInPage = () => {

    let {telephone, isAuth} = useAppSelector(state => state.authReducer)
    let {signIn, signOut} = authSlice.actions
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const location = useLocation()

    const [createAuth, {error: createAuthError}] = queryAPI.useCreateAuthMutation()

    const formik = useFormik({
        initialValues: {
            telephone: ""
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            console.log('sign-in', values)
            await createAuth({telephone: values.telephone, isAuth: true} as IAuth)
            dispatch(signIn(values.telephone))
            navigate('/home', {replace: true})
        },
    });

/*    const authOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let telephone = data.get('telephone')
        console.log({telephone: telephone});

        if (telephone !== "") {
            console.log('before await')
            await createAuth({telephone, isAuth: true} as IAuth)
            console.log('before dispatch after await')
            dispatch(signIn(String(telephone)))
            navigate('/home', {replace: false})
            console.log('after all')
        }
    };*/

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                {/*<CssBaseline />*/}
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Войдите по номеру телефона
                    </Typography>
                    <Box component="form"
                         autoComplete="off"
                         onSubmit={formik.handleSubmit}
                         noValidate
                         sx={{ mt: 1 }}
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="telephone"
                            label="телефон"
                            name="telephone"
                            autoComplete="telephone"
                            autoFocus
                            value={formik.values.telephone}
                            onChange={formik.handleChange}
                            error={formik.touched.telephone && Boolean(formik.errors.telephone)}
                            helperText={formik.touched.telephone && formik.errors.telephone}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            войти
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}