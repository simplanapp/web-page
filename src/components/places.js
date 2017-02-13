import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',


  },
  titleStyle: {
    color: 'rgb(255, 255, 255)',
      fontSize: 30,
      fontFamily:'Quicksand',


  },
};

const placesImg= ['https://firebasestorage.googleapis.com/v0/b/simplan-alpha.appspot.com/o/defPlacesPhotos%2Fbar-1.jpg?alt=media&token=6d2482a8-2897-42ad-9480-c5067bf17e6c',
'https://firebasestorage.googleapis.com/v0/b/simplan-alpha.appspot.com/o/defPlacesPhotos%2Fimages%20(2).jpg?alt=media&token=e030dd35-fe81-4571-94dd-195a040fce27',
'https://firebasestorage.googleapis.com/v0/b/simplan-alpha.appspot.com/o/defPlacesPhotos%2Fimages.jpg?alt=media&token=046f21ee-a929-44a6-b352-2c5368c83091'

];
function buildV(number){
  return (
    <div style={{
      fontFamily:'Quicksand',
      color: 'White',
      fontsize: 10

    }}>
      votes:{number}
    </div>
  )
}
function getPlaces (places){
//console.log(names[0]);
console.log('###########++++++');
console.log(places);
  var x=places.names[0]

  var namesArray=[]

  for (var name in x)
  {
    var place={
      "name":x[name].name,
      "votes":x[name].numOfVotes,
      "id":name,
      "photo":x[name].photoUrl || '',
    }
    if((place.photo=='')||(place.photo=='default')||(place.photo=='defaultForOwnPlace') ){
         var i = Math.floor(Math.random() * 3);
         place.photo=placesImg[i];
    }

    namesArray.push(place)

  }
  return namesArray
}

/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */
const GridListExampleSingleLine = (names) => {
   const data=getPlaces(names)
    const tilesData = data;
  return(
  <div style={styles.root}>
    <GridList style={styles.gridList} cols={2.2} cellHeight={200}>
      {tilesData.map((tile) => (
        <GridTile
          style={{margin:10}}
          key={tile.id}
          title={tile.name}

          subtitle={<span>votes: <b>{tile.votes}</b></span>}
            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          //  {<iconButton>{buildV(tile.votes)}</iconButton>}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.5) 70%,rgba(0,0,0,0.3) 100%)"
        >
          <img className='place-image' src={tile.photo} />
        </GridTile>
      ))}
    </GridList>
  </div>
)};

export default GridListExampleSingleLine;
