import { GlobalStyles } from "@/theme/GlobalStyles";
import { Link, useRouter, Redirect } from "expo-router";
import { View, Text, Image, Button, Alert } from "react-native";
import { Pressable, TextInput } from "react-native-gesture-handler";

export default function patitasRescateScreen() {
    const router = useRouter();

    return (
        <View>
            <View style={GlobalStyles.headerBlanco}>

                <Pressable onPress={() => router.push("/inicioScreen")}>
                    <Image source={require("../assets/images/PatitasRescate/arrowBack.png")} style={GlobalStyles.arrowBack}></Image>
                </Pressable>

                <Text style={GlobalStyles.tituloHeader}>Patitas al rescate</Text>

                <Image source={require("../assets/images/LogIn/Logo2.png")} style={GlobalStyles.logoHeader}></Image>

            </View>

            <View style={GlobalStyles.containerAzulPatitasRescate}>

                <Text style={GlobalStyles.texto1PatitasRescate}>
                    Este mapa conecta quienes necesitan ayuda con quienes están dispuestos a ofrecerla
                </Text>

                <Text style={GlobalStyles.texto2PatitasRescate}>
                    Indica el punto donde animal, una colonia o una situación requiere atención y descríbela para que podamos actuar juntos.
                </Text>

                <Image source={require("../assets/images/PatitasRescate/mapa.png")} style={GlobalStyles.mapa}></Image>

                <View style={GlobalStyles.inputContainerBuscarUbicacion}>
                    <Image source={require("../assets/images/PatitasRescate/ubi.png")} style={GlobalStyles.iconoInputUbicacion}></Image>
                    <TextInput placeholder="Buscar ubicación..." style={GlobalStyles.inputTextUbicacion}></TextInput>
                </View>

                <View style={GlobalStyles.inputContainerDescribeSituacion}>
                    <TextInput style={GlobalStyles.inputTextDescribeSituacionTexto} placeholder="Describe la situación aquí..."></TextInput>
                    <View style={GlobalStyles.botonesBottomPatitasContainer}>
                        <View style={GlobalStyles.circuloHuellaNaranja}>
                            <Image source={require("../assets/images/PatitasRescate/huellaNaranja.png")} style={GlobalStyles.iconoInputHuellaNaranja} />
                        </View>
                        <View style={GlobalStyles.laUbicacionSeAnyadiraContainer}>
                            <Text style={GlobalStyles.laUbicacionSeAnyadiraText}>La ubicación se añadirá automáticamente cuando se seleccione en el mapa</Text>
                        </View>
                        <Pressable style={GlobalStyles.botonEnviarPatitasContainer} onPress={() => router.push("/inicioScreen")}>
                            <Text style={GlobalStyles.botonEnviarPatitasTexto}>ENVIAR</Text>
                        </Pressable>
                    </View>
                </View>


            </View>
        </View>

    );
}