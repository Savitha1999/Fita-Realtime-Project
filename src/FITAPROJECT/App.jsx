import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";

import Topbar from './Navbar/Topbar';
import Register from './Students/Register';
import Applier from './Recuiter/Applier';
import Slider from "./Slider/Slider";
import About from "./about/About";
import Category from "./category/Category";
import Menu from "./placement/Menu";
import Card from './admin/Card';
import NoPage from "./NoPage";
import PlacementForm from "./placement/PlacementForm";
import Contact from "./contact/Contact";
import Dashboard from "./user/Dashboard";
import UserLogin from "./user/UserLogin";
import RecruiterSign from "./user/RecruiterSign";
import InstitutionSign from "./Recuiter/InstitutionSign";
import TestmonialSign from "./testmonial/TestmonialSign";
import Testimonial from "./testmonial/Testmonial";
import TestimonialDetail from "./testmonial/TestimonialDetail";

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
            <Route path="/card" element={<Card />} />
            <Route path="*" element={<NoPage />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/placement" element={<PlacementForm />} /> */}
            <Route path="/userlogin" element={<UserLogin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/recruitersign" element={<RecruiterSign />} />
            <Route path="/institutionsign" element={<InstitutionSign />} />
            <Route path="/testmonialsign" element={<TestmonialSign />} />
            <Route path="/testmonial" element={<Testimonial />} />
            <Route path="/testimonialdetail" element={<TestimonialDetail />} />










            
        </Routes>

        </BrowserRouter>
        
        
        </>
    )
}








