
import { size } from '../../helpers/devices';
import * as Statics from '../../helpers/statics';

export default {
    mainContainer: {
     
      width:Statics.DEVICE_WIDTH,
      height:Statics.DEVICE_HEIGHT,
        flex: 1,
      
      },
      textStyle :{

fontSize:size(27)
      },
      roundBtnTrans:{

        borderColor:'black',
        borderRadius:size(30),
        width:Statics.DEVICE_WIDTH/1.2,
        marginTop:size(20),
        height:Statics.DEVICE_HEIGHT/13,
       
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderBottomWidth:size(1),
        borderTopWidth:size(1),
        borderLeftWidth:size(1),
        borderRightWidth:size(1)
      },
      roundBtn:{

        borderColor:'white',
        borderRadius:size(30),
        width:Statics.DEVICE_WIDTH/1.2,
        marginTop:size(20),
        height:Statics.DEVICE_HEIGHT/14,
        backgroundColor:'#FF4A00FF',
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
       
        margin:0,
      fontSize:size(17),
    
        borderBottomColor: '#000', // Add this to specify bottom border color
        borderBottomWidth: size(1),
            // Add this to specify bottom border thickness
    },
      BottomContainer: {
       width:Statics.DEVICE_WIDTH/2,
       height:Statics.DEVICE_HEIGHT/5,
       
       backgroundColor: '#FF655B',
        alignItems: 'center',
      },
   
      textCon: {
        marginTop:0
      },
      text: {
        color: 'white',
        fontSize: size(35),
        fontWeight: 'bold',
        marginBottom:size(20),
      },
    
    }