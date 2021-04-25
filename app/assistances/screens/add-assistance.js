import React, { useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native'
import { Ramadan } from '../../shared/models/ramadan.model'
import { RamadanEnum } from '../../shared/enums/ramadan.enum'
import Map from './find-assistance'
import firebase from 'firebase'
import firestore from 'firebase/firestore'
import emailjs from 'emailjs-com';

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
  const [email, setEmail] = React.useState("")

  var db = firebase.firestore().collection('assistance')
   var db1 = firebase.firestore().collection('help_reservation')     
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

    let code = Math.random().toString(36).substring(7);

     function ReserveHelp(){
       console.log('mail');
       db1.add({
         email: email,
         code: code
       }).then(res=>{
         setEmail('')
       }).catch(err=>{
         console.log(err);
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
          placeholder={'entrer message'}
          onChangeText={setMessage}
          value={message}
        />

        <View style={{ width: '94%', marginLeft: '3%' }}>
          <Button
            color='#059c46'
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
        <View style={{width:'98%', marginLeft:"2%", marginTop:'2%'}}>
            <Button
                color='red'
                title="Reserve Place"
                onPress={() => {
                    ReserveHelp()
                }}
              />
              <TextInput
              style={{backgroundColor:'white',marginTop:5, textAlign:'center', padding: 2,}}
              placeholder={'entrer your Email'}
              onChangeText={setEmail}
              value={email}
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
    marginLeft: '3%',
    marginTop: 5,
    width: '94%',
    borderWidth: 1,
    backgroundColor:'white',
    textAlign:'center'
  },
})
