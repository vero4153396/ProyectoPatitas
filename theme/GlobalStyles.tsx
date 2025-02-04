import { StyleSheet } from "react-native"

export const Colores={
    azulNormal:"#194A6E",
    naranjaClaro:"#FDB672",
    naranjaNormal:"#FD8A2B",
    naranjaOscuro:"#FF7300",
    naranjaAnuncios:"#FDB066",
    blancoMentira:"#F9F9F9",
    azulOscuro:"#092B44",
    azulClaro:"#5385B0",
    grisMentira:"#D9D9D9",
    azulDiscusion:"#B2C9DD",
    grisClaro: "#D9D9D9",
}


export const GlobalStyles = StyleSheet.create({
    containerAzul:{
        flex:2,
        backgroundColor: Colores.azulNormal,
    },
    textoTitulo:{
        marginEnd:10,
        marginStart:10,
        width:"auto",
        height:80        
    },
    textoLogin: {
        flex: 1,
        fontFamily: "Poppins"
    },
    //login screen
    containerBlanco:{
        backgroundColor:Colores.blancoMentira,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        flex:3,
        paddingBottom:40

    },
    containerTitulo:{
        flex:1,
        flexDirection:"column",
        marginTop:"20%"
    },
    logo:{
        marginTop:"3%",
        position:"absolute",
        right:"3%"
    }
    ,
    textoAccede:{
        marginEnd:20,
        marginStart:20,
        marginTop:100
    },
    gatoPerro:{
        position: 'absolute',
        alignSelf:"center",
        flex:1,
        top:"-20%"
        
    },
    inputContainer:{
        backgroundColor:Colores.naranjaClaro,
        paddingHorizontal:"5%",
        paddingVertical:"3%",
        borderRadius:100,
        marginHorizontal:"5%",
        borderColor:Colores.azulClaro,
        borderWidth:2,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    inputText:{
        fontSize:30,
        fontFamily:"Poppins",
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
        fontSize:22,
        fontWeight:"bold",
        fontFamily:"Poppins",
        color:Colores.azulNormal,
        marginLeft:"2%"
    },
    rememberButton:{
        backgroundColor:Colores.naranjaClaro,
        borderColor:Colores.azulNormal,
        borderWidth:2,
        borderRadius:4,
        width:"4%",
        height:"75%",
        marginLeft:"5%",
        alignSelf:"center",
        color:Colores.blancoMentira,
        fontWeight: "bold",
        opacity:0.5
    },
    accederContainer:{
        margin:25,
        flex:0.5
    },
    accederButton:{
        backgroundColor:Colores.azulNormal,
        color:Colores.blancoMentira,
        borderRadius:100,
        fontFamily:"Poppins",
        fontWeight:"bold",
        fontSize:32,
        alignContent:"center",
        paddingVertical:"2%"
    },
    accederTextContainer:{
        flexDirection:"row",
        gap:"25%"
    },
    accederText:{
        color:Colores.azulNormal,
        fontSize:20,
        fontWeight:"bold",
        textDecorationLine:"underline",
        fontFamily:"Poppins",
    },
    accesoRapidoContainer:{
        marginEnd:25,
        marginStart:30,
        flexDirection:"column"
    },
    accesoRapidoTexto:{
        fontFamily:"Poppins",
        fontWeight:"bold",
        fontSize:22,
        color:Colores.azulNormal,
    },
    accesoTextoContainer:{
        flexDirection:"row",
        flexWrap:"nowrap",
        backgroundColor:Colores.naranjaNormal
    },
    accesoLinea:{
        borderBottomColor: Colores.naranjaNormal,
        height: 0.9,
        backgroundColor:Colores.naranjaNormal,
        width:"20%",
        alignSelf:"center",
        
    },
    lineaI:{
        marginRight:"-20%",
        marginLeft:"10%"
    },
    lineaD:{
        marginLeft:"-20%"
    },
    accesoLogosContainer:{
        flexDirection:"row",
        gap:"10%",
        alignItems:"center",
        marginTop:20,
        marginBottom:20,
        justifyContent:"center"
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
        alignItems:"center",
        justifyContent:"space-between",
        gap:"8%"
    },
    headerTextoInicio:{
        fontFamily:"MoreSugar",
        color:Colores.blancoMentira,
        fontSize:75,
    },
    directorContainer:{
        flexDirection:"column",
        alignItems:"center",
    },
    directorTexto:{
        
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
        gap:"10%",
        alignItems:"center"
    },
    menuElementoTexto:{
        fontFamily:"Poppins",
        fontSize:40,
        color:Colores.azulNormal,
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
    },
    //comunidadScreen
    headerComunidad:{
        flexDirection:"row",
        marginTop:"2%",
        marginStart:"5%",
        marginEnd:"5%",
        alignItems:"center",
        justifyContent:"space-around",
        paddingBottom:"5%"
    },
    headerComunidadTexto:{
        fontSize:36,
        fontFamily:"MoreSugar",
        color:Colores.blancoMentira,
    },
    comunidadContainerBlanco:{
        backgroundColor:Colores.blancoMentira,
        borderTopEndRadius:10,
        borderTopStartRadius:10,
        flex:1
    },
    containerAnuncio:{
        backgroundColor:Colores.naranjaAnuncios,
        borderRadius:50,
        flexDirection:"column",
        padding:"5%",
        marginTop:"5%",
        marginHorizontal:"5%"
    },
    containerHeaderAnuncio:{
        flexDirection:"row"
    },
    textoHeaderAnuncio:{
        fontFamily:"Poppins",
        fontSize:32,
        color:Colores.azulNormal,

    },
    textoAnuncio:{
        fontFamily:"Poppins",
        fontSize:24,
        color:Colores.azulNormal,
        alignSelf:"center"
    },
    discusionContainer:{
        marginHorizontal:"5%",
        marginBottom:"2%",
        marginTop:"5%",
        flex:1
    },
    discusionTitulo:{
        color:Colores.azulNormal,
        fontWeight:"bold",
        fontSize:32
    },
    scrollContainer:{
        flexDirection:"column",
        flex:1
    },
    scrollElemento:{
        backgroundColor:Colores.azulDiscusion,
        borderRadius:25,
        paddingHorizontal:"7%",
        paddingVertical:"5%",
        marginBottom:"5%"                                                                                                                                                                                                          
    },
    elementoTexto:{
        fontFamily:"Poppins",
        fontSize:32,
        fontWeight:"bold",
        color:Colores.azulNormal

    },
    elementoBocadillo:{
        opacity:1,
        alignSelf:"center"
    },
    elementoNumero:{
        fontFamily:"Poppins",
        fontSize:48,
        color:Colores.azulNormal
    },
    bocadilloContainer:{
        justifyContent:"flex-end",
        flexDirection:"row"
    },
    nuevaDiscusionContainer:{
        backgroundColor:Colores.naranjaClaro,
        flex:0.1,
        flexDirection:"row",
        borderRadius:30,
        alignSelf:"flex-end",
        paddingHorizontal:"5%",
        marginTop:"3%",
        width:216
    },
    masDiscusion:{
        fontFamily:"Poppins",
        fontSize:64,
        color:Colores.blancoMentira,
        alignSelf:"center",
        margin:"1%",
        fontWeight:"thin"

    },
    masDiscusionTexto:{
        alignSelf:"center",
        fontFamily:"Poppins",
        fontSize:32,
        color:Colores.blancoMentira

    },
    // registroScreen
    registrateEnyTitulo: {
        flexDirection: "column",
        alignSelf: "center",
        marginTop: 35,
    },
    logoRegistro:{
        position: "absolute",
        width: 40,
        height: 40,
        top: 20,
        right: 20,
    },
    textoRegistrateEn: {
        color: Colores.naranjaNormal,
        alignSelf: "center",
        fontFamily: "Poppins",
        fontSize: 20,
        fontWeight: "bold",
    },
    textoTituloRegistro: {
        width: 250,
        height: 80,
        alignSelf: "center",
    },
    containerBlancoRegistro: {
        backgroundColor: Colores.blancoMentira,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flex: 2,
        paddingBottom: 40,
    },
    animales:{
        width: 300,
        height: 170,
        top: -100,
    },
    tituloHazteParte: {
        top: -110,
        alignSelf: "center",
        width: 320,
        height: 60,
    },
    datosContainerRegistro: {
        top: -100,
        gap: 20,
        flex: 2
    },
    inputContainerRegistro: {
        width: 300,
        height: 40,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colores.naranjaClaro,
        paddingHorizontal: 15,
        borderRadius: 100,
        gap: 15,
    },
    iconoInput: {
        width: 20,
        height: 20,
        left: 5,
        alignSelf: "center",
    },
    inputTextRegistro: {
        fontSize: 15,
        fontFamily: "Poppins",
        fontWeight: "bold",
        color: Colores.azulNormal,
        alignSelf: "center",
    },
    accederContainerRegistro: {
        
        flex: 0.5
    },
    botonesRegistroContainer: {
        top: 55,
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignSelf: "center",
    },
    botonRegistrarCancelar: {
        width: 130,
        height: 40,
        color: Colores.blancoMentira,
        backgroundColor: Colores.azulNormal,
        borderRadius: 100,
        justifyContent: "center",
        alignItems : "center",
    },
    textoRegistrateCancelar: {
        fontSize: 18,
        fontFamily: "Poppins",
        fontWeight: "bold",
        color: Colores.blancoMentira,
    },
    volverAlLoginContainer: {
        bottom: -40,
        width: "100%",
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        borderTopLeftRadius: 34,
        borderTopRightRadius: 34,
        borderColor: Colores.azulOscuro,
        backgroundColor: Colores.naranjaClaro,
        borderWidth: 1,
        marginTop: 30
    },
    tienesCuentaText:{
        color: Colores.azulNormal,
        fontSize: 14,
        fontFamily: "Poppins"
    },
    accederTextRegistro: {
        color: Colores.azulNormal,
        fontSize: 16,
        fontWeight: "bold",
        textDecorationLine: "underline",
        fontFamily: "Poppins"
    },

    // patitasRescateScreen
    headerBlanco: {
        height: 50,
        width: "100%",
        backgroundColor: Colores.blancoMentira,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    logoHeader: {
        width: 40,
        height: 40,
        marginEnd: 10,
    },
    arrowBack: {
        width: 40,
        height: 40,
        alignSelf: "center",
        marginStart: 10,
    },
    tituloHeader: {
        fontSize: 22,
        fontFamily: "Poppins",
        color: Colores.azulNormal,
        alignSelf: "center",
        marginStart: 10,
        marginEnd: 10,
    },
    containerAzulPatitasRescate: {
        width: "100%",
        height: "90%",
        backgroundColor: Colores.azulClaro,
        flexDirection: "column",
        alignItems: "center",
    },
    texto1PatitasRescate: {
        fontSize: 16,
        width: 260,
        fontWeight: "bold",
        fontFamily: "Poppins",
        color: Colores.azulOscuro,
        textAlign: "center",
        alignSelf: "center",
        marginStart: 15,
        marginEnd: 15,
    },
    texto2PatitasRescate: {
        fontSize: 14,
        width: 280,
        fontWeight: "bold",
        fontFamily: "Poppins",
        color: Colores.blancoMentira,
        textAlign: "center",
        alignSelf: "center",
        marginStart: 15,
        marginEnd: 15,
        marginBottom: 10,
    },
    mapa: {
        width: "100%",
        height: 280,
        marginBottom: 10,
    },
    inputContainerBuscarUbicacion: {
        height: 35,
        width: "95%",
        flexDirection: "row",
        backgroundColor: Colores.grisClaro,
        paddingHorizontal: 15,
        borderRadius: 30,
        marginEnd: 25,
        marginStart: 25,
        borderColor: Colores.azulOscuro,
        borderWidth: 0.5,
        alignSelf: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    iconoInputUbicacion: {
        width: 18,
        height: 25,
    },
    inputTextUbicacion: {
        fontSize: 10,
        fontFamily: "Poppins",
        alignSelf: "center",
        top: 4,
    },
    inputContainerDescribeSituacion: {
        height: 120,
        width: "95%",
        flexDirection: "column",
        backgroundColor: Colores.grisClaro,
        paddingHorizontal: 15,
        borderRadius: 20,
        marginEnd: 25,
        marginStart: 25,
        borderColor: Colores.azulOscuro,
        borderWidth: 0.5,
        alignSelf: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    inputTextDescribeSituacionTexto: {
        width: "100%",
        height: 40,
        fontSize: 14,
        fontFamily: "Poppins",
        textAlign: "left",
    },
    botonesBottomPatitasContainer: {
        width: "95%",
        flexDirection: "row",
        gap: 5,
        alignSelf: "center",
        left: -15,
        bottom: -40,
        justifyContent: "space-between",
    },
    circuloHuellaNaranja: {
        width: 35,
        height: 35,
        borderRadius: 30,
        backgroundColor: Colores.azulOscuro,
        justifyContent: "center",
        alignItems: "center",
    },
    iconoInputHuellaNaranja: {
        width: 30,
        height: 26,
        alignSelf: "center",
    },
    laUbicacionSeAnyadiraContainer: {
        top: 2,
        width: 200,
        height: 30,
        backgroundColor: Colores.azulOscuro,
        borderRadius: 40,
    },
    laUbicacionSeAnyadiraText: {
        marginTop: 3,
        marginStart: 7,
        fontSize: 8,
        fontFamily: "Poppins",
        color: Colores.naranjaClaro,
    },
    botonEnviarPatitasContainer: {
        width: 80,
        height: 30,
        backgroundColor: Colores.azulNormal,
        borderRadius: 30,
        justifyContent: "center",
        alignSelf: "center",
    },
    botonEnviarPatitasTexto: {
        fontSize: 10,
        fontFamily: "Poppins",
        color: Colores.blancoMentira,
        alignSelf: "center",
    },
    // refugioScreen
    scrollViewRefugio: {
        flex: 1,
    },
    headerNaranja: {
        height: 50,
        width: "100%",
        backgroundColor: Colores.naranjaClaro,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    tituloHeaderRefugio:{
        fontSize: 22,
        fontFamily: "Poppins",
        color: Colores.azulNormal,
        alignSelf: "center",
        marginStart: 10,
        marginEnd: 10,
    },
    inputContainerBuscarRefugio: {
        height: 35,
        flexDirection: "row",
        backgroundColor: Colores.blancoMentira,
        borderRadius: 5,
        margin: 15,
        borderColor: Colores.azulClaro,
        borderWidth: 1,
        alignItems: "center",
        paddingHorizontal: 10,
    },
    iconoLupa: {
        width: 25,
        height: 25,
    },
    inputTextBuscar: {
        position: "absolute",
        width: "100%",
        left: "15%",
    },
    adoptarCompromisoContainer:{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: 160,
        marginStart: 25,
        marginEnd: 25,
        backgroundColor: Colores.azulNormal,
        borderRadius: 10,
    },
    texto1Refugio:{
        fontSize: 17,
        fontFamily: "Poppins",
        fontWeight: "bold",
        color: Colores.naranjaNormal,
        textAlign: "left",
        marginStart: 15,
        marginEnd: 15,
    },
    texto2Refugio:{
        fontSize: 14,
        fontFamily: "Poppins",
        color: Colores.naranjaClaro,
        textAlign: "left",
        marginEnd: 15,
    },
    perrosgatos:{
        top: 7,
        width: 270,
        height: 50,
    },
    categoriasContainer:{
        width: "100%",
        flexDirection: "row",
        gap: "35%",
        margin: 20,
    },
    categoriasTexto:{
        fontSize: 18,
        fontFamily: "Poppins",
        color: Colores.azulNormal,
    },
    categoriasVerTodoTexto:{
        fontSize: 18,
        fontFamily: "Poppins",
        color: Colores.azulNormal,
        textDecorationLine: "underline",
    },
    categoriasView:{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    categoriaAnimalContainer:{
        flexDirection: "column",
        width: 80,
        height: 80,
        borderRadius: 10,
        backgroundColor: Colores.naranjaClaro,
        borderColor: Colores.azulNormal,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    imagenCategoria:{
        width: 50,
        height: 50,
    },
    categoriaAnimalTexto:{
        fontSize: 15,
        fontFamily: "Poppins",
        fontWeight: "bold",
        color: Colores.azulNormal,
    },
    perrosContainer:{
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 20,
        margin: 20,
    },
    containerPerro:{
        flexDirection: "column",
        width: 150,
        height: 160,
        borderRadius: 15,
        backgroundColor: Colores.naranjaClaro,
        borderColor: Colores.azulNormal,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    imagenPerro:{
        width: "95%",
        height: 110,
        borderRadius: 15,
    },
    nombrePerro:{
        width: "100%",
        fontSize: 15,
        fontFamily: "Poppins",
        fontWeight: "bold",
        color: Colores.azulNormal,
        textAlign: "left",
        marginStart: 15,
    },
    generoEdadPerro:{
        width: "100%",
        fontSize: 10,
        fontFamily: "Poppins",
        color: Colores.azulNormal,
        textAlign: "left",
        marginStart: 15,
    },
    iconoCorazon:{
        position: "absolute",
        right: 6,
        bottom: 3,
        width: 30,
        height: 30,
    },
    // plutoScreen

    // headerBlanco de patitasRescateScreen

    containerNaranjaPluto:{
        flex: 1,
        backgroundColor: Colores.naranjaClaro,
        width: "100%",
        height: "100%",
    },
    containerBlancoPluto:{
        width: "88%",
        height: "82%",
        alignSelf: "center",
        backgroundColor: Colores.blancoMentira,
        borderWidth: 1,
        borderColor: Colores.azulClaro,
        borderRadius: 10,
        marginTop: 15,
        marginBottom: 20,
        alignItems: "center",
    },
    imagenPluto:{
        width: "95%",
        height: "45%",
        alignSelf: "center",
        borderRadius: 15,
        marginTop: 10,
    },
    nombrePluto:{
        width: "100%",
        fontSize: 34,
        fontFamily: "Poppins",
        fontWeight: "bold",
        color: Colores.azulNormal,
        textAlign: "left",
        marginStart: 30,
    },
    murciaCorazonContainer:{
        width: "95%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginStart: 40,
        marginEnd: 50,
        marginTop: -50,
    },
    ubiMurciaContainer:{
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        marginStart: 10,
        marginTop: 40,
    },
    ubiPluto:{
        width: 17,
        height: 24,
    },
    murcia:{
        fontSize: 22,
        fontFamily: "Poppins",
        color: Colores.azulNormal,
    },
    iconoCorazonPluto:{
        top: 15,
        left: 12,
        width: 60,
        height: 60,
    },
    datosPlutoContainer:{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        marginStart: 20,
        marginEnd: 20,
        marginBottom: 20,
    },
    datoPlutoContainer:{
        width: 90,
        height: 90,
        borderRadius: 10,
        backgroundColor: Colores.naranjaClaro,
        borderWidth: 1,
        borderColor: Colores.azulNormal,
        alignItems: "center",
        justifyContent: "center",
    },
    sexoEdadTipoBold:{
        fontSize: 18,
        fontFamily: "Poppins",
        color: Colores.azulNormal,
    },
    sexoEdadTipo:{
        fontSize: 17,
        fontWeight: "bold",
        fontFamily: "Poppins",
        color: Colores.azulNormal,
    },
    informacionAnaContainer:{
        top: -10,
        width: "95%",
        flexDirection: "row",
        alignItems: "center",
    },
    imagenAna:{
        marginStart: 10,
        width: 40,
        height: 40,
    },
    nombreNickAnaContainer:{
        flexDirection: "column",
        marginStart: 20,
        marginEnd: "15%",
    },
    nombreAna:{
        fontSize: 14,
        fontWeight: "bold",
        fontFamily: "Poppins",
        color: Colores.azulNormal,
    },
    nickAna:{
        fontSize: 12,
        fontFamily: "Poppins",
        color: Colores.azulNormal,
    },
    contactoContainer:{
        width: 35,
        height: 35,
        borderRadius: 10,
        backgroundColor: Colores.naranjaClaro,
        alignItems: "center",
        justifyContent: "center",
        marginEnd: 10,
    },
    iconoContacto:{
        width: 25,
        height: 25,
    },
    descripcionAna:{
        fontSize: 11,
        fontFamily: "Poppins",
        color: Colores.azulNormal,
        textAlign: "left",
        marginStart: 5,
        marginEnd: 5,
    },
    dameUnHogarContainer:{
        width: "88%",
        height: 34,
        alignSelf: "center",
        borderRadius: 5,
        backgroundColor: Colores.azulNormal,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    dameUnHogarTexto:{
        fontSize: 15,
        fontFamily: "Poppins",
        fontWeight: "bold",
        color: Colores.blancoMentira,
    }
       
})