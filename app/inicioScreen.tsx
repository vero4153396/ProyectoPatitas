import { GlobalStyles } from "@/theme/GlobalStyles";
import { Link, useRouter, Redirect } from "expo-router";
import { View, Text, Image, Button, Alert } from "react-native";
import { Pressable, TextInput } from "react-native-gesture-handler";

export default function registroScreen() {
  const router = useRouter();

  return (
    <View>
    <Pressable style={GlobalStyles.botonRegistrarCancelar} onPress={() => router.push("/patitasRescateScreen")}></Pressable>

    <Pressable style={GlobalStyles.botonRegistrarCancelar} onPress={() => router.push("/refugioScreen")}></Pressable>
    </View>
  );
}
  