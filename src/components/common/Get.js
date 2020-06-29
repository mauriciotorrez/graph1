import React, { useEffect, createElement } from 'react'
import withApiCall from './withApiCall';
import withLoading from './withLoading';

const GetView = ({ pathname, params, children, onGetCall, name, ...rest }) => {
    const [state, setState] = React.useState({
        data: null,
        loading: true,
        error: false
    })

    const { data, loading } = state;

    const onFetchSucess = (data) => {
        setState({ loading: false, data });
    }

    const reFetch = () => setState({
        data: null,
        loading: true,
        error: false
    })

    useEffect(() => {
        if (loading)
            onGetCall({
                pathname, params,
                onSuccess: onFetchSucess,
                processData: true
            });
        return () => { }
    }, [loading]);


    if (!!loading)
        return null;
    else {
        if (typeof children === "function")
            return children({ reFetch, data });
        return createElement(children.type, { ...children.props, reFetch, data });
    }
}

const Get = withApiCall(GetView)

export default Get