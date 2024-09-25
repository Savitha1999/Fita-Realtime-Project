import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";

import Topbar from './Navbar/Topbar';
import Register from './Students/Register';
import Applier from './Recuiter/Applier';
import Slider from "./Slider/Slider";
import About from "./about/About";
import Category from "./category/Category";
import Menu from "./placement/Menu";
import Clients from "./testmonial/Clients";
import Card from './admin/Card';

export default function Main()
{
    return(
        <>

        <BrowserRouter>

        <Routes>
       
           
            <Route path="/fita" element={<Slider />} />
            <Route path="/topbar" element={<Topbar /> } />
            <Route path="/register" element={<Register />} />
            <Route path="/applier" element={<Applier />} />
            <Route path="/about" element={<About /> } />
            <Route path="/category" element={<Category />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/card" element={<Card />} />

            
        </Routes>

        </BrowserRouter>
        
        
        </>
    )
}








