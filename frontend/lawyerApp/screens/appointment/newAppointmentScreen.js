import React, { Component } from 'react';
import {
    View, 
    Text, 
    TextInput, 
    Button, 
    StyleSheet,
    Keyboard,
    TouchableWithoutFeedback,
    Alert,
    Form,
} from 'react-native';
import Input from '../../components/input';

class NewAppointmentScreen extends React.Component {

    constructor() {
        super()
    
        this.state = {
          Client: "",
          AbstractDay: "",
          Time: "",
    
          //appoint: {},
          //errors: {}
    
        }
      }
    
    // loadItSelf = ({navigation}) => {
    //     navigation.navigate('New_Appointment');
    // }
   
    // addAppoint  = ({navigation}) => {
    //     navigation.navigate('All_Appointment');
    // }

    insertDataToServer = ({navigation}) => {

        const loadItSelf = () => {
            navigation.navigate('New_Appointment');
        }
       
        const allAppoint  = () => {
            navigation.navigate('All_Appointment');
        }
    

        const {Client} = this.state;
        const {AbstractDay} = this.state;
        const {Time} = this.state;

        console.log('uuuuuuuuuummmmmmmm');
        const newAppoint  = {
            client: Client,
            abstract_day : AbstractDay,
            time: Time
        }
        fetch('http://192.168.43.133:3001/appointment/new',{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                client: Client,
                abstract_day : AbstractDay,
                time: Time
            })
        })
        .then((response) => response.json()
            .then((responseJson) => {
                console.log('response come',responseJson.state);
                if(responseJson){
                                //var res = res.data;
                    console.log('wwwwwwwww');
                    if(responseJson.state  == true){
                        
                        Alert.alert('Add appointment');
                        //allAppoint.call();
                    }
                    else{
                        Alert.alert('not add appointment');
                        //loadItSelf;
                    }
            }}).catch((error) => {
                console.error('ERROR',error);
        }));
    }

    render() {

        return (

            <TouchableWithoutFeedback onPress = {() => {Keyboard.dismiss();}} >
                <View style= {styles.screen}>
                    <Text style = {styles.title}>Add Appointment</Text>
                        <Text>Client Name</Text>
                            <Input
                                style = {styles.input}
                                blurOnSubmit
                                autoCapitalize = 'none'
                                autCorrect = {false}
                                    //KeyboardType = 'numeric'
                                onChangeText = { Client => this.setState({Client}) }
                                //value = { this.state.client }
                            />
                        <Text>Abstract Day</Text>
                            <Input
                                style = {styles.input}
                                blurOnSubmit
                                autoCapitalize = 'none'
                                autCorrect = {false}
                                KeyboardType = 'numeric'
                                onChangeText = { AbstractDay => this.setState({AbstractDay}) }
                                //value = { this.state.abstract_day }
                            />
                        <Text>Time</Text>
                            <Input
                                style = {styles.input}
                                blurOnSubmit
                                autoCapitalize = 'none'
                                autCorrect = {false}
                                KeyboardType = 'numeric'
                                onChangeText = { Time => this.setState({Time}) }
                                //value = { this.state.time }
                            />
                        <View style= {styles.buttonContainer} >
                            <Button title = 'Submit' onPress={this.insertDataToServer} />
                        </View>            
                </View>
                
            </TouchableWithoutFeedback>
            //style= {styles.buttonContainer}

            //<Text>aaaaaaaaaaaaaaa</Text>
            
        )
    }

    
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
        width: 150,
        textAlign: 'center',
        borderColor: 'red',
    },
    button: {
        width: 80,
        backgroundColor: 'green',
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center',
    }
});

export default NewAppointmentScreen;