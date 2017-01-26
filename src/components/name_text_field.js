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
          hintText=" "
          hintStyle={{
            fontSize: '50px'
          }}

          floatingLabelStyle={{
            height: '50%',
              fontSize: '50px'
            }}
          floatingLabelFocusStyle={{
              margin: '-30px'
          }}
          errorText="This field is required"
          errorStyle={{
            margin: '30px',
            fontSize: '20px !important'
          }}
          floatingLabelStyle={{
            fontSize: '50px'
          }}
          floatingLabelText="Enter your name"
          id="text-field-controlled"
          value={this.state.value}
          onChange={this.handleChange }
        />
      </div>
    );
  }
}
