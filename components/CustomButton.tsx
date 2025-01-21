import { Pressable,ViewStyle, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../theme/GlobalStyles";
import * as Haptics from 'expo-haptics';
import { usePatitas } from "@/hooks/usePatitas";

interface Props {
    label: string,
    tipo: "acceso" |"remember" |"otros"|"cero"
    onPress: () => void;
}
//<BotonOperacion label='C' tipo="otros"  onPress={clean}>
export const CustomButton = ({label,tipo, onPress}:Props) => {
    const buttonStyle:ViewStyle[] =[
        GlobalStyles.buttonGenerico,
        tipo==="acceso" ? GlobalStyles.accederButton: tipo==="remember" ? GlobalStyles.rememberButton:GlobalStyles.buttonGenerico
    ]


    return (
        <Pressable>
            <Text
                style={GlobalStyles.rememberButton}
                onPress={(usePatitas)}>{label}</Text>
        </Pressable>
    )
    
};