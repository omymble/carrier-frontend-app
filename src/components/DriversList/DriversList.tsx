import classes from './DriversList.module.scss'
import  {DriverInfo} from "../DriverInfo/DriverInfo";
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {IFoundDriver} from "../../redux/store/models/IFoundDriver";
// import axios from "axios";


const URL = "../../assets/data/driversData.json"


export const DriversList = (props: {drivers: Array<IFoundDriver>, setDrivers: Function}) => {

    /*let foundDriversJSON: Array<IFoundDriver> = [
        {
            "name": "Илья Воробьев",
            "telephone": "+79095678439",
            "time": "15:30",
            "seats": 3,
            "from": "Невский проспект, 39Б",
            "to": "Кронверкский проспект, 49"
        },
        {
            "name": "Даниил Мартынов",
            "telephone": "+79095678439",
            "time": "16:00",
            "seats": 1,
            "from": "улица Ломоносова, 9",
            "to": "Кронверкский проспект, 49"
        },
        {
            "name": "Никита Логвиненко",
            "telephone": "+79095678439",
            "time": "12:20",
            "seats": 2,
            "from": "Невский проспект, 39Б",
            "to": "Кронверкская улица, 13"
        },
        {
            "name": "Саша Блашенков",
            "telephone": "+79095678439",
            "time": "11:50",
            "seats": 3,
            "from": "Невский проспект, 39Б",
            "to": "Кронверкский проспект, 49"
        },
        {
            "name": "Сергей Ельников",
            "telephone": "+79095678439",
            "time": "11:30",
            "seats": 3,
            "from": "Невский проспект, 39Б",
            "to": "Кронверкский проспект, 49"
        },
    ]*/
    if (props.drivers.length === 0) {
        // props.setDrivers(foundDriversJSON)
        const res =  fetch(URL)
         // axios.get(URL)
         //     .then(response => {
         //     debugger
         //     props.setDrivers()
         // })

    }



    let tsxDriversList =  props.drivers.map((item:IFoundDriver, i:number) =>
        <DriverInfo foundDriverData={item} key={i}/>
    )
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Array.from(tsxDriversList).map((item, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            {tsxDriversList[index]}
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )
}
