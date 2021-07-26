import React, { useEffect, useState } from 'react';
import { Alert, Platform } from 'react-native';
import Loading from './screens/Loading';
import * as Location from 'expo-location';
import Constants from './utils/Constants';

export default function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getLocation();

  }, [])

  const getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      // const location = await (Platform.OS === 'web' ? Location.getCurrentPositionAsync() : Location.getLastKnownPositionAsync());
      const location = await Location.getCurrentPositionAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      setIsLoading(false)      
      
    } catch (error) {
      Alert.alert(error.message);
    }
  }

  return (
    isLoading ? <Loading/> : null
  );
}
