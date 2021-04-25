import React, { useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native'
import { Ramadan } from '../../shared/models/ramadan.model'
import { RamadanEnum } from '../../shared/enums/ramadan.enum'
import Map from './find-assistance'
import firebase from 'firebase'
import firestore from 'firebase/firestore'

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

export default function RamadanHelp({ navigation }) {
  // let HelpController = new HelpController()
  let ramadanEnum = RamadanEnum

  const [tables, setTables] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [latitude, onChangeLatitude] = React.useState('')
  const [longitude, onChangeLongitude] = React.useState('')

  var db = firebase.firestore().collection('assistance')

  // add new query to firsbae
  function add(){
    db.add({
      Tables : tables,
      latitude : latitude,
      longitude : longitude,
      message : message
    }).then((res) => {
      setTables(''),
      onChangeLatitude(''),
      onChangeLongitude(''),
      setMessage('')
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
          backgroundColor: '#059c46',
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
          Helps
        </Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder={'entrer tables number'}
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
          placeholder={'entrer place number'}
          onChangeText={setMessage}
          value={message}
        />

        <View style={{ width: '94%', marginLeft: '3%' }}>
          <Button
            color='grey'
            title='Add Help'
            onPress={() => {
            
              add()
            }}
          />
        </View>
      </View>

      <View
        style={{
          marginTop: '6%',
          width: '93%',
          height: '90%',
          marginLeft: '2.5%'
        }}
      >
        <Map></Map>
        <View style={{ width: '100%', marginLeft: '1%', marginTop: '2%' }}>
          <Button
            color='green'
            title='Reserve Place'
            onPress={() => {
              Alert.alert('Simple Button pressed')
            }}
          />
        </View>
      </View>
    </View>
  )
}

export function Test() {
  console.log('hola')
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#293446',
    height: '100%'
  },

  input: {
    height: 40,
    margin: 6,
    borderWidth: 1,
    backgroundColor: 'white',
    textAlign: 'center'
  }
})
