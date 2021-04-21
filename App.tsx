import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AddAssistenceScreen from "./app/assistances/screens/add-assistance";
import SignUpScreen from "./app/auth/sign-up/sign-up";
import SignInScreen from "./app/auth/sign-in/sign-in";
import HomeScreen from "./app/ramadan/screens/ramadan-home";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();


export default function App() {
  return (   
     <SafeAreaProvider>
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
          tabBarLabel: 'Ftour',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="food" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="help"
        component={AddAssistenceScreen}
        options={{
          tabBarLabel: 'Help',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="help" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="SignUp"
       component={SignUpScreen}
        options={{
          tabBarLabel: 'Log Out',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="logout" color={color} size={26} />
          ),
        }}
      />
   
    <Tab.Screen
        name="signIn"
        component={SignInScreen}
        options={{
          tabBarLabel: 'Log IN',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="login" color={color} size={26} />
          ),
        }}
      />
       </Tab.Navigator>
    </NavigationContainer>
    </SafeAreaProvider> 
  );
}





