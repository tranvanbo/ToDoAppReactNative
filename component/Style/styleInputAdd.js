import { StyleSheet } from 'react-native';
const styleInputAdd = StyleSheet.create({
   Form: {
       paddingHorizontal:20,
       width:'100%',
        flexDirection:'row',
   },
   FormInput: {
       width:'85%',
       height: 44,
       backgroundColor:'#fff',
       borderRadius:10,
       paddingHorizontal:10,
       justifyContent: 'center',
   },
   TextInput:{
       fontWeight:'bold',
   },
   icon: {
       width:40,
       height:40,
       backgroundColor:'#a80101',
       marginLeft:5,
       justifyContent: 'center',
       alignItems: 'center',
       borderRadius:44,
       
   }
   ,
   textIcon: {
       color:'#fff',
       fontWeight:'bold',
       fontSize:20,
   }

})
export default styleInputAdd;