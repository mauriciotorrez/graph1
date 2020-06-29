import loadable from '@loadable/component';

import React, { useEffect } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';

import SessionLoader from '../components/SessionLoader';
import ToastrManager from '../components/ToastrManager';
import { CloseButton } from '../components/common/Toast';
import ProtectedRoute from '../components/utilities/ProtectedRoutes';

import DashboardLayout from './DashboardLayout';
import ErrorLayout from './ErrorLayout';
const AuthBasicLayout = loadable(() => import('./AuthBasicLayout'));
const Landing = loadable(() => import('../components/landing/Landing'));
const WizardLayout = loadable(() => import('../components/auth/wizard/WizardLayout'));
const AuthCardRoutes = loadable(() => import('../components/auth/card/AuthCardRoutes'));
const AuthSplitRoutes = loadable(() => import('../components/auth/split/AuthSplitRoutes'));

const Layout = () => {
  useEffect(() => {
    AuthBasicLayout.preload();
    Landing.preload();
    WizardLayout.preload();
    AuthCardRoutes.preload();
    AuthSplitRoutes.preload();
  }, []);

  return (<>
    <ToastrManager />
    <SessionLoader />
    <Router fallback={<span />}>
      <Switch>
        <Route path="/authentication/basic" component={AuthBasicLayout} />
        <Route path="/authentication/basic" component={AuthBasicLayout} />

        {/* <UnprotectedRoute path="/authentication/basic" component={AuthBasicLayout} /> */}
        <Route path="/authentication/card" component={AuthCardRoutes} />
        <Route path="/authentication/split" component={AuthSplitRoutes} />
        <Route path="/authentication/wizard" component={WizardLayout} />
        <Route path="/errors" component={ErrorLayout} />
        <Route  component={DashboardLayout} />
        {/* <ProtectedRoute path="/users" rolesRequired={["ROLE_USER"]} component={Users} /> */}
      </Switch>
    </Router>
    <ToastContainer  closeButton={<CloseButton />} position={toast.POSITION.BOTTOM_LEFT} />
  </>
  );
};

export default Layout;
