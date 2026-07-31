import { StyleSheet, Text, View } from "react-native";

export default function Details({
  name,
  specialization,
  experience,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <Text style={styles.subtitle}>
        {specialization} · {experience}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 14,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F201C',
    fontFamily: 'Montserrat_600SemiBold',
  },
  subtitle: {
    fontSize: 12,
    color: '#5B7068',
    marginTop: 4,
    fontFamily: 'Sora_500Medium'
  },
});