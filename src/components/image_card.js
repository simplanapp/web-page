import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const ImageCard = (event) => (

  <Card>

    <CardMedia
      overlay={<CardTitle title={event.eventInfo.name} titleStyle={{fontSize: 50, padding:7}} >
        <a href={event.url}>
          <img className='icon' src='https://firebasestorage.googleapis.com/v0/b/simplan-alpha.appspot.com/o/icons%2Flogo-App_store_Google_play1.png?alt=media&token=cd34ccb3-6d76-4c96-b05d-0bde3e92e05c' style={{width: "50%", textAlign:"right"}}/>
        </a>

      </CardTitle> }
    >
      <img src={event.eventInfo.photoUrl}/>
    </CardMedia>


  </Card>
);

export default ImageCard;
