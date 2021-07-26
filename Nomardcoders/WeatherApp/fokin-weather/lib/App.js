import React, { useEffect, useState } from 'react';
import { Alert, Platform } from 'react-native';
import Loading from './screens/Loading';
import Weather from './screens/Weather';
import * as Location from 'expo-location';
import Constants from './utils/Constants';
import axios from 'axios';


export default function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [temp, setTemp] = useState(0);

  useEffect(() => {
    getLocation();

  }, [])

  const _getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${Constants.API_KEY}&units=metric`)
    setTemp(data.main.temp)
    setIsLoading(false)
  }

  const getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      // const location = await (Platform.OS === 'web' ? Location.getCurrentPositionAsync() : Location.getLastKnownPositionAsync());
      // const location = await Location.getCurrentPositionAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();

      _getWeather(latitude, longitude)
      setIsLoading(false)      
      
    } catch (error) {
      Alert.alert(error.message);
    }
  }

  return (
    isLoading ? <Loading /> : <Weather temp={Math.round(temp)}/>
  );
}
