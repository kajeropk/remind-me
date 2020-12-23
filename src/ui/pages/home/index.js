import React from 'react';
import { StyleSheet, View, StatusBar, Alert } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import TaskCard from '../../components/taskCard';
import filterBlack from '../../assets/images/filter_black.png';
import sortBlack from '../../assets/images/sort_black.png';
import AnimatedLoader from 'react-native-animated-loader';
import TaskSortHelper from '../../helpers/taskSortHelper'
import TaskFilterHelper from '../../helpers/taskFilterHelper'

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

  const [selectedSortOption, setSelectedSortOption] = React.useState([]);

  const [selectedFilterOption, setSelectedFilterOption] = React.useState([]);

  const [displayedTasks, setDisplayedTasks] = React.useState([]);


  // const [visible, setVisible] = React.useState(true);


  const setAllTasks = (tasks) => {
    AsyncStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const getAllTasks = () => {
    AsyncStorage.getItem('tasks', (err, result) => {
      if (result && result.length > 0) {
        setTasks(JSON.parse(result));
      }
      else {
        setTasks([]);
      }

    });
    // setVisible(true)

  }

  const applyFilterAndSort = () => {

    if (tasks && tasks.length > 0) {
      let modifiedTasks = tasks;

      if (selectedFilterOption && selectedFilterOption.length > 0) {


        switch (selectedFilterOption) {
          case 'none':

            break;

          case 'status-cancelled':

            modifiedTasks = TaskFilterHelper.filterByCancelledStatus(modifiedTasks)
            break;

          case 'status-pendent':
            modifiedTasks = TaskFilterHelper.filterByPendentStatus(modifiedTasks)
            break;

          case 'status-done':
            modifiedTasks = TaskFilterHelper.filterByDoneStatus(modifiedTasks)
            break;

          case 'priority-1':
            modifiedTasks = TaskFilterHelper.filterByPriority1(modifiedTasks)
            break;

          case 'priority-2':
            modifiedTasks = TaskFilterHelper.filterByPriority2(modifiedTasks)
            break;

          case 'priority-3':
            modifiedTasks = TaskFilterHelper.filterByPriority3(modifiedTasks)
            break;
        }
      }

      if (selectedSortOption && selectedFilterOption.length > 0) {
        switch (selectedSortOption) {
          case 'status-pdc':
            modifiedTasks = TaskSortHelper.orderByPDCStatus(modifiedTasks);
            break;

          case 'status-cpd':
            modifiedTasks = TaskSortHelper.orderByCPDStatus(modifiedTasks);
            break;

          case 'status-dpc':
            modifiedTasks = TaskSortHelper.orderByDPCStatus(modifiedTasks);
            break;

          case 'priority-lth':
            modifiedTasks = TaskSortHelper.orderByLTHPriority(modifiedTasks);
            break;

          case 'priority-htl':
            modifiedTasks = TaskSortHelper.orderByHTLPriority(modifiedTasks);
            break;

          case 'title-atz':
            modifiedTasks = TaskSortHelper.orderByATZTitle(modifiedTasks);
            break;

          case 'title-zta':
            modifiedTasks = TaskSortHelper.orderByZTATitle(modifiedTasks);
            break;

          case 'date-mr':
            modifiedTasks = TaskSortHelper.orderByMRDate(modifiedTasks);
            break;

          case 'date-o':
            modifiedTasks = TaskSortHelper.orderByODate(modifiedTasks);
            break;

        }
      }

      setDisplayedTasks(modifiedTasks);
    }

  }

  const getSelectedFilterOption = () => {
    AsyncStorage.getItem('filterOption', (err, result) => {
      if (result && result.length > 0) {
        setSelectedFilterOption(JSON.parse(result));
      }
      else {
        setSelectedFilterOption('none' );
      }

    });
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
    getAllTasks();
    getSelectedFilterOption();
    getSelectedSortOption();
  }, [])

  React.useEffect(() => {
    const backHome = navigation.addListener('focus', () => {
      getAllTasks();
      getSelectedFilterOption();
      getSelectedSortOption();
    });

    return backHome;
  }, [navigation]);

  React.useEffect(() => {
    applyFilterAndSort();
  }, [selectedSortOption, selectedFilterOption, tasks]);


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
          <FilterButton onPress={() => navigation.navigate('TaskFilter')}>
            <FilterIcon source={filterBlack} />
            <TextButton>FILTER</TextButton>
          </FilterButton>
        </FilterButtonView>
        <SortButtonView>
          <SortButton onPress={() => navigation.navigate('TaskSort')}>
            <SortIcon source={sortBlack} />
            <TextButton>SORT</TextButton>
          </SortButton>
        </SortButtonView>
      </TopButtonView>
      <CardListView contentInsetAdjustmentBehavior="automatic">
        {displayedTasks.length > 0 && displayedTasks.map((task) => TaskCard(task, deleteTaskAlertMessage, editTask))}
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
