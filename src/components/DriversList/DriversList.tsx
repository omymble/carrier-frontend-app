import classes from './DriversList.module.scss'
import  {DriverInfo} from "../DriverInfo/DriverInfo";

export const DriversList = (props : any) => {
    let tsxDriversList = props.drivers.map((item:any, i:number) =>
        <DriverInfo driverData={item} key={i}/>
    )
    console.log(props.drivers)
    return (
        <div className={classes.driversList}>
            <h1>DriversList</h1>
            {tsxDriversList}
        </div>
    )
}