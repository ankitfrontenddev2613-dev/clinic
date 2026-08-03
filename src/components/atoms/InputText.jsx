import { StyleSheet, Text, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

const InputText = ({ children, placeholder }) => {
  return (
    <View style={styles.inputRow}>
      <Text style={styles.label}>{children} InputText</Text>
      <InputText placeholder={placeholder} />
    </View>
  )
}

export default InputText

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: 'column',
    gap: moderateScale(5),
  }
})