import { Colores, GlobalStyles } from "@/theme/GlobalStyles";
import { Redirect, Link, useRouter } from "expo-router";
import { View, Text, Image, Button, Alert, Pressable, StatusBar } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";


export default function Index() {
    const router = useRouter();
    const elementos = [
        { id: 1, texto: "Guías de alimentación B.A.R.F. para tu animal.", texto2: "21" },
        { id: 2, texto: "Consejos para sobrellevar la ola de calor con tu mascota.", texto2: "45" },
        { id: 3, texto: "Cómo empezar a adiestrar a tu mascota.", texto2: "32" },
        { id: 4, texto: "Marcha montañera con nuestro compañero favorito", texto2: "61" },
        { id: 5, texto: "Cumpleaños de Pluto en el parque el jueves que viene", texto2: "220" },
    ];
    return (
        <View style={GlobalStyles.containerAzul}>
            <StatusBar backgroundColor={Colores.azulNormal} />
            <View style={GlobalStyles.headerComunidad}>
                <Pressable onPress={() => router.push("./inicioScreen")}>
                    <Image source={require("../../assets/images/Inicio/arrow-back-circle-outline.png")} ></Image>
                </Pressable>
                <Text style={GlobalStyles.headerComunidadTexto} >
                    COMUNIDAD ANIMAL
                </Text>
                <Image source={require("../../assets/images/LogIn/Logo2.png")} ></Image>

            </View>
            <View style={GlobalStyles.comunidadContainerBlanco}>
                <View style={GlobalStyles.containerAnuncio}>
                    <View style={GlobalStyles.containerHeaderAnuncio}>
                        <Image source={require("../../assets/images/Comunidad/calendario1.png")} ></Image>
                        <Text style={GlobalStyles.textoHeaderAnuncio}>PATITAS EN MARCHA (evento)</Text>
                    </View>
                    <Text style={GlobalStyles.textoAnuncio}>
                        Descubre eventos solidarios creados por la
                        comunidad: actividades deportivas, caminatas
                        y mucho mas. 🐾♥️ Cada participación suma
                        para ayudar a los animales que más lo
                        necesitan. ¡Únete y sé parte del cambio!
                    </Text>
                </View>

                <View style={GlobalStyles.discusionContainer}>
                    <Text style={GlobalStyles.discusionTitulo}>
                        TEMAS DE DISCUSIÓN
                    </Text>
                    <ScrollView style={GlobalStyles.scrollContainer}>
                        {elementos.map((item) => (
                            <View key={item.id} style={GlobalStyles.scrollElemento}>
                                <Text style={GlobalStyles.elementoTexto}>{item.texto}</Text>

                                <View style={GlobalStyles.bocadilloContainer}>
                                    <Image source={require("../../assets/images/Comunidad/bocadillodemensaje1.png")} style={GlobalStyles.elementoBocadillo} />
                                    <Text style={GlobalStyles.elementoNumero}>{item.texto2}</Text>

                                </View>

                            </View>
                        ))}
                    </ScrollView>
                    <View style={GlobalStyles.nuevaDiscusionContainer}>
                    <Text style={GlobalStyles.masDiscusion}>
                        +
                    </Text>
                    <Text style={GlobalStyles.masDiscusionTexto}>
                        Nueva
                    </Text>
                    </View>
                </View>

            </View>
        </View>
    );
}
