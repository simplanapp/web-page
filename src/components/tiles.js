import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
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
    color: 'White',
    backgroundColor: false,
    textAlign: 'center',
    fontSize: 20
  },
};

const monkeys=['https://firebasestorage.googleapis.com/v0/b/simplan-alpha.appspot.com/o/usersPhone%2FMonkeys%2Fmonkey1.png?alt=media&token=46374e06-1e59-410f-adde-7906c6e25fa2',
'https://firebasestorage.googleapis.com/v0/b/simplan-alpha.appspot.com/o/usersPhone%2FMonkeys%2Fmonkey2.png?alt=media&token=0781a8b7-caab-4f6e-a8df-0c7a3cb90feb',
'https://firebasestorage.googleapis.com/v0/b/simplan-alpha.appspot.com/o/usersPhone%2FMonkeys%2Fmonkey3.png?alt=media&token=fd76afb1-3be9-4571-8a2f-28b4c0d51c26',
'https://firebasestorage.googleapis.com/v0/b/simplan-alpha.appspot.com/o/usersPhone%2FMonkeys%2Fmonkey4.png?alt=media&token=d91e4dd6-e013-4a2a-8eda-bde6526024f1',
'https://firebasestorage.googleapis.com/v0/b/simplan-alpha.appspot.com/o/usersPhone%2FMonkeys%2Fmonkey5.png?alt=media&token=66f1ba9b-de95-45ee-ad94-f8ee8daf25cc'
]
/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */
 function getWhoNames (names,webNames){
 //console.log(names[0]);
 console.log('###########');
 console.log(names.names);
   var x=names.names[0]
   var y=names.webNames[0]
   console.log(y);
   var namesArray=[]

   for (var name in x)
   {
     var user={
       "name":x[name].name,
       "lastName":x[name].lastName,
       "status":x[name].status,
       "id":x[name].phoneNumber,
       "photo":x[name].photoUrl || '',
     }
     if((user.photo=='')||(user.photo=='default') ){
          var i = Math.floor(Math.random() * 5);
          user.photo=monkeys[i];
     }
     console.log(user);
     namesArray.push(user)

   }
   for (var name in y)
   {
     var i = Math.floor(Math.random() * 5);
     var user={
       "name":y[name].name,
       "lastName":'',
       "status":y[name].status,
       "id": name,
       "photo":monkeys[i] || ''
     }

     namesArray.push(user)

   }

   namesArray=namesArray.sort((a,b)=>{
     return parseFloat(a.status) - parseFloat(b.status);
   })
   return namesArray
 }

const GridListExampleSingleLine = (names,webNames) => {
  console.log(names,webNames);
   var data=getWhoNames(names,webNames)
   const tilesData = data;
const imageColor=['#A5D6A7','#E0E0E0','#E57373','#E0E0E0','#E0E0E0'];




return(

  <div style={styles.root}>
    <GridList style={styles.gridList} cols={2.2}>
      {tilesData.map((tile) => (

        <GridTile
          key={tile.id}
          title={tile.name}
          titleBackground={imageColor[tile.status]}
          titleStyle={styles.titleStyle}

          //titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          {/* {

            if(tile.status==0){imageColor='#A5D6A7'}
            else if (tile.status==0) {imageColor='#E57373'
            }
          } */}
          {/* <Avatar
            color={"Orange"}
            backgroundColor={"purple500"}
            size={30}
>
            {tile.name}
          </Avatar> */}
          <div style={{backgroundColor: imageColor[tile.status]
        }} >
             <img  className="img-circle" src={tile.photo} />
          </div>

        </GridTile>
      ))}
    </GridList>
  </div>
)};

export default GridListExampleSingleLine;
