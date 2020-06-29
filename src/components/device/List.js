
import React, { createRef, Fragment } from 'react';

import {
    Card,
    CardBody,
    Media,
    Button,
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
        ({ iccid,
            imei,
            msisdn,
            product,
            imsi,
            name,
            costCenter,
            lastUsed,
            vendor,
            verticalMarket,
            user: { uuid: userId },
            uuid: deviceId }) =>
            ({
                iccid,
                imei,
                msisdn,
                product,
                imsi,
                name,
                costCenter,
                lastUsed,
                vendor,
                verticalMarket,
                userId,
                deviceId
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
    <Link to={`/devices/${dataField}`}>
        <Media tag={Flex} align="center">
            <Media body className="ml-2">
                <h5 className="mb-0 fs--1">{dataField}</h5>
            </Media>
        </Media>
    </Link>
    ;

const actionsFormatter = (dataField) =>
    <Link to={`/devices/track/${dataField}`}>
        <Button>
            Track
</Button>
    </Link>
    ;

const columns = [
    {
        dataField: 'deviceId',
        textKey: 'actions',
        headerClasses: 'border-0',
        classes: 'border-0 py-2 align-middle',
        formatter: actionsFormatter,
        sort: true
    },
    {
        dataField: 'deviceId',
        textKey: 'id',
        headerClasses: 'border-0',
        classes: 'border-0 py-2 align-middle',
        formatter: identificatorFormatter,
        sort: true
    },
    {
        dataField: 'iccid',
        textKey: 'iccid',
        headerClasses: 'border-0',
        classes: 'border-0 py-2 align-middle',
        formatter: columnFormatter,
        sort: true
    },
    {
        dataField: 'imei',
        textKey: 'imei',
        headerClasses: 'border-0',
        classes: 'border-0 py-2 align-middle',
        formatter: columnFormatter,
        sort: true
    },
    {
        dataField: 'msisdn',
        textKey: 'msisdn',
        headerClasses: 'border-0',
        classes: 'border-0 py-2 align-middle',
        formatter: columnFormatter,
        sort: true
    },
    {
        dataField: 'product',
        textKey: 'product',
        headerClasses: 'border-0',
        classes: 'border-0 py-2 align-middle',
        formatter: columnFormatter,
        sort: true
    },
    {
        dataField: 'imsi',
        textKey: 'imsi',
        headerClasses: 'border-0',
        classes: 'border-0 py-2 align-middle',
        formatter: columnFormatter,
        sort: true
    },
    {
        dataField: 'name',
        textKey: 'name',
        headerClasses: 'border-0',
        classes: 'border-0 py-2 align-middle',
        formatter: columnFormatter,
        sort: true
    },
    {
        dataField: 'costCenter',
        textKey: 'costCenter',
        headerClasses: 'border-0',
        classes: 'border-0 py-2 align-middle',
        formatter: columnFormatter,
        sort: true
    },
    {
        dataField: 'lastUsed',
        textKey: 'lastUsed',
        headerClasses: 'border-0',
        classes: 'border-0 py-2 align-middle',
        formatter: columnFormatter,
        sort: true
    },
    {
        dataField: 'vendor',
        textKey: 'vendor',
        headerClasses: 'border-0',
        classes: 'border-0 py-2 align-middle',
        formatter: columnFormatter,
        sort: true
    },
    {
        dataField: 'verticalMarket',
        textKey: 'verticalMarket',
        headerClasses: 'border-0',
        classes: 'border-0 py-2 align-middle',
        formatter: columnFormatter,
        sort: true
    },
    {
        dataField: 'uderId',
        textKey: 'userId',
        headerClasses: 'border-0',
        classes: 'border-0 py-2 align-middle',
        formatter: columnFormatter,
        sort: true
    },
];

/* const options = {
    custom: true,
    sizePerPage: 12,
    totalSize: customers.length
}; */

const ListView = ({ intl: { formatMessage } }) => {
    let table = createRef();

    columns.forEach(column => {
        const columnId = `device.${column.textKey}`;
        column.text = formatMessage({
            id: columnId,
            defaultMessage: 'Not Defined'
        })
    })

    return (
        <Card className="mb-3">
            <CardBody className="p-0">

                <Fragment>
                    <div className="table-responsive">
                        <Get name={"device-table"} pathname={"/api/devices"} params={""}>
                            {({ data }) =>
                                <BootstrapTable
                                    ref={table}
                                    bootstrap4
                                    data={formatUsersData(data)}
                                    keyField="deviceId"
                                    columns={columns}
                                    bordered={false}
                                    classes="table-dashboard table-striped table-sm fs--1 border-bottom border-200 mb-0 table-dashboard-th-nowrap"
                                    rowClasses="btn-reveal-trigger border-top border-200"
                                    headerClasses="bg-200 text-900 border-y border-200"
                                //{...paginationTableProps}
                                />
                            }
                        </Get>
                    </div>
                </Fragment>{/*
                <PaginationProvider pagination={paginationFactory(options)}>
                    {({ paginationTableProps }) => {
                        return (  );
                        }}
                    </PaginationProvider>*/}
            </CardBody>

        </Card>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUsersFetch: (onSuccess) => dispatch(apiCallCreatorAction.getAPI({ pathname: "/api/users", processData: true, onSuccess }))
    }
}

const List = injectIntl(connect(null, mapDispatchToProps)(ListView))

export default List;