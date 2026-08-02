import { StyleSheet, Text, View } from 'react-native'
import AvailabilitySwitch from '../atoms/AvailabilitySwitch'

const SettingSwitchButton = ({ title }) => {
  return (
    <View style={styles.switchBox}>
      <Text style={styles.text}>{title}</Text>
      <AvailabilitySwitch />
    </View>
  )
}

export default SettingSwitchButton

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontFamily: 'Sora_500Medium'
  }, switchBox: {
    backgroundColor: '#fff',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 15,
  }
})