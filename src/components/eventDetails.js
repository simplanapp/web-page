
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
import Places from './places'
import DownloadButton from './download_button'
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
   var places=[event.where]
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
var cantGo=((event.numOfInvited)+(event.webCounter)-(event.maybeCounter)-(event.goingCounter))|| 0
const icon = ['https://firebasestorage.googleapis.com/v0/b/simplan-alpha.appspot.com/o/icons%2Faplicativos_smal_40.png?alt=media&token=5ccd8005-c4d9-489f-bf79-4eeea9a18bbb','https://firebasestorage.googleapis.com/v0/b/simplan-alpha.appspot.com/o/icons%2Fdelete_40.png?alt=media&token=e0a85cdf-f777-4095-b398-0d261a75a98b',
'https://firebasestorage.googleapis.com/v0/b/simplan-alpha.appspot.com/o/icons%2Fquestion-mark40.png?alt=media&token=bbf6964b-9629-41fe-b73c-304f2a097bb6']
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
     subtitleStyle={{ fontSize:35 ,marginLeft:80,
      padding: 2}}
     titleStyle={{
       fontSize:  60,
       padding: 10,
       marginLeft:80,

     }}
     showExpandableButton={true}
   ><img src='https://firebasestorage.googleapis.com/v0/b/simplan-alpha.appspot.com/o/icons%2FIcon-2.png?alt=media&token=d3e58a4f-8a66-4494-93be-56ee6389045b' style={{left:'10px',top:'20%',position:'absolute',width:80,height:80}}/> </CardHeader>

   <CardText expandable={true} style={{fontSize:35, width:'100%'}}>
     <Places names={places}/>
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
      marginLeft:80,
    padding: 2}}
    titleStyle={{
      fontSize:  50,
      padding: 10,marginLeft:80,
    }}
  >
  <img src='https://firebasestorage.googleapis.com/v0/b/simplan-alpha.appspot.com/o/icons%2Ficon1.png?alt=media&token=95ead114-a4a2-44c3-b7c6-a3c085eacbfb' style={{left:'10px',top:'20%',position:'absolute',width:70,height:70}}/>
  </CardHeader>

  <CardText expandable={true} style={{fontSize:35}}>
   There are more options download the app to choose what works out for you
  </CardText>
 </Card>
</MuiThemeProvider>

  <MuiThemeProvider>
    <Card>
      <CardHeader>

        <div className="mom">
<div className="child">
  <div className="childinner"> <img src={icon[0]}/>Going<br />{event.goingCounter}</div>
</div>
<div className="child">
  <div className="childinner"> <img src={icon[2]}/>Maybe<br />{event.maybeCounter}</div>
</div>
<div className="child">
  <div className="childinner"><img src={icon[1]}/>Can't Go<br />{cantGo}</div>
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

          <div className='inline' >
          <DownloadButton  url={url}/>
        {/* <GoingButton eventId={this.props.params.id}  url={url}/> */}
        </div>


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
