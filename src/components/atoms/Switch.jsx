import { StyleSheet } from 'react-native'

const Switch = () => {
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
  )
}

export default Switch

const styles = StyleSheet.create({})