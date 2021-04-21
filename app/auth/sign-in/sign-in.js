import * as React from 'react'
import { View, ImageBackground, Text, TextInput, Button } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

export default function AddAssistence({ navigation  }) {
 
  return (
    <ImageBackground
      source={{
        uri:
          'https://cdna.artstation.com/p/assets/covers/images/015/686/416/large/james-mason-honda-jr-sunrise.jpg?1549260428'
      }}
      style={{ flex: 1 }}
    >
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#293446',
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
          Sign in
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%'
        }}
      >
        <TextInput
          placeholder='Email'
          style={{ backgroundColor: 'white', width: '90%', padding: 5 }}
        />
        <TextInput
          placeholder='Password'
          style={{
            backgroundColor: 'white',
            width: '90%',
            padding: 5,
            marginTop: 19
          }}
        />
        <View style={{ marginTop: 30, width: '90%' }}>
          <Button
            color='#293446'
            onPress={() => navigation.navigate('Home')}
            title='SIGN IN'
          />
        </View>
        <View style={{ marginTop: 9, width: '90%' }}>
          <Button
            color='green'
            onPress={() => navigation.navigate('SignUp')}
            title='SIGN UP'
          />
        </View>
      </View>
    </ImageBackground>
  )
}
