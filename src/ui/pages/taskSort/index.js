import React, { useState } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import cancelBlack from '../../assets/images/close.png';
import saveBlack from '../../assets/images/save_black.png';
import blockBlack from '../../assets/images/block_black.png';
import sortBlack from '../../assets/images/sort_black.png';
import * as _ from 'lodash';

import {
    Container,
    TopView,
    TaskIcon,
    TitleView,
    Title,
    CustomRadioButtonGroup,
    CustomRadioButtonContainer,
    CustomRadioButtonView,
    CustomRadioButtonText,
    CustomRadioButton,
    ButtonOptionsView,
    DeleteButtonView,
    SaveButtonView,
    DeleteButton,
    DeleteIcon,
    SaveButton,
    SaveIcon,
    TextButton,
    BottomView,
    BottomViewText,
} from './styles';

const TaskSort = ({ navigation }) => {

    const [selectedSortOption, setSelectedSortOption] = useState([]);

    const goToHome = () => {
        navigation.navigate('Home');
    }

    const getSelectedSortOption = () => {
        AsyncStorage.getItem('sortOption', (err, result) => {
            if (result && result.length > 0) {
              setSelectedSortOption(JSON.parse(result));
            }
            else {
              setSelectedSortOption('status-dpc');
            }
      
          });
    }

    const setSortOption = () => {
        selectedSortOption
        AsyncStorage.setItem('sortOption', JSON.stringify(selectedSortOption));
        goToHome();
    };


    React.useEffect(() => {
        getSelectedSortOption()
    }, [])


    return (
        <>
            <Container>
                <TopView>
                    <TaskIcon source={sortBlack} />
                </TopView>

                <TitleView>
                    <Title> SORT OPTIONS</Title>
                </TitleView>

                <CustomRadioButtonGroup onValueChange={newSelectedSortOption => setSelectedSortOption(newSelectedSortOption)} value={selectedSortOption}>
                    <CustomRadioButtonContainer>
                        <CustomRadioButtonView>
                            <CustomRadioButton color="black" value='status-pdc' />
                            <CustomRadioButtonText>STATUS (P-D-C)</CustomRadioButtonText>
                        </CustomRadioButtonView>
                        <CustomRadioButtonView>
                            <CustomRadioButton color="black" value='status-cpd' />
                            <CustomRadioButtonText>STATUS (C-P-D)</CustomRadioButtonText>
                        </CustomRadioButtonView>
                        <CustomRadioButtonView>
                            <CustomRadioButton color="black" value="status-dpc" />
                            <CustomRadioButtonText>STATUS (D-P-C)</CustomRadioButtonText>
                        </CustomRadioButtonView>
                        <CustomRadioButtonView>
                            <CustomRadioButton color="black" value='priority-lth' />
                            <CustomRadioButtonText>PRIORITY - LOW TO HIGH</CustomRadioButtonText>
                        </CustomRadioButtonView>
                        <CustomRadioButtonView>
                            <CustomRadioButton color="black" value="priority-htl" />
                            <CustomRadioButtonText>PRIORITY - HIGH TO LOW</CustomRadioButtonText>
                        </CustomRadioButtonView>
                        <CustomRadioButtonView>
                            <CustomRadioButton color="black" value='title-atz' />
                            <CustomRadioButtonText>TITLE - A TO Z</CustomRadioButtonText>
                        </CustomRadioButtonView>
                        <CustomRadioButtonView>
                            <CustomRadioButton color="black" value="title-zta" />
                            <CustomRadioButtonText>TITLE - Z TO A</CustomRadioButtonText>
                        </CustomRadioButtonView>
                        <CustomRadioButtonView>
                            <CustomRadioButton color="black" value='date-mr' />
                            <CustomRadioButtonText>DATE - MOST RECENT</CustomRadioButtonText>
                        </CustomRadioButtonView>
                        <CustomRadioButtonView>
                            <CustomRadioButton color="black" value="date-o" />
                            <CustomRadioButtonText>DATE - OLDER</CustomRadioButtonText>
                        </CustomRadioButtonView>

                    </CustomRadioButtonContainer>
                </CustomRadioButtonGroup>

                <ButtonOptionsView>
                    <DeleteButtonView>
                        <DeleteButton onPress={() => navigation.navigate('Home')}>
                            <DeleteIcon source={cancelBlack} />
                            <TextButton>CANCEL</TextButton>
                        </DeleteButton>
                    </DeleteButtonView>
                    <SaveButtonView>
                        <SaveButton disabled={false} onPress={() => setSortOption()}>
                            <SaveIcon source={false ? blockBlack : saveBlack} />
                            <TextButton>SAVE</TextButton>
                        </SaveButton>
                    </SaveButtonView>
                </ButtonOptionsView>
                <BottomView>
                    <BottomViewText>REMIND ME</BottomViewText>
                </BottomView>
            </Container>

        </>
    )
}

export default TaskSort;