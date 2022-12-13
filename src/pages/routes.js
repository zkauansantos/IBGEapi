import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CountyDetails } from "./CountyDetails";
import { Home } from "./Home";

export const AppRoutes = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path= '/' element={<Home />}/>
                <Route exact path= '/details' element={<CountyDetails />}/>
            </Routes>
        </BrowserRouter>
    )
};
