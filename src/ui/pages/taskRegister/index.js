import React, { useState } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import cancelBlack from '../../assets/images/close.png';
import saveBlack from '../../assets/images/save_black.png';
import blockBlack from '../../assets/images/block_black.png';
import taskBlack from '../../assets/images/task_black.png';
import * as _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';

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

const TaskRegister = ({ navigation }) => {

    const [newTask, setNewTask] = React.useState({})

    const [priority, setPriority] = React.useState('1')

    const [title, setTitle] = React.useState('')

    const [date, setDate] = React.useState(new Date())

    const [tasks, setTasks] = useState([]);


    const goToHome = () => {
        navigation.navigate('Home');
    }

    const getAllTasks = () => {
        AsyncStorage.getItem('tasks', (err, result) => {
            if (result && result.length > 0) {
                setTasks(JSON.parse(result));
            }
            else {
                setTasks([]);
            }

        });
    }

    const setAllTasks = () => {
        AsyncStorage.setItem('tasks', JSON.stringify(tasks));
        goToHome();
    };

    const addNewTask = () => {
        const modifiedTasks = tasks;
        modifiedTasks.push(newTask)
        setTasks(modifiedTasks)
        setAllTasks()

    }

    const constructNewTask = () => {
        setNewTask({
            id: uuidv4(),
            priority: priority,
            status: 'PENDENT',
            title: title,
            date: date,
        })
    }

    React.useEffect(() => {
        getAllTasks()
    }, [])

    React.useEffect(() => {
        if (!_.isEmpty(newTask)) {
            addNewTask()
        }

    }, [newTask])

    React.useEffect(() =>

        navigation.addListener('beforeRemove', (e) => {
            if (!_.isEmpty(newTask)) {
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
        [navigation, newTask]
    );

    return (
        <>
            <Container>
                <TopView>
                    <TaskIcon source={taskBlack} />
                </TopView>


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
                        <SaveButton disabled={title === '' || title.length < 3} onPress={() => constructNewTask()}>
                            <SaveIcon source={(title === '' || title.length < 3) ? blockBlack : saveBlack} />
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


export default TaskRegister;


