
import { size } from '../../helpers/devices';
import * as Statics from '../../helpers/statics';
export default {
    mainContainer: {
       
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
       
        
      },
      buttonContainer :{
          alignItems:'center',
          flex:3,
          marginTop:20
          
      },
      fireImage :{
          width:size(50),
          height:size(60),
          marginTop:0
      },
      logoText:{
          fontSize:size(45),
        color:'white',
        fontWeight: 'bold',
        
        marginTop:0,
      },
      bottomText:{
        fontSize:size(15),
        color:'white'

      },
      registerText:{
        fontSize:size(15),
        color:'white'

      },
      roundBtn:{

        borderColor:'white',
        borderRadius:30,
        width:Statics.DEVICE_WIDTH/1.5,
        marginTop:size(20),
        height:Statics.DEVICE_HEIGHT/15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderBottomWidth:size(1),
        borderTopWidth:size(1),
        borderLeftWidth:size(1),
        borderRightWidth:size(1)
      },
      textInput: {
        alignSelf: 'stretch',
        color:'#fff',
        margin:5,
      fontSize:size(15),
     width:Statics.DEVICE_WIDTH/1.2,
   
        borderBottomColor: '#fff', // Add this to specify bottom border color
        borderBottomWidth: 1,
            // Add this to specify bottom border thickness
    },
    
    }