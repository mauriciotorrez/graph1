import React, { useContext, useEffect, useRef } from 'react';

import { Collapse, Nav, Navbar } from 'reactstrap';

import Scrollbar from 'react-scrollbars-custom';

import { navbarBreakPoint } from '../../config';
import routes, { filterChildren } from '../../routes';
import Flex from '../common/Flex';
import AppContext from '../../context/Context';

import Logo from './Logo';
import NavbarVerticalMenu from './NavbarVerticalMenu';
import ToggleButton from './ToggleButton';

const NavbarVertical = ({ roles }) => {
  const navBarRef = useRef(null);

  const { isRTL, showBurgerMenu, isNavbarVerticalCollapsed, setIsNavbarVerticalCollapsed } = useContext(AppContext);

  const HTMLClassList = document.getElementsByTagName('html')[0].classList;
  //Control Component did mount and unmounted of hover effect
  if (isNavbarVerticalCollapsed) {
    HTMLClassList.add('navbar-vertical-collapsed');
  }

  useEffect(() => {
    return () => {
      HTMLClassList.remove('navbar-vertical-collapsed-hover');
    };
  }, [isNavbarVerticalCollapsed, HTMLClassList]);

  //Control mouseEnter event
  let time = null;
  const handleMouseEnter = () => {
    if (isNavbarVerticalCollapsed) {
      time = setTimeout(() => {
        HTMLClassList.add('navbar-vertical-collapsed-hover');
      }, 100);
    }
  };
  const filteredRoutes = filterChildren(roles, routes);

  return (
    <Navbar expand={navbarBreakPoint} className="navbar-vertical navbar-glass" light>
      <Flex align="center">
        <ToggleButton
          isNavbarVerticalCollapsed={isNavbarVerticalCollapsed}
          setIsNavbarVerticalCollapsed={setIsNavbarVerticalCollapsed}
        />
        <Logo at="navbar-vertical" width={150} />
      </Flex>

      <Collapse
        navbar
        isOpen={showBurgerMenu}
        className="bg-200"
        innerRef={navBarRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => {
          clearTimeout(time);
          HTMLClassList.remove('navbar-vertical-collapsed-hover');
        }}
      >
        <Scrollbar
          style={{ height: 'calc(100vh - 77px)', display: 'block' }}
          rtl={isRTL}
          trackYProps={{
            renderer(props) {
              const { elementRef, ...restProps } = props;
              return <span {...restProps} ref={elementRef} className="TrackY" />;
            }
          }}
        >
          <Nav navbar vertical>
            <NavbarVerticalMenu routes={[...filteredRoutes]} />
          </Nav>

        </Scrollbar>
      </Collapse>
    </Navbar>
  );
};
export default NavbarVertical;