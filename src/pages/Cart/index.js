import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as CartActions from '../../store/modules/cart/actions';

import { formatPrice } from '../../util/format';

import {
  Container,
  EmptyCart,
  EmptyCartText,
  CartView,
  Products,
  CartItem,
  Product,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  RemoveButton,
  ProductControls,
  ProductControlButton,
  Amount,
  Subtotal,
  TotalText,
  Total,
  OrderBtn,
  OrderText,
} from './styles';

export default function Cart({ navigation }) {
  const products = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const totalPrice = useSelector(state =>
    formatPrice(
      state.cart.reduce(
        (total, product) => total + product.price * product.amount,
        0
      )
    )
  );

  const dispatch = useDispatch();

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  return (
    <Container>
      {products.length ? (
        <CartView>
          <Products>
            {products.map(product => (
              <CartItem key={product.id}>
                <Product>
                  <ProductImage source={{ uri: product.image }} />

                  <ProductInfo>
                    <ProductName>{product.title}</ProductName>
                    <ProductPrice>{product.priceFormatted}</ProductPrice>
                  </ProductInfo>

                  <RemoveButton
                    onPress={() =>
                      dispatch(CartActions.removeFromCart(product.id))
                    }
                  >
                    <Icon name="delete-forever" size={24} color="#7159c1" />
                  </RemoveButton>
                </Product>

                <ProductControls>
                  <ProductControlButton onPress={() => decrement(product)}>
                    <Icon
                      name="remove-circle-outline"
                      size={20}
                      color="#7159c1"
                    />
                  </ProductControlButton>
                  <Amount value={String(product.amount)} />
                  <ProductControlButton onPress={() => increment(product)}>
                    <Icon name="add-circle-outline" size={20} color="#7159c1" />
                  </ProductControlButton>
                  <Subtotal>{product.subtotal}</Subtotal>
                </ProductControls>
              </CartItem>
            ))}
          </Products>

          <TotalText>TOTAL</TotalText>
          <Total>{totalPrice}</Total>
          <OrderBtn>
            <OrderText>FINALIZAR PEDIDO</OrderText>
          </OrderBtn>
        </CartView>
      ) : (
        <EmptyCart>
          <Icon name="announcement" size={100} color="#ddd" />
          <EmptyCartText>Carrinho vazio</EmptyCartText>
        </EmptyCart>
      )}
    </Container>
  );
}
