import React from 'react';
import { StyleSheet, View, StatusBar, Alert } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import TaskCard from '../../components/taskCard';
import filterBlack from '../../assets/images/filter_black.png';
import sortBlack from '../../assets/images/sort_black.png';
import AnimatedLoader from 'react-native-animated-loader';

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

const Home = ({ navigation }) => {
  const [tasks, setTasks] = React.useState([]);

  // const [visible, setVisible] = React.useState(true);

  const alertMessage = () => {
    Alert.alert('It is not available yet', 'Developers are working');
  };

  const setAllTasks = (tasks) => {
    AsyncStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const getAllTasks = () => {
    AsyncStorage.getItem('tasks', (err, result) => {
      setTasks(JSON.parse(result));
    });
    // setVisible(true)

  }

  const deleteTask = (taskToDelete) => {
    const modifiedTasks = tasks.filter(task => task.id !== taskToDelete.id);
    setTasks(modifiedTasks)
    setAllTasks(modifiedTasks)
  }

  const editTask = (taskToEdit) => {
    navigation.navigate('TaskEdit', { taskToEdit })
  }

  const deleteTaskAlertMessage = taskToDelete => {
    Alert.alert('Delete', 'You are deleting a task, do you want to confirm this action?', [{ text: 'Confirm', onPress: () => deleteTask(taskToDelete) }, { text: 'Cancel' }]);
  };

  React.useEffect(() => {
    getAllTasks()
  }, [])

  React.useEffect(() => {
    const backHome = navigation.addListener('focus', () => {
      getAllTasks()
    });

    return backHome;
  }, [navigation]);

  // React.useEffect(() => {
  //   // if(visible){
  //   //   setTimeout(() => {setVisible(false)}, 500);  
  //   // }
  // }, [visible])


  // if (visible) {
  //   return (
  //     <View style={styles.container}>
  //       <AnimatedLoader visible={visible} overlayColor="rgba(255,255,255,0.75)" animationStyle={styles.lottie} speed={1} source={require("../../assets/loader-animation.json")} />
  //     </View>);
  // }

  // else {
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
        {tasks.length > 0 && tasks.map((task) => TaskCard(task, deleteTaskAlertMessage, editTask))}
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
// }

// const styles = StyleSheet.create({ container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF', }, lottie: { width: 100, height: 100, }, });

export default Home;
