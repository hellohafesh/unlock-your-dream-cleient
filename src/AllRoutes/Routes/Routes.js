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
import SingUp from "../../AllPages/SingUp/SingUp";
import Main from "../../Layout/Main";

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
        path: '*',
        element: <Blank></Blank>
    },
    {

        path: '/courses',
        element: <Main></Main>,
        children: [

            {
                path: '/courses/all',
                element: <Courses></Courses>,
                loader: ({ params }) => fetch(`http://localhost:5000/coursesDetails/${params.id}`)
            },
            {
                path: '/courses/course/:id',
                element: <Course></Course>,
                loader: ({ params }) => fetch(`http://localhost:5000/coursesDetails/${params.id}`)
            },


            {
                path: '/courses/premium',
                element: <Premium></Premium>
            },
        ]
    },
]);