import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Homepage from "./components/homepage";
import Menu from "./components/menu";
import HeaderLayout from "./components/header/headerLayout";
import AboutUs from "./components/about";
import Experience from "./components/experience";
import Destination from "./components/destination";
import Experience2 from "./components/experience2";

const router = createBrowserRouter([
    {
        element: <HeaderLayout />,
        children: [
            {
                path:'/',
                element: <Homepage />
            },
        ]
    },
    {
        path: '/menu',
        element: <Menu />
    },
    {
        path: '/about',
        element: <AboutUs />
    },
    {
        path: '/experience',
        element: <Experience />
    },
    {
        path: '/destination',
        element: <Destination />
    },
    {
        path: '/experience2',
        element: <Experience2 />
    }
])

export default router;
