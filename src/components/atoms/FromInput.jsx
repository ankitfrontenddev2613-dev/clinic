import { StyleSheet, TextInput, View } from 'react-native'
import FieldLabel from './FieldLabel'

const FromInput = ({ icon, iconName, label, value, onChangeText, placeholder, keyboardType }) => {
  return (
    <View style={styles.fieldContainer}>
      <FieldLabel icon={icon} iconName={iconName} label={label} />
      <View style={styles.inputBox}>
        <TextInput
          style={styles.inputText}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#B7BDB7"
          keyboardType={keyboardType || 'default'}
        />
      </View>
    </View>
  )
}

export default FromInput

const styles = StyleSheet.create({
  labelText: {
    fontSize: 13,
    color: '#5B6B5B',
    fontWeight: '500',
  },
  inputBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputText: {
    fontSize: 15,
    color: '#2A2A2A',
    flex: 1,
  },
})