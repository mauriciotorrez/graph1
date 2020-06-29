import React from 'react'
import { useSelector } from 'react-redux';

import { Route, Redirect, withRouter } from 'react-router-dom';

import routes from "../../routes"

export const ProtectedRoute = ({ rolesRequired = [], ...props }) => {
    const routeConfiguration = routes.reduce((pv, cv) => {
        const childrenWithRoles = cv.children.filter(child => child.roles);
        return [...pv, ...childrenWithRoles]
    }, []).filter(route => route.to === props.match.path);

    const loginRoute = "/authentication/basic/login";


    const { roles, userId } = useSelector(state => state.application.currentUser);

    if (!userId && props.match.path==="/")
        return <Redirect to={loginRoute} />
    if (!roles)
        return <Redirect to="/errors/404" />
    if (!routeConfiguration.length)
        return <Route {...props} />
    const roleFind = roles.find(role =>
        routeConfiguration.find(route =>
            route.roles.find(roleRequired => roleRequired === role)));
    if (roleFind)
        return <Route {...props} />;
    else
        return <Redirect to="/errors/404" />
}

export default withRouter(ProtectedRoute)