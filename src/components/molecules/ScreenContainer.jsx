import { StyleSheet } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale } from 'react-native-size-matters'

const ScreenContainer = ({ children, childStyle, containerStyle }) => {
  return (
    <SafeAreaProvider style={[styles.container, containerStyle]}>
      <SafeAreaView style={[styles.rowContainer, childStyle]}>
        {children}
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default ScreenContainer

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(15)
  }
})