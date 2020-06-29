import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
//import Avatar from '../../common/Avatar';
import LockScreenForm from '../LockScreenForm';
import { Col, Media, Row } from 'reactstrap';
import withAuthSplit from '../../../hoc/withAuthSplit';


const LockScreen = ({ setBgProps }) => {
  useEffect(() => setBgProps({ image: null }), [setBgProps]);

  return (
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
  );
};

LockScreen.propTypes = { setBgProps: PropTypes.func.isRequired };

export default withAuthSplit(LockScreen);
