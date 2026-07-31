import { Feather } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { moderateScale } from "react-native-size-matters";

export default function DoctorActions({
  available,
  onOpen,
  onDelete,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.status}>
        {available ? "Available" : "Unavailable"}
      </Text>

      <View style={styles.buttons}>
        <Pressable style={styles.open} onPress={onOpen}>
          <Feather
            name="chevron-right"
            size={20}
            color="#fff"
          />
        </Pressable>

        <Pressable style={styles.delete} onPress={onDelete}>
          <Feather
            name="trash-2"
            size={18}
            color="#FF6B57"
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: moderateScale(10),
    paddingHorizontal: moderateScale(16),
  },

  status: {
    color: "#0B6D63",
    fontFamily: 'Montserrat_500Medium'
  },

  buttons: {
    flexDirection: "row",
  },

  open: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#153B39",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  delete: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#FDEEEE",
    justifyContent: "center",
    alignItems: "center",
  },
});