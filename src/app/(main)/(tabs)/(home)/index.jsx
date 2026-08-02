import { StyleSheet } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { moderateScale } from 'react-native-size-matters'
import HomeScreen from '../../../../screens/HomeScreen'


const Main = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <HomeScreen homeStyle="{{gap: 10 , height: '70vh'} }">
      </HomeScreen>
    </SafeAreaProvider>
  )
}

export default Main

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f4ee',
    paddingHorizontal: moderateScale(20),
    paddingTop: moderateScale(10),
    height: '50Vh'
  },
  home: {
    gap: 10
  },

})