

import { size } from '../../helpers/devices';
import * as Statics from '../../helpers/statics';
export default {



  container: {
    flex: 1,
    backgroundColor: 'rgb(244,246,251)',
    marginBottom:20
    
  },
  //-----------------PROFILE PICTURE CONTAINER--------------//
  profile_pic_container: {
    marginTop:0
   
  
  },
  iconStyle: {
    width:size(50),
    height: size(50),
    borderRadius:60,
    marginRight:20
  },
  profile_pic_style: {
    width: '100%',
    height: 460,
  
  },
  profile_name_style: {
    fontSize: 35,
    fontWeight:'bold',
    color:'#595858',

    marginTop:10,marginLeft:20
  },
  profile_age: {
    fontSize: 35,
    fontWeight:'900',
    color:'#61615f',

    marginTop:10,
    marginLeft:10
  },
  name:{ 
    fontSize: 20,
    marginLeft:5,

    color:'#000',
    fontWeight:'bold'
  },
  details:{ 
    fontSize: 15,
    marginLeft:5,

    color:'#ababab'
  },
  detailsIcon:{ 

    marginLeft:10,
    color:'#969695',
    marginTop:3
  },
  share:{
    marginTop:10,
    fontSize:18,
color:'red',
fontWeight:'900'
  },
  shareL2:{
    marginTop:5,
    fontSize:16,
color:'red'
  },
  //------------------NAVIGATION CONTAINER----------------//
  navigation_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 80,
    marginVertical:40,
  },
  navigation_inner_container: {

    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:80,
    backgroundColor:'white'

  },
  
  button_container: {
    alignItems: 'center',
    padding: 15,
    borderRadius: 30,
   

  },
  button_style: {
    width: size(60),
    height: size(60),
    resizeMode: 'contain',
    borderRadius:100,
 
  },
  button_text_style: {
    fontSize: size(16),
    fontWeight: '600',
    color: '#d4d6db',
    marginTop: size(5),
  },

  tinder_plus_button_container: {
    width: '100%', 
    justifyContent: 'center', 
    alignItems: 'center',

  },
  tinder_plus_button_style: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: size(13),

    shadowColor: '#ddd',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  tinder_button_text_style: {
    color: '#ABABAB',
    fontSize: 20,
    fontWeight: '600',
  },
}