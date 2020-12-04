import React, { useState } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import cancelBlack from '../../assets/images/close.png';
import saveBlack from '../../assets/images/save_black.png';
import blockBlack from '../../assets/images/block_black.png';
import edit from '../../assets/images/edit_black.png';
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
    CustomTextInput,
    CustomDatePicker,
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

const TaskEdit = ({ route, navigation }) => {

    const [originalTask, setOriginalTask] = React.useState(route.params.taskToEdit)

    const [priority, setPriority] = React.useState(route.params.taskToEdit.priority)

    const [title, setTitle] = React.useState(route.params.taskToEdit.title)

    const [date, setDate] = React.useState(new Date(route.params.taskToEdit.date))

    const [status, setStatus] = React.useState(route.params.taskToEdit.status)

    const [tasks, setTasks] = useState([]);

    const [hasEdit, setHasEdit] = useState(false)


    const goToHome = () => {
        navigation.navigate('Home');
    }

    const getAllTasks = () => {
        AsyncStorage.getItem('tasks', (err, result) => {
            setTasks(JSON.parse(result));
        });
    }

    const setAllTasks = (modifiedTasks) => {
        AsyncStorage.setItem('tasks', JSON.stringify(modifiedTasks));
        goToHome();
    };


    const editTask = () => {
        setHasEdit(true)
    }

    React.useEffect(() => {
        getAllTasks()
    }, [])



    React.useEffect(() =>

        navigation.addListener('beforeRemove', (e) => {
            let editedTask = {
                id: originalTask.id, priority: priority, status: status, title: title, date: date.toISOString()
            }

            if (_.isEqual(originalTask, editedTask) || hasEdit) {
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
        [navigation, priority, status, title, date, hasEdit]
    );

    React.useEffect(() => {
        if(hasEdit){
            let modifiedTasks = tasks;
            modifiedTasks = modifiedTasks.map((task) => {
                if (task.id === originalTask.id) {
                    return { id: task.id, priority: priority, status: status, title: title, date: date }
                }
                else {
                    return task
                }
            })
            setAllTasks(modifiedTasks)
        }
    }, [hasEdit])


    React.useEffect(() => {
        if ((date > Date.now() && status === 'DONE')) {
            Alert.alert(
                'Take care!',
                'A task in the future cannot have the status done!',
                [
                    { text: "I understand it", style: 'cancel', onPress: () => setStatus('PENDENT') }]
            );

        }
    }, [status, date])

    return (
        <>

            <Container>
                <TopView>
                    <TaskIcon source={edit} />
                </TopView>
                <TitleView>
                    <Title status={status}>{status + " STATUS"}</Title>
                </TitleView>
                <CustomRadioButtonGroup onValueChange={newStatus => setStatus(newStatus)} value={status}>
                    <CustomRadioButtonContainer>
                        <CustomRadioButtonView>
                            <CustomRadioButtonText>C</CustomRadioButtonText>
                            <CustomRadioButton color="#E92555" value='CANCELLED' />
                        </CustomRadioButtonView>
                        <CustomRadioButtonView>
                            <CustomRadioButtonText>P</CustomRadioButtonText>
                            <CustomRadioButton color="#E9D525" value="PENDENT" />
                        </CustomRadioButtonView>
                        <CustomRadioButtonView>
                            <CustomRadioButtonText>D</CustomRadioButtonText>
                            <CustomRadioButton color="#009E0A" value="DONE" />
                        </CustomRadioButtonView>
                    </CustomRadioButtonContainer>
                </CustomRadioButtonGroup>
                <TitleView>
                    <Title>PRIORITY</Title>
                </TitleView>
                <CustomRadioButtonGroup onValueChange={newPriority => setPriority(newPriority)} value={priority}>
                    <CustomRadioButtonContainer>
                        <CustomRadioButtonView>
                            <CustomRadioButtonText>P1</CustomRadioButtonText>
                            <CustomRadioButton color="black" value='1' />
                        </CustomRadioButtonView>
                        <CustomRadioButtonView>
                            <CustomRadioButtonText>P2</CustomRadioButtonText>
                            <CustomRadioButton color="black" value="2" />
                        </CustomRadioButtonView>
                        <CustomRadioButtonView>
                            <CustomRadioButtonText>P3</CustomRadioButtonText>
                            <CustomRadioButton color="black" value="3" />
                        </CustomRadioButtonView>
                    </CustomRadioButtonContainer>
                </CustomRadioButtonGroup>
                <TitleView>
                    <Title>TITLE</Title>
                </TitleView>
                <CustomTextInput
                    label="Title"
                    value={title}
                    placeholder="Write a Task Title"
                    onChangeText={title => setTitle(title)}
                    selectionColor='black'
                    underlineColor='black'
                >
                </CustomTextInput>
                <TitleView>
                    <Title>DATE</Title>
                </TitleView>
                <CustomDatePicker
                    date={date}
                    onDateChange={setDate}
                    fadeToColor='#f8f8ff'
                />
                <ButtonOptionsView>
                    <DeleteButtonView>
                        <DeleteButton onPress={() => navigation.navigate('Home')}>
                            <DeleteIcon source={cancelBlack} />
                            <TextButton>CANCEL</TextButton>
                        </DeleteButton>
                    </DeleteButtonView>
                    <SaveButtonView>
                        <SaveButton disabled={title === '' || title.length < 3 || (date > Date.now() && status === 'DONE')} onPress={() => editTask()}>
                            <SaveIcon source={(title === '' || title.length < 3 || (date > Date.now() && status === 'DONE')) ? blockBlack : saveBlack} />
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

export default TaskEdit;
