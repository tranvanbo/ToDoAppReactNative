
import { View,Text,TouchableOpacity,Image} from 'react-native';
import styleTask from '../Style/styleTask';
import React,{useState} from 'react';
export default function Task(props){
    const {number} = props;
    const [check,setCheck] = useState(true);
    const CheckWork =()=>{
        check ? setCheck(false) : setCheck(true)
    }
    const numberText = number<10 ? `0${number}`: number;
    const colorSquare = number %2===0 ? styleTask.colorChan : styleTask.colorLe;
    return (
       <View style={styleTask.Task} >
           <View style={[styleTask.square,colorSquare]}>
           <Text style={styleTask.number}>{numberText}</Text>
           </View>
          <View style={styleTask.content}>
              <View style={styleTask.ViewText}>
              <Text style={check ?styleTask.Text:styleTask.TextDone}>{props.title}</Text> 
              </View>

              <TouchableOpacity style={styleTask.ViewCheck} onPress={CheckWork} >
                  {
                      check ? 
                      <Image style={styleTask.image} source={require('../../image/Ocheck.png')} />
                      :
                      <Image style={styleTask.image} source={require('../../image/CheckTrue.jpg')} />
                  }
           
            </TouchableOpacity>

            <TouchableOpacity style={styleTask.ViewImage} onPress={props.onDeleteTask}>
            <Image style={styleTask.image} source={require('../../image/delete.png')} />
            </TouchableOpacity>   
          </View>
         
       </View> 
    
    )
}