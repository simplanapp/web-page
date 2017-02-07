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
    width: '100%'

  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',


  },
  titleStyle: {
    color: 'Black',
    backgroundColor: false,
    textAlign: 'center',
    fontSize: 30,
    marginTop: 20,
    fontFamily: 'Quicksand',




  },
};
const icon=['https://firebasestorage.googleapis.com/v0/b/simplan-alpha.appspot.com/o/icons%2Faplicativos_0845_Check.png?alt=media&token=c299db40-42fc-455d-9680-408dcf7917b6',
'https://firebasestorage.googleapis.com/v0/b/simplan-alpha.appspot.com/o/icons%2Fquestion-mark-xxl.png?alt=media&token=137b1460-d8a5-45a9-b488-fc2e075c45f2',
'https://firebasestorage.googleapis.com/v0/b/simplan-alpha.appspot.com/o/icons%2Faplicativos_0845_Check.png?alt=media&token=c299db40-42fc-455d-9680-408dcf7917b6',
'https://firebasestorage.googleapis.com/v0/b/simplan-alpha.appspot.com/o/icons%2Fquestion-mark-xxl.png?alt=media&token=137b1460-d8a5-45a9-b488-fc2e075c45f2',
];

const monkeys=['https://firebasestorage.googleapis.com/v0/b/simplan-alpha.appspot.com/o/designJer%2Fmonkeys%2Fmonkey1.png?alt=media&token=20fcf3a5-6bc8-4462-95b2-88985e14f22e',
'https://firebasestorage.googleapis.com/v0/b/simplan-alpha.appspot.com/o/designJer%2Fmonkeys%2Fmonkey10.png?alt=media&token=635dc531-3db1-408b-bdd4-21cb998849e9',
'https://firebasestorage.googleapis.com/v0/b/simplan-alpha.appspot.com/o/designJer%2Fmonkeys%2Fmonkey2.png?alt=media&token=19644de2-bd22-46b6-b0e9-6d6dd319a363',
'https://firebasestorage.googleapis.com/v0/b/simplan-alpha.appspot.com/o/designJer%2Fmonkeys%2Fmonkey3.png?alt=media&token=6eadf047-1349-4ca9-a414-abb3cc0ac226',
'https://firebasestorage.googleapis.com/v0/b/simplan-alpha.appspot.com/o/designJer%2Fmonkeys%2Fmonkey4.png?alt=media&token=cb56508e-cf81-4b0e-a961-f1d3790dea54',
'https://firebasestorage.googleapis.com/v0/b/simplan-alpha.appspot.com/o/designJer%2Fmonkeys%2Fmonkey5.png?alt=media&token=ec4d74ee-6b8c-4225-95a5-2a6b852d44d5',
'https://firebasestorage.googleapis.com/v0/b/simplan-alpha.appspot.com/o/designJer%2Fmonkeys%2Fmonkey6.png?alt=media&token=7f795e48-4b52-4464-8684-d49461898f41',
'https://firebasestorage.googleapis.com/v0/b/simplan-alpha.appspot.com/o/designJer%2Fmonkeys%2Fmonkey7.png?alt=media&token=81aa2e0e-e723-42e3-b550-90f7c1863b05',
'https://firebasestorage.googleapis.com/v0/b/simplan-alpha.appspot.com/o/designJer%2Fmonkeys%2Fmonkey8.png?alt=media&token=73cd9a17-182d-4434-ad9e-27d2f615fb90',
'https://firebasestorage.googleapis.com/v0/b/simplan-alpha.appspot.com/o/designJer%2Fmonkeys%2Fmonkey9.png?alt=media&token=2aceeca6-1b96-4663-a9ad-7d70037bb848'

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
          var i = Math.floor(Math.random() * 10);
          user.photo=monkeys[i];
     }
     console.log(user);
     namesArray.push(user)

   }
   for (var name in y)
   {
     var i = Math.floor(Math.random() * 10);
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
const imageColor=['#A5D6A7','#FFCC80','#E57373','#E0E0E0','#E0E0E0'];




return(

  <div style={styles.root} className="tttttttt">
    <GridList style={styles.gridList} cols={2.2} padding={20}>
      {tilesData.map((tile) => (

        <GridTile className="imageBlock"
          key={tile.id}
          title={tile.name}
          titleBackground='false'
          titleStyle={styles.titleStyle}
          style={{width:150,}}
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
          <div className='5555' >
             <img  className="img-circle" src={tile.photo} style={{borderColor:imageColor[tile.status], width: '100%'}} />
             <img  className="status-icon" src={icon[tile.status]}/>


          </div>

        </GridTile>
      ))}
    </GridList>
  </div>
)};

export default GridListExampleSingleLine;
