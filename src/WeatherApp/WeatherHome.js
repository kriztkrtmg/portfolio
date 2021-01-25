import React from 'react';
import './weather.css';
import Grid from '@material-ui/core/Grid';

function WeatherHome({theme, mode}) {
    return (
        <div>
            <Grid container className={`weather ${mode && "weather_mode"}`}>
                <Grid item xs={12} sm={5}>
                    Retard
                </Grid>
                <Grid item xs={12} sm={7}>
                    Retreat
                </Grid>
            </Grid>
        </div>
    )
}

export default WeatherHome
