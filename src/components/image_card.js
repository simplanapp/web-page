import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const ImageCard = (event) => (

  <Card>

    <CardMedia
      overlay={<CardTitle title={event.eventInfo.name} titleStyle={{fontSize: 50}} />}
    >
      <img src={event.eventInfo.photoUrl}/>
    </CardMedia>

  
  </Card>
);

export default ImageCard;
