import React, { useState } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import cancelBlack from '../../assets/images/close.png';
import saveBlack from '../../assets/images/save_black.png';
import blockBlack from '../../assets/images/block_black.png';
import filterBlack from '../../assets/images/filter_black.png';
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

const TaskFilter = ({ navigation }) => {

    const [selectedFilterOption, setSelectedFilterOption] = useState([]);
    const [originalSelectedFilterOption, setOriginalSelectedFilterOption] = useState([]);
    const [hasEdit, setHasEdit] = useState(false)

    React.useEffect(() => {
        getSelectedFilterOption()
    }, [])

    React.useEffect(() =>

        navigation.addListener('beforeRemove', (e) => {

            if (_.isEqual(selectedFilterOption, originalSelectedFilterOption) || hasEdit) {
                return
            }

            e.preventDefault();


            Alert.alert(
                'Discard changes?',
                'You have unsaved changes. Are you sure to discard them and leave the screen?',
                [
                    { text: "Don't leave", style: 'cancel', onPress: () => { } },
                    {
                        text: 'Discard',
                        style: 'destructive',
                        onPress: () => navigation.dispatch(e.data.action),
                    },
                ]
            );
        }),
        [navigation, selectedFilterOption, originalSelectedFilterOption, hasEdit]
    );

    React.useEffect(() => {

        if (hasEdit) {
            AsyncStorage.setItem('filterOption', JSON.stringify(selectedFilterOption));
            goToHome();
        }

    }, [hasEdit])


    const goToHome = () => {
        navigation.navigate('Home');
    }

    const getSelectedFilterOption = () => {
        AsyncStorage.getItem('filterOption', (err, result) => {
            if (result && result.length > 0) {
                setSelectedFilterOption(JSON.parse(result));
                setOriginalSelectedFilterOption(JSON.parse(result));
            }
            else {
                setSelectedFilterOption('none');
                setOriginalSelectedFilterOption('status-dpc');
            }

        });
    }

    const setFilterOption = () => {
        setHasEdit(true);
    };

    const verifyIfIsEqual = () => {
        
        if (_.isEqual(selectedFilterOption, originalSelectedFilterOption) || hasEdit) {
            return true
        }
    }


    return (
        <>
            <Container>
                <TopView>
                    <TaskIcon source={filterBlack} />
                </TopView>

                <TitleView>
                    <Title> FILTER OPTIONS</Title>
                </TitleView>

                <CustomRadioButtonGroup onValueChange={newSelectedFilterOption => setSelectedFilterOption(newSelectedFilterOption)} value={selectedFilterOption}>
                    <CustomRadioButtonContainer>
                        <CustomRadioButtonView>

                            <CustomRadioButton color="black" value='none' />
                            <CustomRadioButtonText>NONE </CustomRadioButtonText>
                        </CustomRadioButtonView>
                        <CustomRadioButtonView>

                            <CustomRadioButton color="black" value='status-cancelled' />
                            <CustomRadioButtonText>CANCELLED STATUS </CustomRadioButtonText>
                        </CustomRadioButtonView>
                        <CustomRadioButtonView>

                            <CustomRadioButton color="black" value="status-pendent" />
                            <CustomRadioButtonText>PENDENT STATUS </CustomRadioButtonText>
                        </CustomRadioButtonView>
                        <CustomRadioButtonView>

                            <CustomRadioButton color="black" value='status-done' />
                            <CustomRadioButtonText>DONE STATUS</CustomRadioButtonText>
                        </CustomRadioButtonView>
                        <CustomRadioButtonView>

                            <CustomRadioButton color="black" value="priority-1" />
                            <CustomRadioButtonText>PRIORITY  1</CustomRadioButtonText>
                        </CustomRadioButtonView>
                        <CustomRadioButtonView>

                            <CustomRadioButton color="black" value='priority-2' />
                            <CustomRadioButtonText>PRIORITY  2</CustomRadioButtonText>
                        </CustomRadioButtonView>
                        <CustomRadioButtonView>

                            <CustomRadioButton color="black" value="priority-3" />
                            <CustomRadioButtonText>PRIORITY  3</CustomRadioButtonText>
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
                        <SaveButton disabled={verifyIfIsEqual()} onPress={() => setFilterOption()}>
                            <SaveIcon source={verifyIfIsEqual() ? blockBlack : saveBlack} />
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

export default TaskFilter;