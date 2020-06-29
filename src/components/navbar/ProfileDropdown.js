import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { DropdownItem, DropdownMenu, DropdownToggle, Dropdown } from 'reactstrap';

import { FormattedMessage } from 'react-intl';

import Avatar from '../common/Avatar';
import team3 from '../../assets/img/team/3.jpg';

const ProfileDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  return (
    <Dropdown
      nav
      inNavbar
      isOpen={dropdownOpen}
      toggle={toggle}
      onMouseOver={() => {
        let windowWidth = window.innerWidth;
        windowWidth > 992 && setDropdownOpen(true);
      }}
      onMouseLeave={() => {
        let windowWidth = window.innerWidth;
        windowWidth > 992 && setDropdownOpen(false);
      }}
    >
      <DropdownToggle nav className="pr-0">
        <Avatar src={team3} />
      </DropdownToggle>
      <DropdownMenu right className="dropdown-menu-card">
        <div className="bg-white rounded-soft py-2">
          <DropdownItem tag={Link} to="/authentication/basic/logout">
          <FormattedMessage id="msg.logout" defaultMessage="Logout" key="logout"/>
          </DropdownItem>
        </div>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ProfileDropdown;
