import { Text, View } from "react-native";

export default function Header() {
  return (
    <View style={{ marginBottom: 25 }}>
      <Text
        style={{
          color: "#0E8E8A",
          letterSpacing: 2,
          fontSize: 12,
        }}>
        TEAM
      </Text>

      <Text
        style={{
          fontSize: 38,
          fontWeight: "600",
          color: "#062D2B",
        }}>
        Doctors
      </Text>
    </View>
  );
}