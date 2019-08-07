import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import * as CartActions from '../../store/modules/cart/actions';

import { formatPrice } from '../../util/format';
import api from '../../services/api';

import {
  Container,
  Product,
  ProdImage,
  ProdTitle,
  ProdPrice,
  AddButton,
  CartInfo,
  CartIcon,
  ProductAmount,
  AddButtonText,
} from './styles';

export default function Main() {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function getProducts() {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    getProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  function renderProduct({ item }) {
    return (
      <Product>
        <ProdImage source={{ uri: item.image }} />
        <ProdTitle>{item.title}</ProdTitle>
        <ProdPrice>{item.priceFormatted}</ProdPrice>
        <AddButton onPress={() => handleAddProduct(item.id)}>
          <CartInfo>
            <CartIcon name="add-shopping-cart" size={24} color="#fff" />
            <ProductAmount>{amount[item.id] || 0}</ProductAmount>
          </CartInfo>
          <AddButtonText>ADICIONAR AO CARRINHO</AddButtonText>
        </AddButton>
      </Product>
    );
  }

  return (
    <Container>
      <FlatList
        data={products}
        extraData={amount}
        keyExtractor={item => String(item.id)}
        renderItem={renderProduct}
      />
    </Container>
  );
}
