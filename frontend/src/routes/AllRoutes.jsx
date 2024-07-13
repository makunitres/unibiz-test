import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import { Login } from '../pages/Login'
import { User } from '../pages/User'
import { Admin } from '../pages/Admin'
import { Manager } from '../pages/Manager'
import { Unauthorized } from '../pages/Unauthorized'


export const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/user' element={<User />}></Route>
            <Route
                path="/admin"
                element={
                    <PrivateRoute allowedRoles={['admin']}>
                        <Admin />
                    </PrivateRoute>
                }
            />
            <Route
                path="/manager"
                element={
                    <PrivateRoute allowedRoles={['manager']}>
                        <Manager />
                    </PrivateRoute>
                }
            />
            <Route path='/unauthorized' element={<Unauthorized />} />
        </Routes>
    )
}
