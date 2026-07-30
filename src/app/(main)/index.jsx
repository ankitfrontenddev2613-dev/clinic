import { StyleSheet } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { moderateScale } from 'react-native-size-matters'
import BottomNavigation from '../../components/organisms/BottomNavigation'
import DoctorsScreen from '../../screens/DoctorsScreen'
import HomeScreen from '../../screens/HomeScreen'


const Main = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <DoctorsScreen />
      <HomeScreen homeStyle="{{gap: 10} }">
      </HomeScreen>

      <BottomNavigation />
    </SafeAreaProvider>
  )
}

export default Main

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f4ee',
    paddingHorizontal: moderateScale(20),
    paddingTop: moderateScale(10)
  },
  home: {
    gap: 10
  },

})