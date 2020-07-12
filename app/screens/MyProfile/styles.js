
import { size } from '../../helpers/devices';
import * as Statics from '../../helpers/statics';
export default {



  container: {
    flex: 1,
    backgroundColor: 'rgb(244,246,251)',
    
  },
  //-----------------PROFILE PICTURE CONTAINER--------------//
  profile_pic_container: {
width:Statics.DEVICE_WIDTH,
height:Statics.DEVICE_HEIGHT/3
   
  
  },
  profile_pic_style: {
    width: Statics.DEVICE_WIDTH,
    height: Statics.DEVICE_HEIGHT/2,
  
  },
  profile_name_style: {
    fontSize: size(20),
    fontWeight:'bold',
    color:'#595858',

    marginTop:size(10),marginLeft:size(20)
  },
  profile_age: {
    fontSize: size(35),
    fontWeight:'900',
    color:'#61615f',

    marginTop:size(10),
    marginLeft:size(10)
  },
  details:{ 
    fontSize: size(17),
    marginLeft:size(10),

    color:'#969695'
  },
  detailsIcon:{ 

    marginLeft:size(25),
    color:'#969695',
    marginTop:size(3)
  },
  share:{
    marginTop:size(10),
    fontSize:size(18),
color:'red',
fontWeight:'900'
  },
  shareL2:{
    marginTop:size(5),
    fontSize:size(16),
color:'red'
  },
  //------------------NAVIGATION CONTAINER----------------//
  navigation_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: size(80),
    marginVertical:size(40),
  },
  navigation_inner_container: {
    
    marginTop:size(100),
    position:'relative',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor:'white'
  },
  
  button_container: {
    alignItems: 'center',
    padding: size(15),
    borderRadius: size(30),

  },
  button_style: {
    width: size(35),
    height: size(35),
    resizeMode: 'contain',
 
  },
  button_text_style: {
    fontSize: size(16),
    fontWeight: '600',
    color: '#d4d6db',
    marginTop: size(5),
  },

  tinder_plus_button_container: {
    width: Statics.DEVICE_WIDTH, 
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
    fontSize: size(20),
    fontWeight: '600',
  },
}