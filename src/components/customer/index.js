import React from 'react'
import { Switch, Redirect } from 'react-router-dom'
import ProtectedRoute from '../utilities/ProtectedRoutes'
import  Edit from './Edit'
import List from './List'

export const Index = () => (
    <div>
        <Switch>
            <ProtectedRoute exact path="/customers/new" component={Edit} />
            <ProtectedRoute exact path="/customers/:deviceId"  component={Edit} />
            <ProtectedRoute exact path="/customers"  component={List} />
            <Redirect to="/errors/404" />
        </Switch>
    </div>
)

export default Index