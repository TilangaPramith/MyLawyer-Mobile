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

const caseScreen = ({navigation}) => {

    const dateInputHandler = () => {

    }

    const dateSearchHandler = () => {

    }

    const newCase = () => {
        navigation.navigate('New_Case')
    }

    const allCase  = () => {
        navigation.navigate('All_Case');
    }

    const currentCase = () => {
        navigation.navigate('Current_Case');
    }

    const oldCase = () => {
        navigation.navigate('Old_Case');
    }

    

    return (
        
        <TouchableWithoutFeedback onPress = {() => {Keyboard.dismiss();}} >
            <View style = {styles.screen} >
            <Text style = {styles.title}>Case  Menu</Text>
            <View style= {styles.buttonContainer} >
                <Button title = 'Add New Case' onPress = {newCase} />
                <Button title = 'Old Case' onPress = {oldCase} /> 
                <Button title = 'Current Case' onPress = {currentCase} />
                <Button title = 'All Case' onPress = {allCase} />
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

export default caseScreen;