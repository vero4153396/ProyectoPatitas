import { GlobalStyles } from "@/theme/GlobalStyles";
import { Redirect, Link, useRouter } from "expo-router";
import { View, Text, Image, Button, Alert } from "react-native";
import { Pressable, TextInput } from "react-native-gesture-handler";
import { usePatitas } from "@/hooks/usePatitas";

export default function Index() {
  const router = useRouter();
  return (
    <View style={GlobalStyles.containerAzul}>

      <View style={GlobalStyles.textoLogin}>
        <View style={{ width: "100%" }}>
        </View>
      </View>

      <View style={GlobalStyles.containerBlanco}>

        <Image source={require("../assets/images/LogIn/gatito.png")} style={GlobalStyles.gatoPerro}></Image>



        <View style={GlobalStyles.datosContainer}>
          <Image source={require("../assets/images/LogIn/Titulo2.png")} style={GlobalStyles.textoAccede}></Image>

          <View style={GlobalStyles.inputContainer}>
            <TextInput placeholder="Email" style={GlobalStyles.inputText}></TextInput>
          </View>
          <View style={GlobalStyles.inputContainer}>
            <TextInput placeholder="Contraseña" style={GlobalStyles.inputText}></TextInput>
          </View>
          <View style={GlobalStyles.rememberContainer}>
            <Pressable onPress={() => router.push("./registroScreen")}></Pressable>
            <Text style={GlobalStyles.rememberText}>Recuérdame</Text>
          </View>
        </View>


        <View style={GlobalStyles.accederContainer}>
          <Pressable style={GlobalStyles.accederButton} onPress={() => router.push("./inicioScreen")} >Acceder</Pressable>
          <View style={GlobalStyles.accederTextContainer}>
            <Link style={GlobalStyles.accederText} href={"./registroScreen"} >¿No tienes una cuenta?</Link>
            <Text style={GlobalStyles.accederText}>¿Olvidaste la contraseña?</Text>
          </View>
        </View>


        <View style={GlobalStyles.accesoRapidoContainer}>

          <View style={GlobalStyles.accederTextContainer}>
            <View style={GlobalStyles.accesoLinea}></View>
            <Text style={GlobalStyles.accesoRapidoTexto}>
              Acceso rápido con
            </Text>
            <View style={GlobalStyles.accesoLinea}></View>
          </View>
          <View style={GlobalStyles.accesoLogosContainer}>
            <Image source={require("../assets/images/LogIn/LogoGoogle.png")} style={GlobalStyles.accesoLogos}></Image>
            <Image source={require("../assets/images/LogIn/LogoFacebook.png")} style={GlobalStyles.accesoLogos}></Image>
            <Image source={require("../assets/images/LogIn/LogoTwitter.png")} style={GlobalStyles.accesoLogos}></Image>

          </View>

        </View>

      </View>

    </View>
  );
}