import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import ScreenContainer from '../../../../components/molecules/ScreenContainer'
import HomeScreen from '../../../../screens/HomeScreen'


const HomeRoot = () => {
  return (
    <ScreenContainer containerStyle={styles.container} childContainerStyle={styles.home}>
      <HomeScreen homeStyle={styles.home} />
    </ScreenContainer>
  )
}

export default HomeRoot

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f4ee',
    paddingHorizontal: moderateScale(10),
    paddingTop: moderateScale(10),
  },
  home: {
    gap: 10,
    flex: 1,
  },

})