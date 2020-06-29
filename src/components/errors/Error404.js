import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';

import { Link } from 'react-router-dom';

import { Card, CardBody } from 'reactstrap';

import { FormattedMessage } from 'react-intl';

import { useSelector } from 'react-redux';

const Error404 = () => {
  const { userId } = useSelector(state => state.application.currentUser);
  let urlHome = "/";
  if (!userId)
    urlHome = "/authentication/basic/login";
  return <Card className="text-center">
    <CardBody className="p-5">
      <div className="display-1 text-200 fs-error">404</div>
      <p className="lead mt-4 text-800 text-sans-serif font-weight-semi-bold">
        The page you're looking for is not found.
      </p>
      <hr />
      <p>
        Make sure the address is correct and that the page hasn't moved. If you think this is a mistake,
        <a href="mailto:info@exmaple.com" className="ml-1">
          contact us
        </a>
        .
      </p>
      <Link className="btn btn-primary btn-sm mt-3" to={urlHome}>
        <FontAwesomeIcon icon="home" className="mr-2" />
        <FormattedMessage id="msg.button.takeMeHome" defaultMessage="Take me home" key="takeMeHome" />
      </Link>
    </CardBody>
  </Card>
};

export default Error404;
