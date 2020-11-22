import styled from 'styled-components/native';
import {FAB} from 'react-native-paper';

export const TopButtonView = styled.View`
  height: 68px;
  background-color: #ffffff;
  justify-content: space-between;
  flex-direction: row;
`;
export const FilterButtonView = styled.View`
  flex: 0.5;
`;

export const SortButtonView = styled.View`
  flex: 0.5;
`;

export const FilterButton = styled.TouchableOpacity`
  height: 100%;
  flex-direction: row;
  align-items: center;
`;
export const FilterIcon = styled.Image`
  margin-left: 20px;
`;

export const SortButton = styled.TouchableOpacity`
  height: 100%;
  flex-direction: row;
  align-items: center;
`;

export const SortIcon = styled.Image`
  margin-left: 20px;
`;

export const TextButton = styled.Text`
  margin-left: 10px;
  font-family: 'Red Hat Text';
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1.25px;
`;
export const CardListView = styled.ScrollView`
  background-color: #f5f5f5;
  flex: 1;
`;
export const FloatButton = styled(FAB)`
  position: absolute;
  margin: 16px;
  right: 0;
  bottom: 40px;
  background-color: black;
`;

export const BottomView = styled.View`
  height: 44px;
  bottom: 0;
  background-color: black;
  justify-content: center;
`;
export const BottomViewText = styled.Text`
  font-size: 16px;
  color: white;
  font-family: 'Red Hat Text';
  align-self: center;
  letter-spacing: 1.25px;
`;

export const CardListViewButton = styled.View`
  margin-top: 30px;
  margin-bottom: 30px;
  height: 44px;
  bottom: 0;
  background-color: #f5f5f5;
  justify-content: center;
`;
export const CardListViewText = styled.Text`
  margin-left: 20px;
  font-size: 16px;
  color: #bcb8b8;
  font-family: 'Red Hat Text';
  align-self: center;
  letter-spacing: 1.25px;
`;
