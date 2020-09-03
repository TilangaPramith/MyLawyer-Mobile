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

class NewDeedScreen extends React.Component {

    constructor() {
        super()
    
        this.state = {
          Deed_No: "",
          Signed_Day: "",
          Handover_Day : "",
          Client: "",
    
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
            navigation.navigate('New_Deed');
        }
       
        const allDeed  = () => {
            navigation.navigate('All_Deed');
        }
    

        const {Client} = this.state;
        const {Signed_Day} = this.state;
        const {Deed_No} = this.state;
        const {Handover_Day} = this.state;

        console.log('uuuuuuuuuummmmmmmm');
        const newDeed  = {
            client: Client,
            signed_day : Signed_Day,
            deed_No: Deed_No,
            handover_day : Handover_Day,
        }
        fetch('http://192.168.43.133:3001/deed/new',{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                client: Client,
                signed_day : Signed_Day,
                deed_No: Deed_No,
                handover_day : Handover_Day,
            })
        })
        .then((response) => response.json()
            .then((responseJson) => {
                console.log('response come',responseJson.state);
                if(responseJson){
                                //var res = res.data;
                    console.log('wwwwwwwww');
                    if(responseJson.state  == true){
                        
                        Alert.alert('Add deed');
                        //allDeed.call();
                    }
                    else{
                        Alert.alert('not add deed');
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
                    <Text style = {styles.title}>Add Case</Text>
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
                        <Text>Signed Day</Text>
                            <Input
                                style = {styles.input}
                                blurOnSubmit
                                autoCapitalize = 'none'
                                autCorrect = {false}
                                KeyboardType = 'numeric'
                                onChangeText = { Signed_Day => this.setState({Signed_Day}) }
                                //value = { this.state.abstract_day }
                            />
                        <Text>Deed No</Text>
                            <Input
                                style = {styles.input}
                                blurOnSubmit
                                autoCapitalize = 'none'
                                autCorrect = {false}
                                KeyboardType = 'numeric'
                                onChangeText = { Deed_No => this.setState({Deed_No}) }
                                //value = { this.state.time }
                            />
                        <Text>Handover Day</Text>
                            <Input
                                style = {styles.input}
                                blurOnSubmit
                                autoCapitalize = 'none'
                                autCorrect = {false}
                                KeyboardType = 'numeric'
                                onChangeText = { Handover_Day => this.setState({Handover_Day}) }
                                //value = { this.state.abstract_day }
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

export default NewDeedScreen;