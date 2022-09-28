import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import style from "./style";

export default function Imc(){

    const [peso,setPeso] = useState(null);
    const [altura,setAltura] = useState(null);
    const [result,setResult] = useState(null);


    function Calcular(){
        if(peso != null && altura != null){
            let imc = (peso / (altura*altura))
            setResult(imc)
        }
    }


    return(
        <View style={style.container}>
            <View style={style.divTitulo}>
                <Text style={style.txtTitulo}>Calculadora - IMC </Text>
            </View>

            <View style={style.divForm}>
                <TextInput style={style.input}
                placeholder="Peso"
                keyboardType="numeric"
                value={peso}
                onChangeText={setPeso}
                ></TextInput>
                <TextInput
                style={style.input}
                placeholder="Altura"
                keyboardType="numeric"
                value={altura}
                onChangeText={setAltura}
                ></TextInput>
                <TouchableOpacity onPress={Calcular} style={style.btnCalc}>
                    <Text style={style.txtBtn}>Calcular</Text>
                </TouchableOpacity>
            </View>

            <View style={style.divResult}>

            </View>
        </View>
    )
}

