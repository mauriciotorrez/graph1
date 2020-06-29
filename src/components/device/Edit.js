import React from 'react'
import { Form, Formik, Field } from 'formik'
import { FormGroup, Label, Input, Col, Row } from 'reactstrap';

import { FormattedMessage, injectIntl } from 'react-intl';

import withApiCall from '../common/withApiCall';
import withToastr from '../common/withToastr';
import withRedirect from '../../hoc/withRedirect';
import FormLayout from '../../layouts/FormLayout';
import ButtonSubmit from '../common/form/ButtonSubmit';

const defaultValues = {
    iccid: "",
    imei: "",
    msisdn: "",
    product: "",
    imsi: "",
    name: "",
    costCenter: "",
    vendor: "",
    verticalMarket: "",
    userId: ""
};
const hasLabel = true;

const pathname = "/api/devices";
const EditView = (
    { match: { params: { deviceId }, path },
        history: { push },
        onPostCall,
        onGetCall,
        onShowErrorMessage,
        onShowSuccessMessage,
        onPutCall,
        intl,
        ...props }) => {

    const [device, setDevice] = React.useState(defaultValues);
    const { uuid } = device;
    const onSuccess = () => {
        push("/customers");

        const entity = intl.formatMessage({
            id: 'device',
            defaultMessage: 'Not Defined',
        })
        const successMessageKey = uuid ? 'successfulUpdatedMessage' : 'successfulCreatedMessage';
        const message = intl.formatMessage({
            id: successMessageKey,
            defaultMessage: 'Not Defined',
        }, { entity });
        
        onShowSuccessMessage(message);
    }
    React.useEffect(() => {
        setDevice(defaultValues);
    }, [path]);

    const submitHandler = ({ userId, ...values }) => {
        const data = {
            ...values,
            user: userId
        }
        return (uuid ? updateDevice(data) : createDevice(data));
    }

    const createDevice = (data) => {

        onPostCall({
            pathname,
            data,
            onSuccess
        })
    }

    const updateDevice = (data) => {

        onPutCall({
            pathname: `${pathname}/${uuid}`,
            data: { ...device, ...data },
            onSuccess
        })
    }
    const onLoadSuccess = (response) => {
        const { user: { ["@id"]: userId }, ...data } = response;
        setDevice({ ...data, userId });
    }

    const loadDeviceInformationHandler = () => {
        onGetCall({
            pathname: `/api/devices/${deviceId}`,
            data: null,
            processData: true,
            onSuccess: onLoadSuccess
        })
    }

    React.useEffect(() => {
        if (deviceId && uuid === undefined)
            loadDeviceInformationHandler();
        return () => {
        }
    }, [uuid])
    const title = uuid ? "forms.edit.title" : "forms.new.title";
    const entity = intl.formatMessage({
        id: "device",
        defaultMessage: 'Not Defined',
    })

    return <FormLayout title={title} intlParams={{ entity }}>
        <Formik initialValues={device} onSubmit={submitHandler} enableReinitialize={true}>
            {() => editForm(!uuid)}
        </Formik>
    </FormLayout>
}

const editForm = (isNew) =>
    <Form>
        <FormGroup>
            <Row>
                <Col>
                    <FormattedMessage id="device.imei" defaultMessage="device.imei" key="imei">
                        {placeholder => (
                            <>
                                {hasLabel && <Label>{placeholder}</Label>}
                                <Field
                                    name="imei">
                                    {({ field /* _form */ }) => (
                                        <Input
                                            placeholder={!hasLabel ? placeholder : ''}
                                            {...field}
                                        />
                                    )}
                                </Field>
                            </>)}
                    </FormattedMessage>
                    <FormattedMessage id="device.product" defaultMessage="device.product" key="product">
                        {placeholder => (
                            <>
                                {hasLabel && <Label>{placeholder}</Label>}
                                <Field
                                    name="product">
                                    {({ field /* _form */ }) => (
                                        <Input
                                            placeholder={!hasLabel ? placeholder : ''}
                                            {...field}
                                        />
                                    )}
                                </Field>
                            </>)}
                    </FormattedMessage>
                    <FormattedMessage id="device.name" defaultMessage="device.name" key="name">
                        {placeholder => (
                            <>
                                {hasLabel && <Label>{placeholder}</Label>}
                                <Field
                                    name="name">
                                    {({ field /* _form */ }) => (
                                        <Input
                                            placeholder={!hasLabel ? placeholder : ''}
                                            {...field}
                                        />
                                    )}
                                </Field>
                            </>)}
                    </FormattedMessage>
                    <FormattedMessage id="device.verticalMarket" defaultMessage="device.verticalMarket" key="verticalMarket">
                        {placeholder => (
                            <>
                                {hasLabel && <Label>{placeholder}</Label>}
                                <Field
                                    name="verticalMarket">
                                    {({ field /* _form */ }) => (
                                        <Input
                                            placeholder={!hasLabel ? placeholder : ''}
                                            {...field}
                                        />
                                    )}
                                </Field>
                            </>)}
                    </FormattedMessage>
                    <FormattedMessage id="device.vendor" defaultMessage="device.vendor" key="vendor">
                        {placeholder => (
                            <>
                                {hasLabel && <Label>{placeholder}</Label>}
                                <Field
                                    name="vendor">
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
                    <FormattedMessage id="device.iccid" defaultMessage="device.iccid" key="iccid">
                        {placeholder => (
                            <>
                                {hasLabel && <Label>{placeholder}</Label>}
                                <Field
                                    name="iccid">
                                    {({ field /* _form */ }) => (
                                        <Input
                                            placeholder={!hasLabel ? placeholder : ''}
                                            {...field}
                                        />
                                    )}
                                </Field>
                            </>)}
                    </FormattedMessage>
                    <FormattedMessage id="device.msisdn" defaultMessage="device.msisdn" key="msisdn">
                        {placeholder => (
                            <>
                                {hasLabel && <Label>{placeholder}</Label>}
                                <Field
                                    name="msisdn">
                                    {({ field /* _form */ }) => (
                                        <Input
                                            placeholder={!hasLabel ? placeholder : ''}
                                            {...field}
                                        />
                                    )}
                                </Field>
                            </>)}
                    </FormattedMessage>
                    <FormattedMessage id="device.imsi" defaultMessage="device.imsi" key="imsi">
                        {placeholder => (
                            <>
                                {hasLabel && <Label>{placeholder}</Label>}
                                <Field
                                    name="imsi">
                                    {({ field /* _form */ }) => (
                                        <Input
                                            placeholder={!hasLabel ? placeholder : ''}
                                            {...field}
                                        />
                                    )}
                                </Field>
                            </>)}
                    </FormattedMessage>
                    <FormattedMessage id="device.costCenter" defaultMessage="device.costCenter" key="costCenter">
                        {placeholder => (
                            <>
                                {hasLabel && <Label>{placeholder}</Label>}
                                <Field
                                    name="costCenter">
                                    {({ field /* _form */ }) => (
                                        <Input
                                            placeholder={!hasLabel ? placeholder : ''}
                                            {...field}
                                        />
                                    )}
                                </Field>
                            </>)}
                    </FormattedMessage>
                    <FormattedMessage id="device.userId" defaultMessage="device.userId" key="userId">
                        {placeholder => (
                            <>
                                {hasLabel && <Label>{placeholder}</Label>}
                                <Field
                                    name="userId">
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
            <ButtonSubmit isNew={isNew} paramsIntl={{ entity: "device" }} />
        </FormGroup>
    </Form>;


const Edit = withToastr(withRedirect(withApiCall(injectIntl(EditView))));
export default Edit