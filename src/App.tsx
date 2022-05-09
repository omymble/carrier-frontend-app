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


function App() {
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
                               element={<PassengerPage/>}
                        />
                        <Route path="/home/driver"
                               element={<DriverPage/>}
                        />
                        <Route path="/drivers-list"
                               element={<FoundDriversPage/>}
                        />
                        <Route path="/passengers-list"
                               element={<FoundPassengersPage/>}
                        />
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
