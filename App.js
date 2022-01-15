
import { View,Text ,StyleSheet,ScrollView,Alert} from 'react-native';

import Task from './component/Task/Task';
import InputAdd from './component/FormInput/InputAdd';
import  React,{ useState } from 'react';
export default function App() {
  const [taskList,setTaskList] =useState([])
  const handleTask =(task) => {
        setTaskList([...taskList,task]);
    }
  const HandleDeleteTask=(index) =>{
    Alert.alert(
      "Thông Báo !!!",
      "Bạn có muốn xóa công việc không?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => {
         let TaskListDelete = [...taskList];
         TaskListDelete.splice(index,1);
         setTaskList(TaskListDelete);
        } }
      ]
    );
  }
  return (
  
   <View style={styles.container}>
     <View style={styles.header} >
       <Text style={styles.TextColor}>TO DO APP</Text>
       <ScrollView style={styles.body}>
         {
           taskList.map((item,index)=>{
             return <Task key={index} title={item} number={index+1} 
             onDeleteTask={()=> HandleDeleteTask(index)}/>  
           })
         }
     
     </ScrollView>
     </View>
     
     <View style={styles.InputForm}>
       <InputAdd onTask ={handleTask}/>
     </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'#01919e',
      
  },
  header:{
    paddingTop:30,
    flex:9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextColor:{
   color:'#ae0e0e',
    fontSize:20,
    fontWeight:'bold',
  },
  body:{
    paddingTop:10,
    paddingHorizontal:20,
  },
  InputForm:{
    flex:1,
    paddingTop:20,
  }
})
