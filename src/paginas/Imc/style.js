import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container:{
        flex:1
    },

    divTitulo:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        
    
    },

    divForm:{
        flex:2,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#DAFDBA'
        
    },

    input:{
        height:60,
        width:'70%',
        borderRadius: 22,
        fontSize:22,
        borderWidth:2,
        paddingLeft: 10,
        margin:10

    },

    divResult:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:5,
       
    },

    txtTitulo:{
        fontSize:30,
        marginTop:50
        
    },

    btnCalc:{
        borderRadius: 25,
        borderWidth:2,
        height:50,
        width:'50%',
        backgroundColor:'#012030',
        marginTop:30,
        justifyContent:'center',
        alignItems:'center'
    },

    txtBtn:{
        fontSize:16,
        color:"#fff"
    },

    txtResult:{
        fontSize:23,
    },

    txtMsgResult:{
        fontSize:23
    }

})
    

export default style;