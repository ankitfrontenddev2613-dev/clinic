import { StyleSheet, Switch } from "react-native";

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
      thumbColor={value ? '#fff' : '#000'}
    />
  );
}

const styles = StyleSheet.create({
  switch: {
    height: 20
  }
})