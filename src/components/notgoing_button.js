import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextFieldExampleError from './name_text_field';
import axios from 'axios';
// import ReactDOM from 'react-dom';
/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
 var querystring = require('querystring');

 var instance = axios.create({
   baseURL: 'https://blooming-savannah-34852.herokuapp.com/websubmit',
   timeout: 1000,
   headers: {'Access-Control-Allow-Origin': '*'}
 });

 const styles = {

  color: '#26155E',
  labelColor: '#ffffff',

  // border: '2px solid #ff980',
  backgroundColor: '#7f0000',
  padding: 15

  }

export default class GoingButton extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        open: false,
        name: ''
      }
      this.handleChangedName = this.handleChangedName.bind(this);
    }

  //
  // state = {
  //   open: false,
  //   name: ''
  // };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };
  handleChangedName = (event) => {
    this.setState({name: event.target.value});
    console.log(this.state);
  }
  handleSubmit = () =>{

        axios.get(`https://blooming-savannah-34852.herokuapp.com/websubmit?name=${this.state.name}&eventId=${this.props.eventId}&status=2`).then((response)=>{
          console.log(response);
        });

// axios.post('https://blooming-savannah-34852.herokuapp.com/websubmit',
//     querystring.stringify({
//       name: this.state.name,
//       eventId: this.props.eventId,
//       status: 0
//     }), {
//       headers: {
//         "Content-Type": "application/json"
//       }
//     });








      this.setState({open: false});
    }
  render() {



    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
        labelStyle={{
          fontSize: '35px'

        }}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleSubmit}
        labelStyle={{
          fontSize: '35px'

        }}
      />,
      <a href={this.props.url}>
        <img className='icon2'
        src='https://firebasestorage.googleapis.com/v0/b/simplan-alpha.appspot.com/o/icons%2Flogo-App_store_Google_play1.png?alt=media&token=cd34ccb3-6d76-4c96-b05d-0bde3e92e05c'
         style={{width: "50%", textAlign:"right"}}
       />
     </a>,

    ];
    //console.log(this.props);
    return (
          <div>
          <MuiThemeProvider>
        <RaisedButton primary={true} label="CAN'T GO" fullWidth={true} onTouchTap={this.handleOpen} style={styles} labelStyle={{fontSize: 40,
        padding: 15}} buttonStyle={styles} />
      </MuiThemeProvider>
        <MuiThemeProvider>

        <Dialog

          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          style={{
            width: "95%",
            padding: 10,
            boxSizing: 'inherit',
          }}
          contentStyle={{

            boxSizing: 'inherit',
            size: 'large'
          }}
            bodyClassName='bodyc'
        >

          <TextFieldExampleError handleChange={this.handleChangedName} ref = "nameRef"/>
        </Dialog>
      </MuiThemeProvider>
    </div>
    );
  }
}
