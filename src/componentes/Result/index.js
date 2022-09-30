import React, { useState } from "react";
import { View, Text, } from "react-native";
import style from "./style";

export default function Result({result,msgResult}) {
    return (
        <View>
            <Text style={style.txtResult}>{result} </Text>
            <Text style={style.txtResult}>{msgResult}</Text>
        </View>
    )
}

