import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
  background: #7159c1;
`;

export const Loading = styled.View`
  padding: 20px;
  margin: auto;
  align-self: center;
  background: #fff;
  border-radius: 4px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 10px;
`;

export const Product = styled.View`
  background: #fff;
  margin: 0 20px 20px;
  border-radius: 4px;
  padding: 15px 10px 10px;
`;

export const ProdImage = styled.Image`
  width: 260px;
  height: 260px;
  align-self: center;
`;

export const ProdTitle = styled.Text`
  font-size: 16px;
  line-height: 20px;
  color: #333;
  margin-top: 5px;
`;

export const ProdPrice = styled.Text`
  font-size: 21px;
  font-weight: bold;
  margin: 5px 0 20px;
  align-self: baseline;
`;

export const AddButton = styled(RectButton)`
  align-items: center;
  flex-direction: row;

  width: auto;
  height: 50px;
  background: #7159c1;
  color: #fff;
  border-radius: 4px;
  overflow: hidden;
  margin-top: auto;
  align-items: center;
`;

export const CartInfo = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px;
  background: rgba(0, 0, 0, 0.1);
`;

export const CartIcon = styled(Icon)`
  margin-right: 5px;
`;

export const ProductAmount = styled.Text`
  color: #fff;
`;

export const AddButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 15px;
  text-align: center;
  margin-left: 45px;
`;
