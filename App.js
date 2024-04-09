import React, { useState, useCallback } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";
import {Image,ImageBackground,ScrollView,StyleSheet,Text,TouchableOpacity,View,}from "react-native";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import fotoprincipal from "./assets/fotoacademia.png";
import Minhafoto from "./assets/minhafoto.png";

function HomeScreen({ navigation }) {
  const [loaded] = useFonts({
    MulishR: require("./assets/fonts/Mulish/Regular.ttf"),
    MulishEB: require("./assets/fonts/Mulish/Mulish-ExtraBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}></View>
    <ImageBackground source={fundo} style={styles.fundo}>
    <Text style={styles.titulo2}>Academia</Text>
    <ScrollView style={styles.partedotexto}>
      <Text style={styles.texto}>
Academia são espaços dedicados ao exercício físico e ao condicionamento físico
elas servem como locais onde as pessoas podem praticar uma variedade de atividades físicas,
como musculação, aeróbica, pilates, entre outras, com o objetivo de melhorar a saúde e o bem-estar geral.
</Text>
<Text style={styles.texto}></Text>
Os benefícios de frequentar uma academia são diversos,a prática regular de exercícios
pode ajudar a melhorar a saúde cardiovascular, fortalecer os músculos e ossos,
aumentar a flexibilidade e a resistência, controlar o peso etc.
</Text>
<Text style={styles.texto}></Text>
Além disso, as academias oferecem um ambiente propício para a prática de exercícios,
 com equipamentos especializados e instrutores qualificados para orientar os praticantes
a variedade de atividades oferecidas também permite que as pessoas encontrem algo que se adeque
às suas preferências e objetivos, tornando mais fácil manter a motivação e a regularidade nos treinos.
</Text>
<Text style={styles.titulo3}>Origem e História</Text>
<Text style={styles.texto}></Text>
A origem das academias remonta à Grécia Antiga, onde o termo "academia" era usado para descrever o jardim público
onde Platão ensinava seus alunos. No entanto, a ideia moderna de academias de ginástica 
como locais específicos para o exercício físico surgiu mais recentemente, no século XIX.
</Text>
<Text style={styles.texto}></Text>
No século XIX, a ginástica começou a ganhar popularidade como uma forma de exercício e treinamento físico.
Na Alemanha, por exemplo, o educador Friedrich Jahn foi um dos pioneiros da ginástica moderna
e criou o conceito de "Turnplatz", ou "local de ginástica",
onde as pessoas podiam praticar exercícios físicos em equipamentos especializados.
</Text>
<Text style={styles.texto}></Text>
Com o passar do tempo, o conceito de academias de ginástica foi se espalhando pelo mundo,
e esses espaços passaram a oferecer uma variedade de atividades e equipamentos para atender
às necessidades dos praticantes. Hoje em dia, as academias de ginástica são comun
em muitos países e desempenham um papel importante na promoção da saúde e do bem-estar
através do exercício físico.
</Text>
<Text style={styles.titulo4}>Aplicação da academia</Text>
<Text style={styles.texto}></Text>
Temas que poderiam ser abordados em um aplicativo relacionado a academias de ginástica:
</Text>
<Text style={styles.texto}></Text>
<Text style={styles.texto2}>Treinos e Exercícios</Text> Informações detalhadas
sobre diferentes tipos de treinos e exercícios, incluindo técnicas corretas
de execução, benefícios e dicas para iniciantes.
</Text>
<Text style={styles.texto2}>Nutrição e Dieta</Text>Orientações sobre alimentação saudável,
sugestões de cardápios e dicas de nutrição para maximizar os resultados dos treinos.
</Text>
<Text style={styles.texto2}>Gestão do Tempo e Produtividade</Text> Sugestões de como otimizar
o tempo na academia, dicas para manter a consistência nos treinos e maximizar os resultados.
</Text>
<Text style={styles.texto2}>Motivação e Bem-Estar</Text>Mensagens motivacionais diárias, dicas
para manter a motivação, e informações sobre os benefícios do exercício para a saúde mental
e emocional.
</Text>
</ScrollView>
<View style={styles.botoesladoalado}>
<View style={styles.botaolado}>
  <TouchableOpacity
  onPress={() => navigation.goBack()}  
  style={styles.botao}
  >
    <Text style={styles.textoBotao}>Voltar</Text>
  </TouchableOpacity> 
  </View>
 <View style={styles.botaolado}>
 <TouchableOpacity
 onPress={() => navigation.navigate("sobre")}
style={styles.botao}
>
  <Text style={styles.textBotao}>Sobre</Text>
  </TouchableOpacity>
  </View>
  </View>
  </ImageBackground>
  <StatusBar style="auto" />
  </View>
  );
 }
 function Sobre({ navigation }) {
  MulishR: require("./assets/fonts/Mulish/Regular.ttf"),
  MulishEB: require("./assets/fonts/Mulish-ExtraBold.ttf"),
 });

 if (!loaded) {
  return null;
}
return {
  
}




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
