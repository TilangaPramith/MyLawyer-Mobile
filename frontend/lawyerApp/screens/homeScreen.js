import React from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


const HomeScreen = ({navigation}) => {
    const getAppointmentScreen = () => {
        navigation.navigate('Appointment');
    };

    const getCaseScreen = () => {
        navigation.navigate('Case');
    };

    const getDeedScreen = () => {
        navigation.navigate('Deed');
    };
    //() => navigation.navigate('Appointment') onPress = {getAppointmentScreen}
    return (
        //style= {styles.buttonContainer}
        <View style = {styles.screen} >
            <Text style = {styles.title}>Menu</Text>
            <View style= {styles.buttonContainer} >
                <Button title = 'Appointment' onPress = {getAppointmentScreen} />
                <Button title = 'Case' onPress = {getCaseScreen} />
                <Button title = 'Deed' onPress = {getDeedScreen} />
            </View>
        </View>
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
    button1: {
        
    }
});

export default HomeScreen;