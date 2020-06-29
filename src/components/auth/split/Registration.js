import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Flex from '../../common/Flex';
import RegistrationForm from '../RegistrationForm';
import withAuthSplit from '../../../hoc/withAuthSplit';


const Registration = ({ setBgProps }) => {
  useEffect(() => setBgProps({ image: null }), [setBgProps]);

  return (
    <Fragment>
      <Flex align="center" justify="between">
        <h3>Register</h3>
        <p className="mb-0 fs--1">
          <span className="font-weight-semi-bold">Already User? </span>
          <Link to="/authentication/split/login">Login</Link>
        </p>
      </Flex>
      <RegistrationForm layout="split" hasLabel />
    </Fragment>
  );
};

Registration.propTypes = { setBgProps: PropTypes.func.isRequired };

export default withAuthSplit(Registration);
