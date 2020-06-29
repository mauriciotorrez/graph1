import React from 'react'
import { Form, Formik, Field } from 'formik'
import { FormGroup, Label, Input, Col, Row } from 'reactstrap';

import { FormattedMessage, injectIntl } from 'react-intl';

import * as Yup from 'yup';

import withApiCall from '../common/withApiCall';
import withToastr from '../common/withToastr';
import withRedirect from '../../hoc/withRedirect';
import FormLayout from '../../layouts/FormLayout';
import ButtonSubmit from '../common/form/ButtonSubmit';

const defaultValues = {
    customerCode: "",
    emailAlertsCC: "",
    contactName: "",
    contactFax: "",
    address: "",
    state: "",
    postCode: "",
    emailAlertsTo: "",
    poNumber: "",
    contactEmail: "",
    phoneOne: "",
    city: "",
    countryName: ""
};

const customerSchema = Yup.object().shape({
    customerCode: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    emailAlertsTo: Yup.string()
        .email('Invalid email')
        .required('Required'),
    emailAlertsCC: Yup.string()
        .email('Invalid email')
        .required('Required'),
    poNumber: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    contactName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    contactEmail: Yup.string()
        .email('Invalid email')
        .required('Required'),
    contactFax: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    phoneOne: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    address: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    city: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    state: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    postCode: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    countryName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required')
});

const hasLabel = true;
const EditView = ({ match: { params: { deviceId }, path },
    intl,
    onShowErrorMessage,
    onShowSuccessMessage,
    onPostCall,
    history: { push },
    onPutCall,
    onGetCall,
    ...props }) => {

    const pathname = "/api/customer_details";
    const [customer, setCustomer] = React.useState(defaultValues);
    const { uuid } = customer;
    const onSuccess = () => {
        push("/customers");

        const entity = intl.formatMessage({
            id: 'customer',
            defaultMessage: 'Not Defined',
        })
        const successMessageKey = uuid ? 'successfulUpdatedMessage' : 'successfulCreatedMessage';
        const message = intl.formatMessage({
            id: successMessageKey,
            defaultMessage: 'Not Defined',
        }, { entity });

        onShowSuccessMessage(message);
    }

    const submitHandler = (data) => (uuid ? updateCustomer(data) : createCustomer(data));

    const createCustomer = (data) => {

        onPostCall({
            pathname,
            data,
            entity:"customer",
            onSuccess
        })
    }

    const updateCustomer = (data) => {

        onPutCall({
            pathname: `${pathname}/${uuid}`,
            data: { ...customer, ...data },
            entity:"customer",
            onSuccess
        })
    }

    const onLoadSuccess = (data) => {
        setCustomer(data);
    }

    const loadDeviceInformationHandler = () => {
        onGetCall({
            pathname: `/api/customer_details/${deviceId}`,
            data: null,
            processData: true,
            onSuccess: onLoadSuccess
        })
    }


    React.useEffect(() => {
        setCustomer(defaultValues);
    }, [path]);

    React.useEffect(() => {
        if (deviceId && uuid === undefined)
            loadDeviceInformationHandler();
        return () => {
        }
    }, [uuid]);

    const title = uuid ? "forms.edit.title" : "forms.new.title";
    const entity = intl.formatMessage({
        id: "customer",
        defaultMessage: 'Not Defined',
    })

    return <FormLayout title={title} intlParams={{ entity }}>
        <Formik initialValues={customer} onSubmit={submitHandler} validationSchema={customerSchema} enableReinitialize={true}>
            {(props) => editForm(!uuid, props)}
        </Formik>
    </FormLayout>
}

