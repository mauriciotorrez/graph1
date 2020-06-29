import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import LogoutContent from '../LogoutContent';
import withAuthSplit from '../../../hoc/withAuthSplit';


const Logout = ({ setBgProps }) => {
  useEffect(() => setBgProps({ image: null }), [setBgProps]);

  return (
    <div className="text-center">
      <LogoutContent layout="split" titleTag="h3" />
    </div>
  );
};

Logout.propTypes = { setBgProps: PropTypes.func.isRequired };

export default withAuthSplit(Logout);
