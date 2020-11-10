import React from 'react';
import {
  StatusBar,
  Alert,
} from 'react-native';

import TaskCard from './src/ui/components/taskCard';
import filterBlack from './src/ui/assets/images/filter_black.png';
import sortBlack from './src/ui/assets/images/sort_black.png';

import {
  TopView, TopText, TopButtonView, FilterButtonView,
  FilterButton, FilterIcon, SortButtonView, SortButton,
  SortIcon, TextButton, CardListView,
  FloatButton, BottomView, BottomViewText, CardListViewButton,
  CardListViewText,
} from './styles';

const App = () => {
  const alertMessage = () => {
    Alert.alert('It is not available yet', 'Developers are working');
  };

  const mock = [
    {
      priority: '1',
      status: 'DONE',
      title: 'MEETING',
      date: 'FRI, OCTOBER 30th 2020, 12:00',
    },
    {
      priority: '2',
      status: 'PENDENT',
      title: 'WORKOUT',
      date: 'SAT, OCTOBER 31st 2020, 12:00',
    },
    {
      priority: '1',
      status: 'CANCELLED',
      title: 'MEETING',
      date: 'FRI, OCTOBER 31st 2020, 13:00',
    },
    {
      priority: '2',
      status: 'PENDENT',
      title: 'COURSE',
      date: 'FRI, OCTOBER 31st 2020, 17:00',
    },
    {
      priority: '3',
      status: 'CANCELLED',
      title: 'CALL',
      date: 'FRI, OCTOBER 30th 2020, 21:00',
    },
  ];

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
          <FilterButton onPress={() => alertMessage()}>
            <FilterIcon source={filterBlack} />
            <TextButton>
              FILTER
            </TextButton>
          </FilterButton>
        </FilterButtonView>
        <SortButtonView>
          <SortButton onPress={() => alertMessage()}>
            <SortIcon source={sortBlack} />
            <TextButton>
              SORT
            </TextButton>
          </SortButton>
        </SortButtonView>
      </TopButtonView>
      <CardListView contentInsetAdjustmentBehavior="automatic">
        {mock.map((task) => (
          TaskCard(task)
        ))}
        <CardListViewButton>
          <CardListViewText>
            NO MORE TASKS
          </CardListViewText>
        </CardListViewButton>
      </CardListView>
      <FloatButton
        small
        icon="plus"
        color="#FFFFFF"
        onPress={() => alertMessage()}
      />
      <BottomView>
        <BottomViewText>
          REMIND ME
        </BottomViewText>
      </BottomView>
      {/* </SafeAreaView> */}
    </>
  );
};

export default App;
