import { createBrowserRouter } from "react-router-dom";
import About from "../../AllPages/About/About";
import Blank from "../../AllPages/Blank/Blank";
import Blogs from "../../AllPages/Blogs/Blogs";
import Course from "../../AllPages/Course/Course";
import Courses from "../../AllPages/Courses/Courses";
import Faq from "../../AllPages/Faq/Faq";
import Home from "../../AllPages/Home/Home";
import Login from "../../AllPages/Login/Login";
import Premium from "../../AllPages/Premium/Premium";
import Profile from "../../AllPages/Profile/Profile";
import SingUp from "../../AllPages/SingUp/SingUp";
import Main from "../../Layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([


    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/faq',
        element: <Faq></Faq>
    },
    {
        path: '/blogs',
        element: <Blogs></Blogs>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/singup',
        element: <SingUp></SingUp>
    },
    {
        path: '/about',
        element: <About></About>
    },
    {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
    },
    {

        path: '/courses',
        element: <Main></Main>,
        children: [

            {
                path: '/courses/all',
                element: <Courses></Courses>
            },
            {
                path: '/courses/course/:id',
                element: <Course></Course>,
                loader: ({ params }) => fetch(`https://unlock-your-dreams-server.vercel.app/coursesDetails/${params.id}`)
            },


            {
                path: '/courses/premium',
                element: <PrivateRoute><Premium></Premium></PrivateRoute>,
                loader: ({ params }) => fetch(`https://unlock-your-dreams-server.vercel.app/coursesDetails/${params.id}`)
            },
            {
                path: '*',
                element: <Blank></Blank>
            },
        ]
    },
]);