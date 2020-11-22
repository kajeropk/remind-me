import React, { useState } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import cancelBlack from '../../assets/images/close.png';
import saveBlack from '../../assets/images/save_black.png';
import taskBlack from '../../assets/images/task_black.png';
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

const TaskRegister = ({ navigation }) => {

    const taskDefault = {
        id: '',
        priority: '',
        status: '',
        title: '',
        date: '',
    }

    const [newTask, setNewTask] = React.useState({
        id: '',
        priority: '',
        status: '',
        title: '',
        date: '',
    })

    const [priority, setPriority] = React.useState('1')

    const [title, setTitle] = React.useState('')

    const [date, setDate] = React.useState(new Date())

    const [tasks, setTasks] = useState([]);

    const getAllTasks = () => {
        AsyncStorage.getItem('tasks', (err, result) => {
            setTasks(JSON.parse(result));
        });
    }

    const setAllTasks = (mocks) => {
        AsyncStorage.setItem('tasks', JSON.stringify(mocks));
    };

    const addNewTask = () => {
        setTasks(tasks.push(newTask))
    }
    
    const constructNewTask = () => {

    }

    React.useEffect(() => {
        getAllTasks()
    }, [])

    React.useEffect(() => {
        console.log('tasks', tasks)
    }, [tasks])


    React.useEffect(() => {
        console.log('date', date)
    }, [date])

    React.useEffect(() =>

        navigation.addListener('beforeRemove', (e) => {
            if(_.isEqual(newTask,taskDefault)){
                return;
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
        [navigation]
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
                    underlineColor='#f8f8ff'
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
                        <SaveButton onPress={() => { }}>
                            <SaveIcon source={saveBlack} />
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


