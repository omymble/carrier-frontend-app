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


function App(props: StateObject) {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Routes>
                    <Route path="/sign-in" element={<SignInPage/>}/>
                    <Route path="/sign-out" element={<SignInPage/>}/>
                    <Route path="/passenger" element={<PassengerPage/>}/>
                    <Route path="/driver" element={<DriverPage/>}/>
                    <Route path="/drivers-list" element={<FoundDriversPage drivers={props.drivers}/>}/>
                    <Route path="/passengers-list" element={<FoundPassengersPage passengers={props.passengers}/>}/>
                    <Route path="/*" element={<NotFoundPage/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
