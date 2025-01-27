import { GlobalStyles } from "@/theme/GlobalStyles";
import { Redirect, Link, useRouter } from "expo-router";
import { View, Text, Image, Button, Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { usePatitas } from "@/hooks/usePatitas";


export default function Index() {
    const router = useRouter();
    return (
        <View style={GlobalStyles.containerAzul}>
            <View style={GlobalStyles.textoLogin}>
                <View style={{ width: "100%" }}>
                Petconnect

                </View>
            </View>
            <View style={GlobalStyles.containerBlanco}>
            </View>
        </View>
    );
}
