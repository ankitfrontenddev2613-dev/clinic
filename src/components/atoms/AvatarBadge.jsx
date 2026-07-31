import { StyleSheet, Text, View } from "react-native";

export default function AvatarBadge({ initials, color }) {
  return (
    <View style={[styles.avatar, { backgroundColor: color }]}>
      <Text style={styles.text}>{initials}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 14,
    backgroundColor: '#FFF4E5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    color: '#333333',
  },
});