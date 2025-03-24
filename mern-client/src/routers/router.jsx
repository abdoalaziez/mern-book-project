import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../home/Home.jsx";
import Shop from "../shop/Shop.jsx";
import About from "../components/About.jsx";
import Blog from "../components/Blog.jsx";
import SingleBook from "../shop/SingleBook.jsx";
import DashboardLayout from "../Dashboard/DashboardLayout.jsx";
import Dashboard from "../Dashboard/Dashboard.jsx";
import UploadBook from "../Dashboard/UploadBook.jsx";
import ManageBooks from "../Dashboard/ManageBooks.jsx";
import EditBooks from "../Dashboard/EditBooks.jsx";
import Signup from "../components/Signup.jsx";
import Login from "../components/Login.jsx";
import PrivateRoute from "../PrivateRoute/PrivateRoute.jsx";
import Logout from "../components/Logout.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />, 
        children:[
            {
                path: "/",
                element: <Home />
            },
            {
               path: "/Shop",
               element: <Shop />
            },{
                path:"/about",
                element: <About />
            },{
                 path:"/blog",
                 element: <Blog />
            },{
                path: '/book/:id',
                element: <SingleBook />,
                loader: ({ params }) => fetch(`https://backendbook-sable.vercel.app/book/${params.id}`)
            }
           
        ]
    },
    {
     path: "/admin/Dashboard",
     element: <DashboardLayout />,
     children: [
        {
            path: "/admin/Dashboard",
            element: <PrivateRoute><Dashboard/></PrivateRoute>
        },
        {
            path: "/admin/Dashboard/upload",
            element: <UploadBook />,
        },
        {
            path: "/admin/Dashboard/manage",
            element: <ManageBooks/>
        },
        {
            path: "/admin/Dashboard/edit-books/:id",
            element: <EditBooks />,
            loader: ({ params }) => fetch(`https://backendbook-sable.vercel.app/book/${params.id}`)
            },
     ]  
    },
    {
        path: "/sign-up",
        element: <Signup />,
    },{
        path: "/login",
        element: <Login />
    },
    {
        path: "/logout",
        element: <Logout />,
    }
]);

export default router;
