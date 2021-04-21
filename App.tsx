import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
 
import AddAssistenceScreen from "./app/assistances/screens/add-assistance";
import FindAssistenceScreen from "./app/assistances/screens/find-assistance";
import SignUpScreen from "./app/auth/sign-up/sign-up";
import SignInScreen from "./app/auth/sign-in/sign-in";
import AddBreakfastScreen from "./app/breakfasts/screens/add-breakfast";
import FindBreakfastScreen from "./app/breakfasts/screens/find-breakfast";
import HomeScreen from "./app/ramadan/screens/ramadan-home";

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

const Drawer = createDrawerNavigator();

export default function App() {
  return (    
    <NavigationContainer>
          <Tab.Navigator
          initialRouteName='signIn'
      activeColor="#e91e63"
      barStyle={{ backgroundColor: 'black' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="signIn"
        component={SignInScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
}






