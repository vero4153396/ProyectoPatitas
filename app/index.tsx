import { GlobalStyles } from "@/theme/GlobalStyles";
import { Redirect } from "expo-router";
import { View, Text, Image, Button, Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Index() {
  return (
    <View style={GlobalStyles.containerAzul}>

      <View style={GlobalStyles.textoLogin}>
        <View style={{ width: "100%" }}>
          <Image source={require("../assets/images/LogIn/Logo2.png")} style={GlobalStyles.logo}></Image>
        </View>

        <Image source={require("../assets/images/LogIn/TextTitulo.png")} style={GlobalStyles.textoTitulo}></Image>
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
            <Button title="v" onPress={() => Alert.alert("aaaa")}></Button>
            <Text style={GlobalStyles.rememberText}>Recuérdame</Text>
          </View>
        </View>


        <View style={GlobalStyles.accederContainer}>
          <Button title="Acceder" onPress={() => Alert.alert("acceder")}></Button>
          <View style={GlobalStyles.accederTextContainer}>
            <Text style={GlobalStyles.accederText}>¿No tienes una cuenta?</Text>
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