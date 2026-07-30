import { Feather } from "@expo/vector-icons";
import { TextInput, View } from "react-native";

export default function SearchBar() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 18,
        paddingHorizontal: 18,
        height: 58,
        marginBottom: 25,
      }}>

      <Feather
        name="search"
        size={20}
        color="#999"
      />

      <TextInput
        placeholder="Search by name or specialty"
        style={{
          flex: 1,
          marginLeft: 12,
        }}
      />

    </View>
  );
}