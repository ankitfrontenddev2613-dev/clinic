import { StyleSheet, Switch } from "react-native";
import { isEnabled } from "react-native/Libraries/Performance/Systrace";

export default function AvailabilitySwitch({
  value,
  onValueChange,
}) {
  return (
    <Switch
      style={styles.switch}
      value={value}
      onValueChange={onValueChange}
      trackColor={{
        false: "#e1e6da",
        true: "#1c7a6e",
      }}
      ios_backgroundColor="#3e3e3e"
      thumbColor={isEnabled ? '#fff' : '#000'}
    />
  );
}

const styles = StyleSheet.create({
  switch: {
    height: 20
  }
})