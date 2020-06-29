import React from 'react'
import { Row, Col, Button } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

const ButtonSubmit = ({ submitHandler, paramsIntl, isNew , ...props }) => {
    const buttonTitle=isNew?"forms.create":"forms.update";
    
    return <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Button color="primary" block className="mt-3" type="submit">
                    <FormattedMessage id={buttonTitle} defaultMessage="Not Defined" values={paramsIntl} />
            </Button>
        </Col>
    </Row>
}

export default ButtonSubmit