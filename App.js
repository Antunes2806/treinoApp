import { ImageBackground, Text, View } from "react-native";
import { styles } from "./src/style/Style";

import ImagemBackground from "./src/components/ImagemBackgroundComponents";
import TxtComponents from "./src/components/TxtComponents";
import Home from "./src/pages/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <ImagemBackground>
        <Home />
      </ImagemBackground>
    </View>
  );
}
