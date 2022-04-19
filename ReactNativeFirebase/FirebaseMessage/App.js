import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';

messaging().onMessage(async remoteMessage => {
  console.log('remoteMessage', remoteMessage);
});

const App = () => {
  useEffect(() => {
    messaging()
      .getToken()
      .then(fcmToken => {
        console.log('fcmToken', fcmToken);
      });

    requestUserPermission();
  }, []);

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  return (
    <View>
      <Text>Appasdf</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
