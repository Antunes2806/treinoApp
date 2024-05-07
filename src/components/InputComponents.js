import { TextInput } from "react-native";

//Recebendo components por props
export default function InputComponents({
  txtplace,
  styleinput,
  changeText,
  value,
}) {
  return (
    <TextInput
      style={styleinput}
      placeholder={txtplace}
      value={value}
      onChangeText={changeText}
    />
  );
}
