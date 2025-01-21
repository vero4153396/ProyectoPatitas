import { GlobalStyles } from "@/theme/GlobalStyles";
import { useRouter, Redirect } from "expo-router";
import { View, Text, Image, Button, Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function registroScreen() {
    const router = useRouter();

  return (
    <View style={GlobalStyles.containerAzul}>

<View style={GlobalStyles.textoLogin}>
        <View style={{ width: "100%" }}>
          <Image source={require("../assets/images/LogIn/Logo2.png")} style={GlobalStyles.logo}></Image>
        </View>
        <Text style={GlobalStyles.textoRegistrateEn}>Registrate en</Text>
        <Text style={[GlobalStyles.textoTitulo]}>
          PetConnect
        </Text>
      </View>

      <View style={GlobalStyles.containerBlanco}>
        <Image source={require("../assets/images/Registro/gatito.png")} style={GlobalStyles.gato}></Image>
        <Image source={require("../assets/images/Registro/perrito.png")} style={GlobalStyles.perro}></Image>



        <Image source={require("../assets/images/Registro/Titulo2.png")} style={GlobalStyles.tituloHazteParte}></Image>
        
        <View style={GlobalStyles.datosContainer}>
          <View style={GlobalStyles.inputContainer}>
            <TextInput placeholder="Nombre" style={GlobalStyles.inputText}></TextInput>
          </View>
          <View style={GlobalStyles.inputContainer}>
            <TextInput placeholder="Email" style={GlobalStyles.inputText}></TextInput>
          </View>
          <View style={GlobalStyles.inputContainer}>
            <TextInput placeholder="Contraseña" style={GlobalStyles.inputText}></TextInput>
          </View>
          <View style={GlobalStyles.inputContainer}>
            <TextInput placeholder="Repetir contraseña" style={GlobalStyles.inputText}></TextInput>
          </View>
          <View style={GlobalStyles.rememberContainer}>
            <Button title="v" onPress={()=>Alert.alert("aaaa")}></Button>
            <Text style={GlobalStyles.rememberText}>Recuérdame</Text>
          </View>
        </View>


        <View style={GlobalStyles.accederContainer}>
          <Button title="Registrate" onPress={() => Alert.alert("Registrate")}></Button>
          <Button title="Cancelar" onPress={()=>Alert.alert("cancela")}></Button>
          
          <View style={GlobalStyles.volverAlLoginContainer}>
            <Text style={GlobalStyles.accederText}>¿Tienes ya una cuenta?</Text>
            <Text style={GlobalStyles.accederText}>Accede al refugio</Text>
          </View>
        </View>

      </View>

    </View>
  );
}