import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const CircularProgressExampleSimple = () => (
  <div>
    <MuiThemeProvider>
       <CircularProgress size={500} thickness={10} style={{margin:"auto",left:"25%",top:500}}/>
     </MuiThemeProvider>


  </div>
);

export default CircularProgressExampleSimple;
