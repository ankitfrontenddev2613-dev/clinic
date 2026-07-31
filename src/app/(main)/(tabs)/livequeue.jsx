import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, Text, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import BackButton from '../../../components/atoms/BackButton'
import HeaderTitle from '../../../components/molecules/HeaderTitle'


const Counter = ({ token }) => {
  return (
    <View >
      <BackButton />
      <HeaderTitle Title="Live queue" SubTitle='OPD Counter 1' />
      <LinearGradient colors={['#1B4038', '#0D211D']}
        start={{ x: 0.2, y: 0 }}
        end={{ x: 0.8, y: 1 }} style={styles.linearContainer}>
        <Text>Current Token</Text>
        <Text style={styles.tokenText}>014</Text>
      </LinearGradient>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
  linearContainer: {
    borderRadius: 15,
  },
  tokenText: {
    fontSize: moderateScale(40),
    lineHeight: moderateScale(40),
    fontFamily: 'Montserrat_700Bold',
    letterSpacing: 3,
    fontWeight: 'bold',
    color: '#FFB020',
    justifyContent: 'center',
    alignItems: 'center'
  }
})