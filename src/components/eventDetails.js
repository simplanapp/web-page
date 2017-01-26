import React, { Component ,PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import DialogExampleSimple from './dialog_button';
import GoingButton from './going_button';
import NotGoingButton from './notgoing_button';
injectTapEventPlugin();
var event ,placeId;


class EventDetails extends Component {
  static contextTypes = {
      router: PropTypes.object
    };
    componentWillMount() {
      console.log("componentWillMount"+ this.props.params.id );
    this.props.fetchEvent(this.props.params.id);
  }
  render() {
    console.log(this.props);
    // const eventD = this.props
    if(!this.props.event.name){
      return <div> loading </div>;
    }
    console.log( this.props);
   event = this.props.event;
   var names=[event.who];
   console.log(names);
   getWhoNames(names)
   placeId = event.curPlaceId;
   var a = new Date(event.currentTime *1000)
   var date = a.toLocaleDateString()
   var hour= a.getHours();
   var min = a.getMinutes();
   if (min <  10) {min='00'}
   var time = hour+":"+min+":00";
   const style = {
  height: 80,
  width: 80,
  margin: 15,
  textAlign: 'center',
  display: 'inline-block',
  backgroundColor: '#6200EA'


};
    return (
        <div className="jumbotron">
          <h1>
            {this.props.event.name}
          </h1>
<MuiThemeProvider >
  <Card className="cardview">
   <CardHeader className = "cardhead"
     title={event.currentPlace}
     subtitle={event.where[placeId].adress}
     actAsExpander={true}
     titleColor = '#512DA8'
     subtitleStyle={{ fontSize:  20}}
     titleStyle={{
       fontSize:  50
     }}
     showExpandableButton={true}
   />

   <CardText expandable={false} >
    יש עוד מקומות אפשריים כנס להצביע
   </CardText>
 </Card>
  </MuiThemeProvider>
  <MuiThemeProvider>
 <Card className="cardview">
  <CardHeader className= "cardhead"
    title={time}
    subtitle={date}
    actAsExpander={true}
    showExpandableButton={true}
    titleColor = '#512DA8'
    subtitleStyle={{ fontSize:  20}}
    titleStyle={{
      fontSize:  50
    }}
  />

  <CardText expandable={false}>
   יש עוד מקומות אפשריים כנס להצביע
  </CardText>
 </Card>
</MuiThemeProvider>

  <MuiThemeProvider>
    <Card>
      <CardHeader>

        <div className="mom">
<div className="child">
  <div className="childinner">going:<br />{event.goingCounter}</div>
</div>
<div className="child">
  <div className="childinner">maybe:<br />{event.maybeCounter}</div>
</div>
<div className="child">
  <div className="childinner">invited:<br />{event.invitedCounter}</div>
</div>

</div>


      </CardHeader>




      </Card>
    </MuiThemeProvider>



          <div className='inline'><GoingButton eventId={this.props.params.id}/></div>
          <div className='inline'><NotGoingButton eventId={this.props.params.id} /></div>
{/* <DialogExampleSimple className='inline'/> */}

        </div>

    );
  }
}
function getWhoNames (names){
  names.map((user)=>{
    console.log(user.name);
  })
}
function mapStateToProps(state) {
  return { event: state.event };
}


export default connect( mapStateToProps, actions)(EventDetails);
