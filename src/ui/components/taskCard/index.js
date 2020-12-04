import React from 'react';
import {Alert} from 'react-native';
import moment from 'moment';
import close from '../../assets/images/close.png';


import {
  Card,
  CardContent,
  CardPriorityContent,
  CardPriority,
  CardCloseButton,
  CardCloseButtonIcon,
  CardTitleContent,
  CardTitle,
  CardDateContent,
  CardDate,
  CardStatusContent,
  CardStatus,
} from './styles';

const TaskCard = (task,deleteTaskAlertMessage,editTask) => {
  const alertMessage = () => {
    Alert.alert('It is not available yet', 'Developers are working');
  };
  
  return ( 
      <Card key={task.id} status={task.status} onPress={() => editTask(task)}>
        <CardContent>
          <CardPriorityContent>
            <CardPriority>{`P${task.priority}`}</CardPriority>
            <CardCloseButton onPress={() => deleteTaskAlertMessage(task)}>
              <CardCloseButtonIcon source={close} />
            </CardCloseButton>
          </CardPriorityContent>
          <CardTitleContent>
            <CardTitle>{task.title}</CardTitle>
          </CardTitleContent>
          <CardDateContent>
            <CardDate>{(moment(task.date).format('llll')).toUpperCase()}</CardDate>
          </CardDateContent>
          <CardStatusContent>
            <CardStatus status={task.status}>{task.status}</CardStatus>
          </CardStatusContent>
        </CardContent>
      </Card>
  );
};

export default TaskCard;
