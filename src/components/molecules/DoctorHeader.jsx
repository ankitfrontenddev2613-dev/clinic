import { StyleSheet, View } from "react-native";

import AvailabilitySwitch from "../atoms/AvailabilitySwitch";
import AvatarBadge from "../atoms/AvatarBadge";
import Details from "../atoms/Details";
import { moderateScale } from "react-native-size-matters";

export default function DoctorHeader({
  doctor,
  onToggle,
}) {
  return (
    <View style={styles.container}>
      <AvatarBadge
        initials={doctor.initials}
        color={doctor.avatarColor}
      />

      <Details
        name={doctor.name}
        specialization={doctor.specialization}
        experience={doctor.experience}
      />

      <AvailabilitySwitch
        value={doctor.available}
        onValueChange={() => onToggle(doctor.id)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: '#fff',
    paddingHorizontal: moderateScale(16),
    paddingTop: moderateScale(16)
  },
});