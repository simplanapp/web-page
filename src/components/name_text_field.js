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
          hintText="Enter your name"
          errorText="This field is required"
          floatingLabelText="Enter your name"
          id="text-field-controlled"
          value={this.state.value}
          onChange={this.handleChange }
        />
      </div>
    );
  }
}
