import React from 'react'
import { useSelector } from 'react-redux';

import { Route, Redirect } from 'react-router-dom';

export const UnprotectedRoute = (props) => {
    const { userId } = useSelector(state => state.application.currentUser);
    if (!userId)
        return <Route {...props} />;
    else
        return <Redirect to="/" />
}

export default UnprotectedRoute