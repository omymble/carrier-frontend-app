import classes from './FoundDriversPage.module.scss'
import {DriversList} from "../../components/DriversList/DriversList";
import {driversSlice} from "../../redux/store/reducers/driversSlice"
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import axios from "axios";
import {foundDriversSlice} from "../../redux/store/reducers/foundDriversSlice";
import {IFoundDriver} from "../../redux/store/models/IFoundDriver";
import {useEffect} from "react";
import {fetchDrivers} from "../../redux/store/reducers/ActionCreators";

// import from "../../../public/data/driversData.json"
// const URL = "../../../public/data/driversData.json"
const URL = "my-json-server.typicode.com/omymble/demo/blob/master/db.json"

export const FoundDriversPage = (props: {}) => {
    let {setFoundDrivers, addDriver} = foundDriversSlice.actions
    const {foundDrivers, isLoading, error} = useAppSelector(state => state.foundDriversReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        debugger
        dispatch(fetchDrivers(URL))
        debugger
    }, [])
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

    const setDrivers = (foundDrivers: Array<IFoundDriver>) => {
        dispatch(setFoundDrivers(foundDrivers))
    }



    // axios.get(URL).then(response => )

    return (
        <div className={classes.foundDriversPage}>
            <h1>Нашлись водители:</h1>
            <DriversList drivers={foundDrivers} setDrivers={setDrivers}/>
        </div>
    )
}