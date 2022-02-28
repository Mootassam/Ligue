import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ChangePassword from '@screens/ChangePassword';
import ProfileEdit from '@screens/ProfileEdit';
import Adhesions from '@screens/Adherent/Adhesions';
import Home from '@screens/Home';
import Project from '@screens/Project';
import Gamifications from '@screens/Adherent/Gamifications';
import Votes from '@screens/Adherent/Votes';
import Dons from '@screens/Adherent/Dons';
import Achat from '@screens/Adherent/Achat';
import Vote from '@screens/Vote';
import Profile from '@screens/Profile';
import DetaillProject from '@screens/DetaillProject';
import PaymentMethod from '@screens/PaymentMethod';
import PreviewPayment from '@screens/PreviewPayment';
import Filter from '@screens/Filter';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BaseColor, useTheme, useFont} from '@config';
import {Icon} from '@components';
import Adherent from '@screens/Adherent';
import PermissionChecker from '../modules/auth/permissionChecker';
import EmptyPermissionsPage from '@screens/Auth/EmptyPermissionsPage';
import ChangeLanguage from '@screens/ChangeLanguage';
import Currency from '@screens/Currency';
import Paymee from '@screens/PreviewPayment/Paymee';
//

const forFade = ({current, closing}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});
const navigators = [
  {name: 'BottomTabNavigator', component: BottomTabNavigator},
  {name: 'ChangePassword', component: ChangePassword},
  {name: 'ProfileEdit', component: ProfileEdit},
  {name: 'Adhesions', component: Adhesions},
  {name: 'Gamifications', component: Gamifications},
  {name: 'Votes', component: Votes},
  {name: 'Dons', component: Dons},
  {name: 'Achat', component: Achat},
  {name: 'Vote', component: Vote},
  {name: 'DetaillProject', component: DetaillProject},
  {name: 'PaymentMethod', component: PaymentMethod},
  {name: 'PreviewPayment', component: PreviewPayment},
  {name: 'Filter', component: Filter},
  {name: 'Adherent', component: Adherent},
  {name: 'EmptyPermissionsPage', component: EmptyPermissionsPage},
  {name: 'Paymee', component: Paymee},
];

//
const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();
const PrivateRoutes = props => {
  const permissionChecker = new PermissionChecker(
    props.currentTenant,
    props.currentUser,
  );
  if (permissionChecker.isEmptyPermissions) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          presentation: 'modal',
        }}
        initialRouteName="EmptyPermissionsPage">
        <Stack.Screen
          name={'EmptyPermissionsPage'}
          component={EmptyPermissionsPage}
        />
      </Stack.Navigator>
    );
  }
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'modal',
      }}
      initialRouteName="BottomTabNavigator">
      <Stack.Screen
        name="Currency"
        component={Currency}
        options={{
          presentation: 'transparentModal',
          cardStyleInterpolator: forFade,
          cardStyle: {backgroundColor: 'rgba(0, 0, 0, 0.5)'},
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="ChangeLanguage"
        component={ChangeLanguage}
        options={{
          presentation: 'transparentModal',
          cardStyleInterpolator: forFade,
          cardStyle: {backgroundColor: 'rgba(0, 0, 0, 0.5)'},
          gestureEnabled: false,
        }}
      />
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

function BottomTabNavigator() {
  const {colors} = useTheme();
  const font = useFont();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        inactiveTintColor: BaseColor.grayColor,
        tabBarShowLabel: true,
        tabBarShowIcon: true,
        tabBarLabel: () => {
          return null;
        },
        tabBarStyle: {borderTopWidth: 0},
      }}>
      <BottomTab.Screen
        name="Home"
        component={Adherent}
        options={{
          tabBarIcon: ({color}) => {
            return <Icon color={color} name="home" size={20} solid />;
          },
        }}
      />
      <BottomTab.Screen
        name="Project"
        component={Project}
        options={{
          tabBarIcon: ({color}) => {
            return <Icon color={color} name="search-dollar" size={20} solid />;
          },
        }}
      />

      <BottomTab.Screen
        name="Adherent"
        component={Home}
        options={{
          tabBarIcon: ({color}) => {
            return <Icon color={color} name="bell" size={20} solid />;
          },
        }}
      />

      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => {
            return <Icon color={color} name="user-alt" size={20} solid />;
          },
        }}
      />
    </BottomTab.Navigator>
  );
}
export default PrivateRoutes;
