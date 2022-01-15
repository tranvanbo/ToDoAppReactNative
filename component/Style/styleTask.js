import { StyleSheet } from 'react-native';
const styleTask = StyleSheet.create({
    Task:{
        
        paddingHorizontal:20,
        backgroundColor:'#fff',
        marginBottom:5,
        paddingVertical:7,
        flexDirection: 'row',
        borderRadius:10,
    },
    square:{
        height:40,
        width:40,
        
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
      
    },
    colorChan:{
        backgroundColor:'#6bc073',
    },
    colorLe:{
        backgroundColor:'#1202aa',
    },
    number:{
        fontWeight: 16,
        fontWeight: '700',
        color:'#fff'
    },
    content:{
        width:'80%',
       
        alignItems:'center',
        paddingRight:5,
        flexDirection:'row',
      
    },
    Text:{
        fontWeight:'bold',
        fontSize:16,
        marginLeft:10,
      
     
    },
    TextDone:{
        fontWeight:'bold',
        fontSize:16,
        marginLeft:10,
       textDecorationLine:'line-through',
    },
    ViewText:{
        flex:25,
     
        marginLeft:10,
    },
    image: {
        width:30,
        height:30,
        
     
    },
    ViewImage:{
    flex:1,      
    marginLeft:10,
    },
    ViewCheck:{
        flex:3, 
        marginLeft:10,
    }
})
export default styleTask;