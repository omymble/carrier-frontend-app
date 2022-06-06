import React from 'react';
import {
    BrowserRouter as Router,
    Route, Routes, Navigate, useLocation
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
import {useAppSelector} from "./redux/hooks/hooks";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Header/>}>
                        <Route index element={<RequireLogout><SignInPage/></RequireLogout>}/>
                        <Route path="home" element={<RequireAuth><HomePage/></RequireAuth>}/>
                        <Route path="driver" element={<RequireAuth><DriverPage/></RequireAuth>}/>
                        <Route path="passenger" element={<RequireAuth><PassengerPage/></RequireAuth>}/>
                        <Route path="passengers-list" element={<RequireAuth><FoundPassengersPage/></RequireAuth>}/>
                        <Route path="drivers-list" element={<RequireAuth><FoundDriversPage/></RequireAuth>}/>
                        <Route path="*" element={<NotFoundPage/>}/>
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

// @ts-ignore
const RequireAuth = ({children}) => {
    const location = useLocation()
    let {isAuth} = useAppSelector(state => state.authReducer)
    return isAuth ? children : <Navigate to='/' state={{from: location}}/>
}

// @ts-ignore
const RequireLogout = ({children}) => {
    const location = useLocation()
    let {isAuth} = useAppSelector(state => state.authReducer)
    return !(isAuth) ? children : <Navigate to='/home' state={{from: location}}/>
}


export default App;