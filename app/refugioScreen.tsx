import { GlobalStyles } from "@/theme/GlobalStyles";
import { Link, useRouter, Redirect } from "expo-router";
import { View, Text, Image, Button, Alert } from "react-native";
import { Pressable, ScrollView, TextInput } from "react-native-gesture-handler";
import { Colores } from "@/theme/GlobalStyles";

export default function refugioScreen() {
    const router = useRouter();

    return (
        <ScrollView style={GlobalStyles.scrollViewRefugio}>
            <View style={GlobalStyles.headerNaranja}>

                <Pressable onPress={() => router.push("/inicioScreen")}>
                    <Image source={require("../assets/images/PatitasRescate/arrowBack.png")} style={GlobalStyles.arrowBack}></Image>
                </Pressable>

                <Text style={GlobalStyles.tituloHeader}>Refugio de patitas</Text>

                <Image source={require("../assets/images/LogIn/Logo2.png")} style={GlobalStyles.logoHeader}></Image>

            </View>

            <View style={GlobalStyles.inputContainerBuscarRefugio}>
                <Image source={require("../assets/images/Refugio/lupa.png")} style={GlobalStyles.iconoLupa}></Image>
                <TextInput placeholder="Buscar..." placeholderTextColor={Colores.naranjaNormal} style={GlobalStyles.inputTextBuscar}></TextInput>
            </View>

            <View style={GlobalStyles.adoptarCompromisoContainer}>
                <Text style={GlobalStyles.texto1Refugio}>Adoptar es un compromiso para toda la vida, piénsalo bien antes de dar el paso.</Text>
                <Text style={GlobalStyles.texto2Refugio}>Si no puedes cuidarlo hoy, mañana y siempre, no adoptes.</Text>
                <Image source={require("../assets/images/Refugio/perrosgatos.png")} style={GlobalStyles.perrosgatos}></Image>
            </View>

            <View style={GlobalStyles.categoriasContainer}>
                <Text style={GlobalStyles.categoriasTexto}>CATEGORÍAS</Text>
                <Text style={GlobalStyles.categoriasVerTodoTexto}>Ver todo</Text>
            </View>

            <View style={GlobalStyles.categoriasView}>
                <View style={GlobalStyles.categoriaAnimalContainer}>
                    <Image source={require("../assets/images/Refugio/perros.png")} style={GlobalStyles.imagenCategoria}></Image>
                    <Text style={GlobalStyles.categoriaAnimalTexto}>Perros</Text>
                </View>

                <View style={GlobalStyles.categoriaAnimalContainer}>
                    <Image source={require("../assets/images/Refugio/gatos.png")} style={GlobalStyles.imagenCategoria}></Image>
                    <Text style={GlobalStyles.categoriaAnimalTexto}>Gatos</Text>
                </View>

                <View style={GlobalStyles.categoriaAnimalContainer}>
                    <Image source={require("../assets/images/Refugio/conejos.png")} style={GlobalStyles.imagenCategoria}></Image>
                    <Text style={GlobalStyles.categoriaAnimalTexto}>Conejos</Text>
                </View>
            </View>

            <View style={GlobalStyles.perrosContainer}>
                <Pressable style={GlobalStyles.containerPerro} onPress={() => router.push("/plutoScreen")}>
                    <Image source={require("../assets/images/Refugio/pluto.png")} style={GlobalStyles.imagenPerro}></Image>
                    <Text style={GlobalStyles.nombrePerro}>Pluto</Text>
                    <Text style={GlobalStyles.generoEdadPerro}>Macho, 1'5 años</Text>
                    <Image source={require("../assets/images/Refugio/corazon.png")} style={GlobalStyles.iconoCorazon}></Image>
                </Pressable>

                <View style={GlobalStyles.containerPerro}>
                    <Image source={require("../assets/images/Refugio/afro.png")} style={GlobalStyles.imagenPerro}></Image>
                    <Text style={GlobalStyles.nombrePerro}>Afro y Shaggy</Text>
                    <Text style={GlobalStyles.generoEdadPerro}>Macho, 3 años</Text>
                    <Image source={require("../assets/images/Refugio/corazon.png")} style={GlobalStyles.iconoCorazon}></Image>
                </View>

                <View style={GlobalStyles.containerPerro}>
                    <Image source={require("../assets/images/Refugio/stelle.png")} style={GlobalStyles.imagenPerro}></Image>
                    <Text style={GlobalStyles.nombrePerro}>Stelle</Text>
                    <Text style={GlobalStyles.generoEdadPerro}>Hembra, 1'5 años</Text>
                    <Image source={require("../assets/images/Refugio/corazon.png")} style={GlobalStyles.iconoCorazon}></Image>
                </View>

                <View style={GlobalStyles.containerPerro}>
                    <Image source={require("../assets/images/Refugio/eros.png")} style={GlobalStyles.imagenPerro}></Image>
                    <Text style={GlobalStyles.nombrePerro}>Eros</Text>
                    <Text style={GlobalStyles.generoEdadPerro}>Macho, 1 años</Text>
                    <Image source={require("../assets/images/Refugio/corazon.png")} style={GlobalStyles.iconoCorazon}></Image>
                </View>

                <View style={GlobalStyles.containerPerro}>
                    <Image source={require("../assets/images/Refugio/pepe.png")} style={GlobalStyles.imagenPerro}></Image>
                    <Text style={GlobalStyles.nombrePerro}>Lola</Text>
                    <Text style={GlobalStyles.generoEdadPerro}>Hembra, 4 años</Text>
                    <Image source={require("../assets/images/Refugio/corazon.png")} style={GlobalStyles.iconoCorazon}></Image>
                </View>

                <View style={GlobalStyles.containerPerro}>
                    <Image source={require("../assets/images/Refugio/baltasar.png")} style={GlobalStyles.imagenPerro}></Image>
                    <Text style={GlobalStyles.nombrePerro}>Baltasar</Text>
                    <Text style={GlobalStyles.generoEdadPerro}>Macho, 10 años</Text>
                    <Image source={require("../assets/images/Refugio/corazon.png")} style={GlobalStyles.iconoCorazon}></Image>
                </View>
            </View>

        </ScrollView>
    );
}