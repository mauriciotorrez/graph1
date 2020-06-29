import React from 'react';

import { Link } from 'react-router-dom';

import { Col, Media, Row } from 'reactstrap';

import LockScreenForm from '../LockScreenForm';
import AuthCardLayout from '../../../layouts/AuthCardLayout';

const LockScreen = () => {
  return (
    <AuthCardLayout
      leftSideContent={
        <p className="mb-0 mt-4 mt-md-5 fs--1 font-weight-semi-bold text-300">
          Read our{' '}
          <Link className="text-underline text-300" to="#!">
            terms
          </Link>{' '}
          and{' '}
          <Link className="text-underline text-300" to="#!">
            conditions{' '}
          </Link>
        </p>
      }
    >
      <Row className="justify-content-center">
        <Col xs="auto">
          <Media className="align-items-center">
            <Media body>
              <h4>Hi! Emma</h4>
              <p className="mb-0">
                Enter your password <br />
                to access the admin.
              </p>
            </Media>
          </Media>
          <LockScreenForm className="mt-4" />
        </Col>
      </Row>
    </AuthCardLayout>
  );
};

export default LockScreen;
