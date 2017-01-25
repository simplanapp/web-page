import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
const styles = {

 color: '#26155E',
 labelColor: '#ffffff',

 // border: '2px solid #ff980',
 backgroundColor: '#7f0000',

 }

export default class DialogExampleSimple extends React.Component {


  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    console.log("ldhaskjbckasjbckajsbckjas");


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
        onTouchTap={this.handleClose}
      />,
    ];

    return (
          <div>
          <MuiThemeProvider>
        <RaisedButton  label="Can't go" primary={true} fullWidth={true} onTouchTap={this.handleOpen} style={styles} buttonStyle={styles} />
      </MuiThemeProvider>
        <MuiThemeProvider>

        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          The actions in this window were passed in as an array of React objects.
        </Dialog>
      </MuiThemeProvider>
    </div>
    );
  }
}
