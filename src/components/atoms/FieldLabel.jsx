import { StyleSheet, Text, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

const FieldLabel = ({ icon: Icon, iconName, label, placeholder }) => {
  return (
    <View style={styles.inputRow}>
      <View style={styles.labelRow}>
        <Icon name={iconName} size={15} color="#5B6B5B" />
        <Text style={styles.labelText}>{label}</Text>
      </View>
      {/* <TextInput placeholder={placeholder} keyboardType="email-address"
        autoCapitalize="none" style={styles.input} placeholderTextColor={'#b6a3af'} /> */}
    </View>
  )
}

export default FieldLabel

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: 'column',
    gap: moderateScale(5),
  }, labelRow: {}, labelText: {}
})