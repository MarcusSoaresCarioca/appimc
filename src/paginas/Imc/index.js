import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import Result from "../../componentes/Result";
import style from "./style";


export default function Imc() {

    const [peso, setPeso] = useState(null);
    const [altura, setAltura] = useState(null);
    const [result, setResult] = useState(null);
    const [msgResult, setMsgResult] = useState("");
    const [lista,setLista] = useState([])



    function Calcular() {
        if (peso != null && altura != null) {
            let imc = (peso / (altura * altura)).toFixed(2)
            setResult(imc)
            let numeroAl = peso * Math.random(imc)
            setLista((arr) => [...arr, {id: numeroAl, resultImc: imc }])
            console.log (lista)

            if (imc < 18.5) {
                setMsgResult("Abaixo do peso")

            }
            else if (imc < 24.9) {
                setMsgResult("Peso ideal")

            }

            else if (imc < 29.9) {
                setMsgResult("Levemente acima do peso")

            }
            else if (imc < 34.9) {
                setMsgResult("Obesidade grau 1")
            }

            else if (imc < 39.9) {
                setMsgResult('Obesidade grau 2')
            }

            else if (imc > 40) {
                setMsgResult('Obesidade grau 3')
            }
        }

    }


    return (
        <View style={style.container}>
            <View style={style.divTitulo}>
                <Text style={style.txtTitulo}>Calculadora - IMC </Text>
            </View>

            <View style={style.divForm}>
                <Text style={style.txtInput}>Peso</Text>
                <TextInput style={style.input}
                    placeholder="ex. 80"
                    keyboardType="numeric"
                    value={peso}
                    onChangeText={setPeso}
                ></TextInput>
                <Text style={style.txtInput}>Altura</Text>
                <TextInput
                    style={style.input}
                    placeholder="ex 1.80"
                    keyboardType="numeric"
                    value={altura}
                    onChangeText={setAltura}
                ></TextInput>
                <TouchableOpacity onPress={Calcular} style={style.btnCalc}>
                    <Text style={style.txtBtn}>Calcular</Text>
                </TouchableOpacity>
            </View>

            <View style={style.divResult}>
                <Result result={result} msgResult={msgResult} />


                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={lista}
                    renderItem={({item}) => {
                        return (
                            <View>
                                <Text style={style.txtList}>Hist??rico de IMC = {item.resultImc}</Text>
                            </View>
                        )
                }}
                    keyExtractor={item => item.id}
                />


            </View>
        </View>
    )
}

