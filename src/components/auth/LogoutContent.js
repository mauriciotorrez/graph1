import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React, { Fragment } from 'react';

import PropTypes from 'prop-types';

import { Button } from 'reactstrap';

import { Link } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';

import { connect, useSelector } from 'react-redux';

import { applicationCreatorAction } from '../../redux/action';
import rocket from '../../assets/img/illustrations/rocket.png';

const LogoutContent = ({ layout, titleTag: TitleTag, onUserLogout }) => {
  const { userId } = useSelector(state => state.application.currentUser);
  React.useEffect(() => {
    if (userId)
      onUserLogout();
    return () => {
    }
  }, [])
  return (
    <Fragment>
      <img className="d-block mx-auto mb-4" src={rocket} alt="shield" width={70} />
      <TitleTag>
        <FormattedMessage id="msg.logout.goodbye" defaultMessage="See you again!" key="goodbye" />
      </TitleTag>
      <p>

        <FormattedMessage id="msg.logout.signedout" defaultMessage="Thanks for using Falcon. You are now successfully signed out." key="signedout" />
        {/* Thanks for using Falcon. You are <br className="d-none d-sm-block" />
        now successfully signed out. */}
      </p>
      <Button tag={Link} color="primary" size="sm" className="mt-3" to={`/authentication/${layout}/login`}>
        <FontAwesomeIcon icon="chevron-left" transform="shrink-4 down-1" className="mr-1" />
        Return to Login
      </Button>
    </Fragment>
  );
};

LogoutContent.propTypes = {
  layout: PropTypes.string,
  titleTag: PropTypes.string
};

LogoutContent.defaultProps = {
  layout: 'basic',
  titleTag: 'h4'
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onUserLogout: () => {
      dispatch(applicationCreatorAction.setCurrentUser({}))
    }
  }
}

export default connect(null, mapDispatchToProps)(LogoutContent);