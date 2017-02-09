import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextFieldExampleError from './name_text_field';
import GetApp from 'material-ui/svg-icons/action/get-app';
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
  // primary: 'true',
  // border: '2px solid #ff980',
  backgroundColor: '#69F0AE',
  labelColor: 'Black',
  padding : 15,
  borderRadius: "40px"

  // labelColor: '#ffffff',
  }

export default class GoingButton extends React.Component {
  componentDidMount () {
    console.log("777777777777777777777777777777777");
  window.scrollTo(0, '75%');
  }
  constructor(props){
    super(props);
    this.state = {
        open: false,
        name: '',
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

        axios.get(`https://blooming-savannah-34852.herokuapp.com/websubmit?name=${this.state.name}&eventId=${this.props.eventId}&status=0`).then((response)=>{
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
        labelStyle={{
          fontSize: '35px'

        }}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="GOING"
        disabled={!this.state.name}
        labelStyle={{
          fontSize: '35px'

        }}
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleSubmit}
      />,
      //   <a href={this.props.url}>
      //   <img className='icon2'
      //     src='https://firebasestorage.googleapis.com/v0/b/simplan-alpha.appspot.com/o/icons%2FdownloadappB.PNG?alt=media&token=d528546d-0aef-46f7-b20a-eb7b45e55f81'
      //      style={{width: "50%", textAlign:"right"}}
      //    />
      //  </a>,
    ];
    //console.log(this.props);
    console.log(this);

    console.log('5555555555555');
    return (
          <div>
          <MuiThemeProvider>
        <RaisedButton primary={true} label="going" fullWidth={true} onTouchTap={this.handleOpen} labelStyle={{fontSize: 40,
        padding: 20, color: 'Black', fontFamily: 'Handlee'}} style={styles} buttonStyle={styles} />
      </MuiThemeProvider>
        <MuiThemeProvider>

        <Dialog
          actions={actions}
          style={{

            boxSizing: 'inherit'
          }}
          contentStyle={{

            boxSizing: 'inherit',
            size: 'large'
          }}
          bodyClassName='bodyc'
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoDetectWindowHeight={false}
          title={<div> <a href= {this.props.url} style={{color:'Black', border:'3px',marginTop:100 ,borderStyle: 'outset',borderRadius: '25px', padding:25,paddingBottom:50, width:"100%",backgroundColor: 'rgba(0, 176, 163, 0.5)' ,fontFamily:'Quicksand'}}>  Download App  </a>
          <br/><GetApp style={{ width:"50px",
    height: '50px', marginTop:20, position:"relative"}} /></div>}
          titleStyle={{
            textAlign:"center",
            fontSize: 75,
            margin: 20,
            padding: 60,
            paddingTop: 130,
            marginTop: 45,



          }}
        >
          <div className="download-link" ><h1> or </h1>  if you are lazy?? </div>
          <TextFieldExampleError handleChange={this.handleChangedName} ref = "nameRef"/>
        </Dialog>
      </MuiThemeProvider>
    </div>
    );
  }
}
