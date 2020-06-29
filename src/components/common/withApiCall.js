import React from 'react';

import { connect } from 'react-redux';

import { compose } from 'redux';

import { apiCallCreatorAction } from '../../redux/action';

const wrapApiCall = Component => (props) => {
    const { name, onGetCall, onPutCall, onPostCall, onDeleteCall, ...rest } = props;
    return <Component {...rest}
        onGetCall={(payload) => onGetCall({ name, payload })}
        onPutCall={(payload) => onPutCall({ name, payload })}
        onPostCall={(payload) => onPostCall({ name, payload })}
        onDeleteCall={(payload) => onDeleteCall({ name, payload })}
    />
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onGetCall: ({ name: componentName, payload }) => { dispatch(apiCallCreatorAction.getAPI({ type: `GET:${componentName || ""}`, ...payload })) },
    onPutCall: ({ name: componentName, payload }) => { dispatch(apiCallCreatorAction.putAPI({ type: `PUT:${componentName || ""}`, ...payload })) },
    onPostCall: ({ name: componentName, payload }) => { dispatch(apiCallCreatorAction.postAPI({ type: `POST:${componentName || ""}`, ...payload })) },
    onDeleteCall: ({ name: componentName, payload }) => { dispatch(apiCallCreatorAction.deleteAPI({ type: `DELTE:${componentName || ""}`, ...payload })) }
});

const withApiCall = compose(connect(null, mapDispatchToProps), wrapApiCall)

export default withApiCall;
