import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet } from 'react-native'

const LinearBackgroundColor = ({ children }) => {
  return (
    <LinearGradient colors={['#1B4038', '#0D211D']}
      start={{ x: 0.2, y: 0 }}
      end={{ x: 0.8, y: 1 }} style={styles.linearContainer}>
      {children}
    </LinearGradient>
  )
}

export default LinearBackgroundColor

const styles = StyleSheet.create({
  linearContainer: {
    borderRadius: 15,
  }
})