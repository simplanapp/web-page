import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const CircularProgressExampleSimple = () => (
  <div>
    <MuiThemeProvider>
       <CircularProgress />
     </MuiThemeProvider>

       <MuiThemeProvider>
      <CircularProgress size={60} thickness={7} />
      </MuiThemeProvider>

      <MuiThemeProvider>
      <CircularProgress size={80} thickness={5} />
     </MuiThemeProvider>


  </div>
);

export default CircularProgressExampleSimple;
