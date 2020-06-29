
import React, { createRef, Fragment } from 'react';

import {
    Card,
    CardBody,
    Media
} from 'reactstrap';

import BootstrapTable from 'react-bootstrap-table-next';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import Flex from '../common/Flex';
import Get from '../common/Get';
import { apiCallCreatorAction } from '../../redux/action';
import customers from '../../data/e-commerce/customers';

const formatUsersData = (data) => {
    return data["hydra:member"].map(
        ({ country: { countryName: country }, firstName, lastName, uuid: userId }) =>
            ({ country, firstName, lastName, fullName: `${firstName} ${lastName}`, userId }));
}

const columnFormatter = (dataField) =>
    <Media tag={Flex} align="center">
        <Media body className="ml-2">
            <h5 className="mb-0 fs--1">{dataField}</h5>
        </Media>
    </Media>;

const identificatorFormatter = (dataField) => <Link to={`/users/${dataField}`}>
    <Media tag={Flex} align="center">
        <Media body className="ml-2">
            <h5 className="mb-0 fs--1">{dataField}</h5>
        </Media>
    </Media>
</Link>;

const columns = [
    {
        dataField: 'userId',
        text: 'UserId',
        headerClasses: 'border-0',
        classes: 'border-0 py-2 align-middle',
        formatter: identificatorFormatter,
        sort: true
    },
    {
        dataField: 'fullName',
        text: 'Fullname',
        headerClasses: 'border-0',
        classes: 'border-0 py-2 align-middle',
        formatter: columnFormatter,
        sort: true
    },
    {
        dataField: 'country',
        text: 'Country',
        headerClasses: 'border-0',
        classes: 'border-0 py-2 align-middle',
        formatter: columnFormatter,
        sort: true
    }
];

const options = {
    custom: true,
    sizePerPage: 12,
    totalSize: customers.length
};

const List = () => {
    let table = createRef();

    return (
        <Card className="mb-3">
            <CardBody className="p-0">
               {/*  <PaginationProvider pagination={paginationFactory(options)}>
                    {({ paginationTableProps }) => {
                        return ( */}
                            <Fragment>
                                <div className="table-responsive">
                                    <Get name={"users-table"} pathname={"/api/users"} params={""}>
                                        {({ data }) =>
                                            <BootstrapTable
                                                ref={table}
                                                bootstrap4
                                                data={formatUsersData(data)}
                                                keyField="id"
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
                            </Fragment>
                       {/*  );
                    }}
                </PaginationProvider> */}
            </CardBody>

        </Card>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUsersFetch: (onSuccess) => dispatch(apiCallCreatorAction.getAPI({ pathname: "/api/users", processData: true, onSuccess }))
    }
}

export default connect(null, mapDispatchToProps)(List)