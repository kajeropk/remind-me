import styled from 'styled-components/native'

const getColorByStatus = (status) => {
    switch (status) {
        case 'CANCELLED':
            return `#E92555`;

        case 'DONE':
            return `#009E0A`;

        case 'PENDENT':
            return `#E9D525`;
    }
}

export const Card = styled.TouchableOpacity`
    flex: 1;
    background-color: #FFFFFF;
    height: 148px;
    border-radius: 4px;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 30px;
    border-left-width: 6px;
    ${props => `border-left-color: ${getColorByStatus(props.status)}`}
`;

export const CardContent = styled.View`
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    max-height: 128px;
   
`;

export const CardPriorityContent = styled.View`
    margin-bottom: 10px;
    justify-content:space-between;
    flex-direction: row;

`;

export const CardPriority = styled.Text`
    font-family: 'Red Hat Text';
    font-size: 14px;
    letter-spacing: 1.25px;
    font-weight: bold;
    font-style: normal;
`;

export const CardCloseButton = styled.TouchableOpacity`


`

export const CardCloseButtonIcon = styled.Image`

`

export const CardTitleContent = styled.View`
    margin-bottom: 20px;
    min-height: 30px;
    max-height: 30px;
`;

export const CardTitle = styled.Text`
    font-family: 'Red Hat Text';
    font-size: 16px;
    letter-spacing: 1.50px;
    font-weight: 500;
    font-style: normal;
`;

export const CardDateContent = styled.View`
    margin-bottom: 10px;
`;

export const CardDate = styled.Text`
    font-family: 'Red Hat Text';
    font-size: 14px;
    letter-spacing: 1.25px;
    font-weight: normal;
    font-style: normal;
`;


export const CardStatusContent = styled.View`
    margin-bottom: 10px;
`;

export const CardStatus = styled.Text`
    align-self:flex-end;
    ${props => `color: ${getColorByStatus(props.status)}`}
    font-family: 'Red Hat Text';
    font-size: 12px;
    letter-spacing: 1.25px;
    font-weight: 500; 
    font-style: normal;
`;
