import React from 'react'
import FalconCardHeader from '../components/common/FalconCardHeader'
import { CardBody, Row, Col, CustomInput, Card } from 'reactstrap'
import { Form } from 'formik'
import { FormattedMessage } from 'react-intl'

export const FormLayout = ({ title = "",intlParams={}, ...props }) => (
    <div>

        <Card className="h-100">
            <FormattedMessage id={title} defaultMessage="Not Defined" key={title} values={intlParams} >
                {titleIntl => (
                    <FalconCardHeader title={titleIntl} light={false}  />
                )}
            </FormattedMessage>
            <CardBody className="bg-light">
                <Row >
                    <Col>
                        {props.children}

                    </Col>
                </Row>
            </CardBody></Card>
    </div>
)

export default FormLayout