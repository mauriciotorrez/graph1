import React from 'react'
import { Switch, Redirect } from 'react-router-dom'
import ProtectedRoute from '../utilities/ProtectedRoutes'
import Edit from './Edit'
import List from './List'
import ContentWithAsideLayout from '../../layouts/ContentWithAsideLayout'
import Track from './Track'

export const Index = () => (
    <div>
        
        <Switch>
            <ProtectedRoute exact path="/devices/new" component={Edit} />
            <ProtectedRoute exact path="/devices/track/:deviceId" component={Track} />
            <ProtectedRoute exact path="/devices" component={List} />
            <ProtectedRoute exact path="/devices/:deviceId" component={Edit} />
            <Redirect to="/errors/404" />
        </Switch>
    </div>
)

export default Index