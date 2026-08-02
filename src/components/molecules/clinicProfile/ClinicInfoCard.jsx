import { StyleSheet, Text, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

const ClinicInfoCard = ({ title, subTitle }) => {
  return (
    <View style={styles.clinicBox}>
      <Text style={styles.subText}>{subTitle}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default ClinicInfoCard

const styles = StyleSheet.create({
  clinicBox: {
    backgroundColor: '#fff',
    borderRadius: 15,
    flexDirection: 'column',
    padding: moderateScale(20),
    gap: 5
  }, subText: {
    fontSize: 15,
    fontFamily: 'Sora_400Regular'
  },
  title: {
    fontSize: 18,
    fontFamily: 'Sora_500Medium'
  }
})