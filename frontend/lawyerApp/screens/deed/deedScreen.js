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

const deedScreen = ({navigation}) => {

    const dateInputHandler = () => {

    }

    const dateSearchHandler = () => {

    }

    const allDeed  = () => {
        navigation.navigate('All_Deed');
    }

    const newDeed = () => {
        navigation.navigate('New_Deed')
    }

    const currentDeed = () => {
        navigation.navigate('Current_Deed');
    }

    const oldDeed = () => {
        navigation.navigate('Old_Deed');
    }

    

    return (
        
        <TouchableWithoutFeedback onPress = {() => {Keyboard.dismiss();}} >
            <View style = {styles.screen} >
            <Text style = {styles.title}>Deed Menu</Text>
            <View style= {styles.buttonContainer} >
                <Button title = 'Add New Deed' onPress = {newDeed} />
                <Button title = 'Old Deed' onPress = {oldDeed} /> 
                <Button title = 'Current Deed' onPress ={currentDeed} />
                <Button title = 'All Deed' onPress = {allDeed} />
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

export default deedScreen;