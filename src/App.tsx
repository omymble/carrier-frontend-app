import React from 'react';
import {
    BrowserRouter as Router,
    Route, Routes
} from "react-router-dom";
import './App.scss';
import {Header} from "./components/Header/Header";
import {SignInPage} from "./pages/SignInPage/SignInPage";
import {PassengerPage} from "./pages/PassengerPage/PassengerPage";
import {DriverPage} from "./pages/DriverPage/DriverPage";
import {FoundDriversPage} from "./pages/FoundDriversPage/FoundDriversPage";
import {FoundPassengersPage} from "./pages/FoundPassengersPage/FoundPassengersPage";
import {NotFoundPage} from "./pages/NotFoundPage/NotFoundPage";
import {HomePage} from "./pages/HomePage/HomePage";


function App(/*props: { state: StateObject, dispatch: Function, store_my: StoreObject }*/) {
    // const {} = useAppSelector(state => state.pReducer)
    return (
        <div className="App">
            <Router>
                <Header/>
                <section>
                    <Routes>
                        <Route path="/"
                               element={<SignInPage/>}
                        />
                        <Route path="/home"
                               element={<HomePage/>}
                        />
                        <Route path="/sign-in"
                               element={<SignInPage/>}
                        />
                        <Route path="/home/passenger"
                               element={<PassengerPage
                               // dispatch={props.dispatch}
                               // passengersData={props.state.passengersData}
                               // drivers={props.state.driversData.drivers} //temp
                               />}
                        />
                        <Route path="/home/driver"
                               element={<DriverPage
                               // store={props.store_my}
                               // dispatch={props.dispatch}
                               // driversData={props.state.driversData}
                               // passengers={props.state.passengersData.passengers} //temp
                               />}
                        />
                        <Route path="/drivers-list"
                               element={<FoundDriversPage
                               // drivers={props.state.driversData.drivers}
                               />}/>
                        <Route path="/passengers-list"
                               element={<FoundPassengersPage
                               // passengers={props.state.passengersData.passengers}
                               />}/>
                        <Route path="/*"
                               element={<NotFoundPage/>}
                        />
                    </Routes>
                </section>
            </Router>
        </div>
    );
}

export default App;
