import { Link } from 'expo-router'
import { StyleSheet, Text } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

const Button = ({ title, href, buttonStyle, textStyle }) => {
  return (
    <>
      <Link href={href} style={[styles.button, buttonStyle]}>
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </Link>
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
    fontWeight: 'semi-bold',
  }
})