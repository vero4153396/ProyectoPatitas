import { StyleSheet } from "react-native"

export const Colores={
    azulNormal:"#194A6E",
    naranjaClaro:"#FDB672",
    naranjaNormal:"#FD8A2B",
    naranjaOscuro:"#FF7300",
    blancoMentira:"#F9F9F9",
    azulOscuro:"#092B44",
    azulClaro:"#5385B0",
    grisMentira:"#D9D9D9",
}


export const GlobalStyles = StyleSheet.create({
    containerCentrado: {
        flex:1,
        backgroundColor: "#ff0000",
    },
    titulo: {
        fontSize: 22
    },
    drawerUserContainer: {
        backgroundColor: 'indigo',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 0,
        marginBottom: 30,
        height: 140,
        borderRadius: 10,

    },
    drawerUserImg: {
        width: 100, 
        height: 100, 
        alignSelf:'center', 
        borderRadius: 50
    },
    
    containerAzul:{
        flex:2,
        backgroundColor: Colores.azulNormal,
    },
    logo:{
        width:80,
        height:80,
        marginEnd:"300%"
    },
    textoTitulo:{
        marginEnd:10,
        marginStart:10,
        width:"auto",
        height:80        
    },
    //login screen
    containerBlanco:{
        backgroundColor:Colores.blancoMentira,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        flex:3,
        paddingBottom:40

    },
    textoLogin:{
        flex:1,
        fontFamily:"Poppins"
    },
    textoAccede:{
        width:"auto",
        height:80,
        marginEnd:20,
        marginStart:20,
        marginTop:100
    },
    gatoPerro:{
        position: 'absolute',
        alignSelf:"center",
        width:200,
        height: 150,
        flex:1,
        top:"-15%"
        
    },
    statusBar:{
        backgroundColor:Colores.azulNormal
    },
    inputContainer:{
        backgroundColor:Colores.naranjaClaro,
        paddingHorizontal:15,
        paddingVertical:3,
        borderRadius:30,
        marginEnd:25,
        marginStart:25,
        borderColor:Colores.azulClaro,
        borderWidth:0.5
    },
    inputText:{
        fontSize:15,
        fontFamily:"Poppins"
    },
    datosContainer:{
        gap:20,
        flex:2
    },
    rememberContainer:{
        marginEnd:25,
        marginStart:25,
        paddingHorizontal:5,
        flexDirection:"row"
    },
    rememberText:{
        fontSize:13,
        fontWeight:"bold",
        fontFamily:"Poppins",
    },
    rememberButton:{
        backgroundColor:Colores.naranjaClaro,
        borderColor:Colores.azulClaro,
        borderWidth:0.5,
        width:"100%",
        marginRight:1,
    },
    accederContainer:{
        margin:25,
        flex:0.5
    },
    accederButton:{
        backgroundColor:Colores.azulOscuro,
        color:Colores.blancoMentira,
        borderRadius:30,
        fontFamily:"Poppins",
        fontWeight:"bold",
        fontSize:20,
        paddingLeft:"40%"
    },
    accederTextContainer:{
        flexDirection:"row",
        gap:"16%"
    },
    accederText:{
        color:Colores.azulOscuro,
        fontSize:13,
        fontWeight:"bold",
        textDecorationLine:"underline",
        fontFamily:"Poppins"
    },
    accesoRapidoContainer:{
        marginEnd:25,
        marginStart:30,
        flex:0.5,
        flexDirection:"column"
    },
    accesoRapidoTexto:{
        fontFamily:"Poppins",
        fontWeight:"bold",
        fontSize:11,
        color:Colores.azulOscuro,
    },
    accesoTextoContainer:{
        flexDirection:"row",
    },
    accesoLinea:{
        borderBottomColor: Colores.naranjaNormal,
        height: 0.7,
        backgroundColor:Colores.naranjaNormal,
        width:"20%",
        alignSelf:"center",
    },
    accesoLogos:{
        width:24,
        height:24,
        
    },
    accesoLogosContainer:{
        flexDirection:"row",
        gap:10,
        alignSelf:"center",
        marginTop:20,
        marginBottom:20
    },
    //inicio screen
    containerBlancoInicio:{
        backgroundColor:Colores.grisMentira,
        flex:3,
        borderTopEndRadius:10,
        borderTopStartRadius:10,
        paddingBottom:40
    },
    header:{
        flexDirection:"row",
        marginTop:"2%",
        marginStart:"5%",
        marginEnd:"5%",
        fontFamily:"MoreSugar",
        color:Colores.blancoMentira,
        fontSize:75,
        alignItems:"center",
        gap:"10%"
    },
    flechaHeader:{

    },
    directorContainer:{
        flexDirection:"column",
        alignItems:"center",
        fontFamily:"Poppins",
        fontSize:36,
        fontWeight:"bold",
        color:Colores.blancoMentira
    },
    directorIdentificador:{
        fontSize:24,
        fontFamily:"Poppins",
        color:Colores.naranjaClaro,
        fontWeight:"normal",
        marginTop:-10,
        marginBottom:15
    },
    menuContainer:{
        flexDirection:"column",
        justifyContent:"space-evenly",
        paddingStart:"5%",
        paddingEnd:"5%",
        paddingTop:"1%",
        gap:"1%"

    },
    menuElemento:{
        flexDirection:"row",
        flex:1,
        fontFamily:"Poppins",
        fontSize:40,
        color:Colores.azulNormal,
        gap:"10%",
        alignItems:"center"
    }
    ,
    protectorasContainer:{
        backgroundColor:Colores.azulNormal,
        borderTopEndRadius:10,
        borderTopStartRadius:10,
        flexDirection:"column",
        fontFamily:"Poppins",
        fontSize:32,
        color:Colores.blancoMentira,
        fontWeight:"bold",
        alignItems:"center",
        paddingTop:"2%",
        gap:0

    },
    protectorasImagenesContainer:{
        flexDirection:"row",
        flexWrap:"nowrap",
    }
})