import { ImageBackground, Text, View } from "react-native";
import { styles } from "../style/Style";

export default function ImagemBackground({ children }) {
  const imagem = {
    uri: "https://ohhappyway.com/wp-content/uploads/2022/03/por-do-sol-brasilia-1.jpg",
  };
  return (
    <ImageBackground source={imagem} resizeMode="cover" style={styles.imagem}>
      {children}
    </ImageBackground>
  );
}
