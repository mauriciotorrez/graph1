import React from 'react';
import { applicationCreatorAction } from '../../redux/action';
import { connect } from 'react-redux';
import { compose } from 'redux';

const wrapLoading = Component => (props) => {
    const { name, onShowLoading, onHideLoading, ...rest } = props;
    return <Component {...rest} onShowLoading={() => onShowLoading(name)} onHideLoading={() => onHideLoading(name)} />
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onShowLoading: (componentName) => dispatch(applicationCreatorAction.showLoading(`GET:${componentName || ""}`)),
    onHideLoading: (componentName) => dispatch(applicationCreatorAction.hideLoading(`GET:${componentName || ""}`))
});

const withLoading=compose(connect(null, mapDispatchToProps), wrapLoading)

export default withLoading;
