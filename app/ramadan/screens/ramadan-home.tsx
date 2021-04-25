import React,{useEffect} from 'react';
import { StyleSheet, Text, View,TextInput,Button,Alert, ScrollView } from 'react-native';
import { RamadanController } from './controllers/ramadan-controller';
import { Ramadan } from '../../shared/models/ramadan.model'
import firebase from 'firebase'
import firestore from 'firebase/firestore'
import {RamadanEnum} from '../../shared/enums/ramadan.enum';

import Map from "./ramadan-map";

    // init firebase config
    const firebaseConfig = {
      apiKey: "AIzaSyDCksrr5-hR6N1dvAz7aOSklKyUg5P-tDk",
      authDomain: "ramadan-20380.firebaseapp.com",
      projectId: "ramadan-20380",
      storageBucket: "ramadan-20380.appspot.com",
      messagingSenderId: "532203398613",
      appId: "1:532203398613:web:8925f5a1f579f71d91095c"
    };
  // firebase.initializeApp(firebaseConfig);
  firebase.firestore();

export default function RamadanHome({ navigation }) {
   
    const [tables, setTables] = React.useState(""); 
    const [message, onChangeMessage] = React.useState("");
    const [latitude, onChangeLatitude] = React.useState("");
    const [longitude, onChangeLongitude] = React.useState(""); 


    var db = firebase.firestore().collection('reservations')

    // add new query to firsbae
    function add(){
      db.add({
        tables : tables,
        latitude : latitude,
        longitude : longitude,
        message : message
      }).then((res) => {
        setTables(''),
        onChangeLatitude(''),
        onChangeLongitude(''),
        onChangeMessage('')
      }).catch(err => {
        console.error("Error is :", err)
      })
    }



  return (
    <View style={styles.container}>
      <View
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
      </View>
      <View>
            <TextInput
              style={styles.input}
              placeholder={'entrer username'}
              onChangeText={setTables}
              value={tables}
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
              placeholder={'entrer place Message'}
              onChangeText={onChangeMessage}
              value={message}
            />

           <View style={{width:'94%', marginLeft:"3%"}}>
            <Button
                color='grey'
                title="Add Help"
                onPress={() => {
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
                    Alert.alert('T9der takhed lmo3awana');
                    Reserv()
                }}
              />
           </View>
          </View>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#293446',
    height:'100%'
  },

  input: {
    height: 40,
    margin: 6,
    borderWidth: 1,
    backgroundColor:'white',
    textAlign:'center'
  },
});

