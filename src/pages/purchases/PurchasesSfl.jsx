import React, { useEffect, useState, useRef } from 'react';
import instance from '../../axios/instance';
import PurchasesStl from './PurchasesStl';
import instanceNest from '../../axios/instanceNest';

const PurchasesSfl = () => {
  const [products, setProducts] = useState({
    loading: true,
    data: undefined,
    ntCategories: undefined,
    iniData: undefined,
  });

const fCategory = useRef(0);
const fOrder = useRef(0);

const handleChangeCategory = (event) => {
  setProducts({ 
    loading: true 
  });

  const filterProducts = event.target.value === '0' ? (
    products.iniData
  ) : (
    products.iniData.filter(product => product.categoryId === event.target.value)
  );
  setProducts({
    loading: false,
    data: filterProducts,
    ntCategories: products.ntCategories,
    iniData: products.iniData
  });
};

const handleChangeOrder = (event) => {
  setProducts({
    loading: true
  });
  
  let orderProducts = [];
  let orderIniProducts = [];

  switch(event.target.value) {
    case 'menorprecio':
      orderProducts = products.data.sort((a, b) => a.salePrice - b.salePrice);
      orderIniProducts = products.iniData.sort((a, b) => a.salePrice - b.salePrice);
      break;
    case 'mayorprecio':
      orderProducts = products.data.sort((a, b) => b.salePrice - a.salePrice);
      orderIniProducts = products.iniData.sort((a, b) => b.salePrice - a.salePrice);
      break;
    case 'masvendido':
      orderProducts = products.data.sort((a, b) => a.stock - b.stock);
      orderIniProducts = products.iniData.sort((a, b) => a.stock - b.stock);
      break;
    default:
  }
  setProducts({ 
    loading: false, 
    data: orderProducts,
    ntCategories: products.ntCategories,
    iniData: orderIniProducts,
  });
};

const getProducts = async () => {
  try {
    setProducts({ loading: true });
    const products = await instance.get('/gtw-prd/products/getAll');
    const ntCategories = await instanceNest.get('/category');
    setProducts({ loading: false, data: products.data, ntCategories: ntCategories.data, iniData: products.data });
  } catch (error) {}
};

useEffect(() => {
  getProducts();
}, []);

return <PurchasesStl products={products} fCategory={fCategory} fOrder={fOrder} handleChangeCategory={handleChangeCategory} handleChangeOrder={handleChangeOrder}/>;
};

export default PurchasesSfl;
