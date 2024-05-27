// similar to app.jsx file
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {Outlet} from 'react-router-dom'
// nesting is possible due to outlet by react router dom


function Layout() {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default Layout;