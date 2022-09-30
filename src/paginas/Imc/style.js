import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1
    },

    divTitulo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#012030'


    },

    divForm: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#025E73'

    },

    input: {
        height: 60,
        width: '70%',
        borderRadius: 22,
        fontSize: 22,
        borderWidth: 2,
        borderColor: '#fff',
        paddingLeft: 10,
        margin: 10,
        color:'#fff'

    },

    divResult: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        backgroundColor:'#012030'

    },

    txtTitulo: {
        fontSize: 30,
        marginTop: 50,
        color:'#fff'

    },

    btnCalc: {
        borderRadius: 25,
        borderWidth: 2,
        borderColor:'#fff',
        height: 50,
        width: '50%',
        backgroundColor: '#012030',
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    txtBtn: {
        fontSize: 16,
        color: "#fff"
    },

    txtInput:{
        fontSize:24,
        color:'#fff'
    },

    txtList:{
        fontSize:18,
        color:'#fff'
    }

})


export default style;