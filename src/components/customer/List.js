
import React, { createRef, Fragment } from 'react';

import {
    Card,
    CardBody,
    Media,
} from 'reactstrap';

import BootstrapTable from 'react-bootstrap-table-next';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { injectIntl } from 'react-intl';

import Flex from '../common/Flex';
import Get from '../common/Get';
import { apiCallCreatorAction } from '../../redux/action';

const formatUsersData = (data) => {
    return data["hydra:member"].map(
        ({ customerCode,
            emailAlertsTo,
            emailAlertsCC,
            poNumber,
            contactName,
            contactEmail,
            contactFax,
            phoneOne,
            address,
            city,
            state,
            postCode,
            countryName,
            uuid: customerId }) =>
            ({
                customerCode,
                emailAlertsTo,
                emailAlertsCC,
                poNumber,
                contactName,
                contactEmail,
                contactFax,
                phoneOne,
                address,
                city,
                state,
                postCode,
                countryName,
                customerId
            }));
}


const columnFormatter = (dataField) =>
    <Media tag={Flex} align="center">
        <Media body className="ml-2">
            <h5 className="mb-0 fs--1">{dataField}</h5>
        </Media>
    </Media>
    ;

const identificatorFormatter = (dataField) =>
    <Link to={`/customers/${dataField}`}>
        <Media tag={Flex} align="center">
            <Media body className="ml-2">
                <h5 className="mb-0 fs--1">{dataField}</h5>
            </Media>
        </Media>
    </Link>
    ;

const columns = [
    {
        dataField: 'customerId',
        text: 'id',
        headerClasses: 'border-0',
        classes: 'border-0 py-2 align-middle',
        formatter: identificatorFormatter,
        sort: true
    },
    {
        dataField: 'customerCode',
        text: 'customerCode',
        headerClasses: 'border-0',
        classes: 'border-0 py-2 align-middle',
        formatter: columnFormatter,
        sort: true
    },
    {
        dataField: 'emailAlertsTo',
        text: 'emailAlertsTo',
        headerClasses: 'border-0',
        classes: 'border-0 py-2 align-middle',
        formatter: columnFormatter,
        sort: true
    },
    {
        dataField: 'emailAlertsCC',
        text: 'emailAlertsCC',
        headerClasses: 'border-0',
        classes: 'border-0 py-2 align-middle',
        formatter: columnFormatter,
        sort: true
    },
    {
        dataField: 'poNumber',
        text: 'poNumber',
        headerClasses: 'border-0',
        classes: 'border-0 py-2 align-middle',
        formatter: columnFormatter,
        sort: true
    },
    {
        dataField: 'contactName',
        text: 'contactName',
        headerClasses: 'border-0',
        classes: 'border-0 py-2 align-middle',
        formatter: columnFormatter,
        sort: true
    },
    {
        dataField: 'contactEmail',
        text: 'contactEmail',
        headerClasses: 'border-0',
        classes: 'border-0 py-2 align-middle',
        formatter: columnFormatter,
        sort: true
    },
    {
        dataField: 'contactFax',
        text: 'contactEmail',
        headerClasses: 'border-0',
        classes: 'border-0 py-2 align-middle',
        formatter: columnFormatter,
        sort: true
    },
    {
        dataField: 'phoneOne',
        text: 'phoneOne',
        headerClasses: 'border-0',
        classes: 'border-0 py-2 align-middle',
        formatter: columnFormatter,
        sort: true
    },
    {
        dataField: 'address',
        text: 'address',
        headerClasses: 'border-0',
        classes: 'border-0 py-2 align-middle',
        formatter: columnFormatter,
        sort: true
    },
    {
        dataField: 'city',
        text: 'city',
        headerClasses: 'border-0',
        classes: 'border-0 py-2 align-middle',
        formatter: columnFormatter,
        sort: true
    },
    {
        dataField: 'state',
        text: 'state',
        headerClasses: 'border-0',
        classes: 'border-0 py-2 align-middle',
        formatter: columnFormatter,
        sort: true
    },
    {
        dataField: 'postCode',
        text: 'postCode',
        headerClasses: 'border-0',
        classes: 'border-0 py-2 align-middle',
        formatter: columnFormatter,
        sort: true
    },
    {
        dataField: 'countryName',
        text: 'countryName',
        headerClasses: 'border-0',
        classes: 'border-0 py-2 align-middle',
        formatter: columnFormatter,
        sort: true
    }
];

/* const options = {
    custom: true,
    sizePerPage: 12,
    totalSize: columns.length
}; */

const List = ({ intl: { formatMessage } }) => {
    let table = createRef();

    const cols = columns.map(column => ({
        ...column,
        text: formatMessage({ id: `customer.${column.text}`, defaultMessage: 'Not Defined' })
    }))

    return (
        <Card className="mb-3">
            <CardBody className="p-0">
{/*                 <PaginationProvider pagination={paginationFactory(options)}>
                    {({ paginationTableProps }) => {
                        return ( */}
                <Fragment>
                    <div className="table-responsive">
                        <Get name={"customer-table"} pathname={"/api/customer_details"} params={""}>
                            {({ data }) =>
                                <BootstrapTable
                                    ref={table}
                                    bootstrap4
                                    data={formatUsersData(data)}
                                    keyField="customerId"
                                    columns={cols}
                                    bordered={false}
                                    classes="table-dashboard table-striped table-sm fs--1 border-bottom border-200 mb-0 table-dashboard-th-nowrap"
                                    rowClasses="btn-reveal-trigger border-top border-200"
                                    headerClasses="bg-200 text-900 border-y border-200"
                                //{...paginationTableProps}
                                />
                            }
                        </Get>
                    </div>
                </Fragment>
                  {/* );
                    }}
                </PaginationProvider>  */}
            </CardBody>

        </Card>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUsersFetch: (onSuccess) => dispatch(apiCallCreatorAction.getAPI({ pathname: "/api/users", processData: true, onSuccess }))
    }
}

export default injectIntl(connect(null, mapDispatchToProps)(List))