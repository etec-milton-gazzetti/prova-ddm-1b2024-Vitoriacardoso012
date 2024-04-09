import React, { useState, useCallback } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";
import {Image,ImageBackground,ScrollView,StyleSheet,Text,TouchableOpacity,View,}from "react-native";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import fotoprincipal from "./assets/fotoacademia.png";
import 



export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
