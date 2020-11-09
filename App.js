/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import TaskCard from './component/taskCard'

import {
  TopView, TopText, TopButtonView, FilterButtonView, FilterButton, FilterIcon, SortButtonView, SortButton, SortIcon, TextButton, CardListView,

} from './styles'

const App = () => {

  const alertMessage = () => {
    Alert.alert('It is not available yet','Developers are working')
  }

  const mock = [
    {priority:'1',
     status: 'DONE',
     title: 'MEETING',
     date: 'FRI, OCTOBER 30th 2020, 12:00'
    },
    {priority:'2',
     status: 'PENDENT',
     title: 'WORKOUT',
     date: 'SAT, OCTOBER 31st 2020, 12:00' 
    },
    {priority:'1',
    status: 'CANCELLED',
    title: 'MEETING',
    date: 'FRI, OCTOBER 31st 2020, 13:00'
    },
    {priority:'2',
    status: 'PENDENT',
    title: 'COURSE',
    date: 'FRI, OCTOBER 31st 2020, 17:00'
    },
    {priority:'3',
    status: 'CANCELLED',
    title: 'CALL',
    date: 'FRI, OCTOBER 30th 2020, 21:00'
    },
  ]
  

  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <SafeAreaView> */}
        <TopView>
          <TopText>
            MY TASKS
          </TopText>
        </TopView>
        <TopButtonView>
          <FilterButtonView>
            <FilterButton onPress={() => alertMessage()} >
              <FilterIcon source={require('../remindme/images/filter_black.png')}>
              </FilterIcon>
              <TextButton>
                FILTER
              </TextButton>
            </FilterButton>
          </FilterButtonView>
          <SortButtonView>
            <SortButton  onPress={() => alertMessage()} >
              <SortIcon   source={require('../remindme/images/sort_black.png')}>
              </SortIcon>
              <TextButton>
                SORT
              </TextButton>
            </SortButton>
          </SortButtonView>
        </TopButtonView>
        <CardListView contentInsetAdjustmentBehavior="automatic">
          {mock.map(task => {
            return (
              TaskCard(task)
            )
          })}
        </CardListView>
      {/* </SafeAreaView> */}
    </>
  );
};

export default App;
