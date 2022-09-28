import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import style from "./style";

export default function Imc(){
    return(
        <View style={style.container}>
            <View style={style.divTitulo}>
                <Text style={style.txtTitulo}>Calculadora - IMC </Text>
            </View>

            <View style={style.divForm}>
                <Text style={style.txtTitulo}>Peso</Text>
                <TextInput style={style.input}
                placeholder="Peso"
                keyboardType="numeric"
                value=""
                onChangeText={''}
                ></TextInput>
                <Text style={style.txtTitulo}>Altura</Text>
                <TextInput
                style={style.input}
                placeholder="Altura"
                keyboardType="numeric"
                value=""
                onChangeText={''}
                ></TextInput>
            </View>

            <View style={style.divResult}>

            </View>
        </View>
    )
}

