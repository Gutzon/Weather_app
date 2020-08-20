import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import { API_KEY } from '../constants/OpenWeatherAPIKEY';


export default class App extends React.Component {
    state = {
        isLoading: false,
        temperature: 0,
        weatherCondition: null,
        error: null,
        weather: {
            "daily": [
                {
                    "temp": {
                        "day": 0,
                    }
                },
                {
                    "temp": {
                        "day": 1,
                    }
                },
                {
                    "temp": {
                        "day": 2,
                    }
                }
            ],
        }
    };

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            position => {
                this.fetchWeather(position.coords.latitude, position.coords.longitude);
            },
            error => {
                this.setState({
                    error: 'Error Gettig Weather Condtions'
                });
            }
        );
    }

    fetchWeather(lat = 25, lon = 25) {
        fetch(
            `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
        )
            .then(res => res.json())
            .then(json => {
                this.setState({
                    weather: json,
                })
                console.log(json);
            });
    }

    render() {
        let { isLoading } = this.state;
        return (
            <View style={styles.container}>
                <Text>{this.state.weather.daily[1].temp.day}</Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});