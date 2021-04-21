import React,{useEffect} from 'react';
import { StyleSheet, Text, View,TextInput,Button,Alert } from 'react-native';
import { RamadanController } from './controllers/ramadan-controller';
import { Ramadan } from '../../shared/models/ramadan.model'
import {RamadanEnum} from '../../shared/enums/ramadan.enum';
import Map from "./ramadan-map";


export default function RamadanHome({ navigation }) {
    let ramadanController = new  RamadanController();
    let ramadanEnum = RamadanEnum;
    
    const [username, onChangeUsername] = React.useState(""); 
    const [message, onChangeMessage] = React.useState("");
    const [latitude, onChangeLatitude] = React.useState("");
    const [longitude, onChangeLongitude] = React.useState(""); 

    function add(){
        console.log('add pressed')
        let ramadan = new Ramadan();

        ramadan.username=username;
        ramadan.message=message;
        ramadan.latitude=Number(latitude);
        ramadan.longitude=Number(longitude);

        ramadanController.Add(ramadan);
    }
  return (
    <View style={styles.container}>
      {/* <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'grey',
          height: '12%',
          width: '100%',
          color: 'white',
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            marginTop: 16
          }}
        >
          Futors
        </Text>
      </View> */}
      <View>
            {/* <Text> Test Booked : {ramadanEnum.BOOKED} & Test Free : {ramadanEnum.FREE}</Text>
            <Text> {(username === '') ? '' : 'Bonjour, Je suis : '+ username} </Text>

            <Text> {(message === '') ? '' : 'Mon message est : '+ message} </Text>
            <Text> {(latitude === '' && longitude === '') ? '' : 'Ma position est : '+ '('+latitude+','+longitude+')'} </Text> */}
            <TextInput
              style={styles.input}
              placeholder={'entrer message'}
              onChangeText={onChangeMessage}
              value={message}
            />
            <TextInput
              style={styles.input}
              placeholder={'entrer latitude'}
              onChangeText={onChangeLatitude}
              value={latitude}
            />
            <TextInput
              style={styles.input}
              placeholder={'entrer longitude'}
              onChangeText={onChangeLongitude}
              value={longitude}
            />
            <TextInput
              style={styles.input}
              placeholder={'entrer place number'}
              onChangeText={onChangeLongitude}
              value={longitude}
            />

           <View style={{width:'94%', marginLeft:"3%"}}>
            <Button
                color='grey'
                title="Add Help"
                onPress={() => {
                    Alert.alert('Simple Button pressed');
                    add()
                }}
              />
           </View>
          </View>
          
          <View style={{marginTop:'6%' ,width:'93%', height:'90%',marginLeft:'2.5%'}}>
            <Map></Map>
            <View style={{width:'100%', marginLeft:"1%", marginTop:'2%'}}>
            <Button
                color='green'
                title="Reserve Place"
                onPress={() => {
                    Alert.alert('Simple Button pressed');
                }}
              />
           </View>
          </View>
    </View>
   
  );
}

export function Test(){
    console.log('hola')
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#293446',
    height:'100%'
  },

  input: {
    height: 40,
    margin: 9,
    borderWidth: 1,
    backgroundColor:'white',
    textAlign:'center'
  },
});

