import { Pressable, StyleSheet, Text } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

const Button = ({ title, href, buttonStyle, textStyle, children, onPress, disabled }) => {
  return (
    <>
      <Pressable onPress={onPress} disabled={disabled} style={[styles.button, buttonStyle]}>
        {children}
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </Pressable>
    </>
  )
}

export default Button

const styles = StyleSheet.create({
  button: {
    borderRadius: moderateScale(50),
    textAlign: 'center',
    backgroundColor: 'yellow',
    paddingVertical: moderateScale(15),
    fontSize: moderateScale(16)
  },
  text: {
    color: 'black',
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Montserrat_500Medium',
  }
})