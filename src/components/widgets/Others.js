import React from 'react';

import { Row, Col } from 'reactstrap';

import SettingsDangerZone from '../Settings/SettingsDangerZone';
import SpaceWarning from '../dashboard-alt/SpaceWarning';
import Weather from '../dashboard-alt/Weather';
import ActiveUsersMap from '../dashboard/ActiveUsersMap';
import DashBoardDepositStatus from '../dashboard/DashboardDepositStatus';
import OrderDetailsHeader from '../e-commerce/OrderDetailsHeader';
import EmailDetailHeader from '../email/EmailDetailHeader';
import EventCreateFooter from '../event/EventCreateFooter';
import BirthdayNotice from '../feed/BirthdayNotice';
import { BillingBanner } from '../page/Billing';
import ConfirmMail from '../auth/basic/ConfirmMail';
import Logout from '../auth/basic/Logout';
import weather from '../../data/dashboard/weather';

import AuthBasicLayoutWidgets from './AuthBasicLayoutWidgets';
import WidgetsSectionTitle from './WidgetsSectionTitle';

const Others = () => (
  <>
    <WidgetsSectionTitle
      icon="folder-plus"
      title="Others"
      subtitle="Get more awesome cards for showing your different types of content.."
      transform="shrink-2"
    />
    <Row>
      <Col xs={12} className="col-xxl-8 pr-xl-2 mb-3">
        <BillingBanner />
        <DashBoardDepositStatus />
        <EmailDetailHeader />
        <EventCreateFooter />
      </Col>
      <Col lg={6} className="col-xxl-4 pl-xl-2 mb-3">
        <SettingsDangerZone className="h-100" />
      </Col>
    </Row>
    <Row>
      <Col xl={5} className="col-xxl-4 pr-xl-2">
        <Weather data={weather} className="mb-3" />
        <SpaceWarning className="mb-3" />
        <OrderDetailsHeader className="mb-3" />
        <BirthdayNotice name="Emma Watson" profileLink="/pages/profile" />
      </Col>
      <Col xl={7} className="col-xxl-8 pl-xl-2 mb-3 mb-lg-0">
        <ActiveUsersMap />
      </Col>
    </Row>
    <Row className="mt-3">
      <Col lg={6} className="pr-lg-2 mb-3 mb-lg-0">
        <AuthBasicLayoutWidgets className="h-100">
          <Logout />
        </AuthBasicLayoutWidgets>
      </Col>
      <Col lg={6} className="pl-lg-2 ">
        <AuthBasicLayoutWidgets>
          <ConfirmMail />
        </AuthBasicLayoutWidgets>
      </Col>
    </Row>
  </>
);

export default Others;
