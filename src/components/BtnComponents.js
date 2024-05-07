import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

import TxtComponents from "../components/TxtComponents";
import { styles } from "../style/Style";
import InputComponents from "../components/InputComponents";

import React, { useState } from "react";

export default function Home() {
  const [Nome, setNome] = useState("");

  const BoaTarde = () => {
    alert("Boa Tarde, " + Nome);
  };
  return (
    <View style={styles.container}>
      <TxtComponents txt="teste" styletxt={styles.txt} />

      <InputComponents
        styleinput={styles.Input}
        txtplace="digite seu nome"
        value={Nome}
        changeText={setNome}
      />

      <TouchableOpacity onPress={BoaTarde} style={styles.btn}>
        <Text style={styles.txt2}>Clique!</Text>
      </TouchableOpacity>
    </View>
  );
}
