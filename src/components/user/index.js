import React from 'react'
import { Switch, Redirect } from 'react-router-dom'
import UserTable from './List'
import Edit from './Edit'
import ProtectedRoute from '../utilities/ProtectedRoutes'

export const User = () => (
    <div>
        <Switch>
            <ProtectedRoute exact path="/users/new" component={Edit} />
            <ProtectedRoute exact path="/users/:userId" component={Edit} />
            <ProtectedRoute path="/users" component={UserTable} />
            <Redirect to="/errors/404" />
        </Switch>
    </div>
)

export default User