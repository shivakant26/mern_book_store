import { lazy } from 'react';
const HomePage = lazy(() => import('../pages/index'));
const Login = lazy(() => import('../component/authentication/Login'));
const Logout = lazy(()=> import('../component/authentication/Logout'));
const DashBoard = lazy(() => import('../pages/Dashboard'));
const AddToCart = lazy(()=> import('../component/products/AddCart'));
const Register = lazy(() => import('../component/authentication/Register'));
const SingleProduct =  lazy(()=> import('../component/products/SingleProduct'));
const AddBook = lazy(() => import('../component/dashboard/book/AddBook'));
const SingleBook = lazy(()=> import('../component/dashboard/book/SingleBook'));
const BookLists = lazy(() => import('../component/dashboard/book/BookLists'));
const Profile = lazy(() => import('../component/dashboard/users/Profile'));
const UserList = lazy(() => import('../component/dashboard/users/UserList'));
const SingleUser = lazy(()=> import('../component/dashboard/users/SingleUser'));


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
    },
    {
        path:"/single-product/:id",
        component:<SingleProduct />
    },
    {
        path:"/add-to-cart",
        component:<AddToCart />
    },

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
        path:"/add-book/:id",
        component:<AddBook />
    },
    {
        path:"/book/:id",
        component:<SingleBook />
    },
    {
        path:"/book-list",
        component:<BookLists />
    },
    {
        path:"/user-list",
        component:<UserList />
    },
    {
        path:"/users/:id",
        component:<SingleUser />
    },
    {
        path:"/logout",
        component:<Logout />
    }
]