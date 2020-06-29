import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge } from 'reactstrap';
import Flex from '../common/Flex';
import { injectIntl, FormattedMessage } from 'react-intl';

const NavbarVerticalMenuItem = ({ route }) => (
  <Flex align="center">
    {route.icon && (
      <span className="nav-link-icon">
        <FontAwesomeIcon icon={route.icon} />
      </span>
    )}
    <span className="nav-link-text"><FormattedMessage key="menuItem" id={route.name} defaultMessage="Not Defined"/></span>
    {!!route.badge && (
      <Badge color={route.badge.color || 'soft-success'} pill className="ml-2">
        {route.badge.text}
      </Badge>
    )}
  </Flex>
);

NavbarVerticalMenuItem.propTypes = {
  route: PropTypes.shape({
    icon: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    name: PropTypes.string.isRequired
  }).isRequired
};

export default React.memo(NavbarVerticalMenuItem);
