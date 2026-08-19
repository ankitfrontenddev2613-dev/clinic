import { StyleSheet, Text, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

const FieldLabel = ({ icon: Icon, iconName, label }) => {
  return (
    <View style={styles.inputRow}>
      <View style={styles.labelRow}>
        {Icon && (<Icon name={iconName} size={moderateScale(15)} color="#5B6B5B" />)}
        <Text style={styles.labelText}>{label}</Text>
      </View>
    </View>
  )
}

export default FieldLabel

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: 'column',
    gap: moderateScale(5),
  }, labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(10),
    paddingBottom: moderateScale(10),

  },
  labelText: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: moderateScale(12)
  }
})