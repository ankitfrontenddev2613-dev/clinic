import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";

export default function BottomNavigation() {
  return (
    <View
      style={{
        height: 72,
        backgroundColor: "#143C36",
        borderRadius: 36,
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Feather name="grid" size={22} color="#C9D1CF" />
      <MaterialCommunityIcons
        name="stethoscope"
        size={22}
        color="#FDB51D"
      />
      <MaterialCommunityIcons
        name="ticket-confirmation-outline"
        size={22}
        color="#C9D1CF"
      />
      <Feather name="user" size={22} color="#C9D1CF" />
    </View>
  );
}