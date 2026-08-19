import { Feather } from '@expo/vector-icons'
import { router, useLocalSearchParams } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import Button from '../../components/atoms/Button'
import ScreenContainer from '../../components/molecules/ScreenContainer'

const createAccount = () => {
  const { plan, price } = useLocalSearchParams()
  return (
    <ScreenContainer childContainerStyle={{ flex: 1 }}>
      <View style={styles.content}>
        <View style={styles.mailIcon}>
          <Feather name="check" color="#fff" size={40} />
        </View>
        <View style={styles.createBox}>
          <Text style={styles.title}>Clinic account created</Text>
          <Text style={styles.subTitle}>Your clinic is set up on the {plan} plan (₹{price}/mo).</Text>
          <Text style={styles.description}>We've sent your login details to your email. Sign in to add your doctors and start managing your queue.</Text>
        </View>
        <Button
          onPress={() => router.push('/login')}
          title="Go to Signin"
          buttonStyle={{ backgroundColor: '#12312b', paddingVertical: 15, width: '100%', marginTop: 15 }}
          textStyle={{
            fontSize: moderateScale(16), color: '#fff'
          }} />
      </View>
    </ScreenContainer>
  )
}

export default createAccount

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  mailIcon: {
    width: moderateScale(70),
    height: moderateScale(70),
    borderRadius: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1c7a6e',
    marginBottom: moderateScale(20)
  },
  createBox: {
    gap: moderateScale(10)
  },
  title: {
    fontSize: moderateScale(25),
    fontFamily: 'Montserrat_500Medium',
    textAlign: 'center'
  },
  subTitle: {
    fontSize: moderateScale(14),
    fontFamily: 'Sora_400Regular',
    textAlign: 'center'
  },
  description: {
    padding: moderateScale(20),
    borderRadius: moderateScale(10),
    backgroundColor: '#fff',
    fontSize: moderateScale(14),
    lineHeight: moderateScale(22),
    color: '#000',
    fontFamily: 'Sora_400Regular',
    textAlign: 'left',
    marginVertical: moderateScale(10),
    borderWidth: 1,
    borderColor: '#E1E6DA',
  }
})