import React from 'react'
import { Form, Formik, Field } from 'formik'
import { FormGroup, Label, Input, Row, Col } from 'reactstrap';

import { FormattedMessage, injectIntl } from 'react-intl';

import withApiCall from '../common/withApiCall';
import withToastr from '../common/withToastr';
import withRedirect from '../../hoc/withRedirect';
import FormLayout from '../../layouts/FormLayout';
import ButtonSubmit from '../common/form/ButtonSubmit';

const defaultValues = {
    firstName: "",
    lastName: "",
    roles: "",
    password:"",
    rePassword:""
};
const hasLabel = true;
export const Edit = ({
    match: { params: { userId }, path },
    history: { push },
    intl,
    //onShowErrorMessage,
    onShowSuccessMessage,
    onGetCall,
    onPostCall,
    onPutCall,
    }) => {

    const [user, setUser] = React.useState(defaultValues);
    const { uuid } = user;

    const ref = React.useRef();

    const onLoadSuccess = ({ roles, country: { ["@id"]: countryId }, uuid, email, firstName, lastName, uuid: userId }) => {
        setUser({
            firstName,
            lastName,
            uuid,
            email,
            userId,
            roles: roles.join(","),
            countryId,
            password:"",
            rePassword:""                
        });
    }
    const onSuccess = () => {
        push("/users");

        const entity = intl.formatMessage({
            id: 'user',
            defaultMessage: 'Not Defined',
        })
        const successMessageKey = uuid ? 'successfulUpdatedMessage' : 'successfulCreatedMessage';
        const message = intl.formatMessage({
            id: successMessageKey,
            defaultMessage: 'Not Defined',
        }, { entity });

        onShowSuccessMessage(message);
    }


    const loadUserInformationHandler = () => {
        onGetCall({
            pathname: `/api/users/${userId}`,
            data: null,
            processData: true,
            onSuccess: onLoadSuccess
        })
    }
    React.useEffect(() => {
        setUser(defaultValues);
        if (ref && ref.current) {
            ref.current.resetForm();
        }
    }, [path]);


    React.useEffect(() => {
        if (ref && ref.current) {
            ref.current.resetForm();
        }
        if (userId && uuid === undefined) {
            loadUserInformationHandler();
        }
        return () => {
        }
    }, [uuid]);

    const pathname = "/api/users";

    const submitHandler = ({ uuid: userId, roles, countryId, ...values }) => {
        const data = {
            ...values,
            country: countryId,
            uuid,
            roles: [...roles.split(",")]
        }
        return (uuid ? updateUser(data) : createUser(data));
    }

    const createUser = (data) => {

        onPostCall({
            pathname,
            data,
            onSuccess
        })
    }

    const updateUser = (data) => {

        onPutCall({
            pathname: `${pathname}/${uuid}`,
            data: { ...user, ...data },
            onSuccess
        })
    }

    const title = uuid ? "forms.edit.title" : "forms.new.title";
    const entity = intl.formatMessage({
        id: "user",
        defaultMessage: 'Not Defined',
    })

    return <FormLayout title={title} intlParams={{ entity }}>
        <Formik initialValues={user} onSubmit={submitHandler} enableReinitialize={true}
            innerRef={ref} >
            {() => editForm(!uuid)}
        </Formik>
    </FormLayout>
}

const editForm = (isNew) =>
    <Form>
        <FormGroup>
            <Row>
                <Col>
                    <FormattedMessage id="user.firstName" defaultMessage="user.firstName" key="firstName">
                        {placeholder => (
                            <>
                                {hasLabel && <Label>{placeholder}</Label>}
                                <Field
                                    name="firstName">
                                    {({ field /* _form */ }) => (
                                        <Input
                                            placeholder={!hasLabel ? placeholder : ''}
                                            {...field}
                                        />
                                    )}
                                </Field>
                            </>)}
                    </FormattedMessage>
                    <FormattedMessage id="user.country" defaultMessage="user.country" key="country">
                        {placeholder => (
                            <>
                                {hasLabel && <Label>{placeholder}</Label>}
                                <Field
                                    name="countryId">
                                    {({ field /* _form */ }) => (
                                        <Input autoComplete="nope"
                                            placeholder={!hasLabel ? placeholder : ''}
                                            {...field}
                                        />
                                    )}
                                </Field>
                            </>)}
                    </FormattedMessage>
                    <FormattedMessage id="user.password" defaultMessage="user.password" key="password">
                        {placeholder => (
                            <>
                                {hasLabel && <Label>{placeholder}</Label>}
                                <Field
                                    name="password">
                                    {({ field /* _form */ }) => (
                                        <Input type="password" autoComplete="new-password"
                                            placeholder={!hasLabel ? placeholder : ''}
                                            {...field}
                                        />
                                    )}
                                </Field>
                            </>)}
                    </FormattedMessage>
                    <FormattedMessage id="user.rePassword" defaultMessage="user.rePassword" key="rePassword">
                        {placeholder => (
                            <>
                                {hasLabel && <Label>{placeholder}</Label>}
                                <Field
                                    name="rePassword">
                                    {({ field /* _form */ }) => (
                                        <Input type="password"
                                            placeholder={!hasLabel ? placeholder : ''}
                                            {...field}
                                        />
                                    )}
                                </Field>
                            </>)}
                    </FormattedMessage>
                </Col>
                <Col>
                    <FormattedMessage id="user.lastName" defaultMessage="user.lastName" key="lastName">
                        {placeholder => (
                            <>
                                {hasLabel && <Label>{placeholder}</Label>}
                                <Field
                                    name="lastName">
                                    {({ field /* _form */ }) => (
                                        <Input
                                            placeholder={!hasLabel ? placeholder : ''}
                                            {...field}
                                        />
                                    )}
                                </Field>
                            </>)}
                    </FormattedMessage>
                    <FormattedMessage id="user.email" defaultMessage="user.email" key="email">
                        {placeholder => (
                            <>
                                {hasLabel && <Label>{placeholder}</Label>}
                                <Field
                                    name="email">
                                    {({ field /* _form */ }) => (
                                        <Input
                                            placeholder={!hasLabel ? placeholder : ''}
                                            {...field}
                                        />
                                    )}
                                </Field>
                            </>)}
                    </FormattedMessage>
                    <FormattedMessage id="user.roles" defaultMessage="user.roles" key="roles">
                        {placeholder => (
                            <>
                                {hasLabel && <Label>{placeholder}</Label>}
                                <Field
                                    name="roles">
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
            <ButtonSubmit isNew={isNew} paramsIntl={{ entity: "user" }} />
        </FormGroup>
    </Form>;



export default withToastr(withRedirect(withApiCall(injectIntl(Edit))));