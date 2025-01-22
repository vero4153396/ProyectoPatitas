import { StyleSheet } from "react-native"

export const Colores={
    azulNormal:"#194A6E",
    naranjaClaro:"#FDB672",
    naranjaNormal:"#FD8A2B",
    naranjaOscuro:"#FF7300",
    blancoMentira:"#F9F9F9",
    azulOscuro:"#092B44",
    azulClaro:"#5385B0"
}


export const GlobalStyles = StyleSheet.create({
    containerCentrado: {
        flex:1,
        backgroundColor: "#ff0000",
    },
    titulo: {
        fontSize: 22
    },
    tituloHazteParte:{
        marginTop:40,
        alignSelf:"center",
        width:330,
        height: 60,
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
        width:40,
        height:40,
        top:"10%",
        left:"85%",
        marginBottom:30
    },
    textoTitulo:{
        marginEnd:10,
        marginStart:10,
        width:300,
        height:90        
    },
    containerBlanco:{
        backgroundColor:Colores.blancoMentira,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        flex:2,
        paddingBottom:40

    },
    botonesRegistroContainer:{
        flexDirection:"row",
        gap: 40,
        alignSelf:"center",
    },
    textoRegistrateCancelar:{
        justifyContent:"center",
        alignSelf:"center",
        fontSize:15,
        fontFamily:"Poppins",
        color:Colores.blancoMentira,
    },
    botonRegistrarCancelar:{
        width: 130,
        height: 40,
        color: Colores.blancoMentira,
        backgroundColor: Colores.azulNormal,
        borderRadius: 30,
        justifyContent:"center",
    },
    textoLogin:{
        flex:1,
        fontFamily:"Poppins"
    },
    registrateEnyTitulo:{
        position:"absolute",
        top:30,
        alignSelf:"center",
    },
    textoRegistrateEn:{
        color: Colores.naranjaNormal,
        alignSelf:"center",
        fontFamily:"Poppins",
        fontSize:20
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
        flex:1
        
    },
    perro:{
        position: 'absolute',
        top: -90,
        right: 30,
        width:150,
        height: 150,
    },
    gato:{
        position: 'absolute',
        top: -90,
        left: 0,
        width: 110,
        height: 160,
    },
    statusBar:{
        backgroundColor:Colores.azulNormal
    },
    inputContainer:{
        flexDirection:"row",
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
        paddingStart: 10,
        fontSize:15,
        fontFamily:"Poppins",
        alignSelf:"center",
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
        borderWidth:0.5
    },
    accederContainer:{
        margin:25,
        flex:0.5
    },
    volverAlLoginContainer:{
        marginTop:35,
        flexDirection:"row",
        gap:40,
        alignItems: "center",
        justifyContent: "center",
        alignSelf:"center",
        width:"120%",
        height: 60,
        borderRadius:30,
        borderColor:Colores.azulOscuro,
        backgroundColor: Colores.naranjaClaro,
        borderWidth:1,
        bottom:0,
    },
    accederButton:{
        backgroundColor:Colores.azulOscuro,
        color:Colores.blancoMentira,
        borderRadius:30,
        fontFamily:"Poppins",
    },
    accederTextContainer:{
        flexDirection:"row",
        gap:"16%"
    },
    accederText:{
        paddingTop:10,
        color:Colores.azulNormal,
        fontSize:13,
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
    iconoInput:{
        width:30,
        height:30,
        left: 0,
        alignSelf:"center",
    },
})