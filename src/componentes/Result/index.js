import React, {useState} from "react";
import { View,Text, ProgressViewIOSComponent } from "react-native";
import style from "../../paginas/Imc/style";



export default  function Result(){
    return(
        <View>
        <Text style={style.txtResult}> Seu Imc e de {result} </Text>
        <Text style={style.txtMsgResult}>{msgResult}</Text>
        </View>
    )
}

