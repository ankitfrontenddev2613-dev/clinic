import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const DropDown = ({ children, text }) => {
  const councils = [
    { label: "Delhi Medical Council", value: "Delhi Medical Council" },
    { label: "Maharashtra Medical Council", value: "Maharashtra Medical Council" },
    { label: "Karnataka Medical Council", value: "Karnataka Medical Council" },
    { label: "Tamil Nadu Medical Council", value: "Tamil Nadu Medical Council" },
    { label: "Uttar Pradesh Medical Council", value: "Uttar Pradesh Medical Council" },
  ];
  return (
    <View>
      <Text style={styles.label}>
        {children} {text}
      </Text>

      <Dropdown
        style={styles.dropdown}
        data={councils}
        labelField="label"
        valueField="value"
        placeholder="Select"
        value={council}
        onChange={item => setCouncil(item.value)}
      />
    </View>
  )
}

export default DropDown

const styles = StyleSheet.create({})