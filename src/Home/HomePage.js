import '../App.css';
import React, { useState } from 'react';
import Nav from './Nav';
import { createMuiTheme } from '@material-ui/core';
import './homePage.css';
import BodyContainer from './BodyContainer';
import WeatherHome from '../WeatherApp/WeatherHome';


function HomePage() {

  const theme = createMuiTheme({
        palette: {
          primary: {
            main: '#000',
          },
          secondary: {
            main: '#fff',
          },
        },
    });
   
  
    const [mode, setMode] = useState(true);
    

    const handleChange = (event) => {
        setMode(event.target.checked);
      };

  return (
    <div>
      <div className={`first_row ${mode && "first_row_mode"}`}>
          <Nav handleChange={handleChange} mode={mode} theme={theme} />
          <BodyContainer theme={theme} mode={mode} />
          <div className={`content_body_fadeBottom ${mode && "content_body_fadeBottom_mode"}`}></div>
      </div>
      <div>
        <WeatherHome theme={theme} mode={mode}/>
      </div>
    </div>
    )
}

export default HomePage;
