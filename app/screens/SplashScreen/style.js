import { Dimensions } from "react-native";

export default {
    SplashContaner: {
      width:'100%',
      height:Dimensions.get('window').height,
  
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      },
      BottomContainer: {
        flex:1,
       width:20,
       height:20,
       
       backgroundColor: '#fff',

    
      },
      logo: {
        
        width: 240,
        height: 180,
      },
      textCon: {
        marginTop:0
      },
      text: {
        color: '#FF4A00FF',
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 150,
      },
    
    }