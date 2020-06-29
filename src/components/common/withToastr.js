import React from 'react';

import { connect } from 'react-redux';

import { compose } from 'redux';

import { applicationCreatorAction } from '../../redux/action';

const wrapToastr = Component => (props) => {
    const { name, onShowError, onShowSuccess, ...rest } = props;
    return <Component {...rest} onShowSuccessMessage={(message) => onShowSuccess(message)} onShowErrorMessage={(message) => onShowError(message)} />
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onShowError: (message) => dispatch(applicationCreatorAction.showErrorMessage(message)),
    onShowSuccess: (message) => dispatch(applicationCreatorAction.showSuccessMessage(message))
});

const withToastr=compose(connect(null, mapDispatchToProps), wrapToastr)

export default withToastr;
