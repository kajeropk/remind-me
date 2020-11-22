import styled from 'styled-components/native';
import {RadioButton} from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import DatePicker from 'react-native-date-picker';



export const Container = styled.View`
    justify-content:space-between;
    flex-direction: column;
    /* align-items:flex-end; */
    height:100%;
    flex:1;
`;
export const TopView = styled.View`
    height: 68px;
    bottom: 0;
    background-color: #f8f8ff;
    justify-content: center;
    align-items:center;
`;

export const TaskIcon = styled.Image`
  
`;

export const ViewText = styled.Text`
    font-size: 16px;
    color: black;
    font-family: 'Red Hat Text';
    margin-left: 20px;
    letter-spacing: 1.25px;
`;

export const TitleView = styled.View`
    background-color: #ffffff;
    height: 54px;
    justify-content: center;
`;

export const Title = styled.Text`
    margin-left: 20px;
    font-family: 'Red Hat Text';
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 1.25px;
    color: black;
    
`;

export const CustomRadioButtonContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    background-color: #f8f8ff;
    padding-top:10px;
    padding-bottom:10px;
`;

export const CustomRadioButtonView = styled.View`
    flex-direction: row;
    margin-left: 20px;
    margin-right: 20px;
`;

export const CustomRadioButtonText = styled.Text`
    font-family: 'Red Hat Text';
    font-size: 18px;
    letter-spacing: 1.25px;
    font-weight: bold;
    font-style: normal;
    align-self: center;
`;


export const CustomRadioButtonGroup = styled(RadioButton.Group)`

`;

export const CustomRadioButton = styled(RadioButton)`
`;


export const CustomTextInput = styled(TextInput)`
    background-color: #f8f8ff;
    padding-left:10px;
    padding-right:10px;
    padding-top:10px;
    padding-bottom:10px;
`;

export const CustomDatePicker = styled(DatePicker)`
    width:100%; 
`;


export const ButtonOptionsView = styled.View`
  height: 68px;
  width: 100%;
  background-color: #ffffff;
  justify-content: space-between;
  flex-direction: row;
`;

export const DeleteButtonView = styled.View`
  flex: 0.5;
`;

export const SaveButtonView = styled.View`
  flex: 0.5;
`;

export const DeleteButton = styled.TouchableOpacity`
  height: 100%;
  flex-direction: row;
  align-items: center;
`;
export const DeleteIcon = styled.Image`
  margin-left: 20px;
`;

export const SaveButton = styled.TouchableOpacity`
  height: 100%;
  flex-direction: row;
  align-items: center;  
`;

export const SaveIcon = styled.Image`
  margin-left: 20px;
`;

export const TextButton = styled.Text`
  margin-left: 10px;
  font-family: 'Red Hat Text';
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1.25px;
`;

export const BottomView = styled.View`
    height: 44px;
    bottom: 0;
    background-color: black;
    justify-content: center;
    width: 100%;
`;
export const BottomViewText = styled.Text`
    font-size: 16px;
    color: #ffffff;
    font-family: 'Red Hat Text';
    align-self: center;
    letter-spacing: 1.25px;
`;