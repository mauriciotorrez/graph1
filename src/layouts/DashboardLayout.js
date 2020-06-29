import loadable from '@loadable/component';

import React, { useContext, useEffect } from 'react';

import PropTypes from 'prop-types';

import { Route, Switch } from 'react-router-dom';

import { useSelector } from 'react-redux';

import Customer from '../components/customer';
import Device from '../components/device';
import User from '../components/user';
import AppContext from '../context/Context';
import DashboardAlt from '../components/dashboard-alt/DashboardAlt';
import ProductProvider from '../components/e-commerce/ProductProvider';
import Footer from '../components/footer/Footer';
import NavbarTop from '../components/navbar/NavbarTop';
import NavbarVertical from '../components/navbar/NavbarVertical';
import ProtectedRoute from '../components/utilities/ProtectedRoutes';

const DashboardRoutes = loadable(() => import('./DashboardRoutes'));



const DashboardLayout = ({ location }) => {
  const { isFluid, isTopNav } = useContext(AppContext);
  const { currentUser } = useSelector(state => state.application)
  const { roles } = currentUser;
  useEffect(() => {
    DashboardRoutes.preload();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className={isFluid ? 'container-fluid' : 'container'}>
      {!isTopNav && currentUser.userId ? <NavbarVertical roles={roles} /> : null}
      <ProductProvider>
        <div className="content">
          <NavbarTop />
          <Switch>
            <ProtectedRoute path="/customers" component={Customer} />
            <ProtectedRoute path="/users" component={User} />
            <ProtectedRoute path="/devices" component={Device} />
            <Route path="/dashboard-alt" exact component={DashboardAlt} />
            <Route path="/" />
          </Switch>
          <Footer />
        </div>
      </ProductProvider>
    </div>
  );
};

DashboardLayout.propTypes = { location: PropTypes.object.isRequired };

export default DashboardLayout;
