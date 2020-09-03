import React, { useState } from 'react';
import {
    View, 
    Text, 
    TextInput, 
    Button, 
    StyleSheet,
    Keyboard,
    TouchableWithoutFeedback,
    Alert
} from 'react-native';
import Input from '../../components/input';

const AppointmentScreen = ({navigation}) => {

    const oldAppointment = () => {
        navigation.navigate('Old_Appointment');
    }

    const currentAppointment = () => {
        navigation.navigate('Current_Appointment');
    }

    const allAppointment  = () => {
        navigation.navigate('All_Appointment');
    }

    const newAppointment = () => {
        navigation.navigate('New_Appointment');
    }

    return (
        
        <TouchableWithoutFeedback onPress = {() => {Keyboard.dismiss();}} >
            <View style = {styles.screen} >
            <Text style = {styles.title}>Appointment Menu</Text>
            <View style= {styles.buttonContainer} >
                <Button title = 'Add New Appointment' onPress = {newAppointment} />
                <Button title = 'Old Appointment' onPress = {oldAppointment} />
                <Button title = 'Current Appointment' onPress  = {currentAppointment} />
                <Button title = 'All Appointment' onPress = {allAppointment} />
            </View>
        </View>
        </TouchableWithoutFeedback>
        //style= {styles.buttonContainer}
        
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: "yellow"
    },
    buttonContainer: {
        //flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        paddingHorizontal: 15,
        //padding: 20,
        margin: 10,
        height: "50%"
    },
    title: {
        color: 'brown',
        fontSize: 20,
        marginVertical: 10,
    },
    input: {
        width: 50,
        textAlign: 'center',
    },
    button: {
        width: 80,
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center',
    }
});

export default AppointmentScreen;