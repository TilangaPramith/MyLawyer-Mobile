import React, { useState } from 'react';
import {
    View, 
    Text, 
    TextInput, 
    Button, 
    StyleSheet,
    Keyboard,
    TouchableWithoutFeedback,
    Alert,
    ActivityIndicator,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import RNRestart from 'react-native-restart';
import Input from '../../components/input';
import Axios from 'axios';
import { Table, TableWrapper, Row } from 'react-native-table-component';

class CurrentCaseScreen extends React.Component {
    
    state= {
        loading: false,
        tableHead: ['Id', 'Case No', 'Client', 'Case Day', 'Create Day'],
        widthArr: [40, 60, 80, 100, 120],
        // Id: [],
        // client: [],
        // abstract_day: [],
        // create_day: [],
        // time: [],
        case: []
    }

    deleteHandler = (cases)  => {
        console.log('aaaa',cases);
        Alert.alert(
            'Alert',
            'Are you sure to delete this case',
            [
              {text: 'NO', onPress: () => console.warn('NO Pressed'), style: 'cancel'},
              {text: 'YES', onPress: () => {
                        console.log('yes');
                        fetch('http://192.168.43.133:3001/case/delete',{
                            method: "POST",
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                cases_Id: cases,
                            })
                        })
                        .then((response) => response.json()
                            .then((responseJson) => {
                                console.log('response come',responseJson.state);
                                if(responseJson){
                                                //var res = res.data;
                                    console.log('wwwwwwwww');
                                    if(responseJson.state  == true){
                                        
                                        Alert.alert(
                                            'Alert',
                                            'Delete successfully',
                                            [
                                              //{text: 'NO', onPress: () => console.warn('NO Pressed'), style: 'cancel'},
                                              {text: 'Ok', onPress: () => {
                                                //RNRestart.Restart();
                                              }},
                                            ]
                                          );
                                    }
                                    else{
                                        Alert.alert('Failed to delete');
                                    }
                                }}).catch((error) => {
                                    console.error('ERROR',error);
                                }));
                    } 
              },

            ]
          );
    }

    async componentDidMount(){
        console.log('mount');
        Axios.get('http://192.168.43.133:3001/case/current')
        .then(res => {
            console.log('response come');
            this.setState({loading: true});
            const data = res.data;
            console.log('DATA ',data);

            setTimeout(()=> this.setState({
                loading: false,
                case: data
            }), 2000)
        }).catch = (e) => {
            console.error('error ',e)
        }
    }

    render() {
        if(this.state.loading){
            return (
              <View style={styles.display}>
                <ActivityIndicator size="large" />
              </View>
            );
          }
        
    }

    render () {
        const state  = this.state;
        return (
            <TouchableWithoutFeedback onPress = {() => {Keyboard.dismiss();}} >
            <View style = {styles.screen} >
                <Text style = {styles.title}>Current Cases</Text>
                <View style = {styles.container}>
                    <ScrollView horizontal = {true} style  ={{flex: 1, marginTop: 10}} >
                        <View>
                            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                                <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
                            </Table>
                            <ScrollView horizontal = {false} style={styles.dataWrapper}>
                                <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                                    {this.state.case.map((cases, i) => (
                                        <TouchableOpacity onLongPress = {()  => this.deleteHandler(cases[0])}  >
                                            <Text></Text>
                                            <Row 
                                                key = {i}  
                                                data = {cases}
                                                widthArr={state.widthArr}
                                                style={[styles.row, i%2 && {backgroundColor: '#F7F6E7'}]}
                                                textStyle={styles.text}
                                            />
                                        </TouchableOpacity>
                                    ))}
                                </Table>
                            </ScrollView>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </TouchableWithoutFeedback>
        
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
        width: 50,
        textAlign: 'center',
    },
    button: {
        width: 80,
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    display: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: { 
        flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' 
    },
    header: { 
        height: 50, backgroundColor: '#537791' 
    },
    text: { 
        textAlign: 'center', fontWeight: '100' 
    },
    dataWrapper: { 
        marginTop: -1 
    },
    row: { 
        height: 40, backgroundColor: '#E7E6E1' 
    }
});

export default CurrentCaseScreen;