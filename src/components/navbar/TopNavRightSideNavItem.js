import React from 'react';

import { Nav, NavItem} from 'reactstrap';

import ProfileDropdown from './ProfileDropdown';
import SettingsAnimatedIcon from './SettingsAnimatedIcon';

const TopNavRightSideNavItem = () => {
  //const { isTopNav } = useContext(AppContext);
  return (
    <Nav navbar className="navbar-nav-icons ml-auto flex-row align-items-center">
      <NavItem>
        <SettingsAnimatedIcon />
      </NavItem>
    {/*   {isTopNav && (
        <NavItem className="d-none d-md-block p-2 px-lg-0 cursor-pointer">
          <NavLink tag={Link} to="/changelog" id="changelog">
            <FontAwesomeIcon icon="code-branch" transform="right-6 grow-4" />
          </NavLink>
          <UncontrolledTooltip autohide={false} placement="left" target="changelog">
            Changelog
          </UncontrolledTooltip>
        </NavItem>
      )}
      <CartNotification />

      <NotificationDropdown /> */}
      <ProfileDropdown />
    </Nav>
  );
};

export default TopNavRightSideNavItem;
