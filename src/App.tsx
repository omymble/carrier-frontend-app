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
import {StateObject} from "./types";


function App(props: {state: StateObject, dispatch: Function /*addPassenger: Function, addDriver: Function, updateTelephone: Function*/}) {
    return (
        <div className="App">
            <Router>
                <Header/>
                <section>
                <Routes>
                    <Route path="/sign-in" element={<SignInPage/>}/>
                    <Route path="/sign-out" element={<SignInPage/>}/>
                    <Route path="/passenger" element={<PassengerPage
                        dispatch={props.dispatch}
                        // updateTelephone={props.updateTelephone}
                        telInput={props.state.telInput}
                        // addPassenger={props.addPassenger}
                        drivers={props.state.drivers}
                        passengers={props.state.passengers}
                    />}/>
                    <Route path="/driver" element={<DriverPage
                        dispatch={props.dispatch}
                        telInput={props.state.telInput}
                        // addDriver={props.addDriver}
                        passengers={props.state.passengers}
                        drivers={props.state.drivers}
                    />}/>
                    <Route path="/drivers-list" element={<FoundDriversPage
                        drivers={props.state.drivers}
                    />}/>
                    <Route path="/passengers-list" element={<FoundPassengersPage
                        passengers={props.state.passengers}
                    />}/>
                    <Route path="/*" element={<NotFoundPage/>} />
                </Routes>
                </section>
            </Router>
        </div>
    );
}

export default App;
