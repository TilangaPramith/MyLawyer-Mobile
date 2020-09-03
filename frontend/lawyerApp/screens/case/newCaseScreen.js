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

class NewCaseScreen extends React.Component {

    constructor() {
        super()
    
        this.state = {
          Case_No: "",
          CaseDay: "",
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
            navigation.navigate('New_Case');
        }
       
        const allCase  = () => {
            navigation.navigate('All_Case');
        }
    

        const {Client} = this.state;
        const {CaseDay} = this.state;
        const {Case_No} = this.state;

        console.log('uuuuuuuuuummmmmmmm');
        const newCase  = {
            client: Client,
            case_day : CaseDay,
            case_No: Case_No
        }
        fetch('http://192.168.43.133:3001/case/new',{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                client: Client,
                case_day : CaseDay,
                cases_No: Case_No
            })
        })
        .then((response) => response.json()
            .then((responseJson) => {
                console.log('response come',responseJson.state);
                if(responseJson){
                                //var res = res.data;
                    console.log('wwwwwwwww');
                    if(responseJson.state  == true){
                        
                        Alert.alert('Add case');
                        //allCase.call();
                    }
                    else{
                        Alert.alert('not add case');
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
                    <Text style = {styles.title}>Add Deed</Text>
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
                        <Text>Case Day</Text>
                            <Input
                                style = {styles.input}
                                blurOnSubmit
                                autoCapitalize = 'none'
                                autCorrect = {false}
                                KeyboardType = 'numeric'
                                onChangeText = { CaseDay => this.setState({CaseDay}) }
                                //value = { this.state.abstract_day }
                            />
                        <Text>Case No</Text>
                            <Input
                                style = {styles.input}
                                blurOnSubmit
                                autoCapitalize = 'none'
                                autCorrect = {false}
                                KeyboardType = 'numeric'
                                onChangeText = { Case_No => this.setState({Case_No}) }
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

export default NewCaseScreen;