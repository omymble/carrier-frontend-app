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


function App() {
  return (
    <div className="App">

        <Router>
            <Header/>
            <h1>app</h1>
            <Routes>
                <Route path="/sign-in" element={<SignInPage/>}/>
                <Route path="/passenger" element={<PassengerPage />} />
                <Route path="/driver" element={<DriverPage />} />
                <Route path="/drivers-list" element={<FoundDriversPage />} />
                <Route path="/passengers-list" element={<FoundPassengersPage />} />
                {/*<Route path="/*" element={<NotFoundPage />} />*/}
            </Routes>
        </Router>
    </div>
  );
}

export default App;
