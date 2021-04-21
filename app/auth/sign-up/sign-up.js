import * as React from 'react'
import { Button, View, ImageBackground, Text, TextInput } from 'react-native'

export default function AddAssistence({ navigation }) {
  return (
    <ImageBackground
      source={{
        uri:
          'https://cdnb.artstation.com/p/assets/images/images/021/903/545/large/james-mason-honda-jr-mooncity.jpg?1573394479'
      }}
      style={{ flex: 1 }}
    >
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#b30059',
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
          Sign up
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
          placeholder='First Name'
          style={{ backgroundColor: 'white', width: '90%', padding: 5 }}
        />
        <TextInput
          placeholder='Last Name'
          style={{
            backgroundColor: 'white',
            width: '90%',
            padding: 5,
            marginTop: 19
          }}
        />
        <TextInput
          placeholder='Email'
          style={{
            backgroundColor: 'white',
            width: '90%',
            padding: 5,
            marginTop: 19
          }}
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
            onPress={() => navigation.navigate('signIn')}
            title='SIGN IN'
          />
        </View>
        <View style={{ marginTop: 9, width: '90%' }}>
          <Button
            color='green'
            onPress={() => navigation.navigate('signup')}
            title='SIGN UP'
          />
        </View>
      </View>
    </ImageBackground>
  )
}
