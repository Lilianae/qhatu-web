import React from 'react';
import Grid from '@mui/material/Grid';
import ProductContainer from '../../components/products/ProductContainer';
import CardLoader from '../../components/loader/CardLoader';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { AlignHorizontalRight } from '@mui/icons-material';


const PurchasesStl = ({ products , fCategory, fOrder, handleChangeCategory, handleChangeOrder }) => {

  return (
    <>
    <br />
      <Grid container spacing={2} columns={16}>

      <Grid item xs={4}>
      <Box>
      <FormControl fullWidth>
          <InputLabel id="lbCategory">Categoría</InputLabel>
          <Select
            id="stCategory"
            inputRef={fCategory}
            label="Categoría"
            onChange={handleChangeCategory}
          >
            <MenuItem value='0'><em>Todas</em></MenuItem>
            {products.ntCategories && products.ntCategories.map((category) => {
              return <MenuItem value={category.categoryId} key={category.categoryId}>{category.description}</MenuItem>;
            })}
          </Select>
       </FormControl>          
      </Box>
      </Grid>
       
        <Grid item xs={4}>
        <Box>
        <FormControl fullWidth>            
          <InputLabel id="select-ord">Ordenar por</InputLabel>
          <Select
            id="stOrder"
            inputRef={fOrder}
            label="Ordenar por"
            onChange={handleChangeOrder}
          >
            <MenuItem value='menorprecio'><em>Menor a mayor precio</em></MenuItem>
            <MenuItem value='mayorprecio'><em>Mayor a menor precio </em></MenuItem>
            <MenuItem value='masvendido'><em>Más vendido</em></MenuItem>
          </Select>
          </FormControl>
        </Box>
        </Grid>
      </Grid>

      <br />
      {products.loading ? (
        <CardLoader />
      ) : (
        <ProductContainer products={products} />
      )}
    </>
  );
};

export default PurchasesStl;

