import React, { useContext } from 'react';

import { ProductContext } from '../../../context/Context';

import ProductGrid from './ProductGrid';
import ProductList from './ProductList';

const sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Product = props => {
  // Context
  const { productsLayout } = useContext(ProductContext);
  const Tag = (productsLayout === 'list' && ProductList) || (productsLayout === 'grid' && ProductGrid);

  if (productsLayout === 'grid') {
    return <ProductGrid {...props} sliderSettings={sliderSettings} md={6} lg={4} />;
  }

  return <Tag {...props} sliderSettings={sliderSettings} />;
};

export default Product;
