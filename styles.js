import styled from 'styled-components/native'


export const TopView = styled.View`
    height: 44px;
    background-color: black;
    justify-content: center;
   
`

export const TopButtonView = styled.View`
    height: 68px;
    background-color: #FFFFFF;
    justify-content:space-between;
    flex-direction: row;
  
`
export const FilterButtonView = styled.View`
    flex: 0.5;
`

export const SortButtonView = styled.View`
    flex: 0.5;
`

export const TopText = styled.Text`
    margin-left: 20px;
    font-size: 14px;
    color: white;
`

export const FilterButton = styled.TouchableOpacity`
    height: 100%;
    flex-direction: row;
    align-items: center;
`
export const FilterIcon = styled.Image`
    margin-left:20px;
`

export const SortButton =  styled.TouchableOpacity`
    height: 100%;
    flex-direction: row;
    align-items: center;
`

export const SortIcon = styled.Image`
    margin-left:20px;
    
`

export const TextButton = styled.Text`
    margin-left: 10px;
   
`
export const CardListView = styled.ScrollView`
    background-color: #f5f5f5;
    flex: 1;
`


