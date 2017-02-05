import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const ImageCard = (event) => (

  <Card>

    <CardMedia
      overlay={<CardTitle title={event.eventInfo.name} titleStyle={{fontSize: 50, padding:7}} >
        <a href={event.url}>
          <img className='icon' src='https://firebasestorage.googleapis.com/v0/b/simplan-alpha.appspot.com/o/icons%2FdownloadappB.PNG?alt=media&token=d528546d-0aef-46f7-b20a-eb7b45e55f81' style={{width: "50%", textAlign:"right"}}/>
        </a>

      </CardTitle> }
    >
      <img src={event.eventInfo.photoUrl}/>
    </CardMedia>


  </Card>
);

export default ImageCard;
