import React, { Fragment } from 'react';

import { Col, Row } from 'reactstrap';

import { Link } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';

import LoginForm from '../LoginForm';

const Login = () => (
  <Fragment>
    <Row className="text-left justify-content-between">
      <Col xs="auto">
        <h5><FormattedMessage id="msg.login.title" defaultMessage="Log in"/></h5>
      </Col>
      <Col xs="auto">
        <p className="fs--1 text-600">
          or <Link to="/authentication/basic/register">
            <FormattedMessage id="msg.login.createAnAccount" defaultMessage="create an account" />
          </Link>
        </p>
      </Col>
    </Row>
    <LoginForm />
  </Fragment>
);

export default Login;
