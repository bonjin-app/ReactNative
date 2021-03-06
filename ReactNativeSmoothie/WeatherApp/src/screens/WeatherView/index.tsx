import React, { useEffect, useState } from 'react'
import { Alert, FlatList } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #EEE;
`;

const WeatherContainer = styled(FlatList)``;

const LoadingView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Loading = styled.ActivityIndicator`
    margin-bottom: 16px;
`;

const LoadingLabel = styled.Text`
    font-size: 16px;
`;

const WeatherItemContainer = styled.View`
    height: 100%;
    justify-content: center;
    align-items: center;
`;

const Weather = styled.Text`
    margin-bottom: 16px;
    font-size: 24px;
    font-weight: bold;
`;

const Temperature = styled.Text`
    font-size: 16px;
`;

interface Props { }

const API_KEY = '73bd07d674cc4569f650bad6f22dc79d';

interface IWeather {
    temperature?: number;
    weather?: undefined;
    isLoading: boolean;
}

const WeatherView = ({ }: Props) => {

    const [weatherInfo, setWeatherInfo] = useState<IWeather>({
        temperature: undefined,
        weather: undefined,
        isLoading: false,
    });

    const getCurrentWeather = () => {
        console.log('getCurrentWeather')

        setWeatherInfo({
            isLoading: false,
        });

        Geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;

                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
                    .then((response) => response.json())
                    .then((json) => {
                        setWeatherInfo({
                            temperature: json.main.temp,
                            weather: json.weather[0].main,
                            isLoading: true,
                        })
                    })
                    .catch((error) => {
                        setWeatherInfo({
                            isLoading: false,
                        })
                        showError('?????? ????????? ??????????????? ???????????????.');
                    })
            },
            error => {
                setWeatherInfo({
                    isLoading: false,
                })
                
                showError('?????? ????????? ??????????????? ???????????????.');
            }
        )
    }

    const showError = (message: string): void => {
        setTimeout(() => {
            Alert.alert(message);
        }, 500)
    }

    useEffect(() => {
        getCurrentWeather();

    }, [])

    let data = [];
    const { isLoading, weather, temperature } = weatherInfo;
    if (weather && temperature) {
        data.push(weatherInfo);
    }

    return (
        <Container>
            <WeatherContainer
                onRefresh={() => getCurrentWeather()}
                refreshing={!isLoading}
                data={data}
                keyExtractor={(item, index) => {
                    return `Weather-${index}`;
                }}
                ListEmptyComponent={
                    <LoadingView>
                        <Loading size="large" color="#1976D2" />
                        <LoadingLabel>Loading...</LoadingLabel>
                    </LoadingView>
                }
                renderItem={({ item, index }) => (
                    <WeatherItemContainer>
                        <Weather>{(item as IWeather).weather}</Weather>
                        <Temperature>{ (item as IWeather).temperature} C</Temperature>
                    </WeatherItemContainer>
                )}
                contentContainerStyle={{ flex: 1}}
            />
        </Container>
    )
}

export default WeatherView
