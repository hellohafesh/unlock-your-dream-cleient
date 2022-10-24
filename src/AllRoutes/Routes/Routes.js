import { createBrowserRouter } from "react-router-dom";
import Blogs from "../../AllPages/Blogs/Blogs";
import Course from "../../AllPages/Course/Course";
import Courses from "../../AllPages/Courses/Courses";
import Faq from "../../AllPages/Faq/Faq";
import Home from "../../AllPages/Home/Home";
import Premium from "../../AllPages/Premium/Premium";
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

        path: '/courses',
        element: <Main></Main>,
        children: [

            {
                path: '/courses/:id',
                element: <Courses></Courses>
            },
            {
                path: '/courses/course/:id',
                element: <Course></Course>
            },


            {
                path: '/courses/premium',
                element: <Premium></Premium>
            },
        ]
    },
]);