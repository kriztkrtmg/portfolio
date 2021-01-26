import { Typography } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import './resultBox.css';

function ResultBody({ data, mode }) {
    
    const [myTime, setmyTime] = useState();
    

    useEffect(() => {
        const interval = setInterval(() => {
            setmyTime(new Date().toUTCString());
            
        }, 50)
        return () => {
            clearInterval(interval);
        }
    }, [])
    
    /*
    const [dynamicTime, setDynamicTime] = useState();
    const dynamicTimeFunction = () => {
        let secondOffset = data.timezone; //20700 seconds

        let hour = Math.floor(secondOffset / 3600); //5 hour
        let minute = Math.floor(secondOffset % 3600 / 60); //45 minute
        let second = Math.floor(secondOffset % 3600 % 60); //0 second

        let UTCsecond = new Date().getUTCSeconds();
        let UTCminute = new Date().getUTCMinutes();
        let UTChour = new Date().getUTCHours();

        let newSecond = second + UTCsecond;
        let newMinute = minute + UTCminute;
        let newHour = hour + UTChour;


        


    }

    */
    return (
        <React.Fragment>
            <div className={`result_box ${mode && "result_box_mode"}`}>
                    <div>
                    <Typography variant="subtitle1">{myTime}, {data.timezone}</Typography>
                    <Typography variant="h5" style={{ fontWeight: 700 }}>{data.name}, {data.sys.country}</Typography> 
                    </div>  
                    <div>
                        <Typography variant="h4" style={{ paddingLeft: 20, paddingTop: 20, margin: 10 }}>{data.main.temp}°C</Typography>
                        <Typography variant="h6" style={{ paddingTop: 20, fontWeight: 700 }}>
                            Feels like {data.main.feels_like}°C, {data.weather[0].description}.
                        </Typography>
                        <div style={{display:'inline-flex'}}>
                            <div>Pressure: {data.main.pressure}hPa</div>
                            <div style={{marginLeft:20}}>Humidity: {data.main.humidity}%</div>
                        </div>
                    </div>
            </div>
        </React.Fragment>
    )
}

export default ResultBody
