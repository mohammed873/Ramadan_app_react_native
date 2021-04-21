import * as React from 'react';
import { Button, View , ImageBackground } from 'react-native';

export default function AddAssistence({ navigation }) {
  return (
    <ImageBackground 
              source={{uri: 'http://papers.co/wallpaper/papers.co-vk51-android-lollipop-material-design-dark-yellow-pattern-4-wallpaper.jpg'}}
              style={{ flex: 1
                }}
           >     
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="this is find breakfast"
      />
    </View>
    </ImageBackground >
  );
}