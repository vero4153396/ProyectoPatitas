import { GlobalStyles } from "@/theme/GlobalStyles";
import { Redirect, Link, useRouter } from "expo-router";
import { View, Text, Image, Button, Alert, Pressable } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { usePatitas } from "@/hooks/usePatitas";


export default function Index() {
    const router = useRouter();
    return (
        <View style={GlobalStyles.containerAzul}>
            <View style={GlobalStyles.headerComunidad}>
                <Pressable onPress={() => router.push("./inicioScreen")}>
                    <Image source={require("../../assets/images/Inicio/arrow-back-circle-outline.png")} ></Image>
                </Pressable>
                <Text style={GlobalStyles.headerComunidadTexto} >
                Comunidad animal
                </Text>
                <Image source={require("../../assets/images/LogIn/Logo2.png")} style={GlobalStyles.logo}></Image>

            </View>
            <View style={GlobalStyles.comunidadContainerBlanco}>

            </View>
        </View>
    );
}
