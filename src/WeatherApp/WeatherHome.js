import React, { useEffect, useState } from 'react';
import './weather.css';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { CircularProgress, ThemeProvider } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import ResultBody from './ResultBody';
import WeatherAPI  from './weatherAPI'

function WeatherHome({ theme, mode }) {

    const [city, setCity] = useState("Kathmandu");
    const [weatherData, setWeatherData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getWeatherData();
    }, []);

    const getWeatherData = () => {
        WeatherAPI.getCurrentWeatherData(city).then((response) => {
            setWeatherData(response.data);
            setIsLoading(false);
        });
    }
    const handlebutton = (event) => {
        getWeatherData();
    }

    const handleChange = (event) => {
        setCity(event.target.value);
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            getWeatherData();
        }
    }
    return (
        <div>
            <Grid container className={`weather ${mode && "weather_mode"}`}>
                <Grid item xs={12} sm={5} className={`weather_details ${mode && "weather_details_mode"}`}>
                    <Typography variant="h4" gutterBottom>Projects</Typography> 
                    <div className="weather_paragraph">
                        <Typography variant="h5" gutterBottom>
                            Weather App
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            This is the weather app project that gives the correct information about current weather for each
                            point on the globe. The default city is Kathmandu. User can input the city name in the input text field
                            and can get the current weather data.
                            We can signup and request for API_KEY from <a href="https://openweathermap.org/" target="blank">openweathermap</a>.
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={12} sm={7} className={`weather_data ${mode && "weather_data_mode"}`}>
                    <div className="input_search">
                        <form noValidate autoComplete="off">
                           
                                <input className={`input_textfield ${mode && "input_textfield_mode"}`}
                                    placeholder="Weather in your city"
                                    onKeyDown={handleKeyDown}
                                    onChange={handleChange}
                                />
                            
                        </form>
                        <button
                            className={`search_btn ${mode && "search_btn_mode"}`}
                            onClick={handlebutton}><SearchIcon /></button>
                    </div>
                    <div>
                        {isLoading ? <CircularProgress /> :
                            <div>
                                <ResultBody data={weatherData} />
                            </div>
                        }
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default WeatherHome;
