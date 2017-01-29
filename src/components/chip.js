import React from 'react';
import Chip from 'material-ui/Chip';

/**
 * An example of rendering multiple Chips from an array of values. Deleting a chip removes it from the array.
 * Note that since no `onTouchTap` property is defined, the Chip can be focused, but does not gain depth
 * while clicked or touched.
 */

export default class ChipExampleArray extends React.Component {

  constructor(props) {
    super(props);
    var data=getWhoNames(this.props.names,this.props.webNames)
    this.state = {chipData: data}

    this.styles = {
      chip: {
        margin: 4,

      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    };
  }

  handleRequestDelete = (key) => {
    if (key === 3) {
      alert('Why would you want to delete React?! :)');
      return;
    }

    this.chipData = this.state.chipData;
    const chipToDelete = this.chipData.map((chip) => chip.key).indexOf(key);
    this.chipData.splice(chipToDelete, 1);
    this.setState({chipData: this.chipData});
  };

  renderChip(data) {
    //console.log('555555555');
    //1console.log(data);
  //  console.log(this);
    var color= 'Grey'
    if(data.status==0){
      color ='Green'
    }else if (data.status==2) {
      color ='Red'
    }

    return (
      <Chip
        key={data.id}
        backgroundColor	={color}
        onRequestDelete={() => this.handleRequestDelete(data.key)}
        labelStyle={{
            fontSize: '20px'
        }}
        style={this.styles.chip}
      >
        {data.name + ' ' + data.lastName}
      </Chip>
    );
  }

  render() {
    return (
      <div style={this.styles.wrapper}>
        {this.state.chipData.map(this.renderChip, this)}
      </div>
    );
  }
}
function getWhoNames (names,webNames){
//console.log(names[0]);
//console.log('###########');
//console.log(names);
  var x=names[0]
  var y=webNames[0]
  //console.log(y);
  var namesArray=[]

  for (var name in x)
  {
    var user={
      "name":x[name].name,
      "lastName":x[name].lastName,
      "status":x[name].status,
      "id":x[name].phoneNumber
    }

    namesArray.push(user)

  }
  for (var name in y)
  {
    var user={
      "name":y[name].name,
      "lastName":'',
      "status":y[name].status,
      "id":name
    }

    namesArray.push(user)

  }

  namesArray=namesArray.sort((a,b)=>{
    return parseFloat(a.status) - parseFloat(b.status);
  })
  return namesArray
}
