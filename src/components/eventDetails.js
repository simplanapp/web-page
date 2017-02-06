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
import Chip from 'material-ui/Chip';
import ImageCard from './image_card';
import IconButton from './icon_button'
import ChipFriend from './chip'
import Tiles from './tiles'
import {GridList, GridTile} from 'material-ui/GridList';
import queryString from 'query-string';
import Loading from './progress_bar';
injectTapEventPlugin();
var event ,placeId;


class EventDetails extends Component {
  static contextTypes = {
      router: PropTypes.object
    };
    componentWillMount() {
    //console.log("componentWillMount"+ this.props.params.id );
    this.props.fetchEvent(this.props.params.id);
  }
  render() {
    //console.log(this.props);
    // const eventD = this.props
    if(!this.props.event.name){
      return <div><Loading /> </div>;
    }
    //getWhoNames
  //  console.log( this.props);
   event = this.props.event;
   var url=buildUrl( this.props.params.id )
   if((event.photoUrl== '') ||(event.photoUrl=='default')){
     event.photoUrl='https://firebasestorage.googleapis.com/v0/b/simplan-alpha.appspot.com/o/eventPhotos%2Fdefault%2F2014%2B36_Friends_Cast_Poker(1).jpg?alt=media&token=b3793a3e-a6e0-4354-957e-1b772fe9ab96';
     //console.log('*****************************************photo');
   }
   var names=[event.who];
   var webNames=[event.webWho]
   //console.log(names);
   //getWhoNames(names)
   placeId = event.curPlaceId;
   var a = new Date(event.currentTime *1000)
   var weekday = new Array(7);
   weekday[0] =  "Sunday";
   weekday[1] = "Monday";
   weekday[2] = "Tuesday";
   weekday[3] = "Wednesday";
   weekday[4] = "Thursday";
   weekday[5] = "Friday";
   weekday[6] = "Saturday";

   var n = weekday[a.getDay()];
   var date = n+ "   "+ a.getUTCDate()+'/'+(a.getUTCMonth()+1)+'/'+a.getUTCFullYear();
   var hour= a.getHours();
   var min = a.getMinutes();
   if (min <  10) {min='00'}
   var time = hour+":"+min;
   const style = {
  height: 80,
  width: 80,
  margin: 15,
  textAlign: 'center',
  display: 'inline-block',
  backgroundColor: '#6200EA'


};
const icon = ['https://firebasestorage.googleapis.com/v0/b/simplan-alpha.appspot.com/o/icons%2Faplicativos_smal_40.png?alt=media&token=5ccd8005-c4d9-489f-bf79-4eeea9a18bbb','https://firebasestorage.googleapis.com/v0/b/simplan-alpha.appspot.com/o/icons%2Fdelete_40.png?alt=media&token=e0a85cdf-f777-4095-b398-0d261a75a98b']
    return (
        <div className="jumbotron">
      <MuiThemeProvider>
        <ImageCard eventInfo={this.props.event} url={url} />
      </MuiThemeProvider>
<MuiThemeProvider >
  <Card className="cardview">
   <CardHeader className = "cardhead"
     title={event.currentPlace}
     subtitle={event.where[placeId].adress}
     actAsExpander={true}
     titleColor = 'Black'
     subtitleStyle={{ fontSize:  35,
      padding: 2}}
     titleStyle={{
       fontSize:  60,
       padding: 10,

     }}
     showExpandableButton={true}
   />

   <CardText expandable={true} style={{fontSize:35}}>
 יש עוד מקומות!! הורד את האפליקציה כדי להצביע ולהשפיע
    </CardText>
 </Card>
  </MuiThemeProvider>
  <MuiThemeProvider>
 <Card className="cardview">
  <CardHeader className= "cardhead"
    title={date}
    subtitle={time}
    actAsExpander={true}
    showExpandableButton={true}
    titleColor = 'Black'
    subtitleStyle={{ fontSize:  35,
    padding: 2}}
    titleStyle={{
      fontSize:  50,
      padding: 10
    }}
  />

  <CardText expandable={true} style={{fontSize:35}}>
   יש עוד זמנים!! הרד את האפליקציה כדי להצביע ולהשפיע
  </CardText>
 </Card>
</MuiThemeProvider>

  <MuiThemeProvider>
    <Card>
      <CardHeader>

        <div className="mom">
<div className="child">
  <div className="childinner"> <img src={icon[0]}/>going<br />{event.goingCounter}</div>
</div>
<div className="child">
  <div className="childinner">maybe<br />{event.maybeCounter}</div>
</div>
<div className="child">
  <div className="childinner">invited<br />{event.invitedCounter}</div>
</div>

</div>


      </CardHeader>




      </Card>
    </MuiThemeProvider>

    {/* <MuiThemeProvider>
    <Card>
      <CardHeader>
        <ChipFriend names={names} webNames={webNames}/>

          </CardHeader>

    </Card>
    </MuiThemeProvider> */}
    <MuiThemeProvider style={{marginBottom:20}}>
      <Card>
        <CardHeader>
          <Tiles names={names} webNames={webNames} />
        </CardHeader>

      </Card>

    </MuiThemeProvider>
    <MuiThemeProvider style={{marginBottom:20}}>
      <Card>
        <CardHeader>
          <div className='inlinel'><GoingButton eventId={this.props.params.id}  url={url}/></div>
          <div className='inliner'><NotGoingButton eventId={this.props.params.id} url={url}/></div>

        </CardHeader>

      </Card>

    </MuiThemeProvider>
          {/* <div className='inlinel'><GoingButton eventId={this.props.params.id} style={{left:'30px'}} url={url}/></div>
          <div className='inliner'><NotGoingButton eventId={this.props.params.id} style={{right:'30px'}} url={url}/></div> */}
{/* <DialogExampleSimpTle className='inline'/> */}
          <div > "    " </div>


        </div>

    );
  }
}

function mapStateToProps(state) {
  return { event: state.event };
}
function buildUrl(eventId){
//console.log("this is our eventid"+eventId);
var link ='https://blooming-savannah-34852.herokuapp.com/preview?'
 link= link + queryString.stringify({
    id: eventId,
});
var link2=`https://kh6rp.app.goo.gl/?link=${link}&apn=com.simplan&ibi=com.jerem.ProjectAlphaSimplan&isi=1117985242`
var resault = encodeURI(link2);

return resault;

}

export default connect( mapStateToProps, actions)(EventDetails);
