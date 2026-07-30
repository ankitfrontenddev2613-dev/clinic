import { useState } from "react";

import {
  Pressable,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";

import {
  AntDesign,
  Feather
} from "@expo/vector-icons";

export default function DoctorCard({ doctor }) {

  const [available, setAvailable] = useState(doctor.available);

  return (

    <View style={styles.card}>

      <View style={styles.topRow}>

        <View style={styles.avatar}>
          <Text style={styles.initial}>
            {doctor.initials}
          </Text>
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.name}>
            {doctor.name}
          </Text>

          <Text style={styles.sub}>
            {doctor.specialization} · {doctor.experience}
          </Text>
        </View>

        <Switch
          value={available}
          onValueChange={setAvailable}
        />

      </View>

      <View style={styles.divider} />

      <View style={styles.bottomRow}>

        <Text style={styles.available}>
          Available
        </Text>

        <View
          style={{
            flexDirection: "row",
            gap: 12,
          }}>

          <Pressable style={styles.arrow}>
            <Feather
              name="chevron-right"
              size={20}
              color="#fff"
            />
          </Pressable>

          <Pressable style={styles.delete}>
            <AntDesign
              name="delete"
              size={18}
              color="#F36A5A"
            />
          </Pressable>

        </View>

      </View>

    </View>

  );
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: "#fff",
    borderRadius: 22,
    padding: 18,
    marginBottom: 18,
  },

  topRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 58,
    height: 58,
    borderRadius: 16,
    backgroundColor: "#FFF2D9",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  initial: {
    fontSize: 22,
  },

  name: {
    fontSize: 21,
    fontWeight: "600",
  },

  sub: {
    color: "#777",
    marginTop: 4,
  },

  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 18,
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  available: {
    color: "#0C8B84",
    fontWeight: "600",
  },

  arrow: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#143C36",
    justifyContent: "center",
    alignItems: "center",
  },

  delete: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#FFF1F0",
    justifyContent: "center",
    alignItems: "center",
  },

});