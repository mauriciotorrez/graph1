import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ConfirmMailContent from '../ConfirmMailContent';
import withAuthSplit from '../../../hoc/withAuthSplit';


const ConfirmMail = ({ setBgProps }) => {
  useEffect(() => setBgProps({ image: null, position: '50% 30%' }), [setBgProps]);

  return (
    <div className="text-center">
      <ConfirmMailContent email="xyz@abc.com" layout="split" titleTag="h3" />
    </div>
  );
};

ConfirmMail.propTypes = { setBgProps: PropTypes.func.isRequired };

export default withAuthSplit(ConfirmMail);
