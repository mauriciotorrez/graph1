import React from 'react';

import { Link } from 'react-router-dom';

import { connect, useSelector } from 'react-redux';

import LogoutContent from '../LogoutContent';
import AuthCardLayout from '../../../layouts/AuthCardLayout';
import { applicationCreatorAction } from '../../../redux/action';

const Logout = ({ onUserLogout }) => {
  const { userId } = useSelector(state => state.application.currentUser);
  if (userId)
    onUserLogout();
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
      <div className="text-center">
        <LogoutContent layout="card" titleTag="h3" />
      </div>
    </AuthCardLayout>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onUserLogout: () => {
      dispatch(applicationCreatorAction.setCurrentUser({}))
    }
  }
}

export default connect(null, mapDispatchToProps)(Logout);
