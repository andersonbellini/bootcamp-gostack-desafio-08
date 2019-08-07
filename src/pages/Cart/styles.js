import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
  background: #7159c1;
`;

export const EmptyCart = styled.View`
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  align-items: center;
  margin: auto;
`;

export const EmptyCartText = styled.Text`
  font-size: 32px;
  margin-top: 10px;
  color: #aaa;
`;

export const CartView = styled.View`
  background: #fff;
  margin: 0 20px 20px;
  border-radius: 4px;
  padding: 10px 5px;
  max-height: 100%;
`;

export const Products = styled.View`
  /* margin-top: 5px;
  margin-bottom: 5px;
  padding-bottom: 2px; */
`;

export const CartItem = styled.View`
  /* flex: 1; */
`;

export const Product = styled.View`
  flex-direction: row;
`;

export const ProductImage = styled.Image`
  width: 130px;
  height: 130px;
`;

export const ProductInfo = styled.View`
  flex-direction: column;
  flex: 1;
`;

export const ProductName = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 16px;
  line-height: 20px;
  color: #333;
  margin-top: 5px;
`;

export const ProductPrice = styled.Text`
  font-size: 21px;
  font-weight: bold;
  margin: 5px 0 20px;
  align-self: baseline;
`;

export const RemoveButton = styled.TouchableOpacity`
  padding: 6px;
  justify-content: center;
`;

export const ProductControls = styled.View`
  flex-direction: row;
  align-items: center;
  background: #eee;
  padding: 8px;
  border-radius: 4px;
`;

export const ProductControlButton = styled.TouchableOpacity``;

export const Amount = styled.TextInput.attrs({
  readonly: true,
})`
  background: #fff;
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 52px;
`;

export const Subtotal = styled.Text`
  font-weight: bold;
  font-size: 16px;
  flex: 1;
  text-align: right;
`;

export const TotalText = styled.Text`
  margin-top: 10px;
  text-align: center;
  color: #999;
  font-weight: bold;
`;

export const Total = styled.Text`
  text-align: center;
  margin-top: 5px;
  margin-bottom: 20px;
  font-size: 32px;
  font-weight: bold;
`;

export const OrderBtn = styled(RectButton)`
  background: #7159c1;
  padding: 12px;
  border-radius: 4px;
`;

export const OrderText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
`;
