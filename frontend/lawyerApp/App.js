 import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Header from './components/header';
import HomeScreen from './screens/homeScreen';
import AppointmentScreen from './screens/appointment/appointmentScreen';
import CaseScreen from './screens/case/caseScreen';
import DeedScreen from './screens/deed/deedScreen';
import AllAppointmentScreen from './screens/appointment/allAppointmentScreen';
import AllCaseScreen from './screens/case/allCaseScreen';
import AllDeedScreen from './screens/deed/allDeedScreen';
import NewAppointmentScreen from './screens/appointment/newAppointmentScreen';
import NewCaseScreen from './screens/case/newCaseScreen';
import NewDeedScreen from './screens/deed/newDeedScreen';
import CurrentAppointmentScreen from './screens/appointment/currentAppointmentScreen';
import CurrentCaseScreen from './screens/case/currentCaseScreen';
import CurrentDeedScreen from './screens/deed/currentDeedScreen';
import OldAppointmentScreen from './screens/appointment/oldAppointmentScreen';
import OldCaseScreen from './screens/case/oldCaseScreen';
import OldDeedScreen from './screens/deed/oldDeedScreen';

const Stack = createStackNavigator();

export default function App() {

  return (
    <View style={styles.screen}>
      <Header title = "MY LAWYER"/>
      {/* <HomeScreen/> */}
      {/* <AppointmentScreen/> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name = 'HomeScreen'
            component= {HomeScreen}
            option = {{title: "Welcome"}}
          />
          <Stack.Screen 
            name= 'Appointment'
            component = {AppointmentScreen}
          />
          <Stack.Screen 
            name  = 'All_Appointment'
            component = {AllAppointmentScreen}
          /> 
          <Stack.Screen
            name = 'New_Appointment'
            component = {NewAppointmentScreen}
          />
          <Stack.Screen
            name = 'Current_Appointment'
            component = {CurrentAppointmentScreen}
          /> 
          <Stack.Screen
            name = 'Old_Appointment'
            component = {OldAppointmentScreen}
          />  
          <Stack.Screen 
            name= 'Case'
            component = {CaseScreen}
          />
          <Stack.Screen 
            name  = 'All_Case'
            component = {AllCaseScreen}
          /> 
          <Stack.Screen 
            name = 'New_Case'
            component =  {NewCaseScreen}
          />  
          <Stack.Screen
            name = 'Current_Case'
            component = {CurrentCaseScreen}
          />
          <Stack.Screen
            name = 'Old_Case'
            component = {OldCaseScreen}
          />
          <Stack.Screen 
            name= 'Deed'
            component = {DeedScreen}
          />
          <Stack.Screen 
            name  = 'All_Deed'
            component = {AllDeedScreen}
          /> 
          <Stack.Screen 
            name = 'New_Deed'
            component =  {NewDeedScreen}
          />
          <Stack.Screen
            name = 'Current_Deed'
            component = {CurrentDeedScreen}
          />
          <Stack.Screen
            name = 'Old_Deed'
            component = {OldDeedScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    flex: 1,
  }
});
