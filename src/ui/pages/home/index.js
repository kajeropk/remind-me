import React, { useState } from 'react';
import {StatusBar, Alert} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
// import { AsyncStorage } from 'react-native';
import TaskCard from '../../components/taskCard';
import filterBlack from '../../assets/images/filter_black.png';
import sortBlack from '../../assets/images/sort_black.png';

import {
  TopButtonView,
  FilterButtonView,
  FilterButton,
  FilterIcon,
  SortButtonView,
  SortButton,
  SortIcon,
  TextButton,
  CardListView,
  FloatButton,
  BottomView,
  BottomViewText,
  CardListViewButton,
  CardListViewText,
} from './styles';

const Home = ({navigation}) => {
  const mock = [
    {
      id: '1',
      priority: '1',
      status: 'DONE',
      title: 'MEETING',
      date: 'FRI, OCTOBER 30th 2020, 12:00',
    },
    {
      id: '2',
      priority: '2',
      status: 'PENDENT',
      title: 'WORKOUT',
      date: 'SAT, OCTOBER 31st 2020, 12:00',
    },
    {
      id: '3',
      priority: '3',
      status: 'CANCELLED',
      title: 'MEETING',
      date: 'FRI, OCTOBER 31st 2020, 13:00',
    },
    {
      id: '4',
      priority: '2',
      status: 'PENDENT',
      title: 'COURSE',
      date: 'FRI, OCTOBER 31st 2020, 17:00',
    },
    {
      id: '5',
      priority: '3',
      status: 'CANCELLED',
      title: 'CALL',
      date: 'FRI, OCTOBER 30th 2020, 21:00',
    },
  ];

  const [tasks, setTasks] = useState([]);

  const alertMessage = () => {
    Alert.alert('It is not available yet', 'Developers are working');
  };

  const setAllTasks =  (mocks) => {
    AsyncStorage.setItem('tasks', JSON.stringify(mocks));
  };

  const getAllTasks = () => {
    AsyncStorage.getItem('tasks',(err, result) => {
      setTasks(JSON.parse(result));
    });
  }

  const deleteTask = (taskToDelete) => {
    const modifiedTasks = tasks.filter(task => task.id !== taskToDelete.id);
    setTasks(modifiedTasks)
    setAllTasks(modifiedTasks)
  }

  const deleteTaskAlertMessage = taskToDelete => {
    Alert.alert('Delete', 'You are deleting a task, do you want to confirm this action?',[{text:'Confirm', onPress: () => deleteTask(taskToDelete)},{text:'Cancel'}]);
  };

  React.useEffect(() => {
    // setAllTasks(mock)
    getAllTasks()
   
  },[])

  React.useEffect(()=>{
    console.log(tasks)
  },[tasks])

  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <SafeAreaView> */}
      <TopButtonView>
        <FilterButtonView>
          <FilterButton onPress={() => alertMessage()}>
            <FilterIcon source={filterBlack} />
            <TextButton>FILTER</TextButton>
          </FilterButton>
        </FilterButtonView>
        <SortButtonView>
          <SortButton onPress={() => alertMessage()}>
            <SortIcon source={sortBlack} />
            <TextButton>SORT</TextButton>
          </SortButton>
        </SortButtonView>
      </TopButtonView>
      <CardListView contentInsetAdjustmentBehavior="automatic">
        {tasks.length > 0 && tasks.map((task) => TaskCard(task,task.id,deleteTaskAlertMessage))}
        <CardListViewButton>
          <CardListViewText>NO MORE TASKS</CardListViewText>
        </CardListViewButton>
      </CardListView>
      <FloatButton
        small
        icon="plus"
        color="#FFFFFF"
        onPress={() => navigation.navigate('TaskRegister')}
      />
      <BottomView>
        <BottomViewText>REMIND ME</BottomViewText>
      </BottomView>
      {/* </SafeAreaView> */}
    </>
  );
};

export default Home;
