import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AuthScreen from '../screens/AuthScreen';
import Home from '../screens/Home';
import Detail from '../screens/Detail';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: () => {
            return <Text>Agregar Usuarios</Text>;
          },
          tabBarIcon: () => {
            return <Icon name="user-plus" size={20} color="blue" />;
          },
        }}
      />
      <Tab.Screen
        name="Detail"
        component={Detail}
        options={{
          headerShown: false,
          tabBarLabel: () => {
            return <Text>Lista de usuarios</Text>;
          },
          tabBarIcon: () => {
            return <Icon name="users" size={20} color="blue" />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AuthScreen"
        component={AuthScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AuthTab"
        component={MyTabs}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
