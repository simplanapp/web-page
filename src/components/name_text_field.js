import React from 'react';
import TextField from 'material-ui/TextField';

export default class TextFieldExampleControlled extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
    this.props.handleChange(event);
    //console.log(this.props);
  };

  render() {
    return (
      <div>

        <TextField
          inputStyle={{font: '50px !important' }}
          hintText="Enter Your Name"
          hintStyle={{
            fontSize: '50px',
            height:0,
            bottom: '-75px',
            fontFamily: 'Quicksand',

          }}

          floatingLabelStyle={{
            height: '50%',
              fontSize: '50px',
              fontFamily: 'Raleway',
            }}
          floatingLabelFocusStyle={{
              margin: '2px'
          }}

          errorStyle={{
            margin: '30px',
            fontSize: '20px !important'
          }}
          floatingLabelStyle={{
            fontSize: '50px',
            bottom: '-40px',
            margin: '50px',
            fontFamily: 'Raleway',

          }}
          floatingLabelText="Enter your Name"
          id="text-field-controlled"
          value={this.state.value}
          onChange={this.handleChange }

        />

      </div>
    );
  }
}
