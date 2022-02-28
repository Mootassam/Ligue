import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Walkthrough from '@screens/Walkthrough';
import Auth from '@screens/Auth';
import Signup from '@screens/Auth/Signup';
const navigators = [
  {name: 'Walkthrough', component: Walkthrough},
  {name: 'Auth', component: Auth},
  {name: 'Signup', component: Signup},
];
const Stack = createStackNavigator();

const PublicRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'modal',
      }}
      initialRouteName="Walkthrough">
      {navigators.map((item, index) => {
        return (
          <Stack.Screen
            key={index}
            name={item.name}
            component={item.component}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default PublicRoutes;
