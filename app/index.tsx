import { Colores, GlobalStyles } from "@/theme/GlobalStyles";
import { Redirect, Link, useRouter } from "expo-router";
import { View, Text, Image, Button, Alert, StatusBar } from "react-native";
import { Pressable, TextInput } from "react-native-gesture-handler";
import { useState } from "react"; 

export default function Index() {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  return (
    <View style={GlobalStyles.containerAzul}>
      <StatusBar backgroundColor={Colores.azulNormal} />
      <Image source={require("../assets/images/LogIn/Logo2.png")} style={GlobalStyles.logo}></Image>

      <View style={GlobalStyles.containerTitulo}>
        <Image source={require("../assets/images/LogIn/TextTitulo.png")} style={GlobalStyles.gatoPerro}></Image>

      </View>

      <View style={GlobalStyles.containerBlanco}>

        <Image source={require("../assets/images/LogIn/gatoPerro.png")} style={GlobalStyles.gatoPerro}></Image>



        <View style={GlobalStyles.datosContainer}>
          <Image source={require("../assets/images/LogIn/Titulo2.png")} style={GlobalStyles.textoAccede}></Image>

          <View style={GlobalStyles.inputContainer}>
            <TextInput placeholder="Email" placeholderTextColor={Colores.azulNormal} style={GlobalStyles.inputText}></TextInput>
          </View>
          <View style={GlobalStyles.inputContainer}>
            <TextInput placeholder="Contraseña" placeholderTextColor={Colores.azulNormal} style={GlobalStyles.inputText}></TextInput>
            <Image source={require("../assets/images/LogIn/eye-off-outline.png")} ></Image>
          </View>
          <View style={GlobalStyles.rememberContainer}>
            <View  style={GlobalStyles.rememberButton}>
            <Pressable onPress={() => setIsChecked(!isChecked)}>{isChecked && <Text>✓</Text>}</Pressable>
            
            </View>
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
            <View style={[GlobalStyles.accesoLinea,GlobalStyles.lineaI]}></View>
            <Text style={GlobalStyles.accesoRapidoTexto}>
              Acceso rápido con
            </Text>
            <View style={[GlobalStyles.accesoLinea,GlobalStyles.lineaD]}></View>
          </View>
          <View style={GlobalStyles.accesoLogosContainer}>
            <Image source={require("../assets/images/LogIn/LogoGoogle.png")} ></Image>
            <Image source={require("../assets/images/LogIn/LogoFacebook.png")}></Image>
            <Image source={require("../assets/images/LogIn/LogoTwitter.png")} ></Image>

          </View>

        </View>

      </View>

    </View>
  );
}