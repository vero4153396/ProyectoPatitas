import { StyleSheet } from "react-native"

export const Colores = {
    azulNormal: "#194A6E",
    naranjaClaro: "#FDB672",
    naranjaNormal: "#FD8A2B",
    naranjaOscuro: "#FF7300",
    blancoMentira: "#F9F9F9",
    azulOscuro: "#092B44",
    azulClaro: "#5385B0",
    grisClaro: "#D9D9D9",
}


export const GlobalStyles = StyleSheet.create({
    containerCentrado: {
        flex: 1,
        backgroundColor: "#ff0000",
    },
    titulo: {
        fontSize: 22
    },
    tituloHazteParte: {
        marginTop: 40,
        alignSelf: "center",
        width: 330,
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
        alignSelf: 'center',
        borderRadius: 50
    },

    containerAzul: {
        flex: 2,
        backgroundColor: Colores.azulNormal,
    },
    logo: {
        position: "absolute",
        right: 10,
        width: 50,
        height: 50,
        marginEnd: 10,
    },
    textoTitulo: {
        marginEnd: 10,
        marginStart: 10,
        width: 300,
        height: 90
    },
    containerBlanco: {
        backgroundColor: Colores.blancoMentira,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        flex: 2,
        paddingBottom: 40

    },
    botonesRegistroContainer: {
        flexDirection: "row",
        gap: 40,
        alignSelf: "center",
    },
    textoRegistrateCancelar: {
        justifyContent: "center",
        alignSelf: "center",
        fontSize: 15,
        fontFamily: "Poppins",
        color: Colores.blancoMentira,
    },
    botonRegistrarCancelar: {
        width: 130,
        height: 40,
        color: Colores.blancoMentira,
        backgroundColor: Colores.azulNormal,
        borderRadius: 30,
        justifyContent: "center",
    },
    textoLogin: {
        flex: 1,
        fontFamily: "Poppins"
    },
    registrateEnyTitulo: {
        position: "absolute",
        top: 30,
        alignSelf: "center",
    },
    textoRegistrateEn: {
        color: Colores.naranjaNormal,
        alignSelf: "center",
        fontFamily: "Poppins",
        fontSize: 20
    },
    textoAccede: {
        width: "auto",
        height: 80,
        marginEnd: 20,
        marginStart: 20,
        marginTop: 100
    },
    gatoPerro: {
        position: 'absolute',
        alignSelf: "center",
        width: 200,
        height: 150,
        flex: 1

    },
    perro: {
        position: 'absolute',
        top: -90,
        right: 30,
        width: 150,
        height: 150,
    },
    gato: {
        position: 'absolute',
        top: -90,
        left: 0,
        width: 110,
        height: 160,
    },
    statusBar: {
        backgroundColor: Colores.azulNormal
    },
    inputContainer: {
        flexDirection: "row",
        backgroundColor: Colores.naranjaClaro,
        paddingHorizontal: 15,
        paddingVertical: 3,
        borderRadius: 30,
        marginEnd: 25,
        marginStart: 25,
        borderColor: Colores.azulClaro,
        borderWidth: 0.5
    },
    inputText: {
        paddingStart: 10,
        fontSize: 15,
        fontFamily: "Poppins",
        alignSelf: "center",
    },
    datosContainer: {
        gap: 20,
        flex: 2
    },
    rememberContainer: {
        marginEnd: 25,
        marginStart: 25,
        paddingHorizontal: 5,
        flexDirection: "row"
    },
    rememberText: {
        fontSize: 13,
        fontWeight: "bold",
        fontFamily: "Poppins",
    },
    rememberButton: {
        backgroundColor: Colores.naranjaClaro,
        borderColor: Colores.azulClaro,
        borderWidth: 0.5
    },
    accederContainer: {
        margin: 25,
        flex: 0.5
    },
    volverAlLoginContainer: {
        marginTop: 35,
        flexDirection: "row",
        gap: 40,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        width: "120%",
        height: 60,
        borderRadius: 30,
        borderColor: Colores.azulOscuro,
        backgroundColor: Colores.naranjaClaro,
        borderWidth: 1,
        bottom: 0,
    },
    accederButton: {
        backgroundColor: Colores.azulOscuro,
        color: Colores.blancoMentira,
        borderRadius: 30,
        fontFamily: "Poppins",
    },
    accederTextContainer: {
        flexDirection: "row",
        gap: "16%"
    },
    accederText: {
        paddingTop: 10,
        color: Colores.azulNormal,
        fontSize: 13,
        textDecorationLine: "underline",
        fontFamily: "Poppins"
    },
    accesoRapidoContainer: {
        marginEnd: 25,
        marginStart: 30,
        flex: 0.5,
        flexDirection: "column"
    },
    accesoRapidoTexto: {
        fontFamily: "Poppins",
        fontWeight: "bold",
        fontSize: 11,
        color: Colores.azulOscuro,
    },
    accesoTextoContainer: {
        flexDirection: "row",
    },
    accesoLinea: {
        borderBottomColor: Colores.naranjaNormal,
        height: 0.7,
        backgroundColor: Colores.naranjaNormal,
        width: "20%",
        alignSelf: "center",
    },
    accesoLogos: {
        width: 24,
        height: 24,

    },
    accesoLogosContainer: {
        flexDirection: "row",
        gap: 10,
        alignSelf: "center",
        marginTop: 20,
        marginBottom: 20
    },
    iconoInput: {
        width: 30,
        height: 30,
        left: 0,
        alignSelf: "center",
    },
    // patitasRescateScreen
    headerBlanco: {
        height: 80,
        width: "100%",
        backgroundColor: Colores.blancoMentira,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomLeftRadius: 14,
        borderBottomRightRadius: 14,
    },
    logoHeader: {
        width: 50,
        height: 50,
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
        height: "100%",
        backgroundColor: Colores.azulClaro,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    texto1PatitasRescate: {
        top: -115,
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
        top: -110,
        fontSize: 14,
        width: 280,
        fontWeight: "bold",
        fontFamily: "Poppins",
        color: Colores.blancoMentira,
        textAlign: "center",
        alignSelf: "center",
        marginStart: 15,
        marginEnd: 15,
    },
    mapa: {
        top: -100,
        width: "100%",
        height: 340,
    },
    inputContainerBuscarUbicacion: {
        top: -90,
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
    },
    iconoInputUbicacion: {
        width: 16,
        height: 22,
    },
    inputTextUbicacion: {
        fontSize: 10,
        fontFamily: "Poppins",
        alignSelf: "center",
        top: 4,
    },
    inputContainerDescribeSituacion: {
        top: -80,
        bottom: -10,
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
    },
    inputTextDescribeSituacionTexto: {
        width: "100%",
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
        bottom: -35,
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
        height: 80,
        width: "100%",
        backgroundColor: Colores.naranjaClaro,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
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
    
    
})