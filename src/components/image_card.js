import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const ImageCard = (event) => (

  <Card>

    <CardMedia
      overlay={<CardTitle title={event.eventInfo.name} titleStyle={{fontSize: 50, padding:7}} >
        <a href={event.url}>
          <img className='icon' src='https://firebasestorage.googleapis.com/v0/b/simplan-alpha.appspot.com/o/icons%2Fdownloadapp.PNG?alt=media&token=27c3d8ab-2271-44b0-a701-d894562cd0e5' style={{width: "50%", textAlign:"right"}}/>
        </a>

      </CardTitle> }
    >
      <img src={event.eventInfo.photoUrl}/>
    </CardMedia>


  </Card>
);

export default ImageCard;
