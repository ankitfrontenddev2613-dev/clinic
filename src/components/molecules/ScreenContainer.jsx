import { StyleSheet } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale } from 'react-native-size-matters'

const ScreenContainer = ({ children, childContainerStyle, containerStyle }) => {
  return (
    <SafeAreaProvider style={[styles.container, containerStyle]}>
      <SafeAreaView style={[styles.rowContainer, childContainerStyle]}>
        {children}
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default ScreenContainer

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(15),
    backgroundColor: '#f1f4ee',
    flex: 1
  }
})