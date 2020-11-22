import {AppRegistry} from 'react-native';
import React from 'react';
// import App from './src/ui/pages/home';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator,HeaderBackButton} from '@react-navigation/stack'
import Home from './src/ui/pages/home'
import TaskRegister from './src/ui/pages/taskRegister'

const Stack = createStackNavigator();

export default function App () {

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Home" 
                    component={Home} 
                    options={{
                        title: 'MY TASKS',
                        headerStyle: {
                            backgroundColor: 'black',
                            height: 44,
                            
                        },
                        headerTintColor: 'white',
                        headerTitleStyle: {
                            fontSize: 16,
                            fontFamily:'Red Hat Text',
                            marginLeft: 5, 
                            letterSpacing: 1.25
                          }
                    }}
                   
                    />   
                <Stack.Screen 
                    name="TaskRegister" 
                    component={TaskRegister} 
                    options={{
                        title: 'NEW TASK REGISTER',
                        headerStyle: {
                            backgroundColor: 'black',
                            height: 44,
                            
                        },
                        headerTintColor: 'white',
                        headerTitleStyle: {
                            fontSize: 16,
                            fontFamily:'Red Hat Text',
                            marginLeft: 5, 
                            letterSpacing: 1.25
                        },      
                    }}
                    />   
            </Stack.Navigator>
        </NavigationContainer>
    )
}    
    
AppRegistry.registerComponent(appName, () => App);
