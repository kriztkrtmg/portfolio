import React from 'react';
import { Card } from '@material-ui/core';

function ResultBody({data}) {
    return (
        <div>
            <Card style={{margin:'auto', width:'50%', backgroundColor: '#f9fafb', borderRadius: 20, }}>
                    <div style={{color: '#12d40f', fontSize: 24, fontWeight : 500}}>
                        {new Date().toDateString()}
                    </div>
                    <div style={{color: '#cc3716', fontWeight : 900, fontSize:32}}>
                        {data.name},{data.sys.country}
                    </div>
                    <div style={{fontSize:48, fontWeight:600, color: '#3f6dd9'}}>
                        {data.main.temp}°C
                    </div>
                    <div style={{fontSize:24, fontWeight:500, display:'flex', justifyContent:'space-around'}}>
                            | Min-temp : {data.main.temp_min}°C |
                            Max-temp : {data.main.temp_max}°C |
                            Humidity: {data.main.humidity}% |
                    </div>
                    <div style={{fontSize:24, fontWeight:500}}>
                    Feels like {data.main.feels_like}°C, {data.weather[0].description}.
                        
                    </div>

                </Card>
        </div>
    )
}

export default ResultBody
