import { View,TextInput,Text,TouchableOpacity } from 'react-native';
import styleInputAdd from '../Style/styleInputAdd';
import React, { useState } from 'react';

const InputAdd =(props) => {
    const [task,setTask] = useState('');
    const handleTask = () =>{
        if(task.length===0){
                alert('bạn chưa nhập nội dung!!!')
                return false;
        }
            props.onTask(task);
            setTask('')
    }
    return (
        <View style={styleInputAdd.Form}>
            <View style={styleInputAdd.FormInput}>
                <TextInput
                value={task}
                 style={styleInputAdd.TextInput}
                 placeholder="your Task"
                 onChangeText={(text) =>setTask(text)}/>
            </View>
            <TouchableOpacity
                onPress={handleTask}
             >
            <View style={styleInputAdd.icon}>
                <Text style={styleInputAdd.textIcon}>+</Text>
            </View>
            </TouchableOpacity>
           
        </View>
    )
}
export default InputAdd;