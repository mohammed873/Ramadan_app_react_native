import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AddAssistenceScreen from "./app/assistances/screens/add-assistance";
import SignUpScreen from "./app/auth/sign-up/sign-up";
import SignInScreen from "./app/auth/sign-in/sign-in";
import HomeScreen from "./app/ramadan/screens/ramadan-home";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      activeColor="#e91e63"
      barStyle={{ backgroundColor: 'black' }}
    >
      <Tab.Screen
          options={{
            tabBarLabel: 'Ftour',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="food" color={color} size={26} />
            ),
          }} 
      name="Home" component={HomeScreen} />
      <Tab.Screen 
        options={{
            tabBarLabel: 'Help',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="help" color={color} size={26} />
            ),
          }} 
      name="Help" component={AddAssistenceScreen} />
      
    </Tab.Navigator>
  );
}

export default function App() {
  return (   
  <SafeAreaProvider>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="signIn"screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen name="Home" component={HomeTabs} />
      <Stack.Screen name="signIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>       
    </NavigationContainer>
    </SafeAreaProvider> 
  );
}








   
