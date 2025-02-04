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
        marginTop: 85,
    },
    logoRegistro:{
        position: "absolute",
        top: 20,
        right: 20,
    },
    textoRegistrateEn: {
        color: Colores.naranjaNormal,
        alignSelf: "center",
        fontFamily: "Poppins",
        fontSize: 36,
        fontWeight: "bold",
    },
    textoTituloRegistro: {
        marginTop: -30,
        width: 575,
        height: 176,
        alignSelf: "center",
    },
    containerBlancoRegistro: {
        backgroundColor: Colores.blancoMentira,
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        flex: 2,
        paddingBottom: 40,
    },
    animales:{
        width: 650,
        height: 400,
        top: -270,
        left: -10,
    },
    tituloHazteParte: {
        top: -270,
        alignSelf: "center",
        width: 717,
        height: 122,
    },
    datosContainerRegistro: {
        gap: 40,
        flex: 2
    },
    inputContainerRegistro: {
        top: -250,
        width: 600,
        height: 84,
        alignSelf: "center",
        flexDirection: "row",
        backgroundColor: Colores.naranjaClaro,
        paddingHorizontal: 15,
        paddingVertical: 3,
        borderRadius: 100,
        gap: 30,
    },
    iconoInput: {
        left: 10,
        alignSelf: "center",
    },
    inputTextRegistro: {
        fontSize: 35,
        fontFamily: "Poppins",
        color: Colores.azulNormal,
    },
    accederContainerRegistro: {
        margin: 25,
        flex: 0.5
    },
    botonesRegistroContainer: {
        width: 600,
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "center",
    },
    botonRegistrarCancelar: {
        width: 280,
        height: 83,
        color: Colores.blancoMentira,
        backgroundColor: Colores.azulNormal,
        borderRadius: 100,
        justifyContent: "center",
        alignItems : "center",
    },
    textoRegistrateCancelar: {
        fontSize: 30,
        fontFamily: "Poppins",
        fontWeight: "bold",
        color: Colores.blancoMentira,
    },
    volverAlLoginContainer: {
        bottom: -40,
        width: 720,
        height: 70,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        borderTopLeftRadius: 34,
        borderTopRightRadius: 34,
        borderColor: Colores.azulOscuro,
        backgroundColor: Colores.naranjaClaro,
        borderWidth: 1,
    },
    tienesCuentaText:{
        color: Colores.azulNormal,
        fontSize: 24,
        fontFamily: "Poppins"
    },
    accederTextRegistro: {
        color: Colores.azulNormal,
        fontSize: 24,
        fontWeight: "bold",
        textDecorationLine: "underline",
        fontFamily: "Poppins"
    },

    // patitasRescateScreen
    headerBlanco: {
        height: 139,
        width: "100%",
        backgroundColor: Colores.blancoMentira,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    logoHeader: {
        width: 60,
        height: 60,
        marginEnd: 10,
    },
    arrowBack: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginStart: 10,
    },
    tituloHeader: {
        fontSize: 32,
        fontFamily: "Poppins",
        fontWeight: "bold",
        color: Colores.azulNormal,
        alignSelf: "center",
        marginStart: 10,
        marginEnd: 10,
    },
    containerAzulPatitasRescate: {
        width: "100%",
        height: "100%",
        backgroundColor: Colores.azulClaro,
    },
    texto1PatitasRescate: {
        fontSize: 32,
        fontWeight: "bold",
        fontFamily: "Poppins",
        color: Colores.azulOscuro,
        textAlign: "center",
        alignSelf: "center",
        marginTop: 10,
        marginStart: 15,
        marginEnd: 15,
    },
    texto2PatitasRescate: {
        fontSize: 28,
        fontFamily: "Poppins",
        color: Colores.blancoMentira,
        textAlign: "center",
        alignSelf: "center",
        marginStart: 15,
        marginEnd: 15,
    },
    mapa: {
        width: 720,
        height: 612,
    },
    inputContainerBuscarUbicacion: {
        height: 50,
        width: 706,
        flexDirection: "row",
        backgroundColor: Colores.grisClaro,
        paddingHorizontal: 15,
        borderRadius: 30,
        borderColor: Colores.azulOscuro,
        borderWidth: 1,
        alignSelf: "center",
        alignItems: "center",
        gap: 10,
        margin: 20,
    },
    iconoInputUbicacion: {
        width: 23,
        height: 32,
    },
    inputTextUbicacion: {
        fontSize: 20,
        fontFamily: "Poppins",
        alignSelf: "center",
        top: 4,
        color: Colores.azulNormal,
    },
    inputContainerDescribeSituacion: {
        width: 706,
        height: 315,
        flexDirection: "column",
        backgroundColor: Colores.grisClaro,
        paddingHorizontal: 15,
        borderRadius: 20,
        marginEnd: 25,
        marginStart: 25,
        borderColor: Colores.azulOscuro,
        borderWidth: 0.5,
        alignSelf: "center",
        justifyContent: "space-between",
    },
    inputTextDescribeSituacionTexto: {
        width: "100%",
        fontSize: 22,
        fontFamily: "Poppins",
        textAlign: "left",
        color: Colores.azulNormal,
    },
    botonesBottomPatitasContainer: {
        flexDirection: "row",
        gap: 20,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "space-around",
        marginBottom: 10,
    },
    circuloHuellaNaranja: {
        width: 63,
        height: 63,
        borderRadius: 30,
        backgroundColor: Colores.azulOscuro,
        justifyContent: "center",
        alignItems: "center",
    },
    iconoInputHuellaNaranja: {
        width: 51,
        height: 47,
        alignSelf: "center",
    },
    laUbicacionSeAnyadiraContainer: {
        top: 2,
        width: 387,
        height: 54,
        backgroundColor: Colores.azulOscuro,
        borderRadius: 40,
    },
    laUbicacionSeAnyadiraText: {
        marginTop: 5,
        marginStart: 15,
        fontSize: 15,
        fontFamily: "Poppins",
        color: Colores.naranjaClaro,
    },
    botonEnviarPatitasContainer: {
        width: 176,
        height: 49,
        backgroundColor: Colores.azulNormal,
        borderRadius: 30,
        justifyContent: "center",
    },
    botonEnviarPatitasTexto: {
        fontSize: 22,
        fontFamily: "Poppins",
        color: Colores.blancoMentira,
        alignSelf: "center",
    },
    // refugioScreen
    scrollViewRefugio: {
        flex: 1,
    },
    headerNaranja: {
        height: 126,
        width: "100%",
        backgroundColor: Colores.naranjaClaro,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    tituloHeaderRefugio: {
        fontSize: 44,
        fontFamily: "Poppins",
        color: Colores.azulNormal,
        alignSelf: "center",
        marginStart: 10,
        marginEnd: 10,
    },
    inputContainerBuscarRefugio: {
        width: 629,
        height: 60,
        alignSelf: "center",
        flexDirection: "row",
        backgroundColor: Colores.blancoMentira,
        borderRadius: 5,
        margin: 15,
        borderColor: Colores.azulClaro,
        borderWidth: 1,
        alignItems: "center",
        paddingHorizontal: 10,
        gap: 30,
        marginTop: 40,
        marginBottom: 50,
    },
    iconoLupa: {
        width: 36,
        height: 36,
    },
    inputTextBuscar: {
        fontSize: 32,
    },
    adoptarCompromisoContainer:{
        width: 630,
        height: 378,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginStart: 25,
        marginEnd: 25,
        backgroundColor: Colores.azulNormal,
        borderRadius: 24,
    },
    texto1Refugio:{
        fontSize: 32,
        fontFamily: "Poppins",
        fontWeight: "bold",
        color: Colores.naranjaNormal,
        textAlign: "left",
        marginStart: 20,
        marginEnd: 20,
    },
    texto2Refugio:{
        fontSize: 28,
        fontFamily: "Poppins",
        color: Colores.naranjaClaro,
        textAlign: "left",
        marginStart: 20,
        marginEnd: 20,
    },
    perrosgatos:{
        top: 37,
        width: 512,
        height: 128,
    },
    categoriasContainer:{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        gap: 150,
        marginTop: 20,
        marginBottom: 20,
    },
    categoriasTexto:{
        fontSize: 32,
        fontFamily: "Poppins",
        color: Colores.azulNormal,
    },
    categoriasVerTodoTexto:{
        fontSize: 32,
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
        width: 161,
        height: 161,
        borderRadius: 10,
        backgroundColor: Colores.naranjaClaro,
        borderColor: Colores.azulNormal,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 25,
    },
    imagenCategoria:{
        width: 100,
        height: 100,
    },
    categoriaAnimalTexto:{
        fontSize: 32,
        fontFamily: "Poppins",
        fontWeight: "bold",
        color: Colores.azulNormal,
    },
    perrosContainer:{
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        gap: 20,
        marginEnd: 20,
        marginBottom: 30,
    },
    containerPerro:{
        flexDirection: "column",
        width: 271,
        height: 271,
        borderRadius: 15,
        backgroundColor: Colores.naranjaClaro,
        borderColor: Colores.azulNormal,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    imagenPerro:{
        width: 256,
        height: 202,
        borderRadius: 15,
    },
    nombrePerro:{
        width: "100%",
        fontSize: 20,
        fontFamily: "Poppins",
        fontWeight: "bold",
        color: Colores.azulNormal,
        textAlign: "left",
        marginStart: 15,
    },
    generoEdadPerro:{
        width: "100%",
        fontSize: 16,
        fontFamily: "Poppins",
        color: Colores.azulNormal,
        textAlign: "left",
        marginStart: 15,
    },
    iconoCorazon:{
        position: "absolute",
        right: 6,
        bottom: 4,
        width: 37,
        height: 37,
    },
    // plutoScreen

    // headerBlanco de patitasRescateScreen

    containerNaranjaPluto:{
        flex: 1,
        backgroundColor: Colores.naranjaClaro,
        width: "100%",
        height: "100%",
        alignItems: "center",
    },
    containerBlancoPluto:{
        width: 635,
        height: 1112,
        alignSelf: "center",
        backgroundColor: Colores.blancoMentira,
        borderWidth: 0.5,
        borderColor: Colores.azulClaro,
        borderRadius: 15,
        marginTop: 50,
        marginBottom: 50,
        alignItems: "center",
        
    },
    imagenPluto:{
        width: 600,
        height: 473,
        alignSelf: "center",
        borderRadius: 15,
        marginTop: 20,
    },
    nombrePluto:{
        width: "100%",
        fontSize: 64,
        fontFamily: "Poppins",
        fontWeight: "bold",
        color: Colores.azulNormal,
        textAlign: "left",
        marginStart: 50,
    },
    murciaCorazonContainer:{
        width: "95%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginStart: 50,
        marginEnd: 50,
        marginTop: -50,
    },
    ubiMurciaContainer:{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginStart: 10,
        marginTop: 0,
    },
    murcia:{
        fontSize: 36,
        fontFamily: "Poppins",
        color: Colores.azulNormal,
    },
    iconoCorazonPluto:{
        top: -30,
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
        width: 169,
        height: 167,
        borderRadius: 10,
        backgroundColor: Colores.naranjaClaro,
        borderWidth: 1,
        borderColor: Colores.azulNormal,
        alignItems: "center",
        justifyContent: "center",
    },
    sexoEdadTipoBold:{
        fontSize: 32,
        fontFamily: "Poppins",
        color: Colores.azulNormal,
    },
    sexoEdadTipo:{
        fontSize: 28,
        fontWeight: "bold",
        fontFamily: "Poppins",
        color: Colores.azulNormal,
    },
    informacionAnaContainer:{
        width: "95%",
        flexDirection: "row",
        alignItems: "center",
    },
    imagenAna:{
        marginStart: 10,
    },
    nombreNickAnaContainer:{
        flexDirection: "column",
        marginStart: 20,
        marginEnd: "25%",
    },
    nombreAna:{
        fontSize: 24,
        fontWeight: "bold",
        fontFamily: "Poppins",
        color: Colores.azulNormal,
    },
    nickAna:{
        fontSize: 20,
        fontFamily: "Poppins",
        color: Colores.azulNormal,
    },
    contactoContainer:{
        width: 63,
        height: 63,
        borderRadius: 18,
        backgroundColor: Colores.naranjaClaro,
        alignItems: "center",
        justifyContent: "center",
        marginEnd: 20,
    },
    descripcionAna:{
        fontSize: 22,
        fontFamily: "Poppins",
        color: Colores.azulNormal,
        textAlign: "left",
        margin: 20,
    },
    dameUnHogarContainer:{
        width: 629,
        height: 72,
        borderRadius: 15,
        backgroundColor: Colores.azulNormal,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    dameUnHogarTexto:{
        fontSize: 28,
        fontFamily: "Poppins",
        fontWeight: "bold",
        color: Colores.blancoMentira,
    }
       
})