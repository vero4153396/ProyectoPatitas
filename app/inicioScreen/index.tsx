import { GlobalStyles } from "@/theme/GlobalStyles";
import { Redirect, Link, useRouter } from "expo-router";
import { View, Text, Image, Button, Alert, Pressable } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { usePatitas } from "@/hooks/usePatitas";


export default function Index() {
    const router = useRouter();
    return (
        <View style={GlobalStyles.containerAzul}>
            <View style={GlobalStyles.header}>
                <Pressable onPress={() => router.push("./registroScreen")}>
                    <Image source={require("../../assets/images/Inicio/arrow-back-circle-outline.png")} ></Image>
                </Pressable>
                <Text style={GlobalStyles.headerTextoInicio}>
                    Petconnect
                </Text>


                <Image source={require("../../assets/images/LogIn/Logo2.png")} style={GlobalStyles.logo}></Image>

            </View>
            <View style={GlobalStyles.directorContainer}>
                <Image source={require("../../assets/images/Inicio/director1.png")} ></Image>
                <Text style={GlobalStyles.directorTexto}>
                    El Director
                </Text>
                <Text style={GlobalStyles.directorIdentificador}>
                    @el_boss
                </Text>

            </View>
            <View style={GlobalStyles.containerBlancoInicio}>
                <View style={GlobalStyles.menuContainer}>
                    <Pressable style={GlobalStyles.menuElemento} onPress={() => router.push("./inicioScreen")} >
                        <Image source={require("../../assets/images/Inicio/huellaPatitasAlRescate1.png")}></Image>
                        <Text style={GlobalStyles.menuElementoTexto}>
                            Patitas al rescate
                        </Text>

                    </Pressable>
                    <Pressable style={GlobalStyles.menuElemento} onPress={() => router.push("./comunidadScreen")} >
                        <Image source={require("../../assets/images/Inicio/manosAgarrandoHuellita.png")}></Image>
                        <Text style={GlobalStyles.menuElementoTexto}>
                            Comunidad animal
                        </Text>

                    </Pressable>
                    <Pressable style={GlobalStyles.menuElemento} onPress={() => router.push("./inicioScreen")} >
                        <Image source={require("../../assets/images/Inicio/huellitasPatasEnMarcha.png")}></Image>
                        <Text style={GlobalStyles.menuElementoTexto}>
                            Patas en marcha
                        </Text>

                    </Pressable>
                    <Pressable style={GlobalStyles.menuElemento} onPress={() => router.push("./inicioScreen")} >
                        <Image source={require("../../assets/images/Inicio/lupa.png")}></Image>
                        <Text style={GlobalStyles.menuElementoTexto}>
                            Sobre Petconnect
                        </Text>

                    </Pressable>
                    <Pressable style={GlobalStyles.menuElemento} onPress={() => router.push("./inicioScreen")} >
                        <Image source={require("../../assets/images/Inicio/adoptMe.png")}></Image>
                        <Text style={GlobalStyles.menuElementoTexto}>
                            Refugio de patitas
                        </Text>

                    </Pressable>
                </View>
                <View style={GlobalStyles.protectorasContainer}>
                    PROTECTORAS EN COLABORACIÓN
                    <View style={GlobalStyles.protectorasImagenesContainer}>
                        <Link href={"https://perrxsabandona2.wixsite.com/perrosabandona2/contacto"}>
                            <Image source={require("../../assets/images/Inicio/logoProtectora11.png")}></Image>
                        </Link>
                        <Link href={"https://thelemondog.wordpress.com/contacto/"}>
                            <Image source={require("../../assets/images/Inicio/logoProtectora21.png")}></Image>
                        </Link>

                    </View>
                </View>
            </View>
        </View>
    );
}
