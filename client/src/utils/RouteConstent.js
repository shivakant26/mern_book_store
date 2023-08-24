import { lazy } from 'react';
const Logout = lazy(()=> import('../component/Logout'));
const HomePage = lazy(() => import('../pages/index'));
const Login = lazy(() => import('../component/Login'));
const Register = lazy(() => import('../component/Register'));
const DashBoard = lazy(() => import('../pages/Dashboard'));
const Profile = lazy(() => import('../component/dashboard/Profile'));
const AddBook = lazy(() => import('../component/dashboard/AddBook'));
const BookList = lazy(() => import('../component/dashboard/BookList'));
const UserList = lazy(() => import('../component/dashboard/UserList'));


export const publicRouteArray = [
    {
        path:"",
        component:<HomePage />
    },
    {
        path:"/login",
        component:<Login />
    },
    {
        path:"/register",
        component:<Register />
    }
]


export const ProtectdRouteArray = [
    {
        path:"/dashboard",
        component:<DashBoard />
    },
    {
        path:"/profile",
        component:<Profile />
    },
    {
        path:"/add-book",
        component:<AddBook />
    },
    {
        path:"/book-list",
        component:<BookList />
    },
    {
        path:"/user-list",
        component:<UserList />
    },
    {
        path:"/logout",
        component:<Logout />
    }
]