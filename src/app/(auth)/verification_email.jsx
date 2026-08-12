import Button from '@/components/atoms/Button'
import { Feather } from '@expo/vector-icons'
import { Link, useRouter } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale } from 'react-native-size-matters'
const Verification_email = () => {
  const router = useRouter()
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.mailIcon}>
          <Feather name="mail" size={40} color="#1c7a6e" />
        </View>
        <View style={styles.checkEmail}>
          <Text style={styles.emailText}>Reset password </Text>
          <Text style={styles.sendText}>We'll send a reset link to your registered email.</Text>
          <Text style={styles.userEmail}>ankitChauhan@phoeniixx.in</Text>
        </View>
        <View style={styles.message}>
          <Text>Didn't get it? Check your spam folder, or resend the link below. The link stays valid for 15 minutes.</Text>
        </View>
        <Button href='/verify_otp' title="Continue to verification"
          textStyle={{ color: 'black' }}
          buttonStyle={{
            backgroundColor: '#ffb020',
            paddingVertical: moderateScale(15),
            width: '100%',
            marginBottom: moderateScale(15),
          }} />
        <View>

          <Text style={styles.contenText}>
            (In the real app this step happens  automatically when the patient taps the link in their email.)
          </Text>
        </View>

        <Button href="/login" title="Back to sign in" buttonStyle={{ backgroundColor: '#12312b', paddingVertical: 15, width: '100%', marginTop: 15 }}
          textStyle={{
            fontSize: moderateScale(16), color: '#fff'
          }} />

        <Link href="/verify_otp" style={{ marginTop: 20 }}>
          <Text style={styles.resendText}>Resend link</Text>
        </Link>
      </View>
    </SafeAreaView>
  )
}

export default Verification_email

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f4ee',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: moderateScale(40),
    width: '100%',

  },
  mailIcon: {
    backgroundColor: 'hwb(172.34deg 10.98% 52.16% / 14.9%)',
    height: 70,
    width: 70,
    borderRadius: 100,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkEmail: {
    marginBottom: 15,
    textAlign: 'center',
    alignItems: 'center',
    gap: 5
  },
  emailText: {
    color: "#12312b",
    fontSize: moderateScale(30),
    letterSpacing: 1,
    marginBottom: 5,
    fontFamily: 'Montserrat_600SemiBold',
  },
  sendText: {
    color: '#5c6b62',
    fontSize: moderateScale(13),
    fontFamily: 'Sora_400Regular',
  },
  userEmail: {
    color: '#12312b',
    fontSize: moderateScale(14),
    fontSize: 15,
    fontFamily: 'Sora_600SemiBold',
  },
  message: {
    backgroundColor: 'white',
    padding: moderateScale(20),
    borderRadius: moderateScale(15),
    borderWidth: 1,
    borderColor: '#E1E6DA',
    marginBottom: moderateScale(20),
    fontFamily: 'Sora_400Regular',
  },
  messageText: {
    color: '#5c6b62',
    textSize: moderateScale(13),
    fontFamily: 'Sora_400Regular',
  },
  contenText: {
    color: '#5c6b62',
    fontSize: moderateScale(11),
    fontFamily: 'Sora_400Regular',
  },
  resendText: {
    color: '#1c7a6e',
    fontSize: moderateScale(14),
    marginTop: 20,
    fontFamily: 'Sora_600SemiBold',
  }
})