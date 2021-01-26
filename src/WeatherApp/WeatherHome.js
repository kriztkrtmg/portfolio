import React, { useEffect, useState } from 'react';
import './weather.css';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { CircularProgress } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import ResultBody from './ResultBody';
import WeatherAPI  from './weatherAPI'

function WeatherHome({ theme, mode }) {

    const [city, setCity] = useState("Kathmandu");
    const [weatherData, setWeatherData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getWeatherData();
    },[]);

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
        if (event.keyCode === 13) {
            event.preventDefault();
            handlebutton();
        }
    }
    return (
        <div>
            <Grid container className={`weather ${mode && "weather_mode"}`}>
                <Grid item xs={12} sm={4} className={`weather_details ${mode && "weather_details_mode"}`}>
                    <Typography variant="h4" gutterBottom>Projects</Typography> 
                    <div className="weather_paragraph">
                        <Typography variant="h5" gutterBottom>
                            Weather App
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            This is the weather app that gives the information about current weather of major cities of the world.
                            The default city is Kathmandu. User can input the city name in the input text field
                            and can get the current weather data.
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={12} sm={8} className={`weather_data ${mode && "weather_data_mode"}`}>
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
                                <ResultBody data={weatherData} mode={mode} />
                            </div>
                        }
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default WeatherHome;
