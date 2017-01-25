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
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleSubmit}
      />,
    ];
    //console.log(this.props);
    return (
          <div>
          <MuiThemeProvider>
        <RaisedButton primary={true} label="CAN'T GO" fullWidth={true} onTouchTap={this.handleOpen} style={styles} buttonStyle={styles} />
      </MuiThemeProvider>
        <MuiThemeProvider>

        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >

          <TextFieldExampleError handleChange={this.handleChangedName} ref = "nameRef"/>
        </Dialog>
      </MuiThemeProvider>
    </div>
    );
  }
}