const editForm = (isNew, { errors, touched }) => {
    const isValid = !Object.keys(errors).length && Object.keys(touched).length;
    return <Form>
        <FormGroup>
            <Row>
                <Col>
                    <FormattedMessage id="customer.customerCode" defaultMessage="Not Defined" key="customerCode">
                        {placeholder => (
                            <>
                                {hasLabel && <Label>{placeholder}</Label>}
                                <Field
                                    name="customerCode">
                                    {({ field /* _form */ }) => (
                                        <Input
                                            placeholder={!hasLabel ? placeholder : ''}
                                            {...field}
                                        />
                                    )}
                                </Field>
                            </>)}
                    </FormattedMessage>
                    <FormattedMessage id="customer.emailAlertsCC" defaultMessage="Not Defined" key="emailAlertsCC">
                        {placeholder => (
                            <>
                                {hasLabel && <Label>{placeholder}</Label>}
                                <Field
                                    name="emailAlertsCC">
                                    {({ field /* _form */ }) => (
                                        <Input
                                            placeholder={!hasLabel ? placeholder : ''}
                                            {...field}
                                        />
                                    )}
                                </Field>
                            </>)}
                    </FormattedMessage>
                    <FormattedMessage id="customer.contactName" defaultMessage="Not Defined" key="contactName">
                        {placeholder => (
                            <>
                                {hasLabel && <Label>{placeholder}</Label>}
                                <Field
                                    name="contactName">
                                    {({ field /* _form */ }) => (
                                        <Input
                                            placeholder={!hasLabel ? placeholder : ''}
                                            {...field}
                                        />
                                    )}
                                </Field>
                            </>)}
                    </FormattedMessage>
                    <FormattedMessage id="customer.contactFax" defaultMessage="Not Defined" key="contactFax">
                        {placeholder => (
                            <>
                                {hasLabel && <Label>{placeholder}</Label>}
                                <Field
                                    name="contactFax">
                                    {({ field /* _form */ }) => (
                                        <Input
                                            placeholder={!hasLabel ? placeholder : ''}
                                            {...field}
                                        />
                                    )}
                                </Field>
                            </>)}
                    </FormattedMessage>
                    <FormattedMessage id="customer.address" defaultMessage="Not Defined" key="address">
                        {placeholder => (
                            <>
                                {hasLabel && <Label>{placeholder}</Label>}
                                <Field
                                    name="address">
                                    {({ field /* _form */ }) => (
                                        <Input
                                            placeholder={!hasLabel ? placeholder : ''}
                                            {...field}
                                        />
                                    )}
                                </Field>
                            </>)}
                    </FormattedMessage>
                    <FormattedMessage id="customer.state" defaultMessage="Not Defined" key="state">
                        {placeholder => (
                            <>
                                {hasLabel && <Label>{placeholder}</Label>}
                                <Field
                                    name="state">
                                    {({ field /* _form */ }) => (
                                        <Input
                                            placeholder={!hasLabel ? placeholder : ''}
                                            {...field}
                                        />
                                    )}
                                </Field>
                            </>)}
                    </FormattedMessage>
                    <FormattedMessage id="customer.postCode" defaultMessage="Not Defined" key="postCode">
                        {placeholder => (
                            <>
                                {hasLabel && <Label>{placeholder}</Label>}
                                <Field
                                    name="postCode">
                                    {({ field /* _form */ }) => (
                                        <Input
                                            placeholder={!hasLabel ? placeholder : ''}
                                            {...field}
                                        />
                                    )}
                                </Field>
                            </>)}
                    </FormattedMessage>
                </Col>
                <Col>
                    <FormattedMessage id="customer.emailAlertsTo" defaultMessage="Not Defined" key="emailAlertsTo">
                        {placeholder => (
                            <>
                                {hasLabel && <Label>{placeholder}</Label>}
                                <Field
                                    name="emailAlertsTo">
                                    {({ field /* _form */ }) => (
                                        <Input
                                            placeholder={!hasLabel ? placeholder : ''}
                                            {...field}
                                        />
                                    )}
                                </Field>
                            </>)}
                    </FormattedMessage>
                    <FormattedMessage id="customer.poNumber" defaultMessage="Not Defined" key="poNumber">
                        {placeholder => (
                            <>
                                {hasLabel && <Label>{placeholder}</Label>}
                                <Field
                                    name="poNumber">
                                    {({ field /* _form */ }) => (
                                        <Input
                                            placeholder={!hasLabel ? placeholder : ''}
                                            {...field}
                                        />
                                    )}
                                </Field>
                            </>)}
                    </FormattedMessage>
                    <FormattedMessage id="customer.contactEmail" defaultMessage="Not Defined" key="contactEmail">
                        {placeholder => (
                            <>
                                {hasLabel && <Label>{placeholder}</Label>}
                                <Field
                                    name="contactEmail">
                                    {({ field /* _form */ }) => (
                                        <Input
                                            placeholder={!hasLabel ? placeholder : ''}
                                            {...field}
                                        />
                                    )}
                                </Field>
                            </>)}
                    </FormattedMessage>
                    <FormattedMessage id="customer.phoneOne" defaultMessage="Not Defined" key="phoneOne">
                        {placeholder => (
                            <>
                                {hasLabel && <Label>{placeholder}</Label>}
                                <Field
                                    name="phoneOne">
                                    {({ field /* _form */ }) => (
                                        <Input
                                            placeholder={!hasLabel ? placeholder : ''}
                                            {...field}
                                        />
                                    )}
                                </Field>
                            </>)}
                    </FormattedMessage>
                    <FormattedMessage id="customer.city" defaultMessage="Not Defined" key="city">
                        {placeholder => (
                            <>
                                {hasLabel && <Label>{placeholder}</Label>}
                                <Field
                                    name="city">
                                    {({ field /* _form */ }) => (
                                        <Input
                                            placeholder={!hasLabel ? placeholder : ''}
                                            {...field}
                                        />
                                    )}
                                </Field>
                            </>)}
                    </FormattedMessage>
                    <FormattedMessage id="customer.countryName" defaultMessage="Not Defined" key="countryName">
                        {placeholder => (
                            <>
                                {hasLabel && <Label>{placeholder}</Label>}
                                <Field
                                    name="countryName">
                                    {({ field /* _form */ }) => (
                                        <Input
                                            placeholder={!hasLabel ? placeholder : ''}
                                            {...field}
                                        />
                                    )}
                                </Field>
                            </>)}
                    </FormattedMessage>
                </Col>
            </Row>
        </FormGroup>
        <FormGroup>
            {isValid ? <ButtonSubmit isNew={isNew} paramsIntl={{ entity: "customer" }} /> : null}
        </FormGroup>
    </Form>;
}


const Edit = withToastr(withRedirect(withApiCall(injectIntl(EditView))));
export default Edit