import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';
import {RamadanMapsEnum} from '../../shared/enums/ramdan_maps.enum';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import firebase from 'firebase'
import firestore from 'firebase/firestore'

  //   // init firebase config
  //   const firebaseConfig = {
  //     apiKey: "AIzaSyDCksrr5-hR6N1dvAz7aOSklKyUg5P-tDk",
  //     authDomain: "ramadan-20380.firebaseapp.com",
  //     projectId: "ramadan-20380",
  //     storageBucket: "ramadan-20380.appspot.com",
  //     messagingSenderId: "532203398613",
  //     appId: "1:532203398613:web:8925f5a1f579f71d91095c"
  //   };
  // //  firebase.initializeApp(firebaseConfig);
  // firebase.firestore();



export default function HelpMap() {
  const [info, setInfo] = useState([]); 

  
   async function  getAssistance() {
     const assistances = firebase.firestore().collection('assistance')
     const querySnapshot = await assistances.get()
     const tempDoc = querySnapshot.docs.map((doc:any) => {
       return { id: doc.id, ...doc.data() }

     })
     const allAssistance = tempDoc;
     setInfo(allAssistance)
     return allAssistance;
     
 }

 
   function setMap ()  {
    return info.map((i) => <Marker coordinate={{ latitude: i.latitude, longitude: i.longtitude }}></Marker >)
   } 
    

  return (
    <>
    <View style={styles.container}>
      
      <MapView
        provider = {PROVIDER_GOOGLE}
        style = {styles.map}
        initialRegion = {{
          latitude : 32.29512789087331,
          longitude : -9.233774559186537,
          latitudeDelta : 0.0222,
          longitudeDelta : 0.0121 
        }}
        >
         {setMap ()}
        </MapView>
 
    </View>
    <View style={{marginTop:'2%', marginLeft:'2%'}}>
    <Button
        color='blue'
        title="Show all Assistances"
        onPress={() => {
        getAssistance()
    }}
    />
  </View>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height : '40%'
  },
  text : {
      textAlign : 'center',
  },
  map: {
    flex : 1,
    height : '20%',
    width : 340,
  }
});

