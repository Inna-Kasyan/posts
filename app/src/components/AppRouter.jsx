import React, { useContext } from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error'
import PostIdPage from '../pages/PostIdPage';
import { privateRoutes, publicRoutes } from './router';
import { AuthContext } from '../context';
import { redirect } from 'react-router';
import Loader from './UI/Loader/Loader';

function AppRouter() {
    const { isAuth, isLoading } = useContext(AuthContext)
    console.log(isAuth)

    if (isLoading) {
        return <Loader />
    }
    return (


        <Routes>
            {
                isAuth ? privateRoutes.map(route =>
                    <Route element={<route.element />} path={route.path} />) : publicRoutes.map(route =>
                        <Route element={<route.element />} path={route.path} />)
            }
        </Routes>
    )

}

export default AppRouter