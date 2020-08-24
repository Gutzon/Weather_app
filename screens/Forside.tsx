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
    var: 0,
    currentweather: {
      "daily": [
        {
          "dt": 0,
          "sunrise": 0,
          "sunset": 0,
          "temp": {
            "day": 0,
            "min": 0,
            "max": 0,
            "night": 0,
            "eve": 0,
            "morn": 0
          },
          "feels_like": {
            "day": 0,
            "night": 0,
            "eve": 0,
            "morn": 0
          },
          "pressure": 0,
          "humidity": 0,
          "dew_point": 0,
          "wind_speed": 0,
          "wind_deg": 0,
          "weather": [
            {
              "id": 0,
              "main": "Null",
              "description": "Null",
              "icon": "Null"
            }
          ],
          "clouds": 0,
          "pop": 0,
          "rain": 0,
          "uvi": 3
        },
        {
          "dt": 0,
          "sunrise": 0,
          "sunset": 0,
          "temp": {
            "day": 0,
            "min": 0,
            "max": 0,
            "night": 0,
            "eve": 0,
            "morn": 0
          },
          "feels_like": {
            "day": 0,
            "night": 0,
            "eve": 0,
            "morn": 0
          },
          "pressure": 0,
          "humidity": 0,
          "dew_point": 0,
          "wind_speed": 0,
          "wind_deg": 0,
          "weather": [
            {
              "id": 0,
              "main": "Null",
              "description": "Null",
              "icon": "Null"
            }
          ],
          "clouds": 0,
          "pop": 0,
          "rain": 0,
          "uvi": 3
        },
        {
          "dt": 0,
          "sunrise": 0,
          "sunset": 0,
          "temp": {
            "day": 0,
            "min": 0,
            "max": 0,
            "night": 0,
            "eve": 0,
            "morn": 0
          },
          "feels_like": {
            "day": 0,
            "night": 0,
            "eve": 0,
            "morn": 0
          },
          "pressure": 0,
          "humidity": 0,
          "dew_point": 0,
          "wind_speed": 0,
          "wind_deg": 0,
          "weather": [
            {
              "id": 0,
              "main": "Null",
              "description": "Null",
              "icon": "Null"
            }
          ],
          "clouds": 0,
          "pop": 0,
          "rain": 0,
          "uvi": 3
        },
        {
          "dt": 0,
          "sunrise": 0,
          "sunset": 0,
          "temp": {
            "day": 0,
            "min": 0,
            "max": 0,
            "night": 0,
            "eve": 0,
            "morn": 0
          },
          "feels_like": {
            "day": 0,
            "night": 0,
            "eve": 0,
            "morn": 0
          },
          "pressure": 0,
          "humidity": 0,
          "dew_point": 0,
          "wind_speed": 0,
          "wind_deg": 0,
          "weather": [
            {
              "id": 0,
              "main": "Null",
              "description": "Null",
              "icon": "Null"
            }
          ],
          "clouds": 0,
          "pop": 0,
          "rain": 0,
          "uvi": 3
        },
        {
          "dt": 0,
          "sunrise": 0,
          "sunset": 0,
          "temp": {
            "day": 0,
            "min": 0,
            "max": 0,
            "night": 0,
            "eve": 0,
            "morn": 0
          },
          "feels_like": {
            "day": 0,
            "night": 0,
            "eve": 0,
            "morn": 0
          },
          "pressure": 0,
          "humidity": 0,
          "dew_point": 0,
          "wind_speed": 0,
          "wind_deg": 0,
          "weather": [
            {
              "id": 0,
              "main": "Null",
              "description": "Null",
              "icon": "Null"
            }
          ],
          "clouds": 0,
          "pop": 0,
          "rain": 0,
          "uvi": 3
        },
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
          currentweather: json,
        })
        console.log(json);
      });
  }
  render() {

    return (
      <View>
        <View style={styles.fivedays}>
          <View style={styles.day1}>
            <Text>DateTime:</Text>
            <Text>{this.state.currentweather.daily[0].dt}</Text>
            <Text>  </Text>
            <Text>Temp:
            </Text><Text>{this.state.currentweather.daily[0].temp.day}°C</Text>
            <Text> </Text>
            <Text>Weather:
            </Text><Text>{this.state.currentweather.daily[0].weather[0].main} - {this.state.currentweather.daily[0].weather[0].description}</Text>
            <Text> </Text>
            <Text>Sunrise: {(2 + (this.state.currentweather.daily[0].sunrise - this.state.currentweather.daily[0].dt) / 60 / 60 + 10).toFixed(0)}:{((((this.state.currentweather.daily[0].sunrise - this.state.currentweather.daily[0].dt) / 60 / 60 + 10) - (((this.state.currentweather.daily[0].sunrise - this.state.currentweather.daily[0].dt) / 60 / 60 + 10).toFixed(0))) * 60).toFixed(0)}</Text>
            <Text>Sunset:  {(2 + (this.state.currentweather.daily[0].sunset - this.state.currentweather.daily[0].dt) / 60 / 60 + 10).toFixed(0)}:{((1 + (((this.state.currentweather.daily[0].sunset - this.state.currentweather.daily[0].dt) / 60 / 60)) - (((this.state.currentweather.daily[0].sunset - this.state.currentweather.daily[0].dt) / 60 / 60).toFixed(0))) * 60).toFixed(0)}</Text>
          </View>
          <View style={styles.day1}>
            <Text>DateTime:</Text>
            <Text>{this.state.currentweather.daily[1].dt}</Text>
            <Text>  </Text>
            <Text>Temp:
            </Text><Text>{this.state.currentweather.daily[1].temp.day}°C</Text>
            <Text> </Text>
            <Text>Weather:
            </Text><Text>{this.state.currentweather.daily[1].weather[0].main} - {this.state.currentweather.daily[1].weather[0].description}</Text>
            <Text> </Text>
            <Text>Sunrise: {(2 + (this.state.currentweather.daily[1].sunrise - this.state.currentweather.daily[1].dt) / 60 / 60 + 10).toFixed(0)}:{((((this.state.currentweather.daily[1].sunrise - this.state.currentweather.daily[1].dt) / 60 / 60 + 10) - (((this.state.currentweather.daily[1].sunrise - this.state.currentweather.daily[1].dt) / 60 / 60 + 10).toFixed(0))) * 60).toFixed(0)}</Text>
            <Text>Sunset:  {(2 + (this.state.currentweather.daily[1].sunset - this.state.currentweather.daily[1].dt) / 60 / 60 + 10).toFixed(0)}:{((1 + (((this.state.currentweather.daily[1].sunset - this.state.currentweather.daily[1].dt) / 60 / 60)) - (((this.state.currentweather.daily[1].sunset - this.state.currentweather.daily[1].dt) / 60 / 60).toFixed(0))) * 60).toFixed(0)}</Text>

          </View>
          <View style={styles.day1}>
            <Text>DateTime:</Text>
            <Text>{this.state.currentweather.daily[2].dt}</Text>
            <Text>  </Text>
            <Text>Temp:
            </Text><Text>{this.state.currentweather.daily[2].temp.day}°C</Text>
            <Text> </Text>
            <Text>Weather:
            </Text><Text>{this.state.currentweather.daily[2].weather[0].main} - {this.state.currentweather.daily[2].weather[0].description}</Text>
            <Text> </Text>
            <Text>Sunrise: {(2 + (this.state.currentweather.daily[2].sunrise - this.state.currentweather.daily[2].dt) / 60 / 60 + 10).toFixed(0)}:{((((this.state.currentweather.daily[2].sunrise - this.state.currentweather.daily[2].dt) / 60 / 60 + 10) - (((this.state.currentweather.daily[2].sunrise - this.state.currentweather.daily[2].dt) / 60 / 60 + 10).toFixed(0))) * 60).toFixed(0)}</Text>
            <Text>Sunset:  {(2 + (this.state.currentweather.daily[2].sunset - this.state.currentweather.daily[2].dt) / 60 / 60 + 10).toFixed(0)}:{((1 + (((this.state.currentweather.daily[2].sunset - this.state.currentweather.daily[2].dt) / 60 / 60)) - (((this.state.currentweather.daily[2].sunset - this.state.currentweather.daily[2].dt) / 60 / 60).toFixed(0))) * 60).toFixed(0)}</Text>

          </View>
          <View style={styles.day1}>
            <Text>DateTime:</Text>
            <Text>{this.state.currentweather.daily[3].dt}</Text>
            <Text>  </Text>
            <Text>Temp:
            </Text><Text>{this.state.currentweather.daily[3].temp.day}°C</Text>
            <Text> </Text>
            <Text>Weather:
            </Text><Text>{this.state.currentweather.daily[3].weather[0].main} - {this.state.currentweather.daily[3].weather[0].description}</Text>
            <Text> </Text>
            <Text>Sunrise: {(2 + (this.state.currentweather.daily[3].sunrise - this.state.currentweather.daily[3].dt) / 60 / 60 + 10).toFixed(0)}:{((((this.state.currentweather.daily[3].sunrise - this.state.currentweather.daily[3].dt) / 60 / 60 + 10) - (((this.state.currentweather.daily[3].sunrise - this.state.currentweather.daily[3].dt) / 60 / 60 + 10).toFixed(0))) * 60).toFixed(0)}</Text>
            <Text>Sunset:  {(2 + (this.state.currentweather.daily[3].sunset - this.state.currentweather.daily[3].dt) / 60 / 60 + 10).toFixed(0)}:{((1 + (((this.state.currentweather.daily[3].sunset - this.state.currentweather.daily[3].dt) / 60 / 60)) - (((this.state.currentweather.daily[3].sunset - this.state.currentweather.daily[3].dt) / 60 / 60).toFixed(0))) * 60).toFixed(0)}</Text>

          </View>
          <View style={styles.day1}>
            <Text>DateTime:</Text>
            <Text>{this.state.currentweather.daily[4].dt}</Text>
            <Text>  </Text>
            <Text>Temp:
            </Text><Text>{this.state.currentweather.daily[4].temp.day}°C</Text>
            <Text> </Text>
            <Text>Weather:
            </Text><Text>{this.state.currentweather.daily[4].weather[0].main} - {this.state.currentweather.daily[4].weather[0].description}</Text>
            <Text> </Text>
            <Text>Sunrise: {(2 + (this.state.currentweather.daily[4].sunrise - this.state.currentweather.daily[4].dt) / 60 / 60 + 10).toFixed(0)}:{((((this.state.currentweather.daily[4].sunrise - this.state.currentweather.daily[4].dt) / 60 / 60 + 10) - (((this.state.currentweather.daily[4].sunrise - this.state.currentweather.daily[4].dt) / 60 / 60 + 10).toFixed(0))) * 60).toFixed(0)}</Text>
            <Text>Sunset:  {(2 + (this.state.currentweather.daily[4].sunset - this.state.currentweather.daily[4].dt) / 60 / 60 + 10).toFixed(0)}:{((1 + (((this.state.currentweather.daily[4].sunset - this.state.currentweather.daily[4].dt) / 60 / 60)) - (((this.state.currentweather.daily[4].sunset - this.state.currentweather.daily[4].dt) / 60 / 60).toFixed(0))) * 60).toFixed(0)}</Text>

          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  test: {
    position: 'absolute',
    textAlign: 'center',
    width: '20%',
    left: '0%',
    top: 0,
  },
  test2: {
    position: 'absolute',
    textAlign: 'center',
    width: '20%',
    left: '20%',
    top: 0,
  },
  fivedays: {
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
  },
  day1: {
    width: "20%",
    borderColor: "black",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
  day2: {

  },
  day3: {

  },
  day4: {

  },
  day5: {

  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
