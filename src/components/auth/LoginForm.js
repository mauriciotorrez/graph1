import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { injectIntl } from 'react-intl';

import { Button, Form, Row, Col, FormGroup, Input, CustomInput, Label } from 'reactstrap';

import { FormattedMessage } from 'react-intl';

import { connect } from 'react-redux';

import Divider from '../common/Divider';
import withLoading from '../common/withLoading';
import withRedirect from '../../hoc/withRedirect';
import { apiCallCreatorAction, applicationCreatorAction } from '../../redux/action';

import SocialAuthButtons from './SocialAuthButtons';
const loadingPageName="LoadingPage";
const LoginForm = ({ intl,
  setRedirect,
  hasLabel,
  onShowLoading,
  onHideLoading,
  layout,
  onPostApiCall,
  setRedirectUrl,
  setCurrentUser,
  onGetApiCall }) => {
  // State
  const [email, setEmail] = useState('luis@atomoweb.com');
  const [password, setPassword] = useState('123456');
  const [remember, setRemember] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);

  // Handler
  const handleSubmit = e => {
    e.preventDefault();
onShowLoading(loadingPageName)
    onPostApiCall({
      pathname: "/login",
      onSuccess: loginSucessHandler,
      onFinally: ()=>onHideLoading(loadingPageName),
      data: { email, password }
    })
  };

  const getUserProfileSuccessHandler = ({ firstName, lastName, roles, uuid: userId, customer }) => {
    setCurrentUser({ firstName, lastName, roles, userId, customer });
    setRedirectUrl("/");
    setRedirect(true);
  }

  const loginSucessHandler = ({ profileUrl  }) => {
    
    onGetApiCall({
      pathname: profileUrl,
      onSuccess: getUserProfileSuccessHandler,
      data: { email, password },
      processData: false
    })
  }

  useEffect(() => {
    setIsDisabled(!email || !password);
  }, [email, password]);

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <FormattedMessage id="msg.login.emailAddress" defaultMessage="Email Address" key="emailAddress">
          {placeholder => (
            <>
              {hasLabel && <Label>{placeholder}</Label>}
              <Input
                placeholder={!hasLabel ? placeholder : ''}
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                type="email"
              />
            </>)}
        </FormattedMessage>
      </FormGroup>
      <FormGroup>
        <FormattedMessage id="msg.login.password" defaultMessage="Password" key="password">
          {placeholder =>
            <>
              {hasLabel && <Label>{placeholder}</Label>}
              <Input
                placeholder={!hasLabel ? placeholder : ''}
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                type="password"
              /></>
          }
        </FormattedMessage>
      </FormGroup>
      <Row className="justify-content-between align-items-center">
        <Col xs="auto">

          <FormattedMessage id="msg.login.rememberMe" defaultMessage="Remember me" key="rememberme">
            {message =>
              <CustomInput
                id="customCheckRemember"
                label={message}
                checked={remember}
                onChange={({ target }) => setRemember(target.checked)}
                type="checkbox"
              />}
          </FormattedMessage>
        </Col>
        <Col xs="auto">
          <Link className="fs--1" to={`/authentication/${layout}/forget-password`}>
            <FormattedMessage id="msg.login.forgotPassword" defaultMessage="Forget Password?2" />
          </Link>
        </Col>
      </Row>
      <FormGroup>
        <Button color="primary" block className="mt-3" disabled={isDisabled}>
          <FormattedMessage id="msg.login.title" defaultMessage="Log in" />
        </Button>
      </FormGroup>
      <Divider className="mt-4">
        <FormattedMessage id="msg.login.socialLogin" defaultMessage="or login with" /></Divider>
      <SocialAuthButtons />
    </Form>
  );
};

LoginForm.propTypes = {
  setRedirect: PropTypes.func.isRequired,
  layout: PropTypes.string,
  hasLabel: PropTypes.bool
};

LoginForm.defaultProps = {
  layout: 'basic',
  hasLabel: false
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onGetApiCall: (payload) => {
      dispatch(apiCallCreatorAction.getAPI({type:`GET:${"LOGIN_FORM"}`,...payload}))
    },
    onPostApiCall: (payload) => {
      dispatch(apiCallCreatorAction.postAPI({type:`POST:${"LOGIN_FORM"}`,...payload}))
    },
    setCurrentUser: (payload) => {
      dispatch(applicationCreatorAction.setCurrentUser(payload))
    }
  }
}


export default injectIntl(withRedirect(connect(null, mapDispatchToProps)(withLoading(LoginForm))));
