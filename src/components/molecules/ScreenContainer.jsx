import { StyleSheet } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const ScreenContainer = ({ children }) => {
  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        {children}
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default ScreenContainer

const styles = StyleSheet.create({})