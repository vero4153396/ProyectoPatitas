import { GlobalStyles } from "@/theme/GlobalStyles";
import { Link, useRouter, Redirect } from "expo-router";
import { View, Text, Image, Button, Alert } from "react-native";
import { Pressable, ScrollView, TextInput } from "react-native-gesture-handler";

export default function plutoScreen() {
    const router = useRouter();

    return (
        <View style={GlobalStyles.containerNaranjaPluto}>

            <View style={GlobalStyles.headerBlanco}>

                <Pressable onPress={() => router.push("/inicioScreen")}>
                    <Image source={require("../assets/images/PatitasRescate/arrowBack.png")} style={GlobalStyles.arrowBack}></Image>
                </Pressable>

                <Text style={GlobalStyles.tituloHeader}>Patitas al rescate</Text>

                <Image source={require("../assets/images/LogIn/Logo2.png")} style={GlobalStyles.logoHeader}></Image>

            </View>

            <View style={GlobalStyles.containerBlancoPluto}>
                <Image source={require("../assets/images/Refugio/pluto.png")} style={GlobalStyles.imagenPluto}></Image>
                <Text style={GlobalStyles.nombrePluto}>Pluto</Text>

                <View style={GlobalStyles.murciaCorazonContainer}>
                    <View style={GlobalStyles.ubiMurciaContainer}>
                        <Image source={require("../assets/images/Pluto/ubi.png")}></Image>
                        <Text style={GlobalStyles.murcia}>Murcia</Text>
                    </View>
                    <Image source={require("../assets/images/Pluto/corazon.png")} style={GlobalStyles.iconoCorazonPluto}></Image>
                </View>

                <View style={GlobalStyles.datosPlutoContainer}>
                    <View style={GlobalStyles.datoPlutoContainer}>
                        <Text style={GlobalStyles.sexoEdadTipoBold}>Sexo</Text>
                        <Text style={GlobalStyles.sexoEdadTipo}>Macho</Text>
                    </View>

                    <View style={GlobalStyles.datoPlutoContainer}>
                        <Text style={GlobalStyles.sexoEdadTipoBold}>Edad</Text>
                        <Text style={GlobalStyles.sexoEdadTipo}>1.5 años</Text>
                    </View>

                    <View style={GlobalStyles.datoPlutoContainer}>
                        <Text style={GlobalStyles.sexoEdadTipoBold}>Tipo</Text>
                        <Text style={GlobalStyles.sexoEdadTipo}>Bodeguero</Text>
                    </View>
                </View>

                <View style={GlobalStyles.informacionAnaContainer}>
                    <Image source={require("../assets/images/Pluto/fotoAna.png")} style={GlobalStyles.imagenAna}></Image>
                    <View style={GlobalStyles.nombreNickAnaContainer}>
                        <Text style={GlobalStyles.nombreAna}>Ana</Text>
                        <Text style={GlobalStyles.nickAna}>PerrosAbandona2</Text>
                    </View>
                    <View style={GlobalStyles.contactoContainer}>
                        <Image source={require("../assets/images/Pluto/telefono.png")}></Image>
                    </View>
                    <View style={GlobalStyles.contactoContainer}>
                        <Image source={require("../assets/images/Pluto/chat.png")}></Image>
                    </View>
                </View>

                <Text style={GlobalStyles.descripcionAna}>
                    Pluto entró de forma inesperada a una peluquería
                    en la que justo estaba uno de nuestros voluntarios,
                    no llevaba chip y nadie lo ha reclamado así que busca familia definitiva!
                </Text>
            </View>

            <View style={GlobalStyles.dameUnHogarContainer}>
                <Text style={GlobalStyles.dameUnHogarTexto}>DAME UN HOGAR</Text>
            </View>

        </View>
    );
}