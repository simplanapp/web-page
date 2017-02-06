import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const styles = {

 color: '#26155E',
 // primary: 'true',
 // border: '2px solid #ff980',
 backgroundColor: '#00B0A3',
 labelColor: 'Black',

 borderRadius: "40px",
 alignItems: 'center',
hight: '100%',
textAlign:'center',
padding:20,

 // labelColor: '#ffffff',
 }




const DownloadButton = (url) => (
  <div className='down'>

    <MuiThemeProvider>
      <FlatButton
        href={url.url}
        target="_blank"
        label="DOWNLOAD APP"
        backgroundColor='#00B0A3'

        style={styles}


        secondary={true}

        primary={true}
         labelStyle={{fontSize: 40,
        color: 'Black', fontFamily: 'Handlee',margin:0 , lineHeight:'100%',   }}
      />
    </MuiThemeProvider>

  </div>
);

export default DownloadButton;
