import {GestureHandlerRootView} from 'react-native-gesture-handler'
import { Slot, SplashScreen } from "expo-router";
import React from "react";
import {useFonts} from "expo-font";
import { useEffect } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { DarkTheme } from '@react-navigation/native';
import { GlobalStyles } from '@/theme/GlobalStyles';
//photopea para unir las imagenes y noseq
export default function RootLayout() {
  //para cargar las fuentes les das un nombre y luego las utilizas
  const [loaded]=useFonts({
      Poppins:require(`../assets/fonts/Poppins-Regular.ttf`)
  });

  useEffect(() => {
    if (loaded){
      SplashScreen.hideAsync();

    }
  },[loaded]);

  if(!loaded){
    return null;
  }
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar 
      backgroundColor={GlobalStyles.statusBar.backgroundColor} 
    />
      <Slot />
    </GestureHandlerRootView>
  );
}
