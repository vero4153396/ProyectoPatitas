import { Colores, GlobalStyles } from "@/theme/GlobalStyles";
import { Link, useRouter, Redirect } from "expo-router";
import { View, Text, Image, Button, Alert, StatusBar } from "react-native";
import { Pressable, TextInput } from "react-native-gesture-handler";

export default function index() {
  const router = useRouter();

  return (
    <View style={GlobalStyles.containerAzul}>
      <StatusBar backgroundColor={Colores.azulNormal}/>

      <View style={GlobalStyles.textoLogin}>
        <View style={{ width: "100%" }}>
          <Image source={require("../../assets/images/LogIn/Logo2.png")} style={GlobalStyles.logoRegistro}></Image>
        </View>

        <View style={GlobalStyles.registrateEnyTitulo}>
          <Text style={GlobalStyles.textoRegistrateEn}>Registrate en</Text>
          <Image source={require("../../assets/images/Registro/TextTitulo.png")} style={[GlobalStyles.textoTituloRegistro]}></Image>
        </View>

      </View>

      <View style={GlobalStyles.containerBlancoRegistro}>
        <Image source={require("../../assets/images/Registro/animales.png")} style={GlobalStyles.animales}></Image>

        <Image source={require("../../assets/images/Registro/Titulo2.png")} style={GlobalStyles.tituloHazteParte}></Image>

        <View style={GlobalStyles.datosContainerRegistro}>
          <View style={GlobalStyles.inputContainerRegistro}>
            <Image source={require("../../assets/images/Registro/humano.png")} style={GlobalStyles.iconoInput}></Image>
            <TextInput placeholder="Nombre" style={GlobalStyles.inputTextRegistro}></TextInput>
          </View>
          <View style={GlobalStyles.inputContainerRegistro}>
            <Image source={require("../../assets/images/Registro/mail.png")} style={GlobalStyles.iconoInput}></Image>
            <TextInput placeholder="Email" style={GlobalStyles.inputTextRegistro}></TextInput>
          </View>
          <View style={GlobalStyles.inputContainerRegistro}>
            <Image source={require("../../assets/images/Registro/password.png")} style={GlobalStyles.iconoInput}></Image>
            <TextInput placeholder="Contraseña" style={GlobalStyles.inputTextRegistro}></TextInput>
          </View>
          <View style={GlobalStyles.inputContainerRegistro}>
            <Image source={require("../../assets/images/Registro/ojo.png")} style={GlobalStyles.iconoInput}></Image>
            <TextInput placeholder="Repetir contraseña" style={GlobalStyles.inputTextRegistro}></TextInput>
          </View>
        </View>


        <View style={GlobalStyles.botonesRegistroContainer}>
          <Pressable style={GlobalStyles.botonRegistrarCancelar} onPress={() => router.push("./inicioScreen")}>
            <Text style={GlobalStyles.textoRegistrateCancelar}>Registrate</Text>
          </Pressable>
          <Pressable style={GlobalStyles.botonRegistrarCancelar} onPress={() => router.push("/")}>
            <Text style={GlobalStyles.textoRegistrateCancelar}>Cancelar</Text>
          </Pressable>
        </View>


        <View style={GlobalStyles.volverAlLoginContainer}>
          <Link href={"/"} style={GlobalStyles.tienesCuentaText}>¿Tienes ya una cuenta?</Link>
          <Link href={"/"} style={GlobalStyles.accederText}>Accede al refugio</Link>
        </View>

      </View>

    </View>
  );
}