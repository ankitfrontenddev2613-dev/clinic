import { StyleSheet, TextInput, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import FieldLabel from './FieldLabel'

const FormInput = ({ icon, iconName, label, value, onChangeText, placeholder, keyboardType, autoCapitalize, secureTextEntry }) => {
  return (
    <View style={styles.fieldContainer}>
      <FieldLabel icon={icon} iconName={iconName} label={label} />
      <View style={styles.inputBox}>
        <TextInput
          autoCapitalize={autoCapitalize}
          style={styles.inputText}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#B7BDB7"
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType || 'default'}
        />
      </View>
    </View>
  )
}

export default FormInput

const styles = StyleSheet.create({
  labelText: {
    fontSize: moderateScale(13),
    color: '#5B6B5B',
    fontWeight: '500',
    fontFamily: 'Montserrat_500Medium'
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputText: {
    fontSize: moderateScale(14),
    color: '#2A2A2A',
    fontFamily: 'Montserrat_500Medium',
    height: moderateScale(45),
    flex: 1,
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(14),
    borderRadius: moderateScale(15),
    backgroundColor: '#FFFFFF',
    borderColor: '#fff',
    width: '100%'
  },
})