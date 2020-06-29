import React from 'react';
import { Col, Row } from 'reactstrap';
import LightBoxGallery from '../common/LightBoxGallery';

const FeedImageLightbox = () => {
  const images = [];

  return (
    <LightBoxGallery images={images}>
      {openImgIndex => (
        <Row noGutters className="m-n1">
          <Col xs={6} className="p-1">
            <img
              className="rounded w-100 cursor-pointer"
              src={images[0]}
              alt=""
              onClick={() => {
                openImgIndex(0);
              }}
            />
          </Col>
          <Col xs={6} className="p-1">
            <img
              className="rounded w-100 cursor-pointer"
              src={images[1]}
              alt=""
              onClick={() => {
                openImgIndex(1);
              }}
            />
          </Col>
          <Col xs={4} className="p-1">
            <img
              className="rounded w-100 cursor-pointer"
              src={images[2]}
              alt=""
              onClick={() => {
                openImgIndex(2);
              }}
            />
          </Col>
          <Col xs={4} className="p-1">
            <img
              className="rounded w-100 cursor-pointer"
              src={images[3]}
              alt=""
              onClick={() => {
                openImgIndex(3);
              }}
            />
          </Col>
          <Col xs={4} className="p-1">
            <img
              className="rounded w-100 cursor-pointer"
              src={images[4]}
              alt=""
              onClick={() => {
                openImgIndex(4);
              }}
            />
          </Col>
        </Row>
      )}
    </LightBoxGallery>
  );
};

export default FeedImageLightbox;
