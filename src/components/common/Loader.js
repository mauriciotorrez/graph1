import React from 'react';

import { Col, Row, Spinner, ModalHeader, ModalBody, Modal } from 'reactstrap';

import { useSelector } from 'react-redux';

const Loader = props => {

  const { loadingQueue } = useSelector(state => state.application);
  if (loadingQueue.length === 0)
    return null;
  return <div>
    <Modal
      isOpen={true}
    >
      <ModalHeader>Processing...</ModalHeader>
      <ModalBody>

        <Row className="flex-center py-5">
          <Col xs="auto">
            <Spinner {...props} />
          </Col>
        </Row>
      </ModalBody>
    </Modal>

  </div>
};

Loader.propTypes = { ...Spinner.propTypes };

Loader.defaultProps = {
  size: 'lg',
  color: 'primary'
};

export default Loader;
