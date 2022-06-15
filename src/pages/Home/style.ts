import styled from 'styled-components/native';
import {Text, TouchableOpacity, View} from 'react-native';
export const Container = styled(View)`
  flex: 1;
  padding: 0px 12px 0px 12px;
  color: 'black';
  font-size: 16px;
  align-items: center;
  justify-content: center;
`;

export const Card = styled(View)`
  background-color: #fdda0d;
  width: 78%;
  padding: 14px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border: solid black 1px;
  margin-top: 5px;
  border-radius: 5px;
`;

export const DropDown = styled(View)`
  border: solid black 1px;
  border-radius: 40px;
  justify-content: flex-end;
`;

export const TextTopo = styled(Text)`
  font-size: 22px;
  margin-bottom: 10px;
`;

export const TextTitulo = styled(Text)`
  font-size: 22px;
  margin-top: 18px;
  color: green;
`;

export const TextTituloR = styled(Text)`
  font-size: 22px;
  margin-top: 18px;
  color: red;
`;

export const TextCard = styled(Text)`
  font-size: 16px;
`;

export const ButtonAge = styled(TouchableOpacity)`
  font-size: 16px;
  border-radius: 40px;
  border: solid black 1px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 6px;
  justify-content: center;
  align-items: center;
`;
