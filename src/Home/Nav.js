import React, {useState, useEffect} from 'react';
import './nav.css';
import { FormControlLabel, Switch } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';



function Nav({ handleChange, mode, theme }) {

  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    }
  }, [])

  return (
    <div className={mode ? `nav ${show && "nav_show_dark"}` : `nav ${show && "nav_show_light"}`}>
      
      <ThemeProvider theme={theme}>
          <h1 className="title">Portfolio</h1>
        
        {/*
          { show ? 
          <div className="nav_menu">
            <button className={`nav_btn ${mode && "nav_btn_mode"}`}>Button1</button>
            <button className={`nav_btn ${mode && "nav_btn_mode"}`}>Button2</button>
            <button className={`nav_btn ${mode && "nav_btn_mode"}`}>Button3</button>
            </div>  
            : ""
          } 
        */}
        
        
        
          <FormControlLabel className={`selectmode ${mode && "selectmode_mode"}`}
            control={
              <Switch
                checked={mode}
                onChange={handleChange}
              />
            }
            label={mode ? 'Dark' : 'Light'}
          />
        </ThemeProvider>

    </div>
  )
}

export default Nav
