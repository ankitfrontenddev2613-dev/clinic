import imagePath from '@/constants/imagePath';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale, scale } from 'react-native-size-matters';
const Auth = () => {

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const navigateToNextScreen = () => {
    // router.push('/(auth)/verify_otp'); // Navigate to the next screen after loading
    // router.push('/(auth)/signup'); // Navigate to the next screen after loading
    router.push('/(auth)/terms_agree'); // Navigate to the next screen after loading
  }
  const loading = () => {
    setIsLoading(true);
    setTimeout(navigateToNextScreen, 3000); // Navigate after 2 seconds
  }

  useEffect(() => { // Simulate a loading state for 2 seconds
    setTimeout(loading, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.body}>
        <Image source={imagePath.reactLogo} style={{ width: 100, height: 100 }, styles.Image} />
      </View>
      <View style={styles.footer}>
        <>
          {
            isLoading ? (
              <ActivityIndicator size={moderateScale(40)} color="red" />
            )
              : (
                <>
                  <Text style={styles.footer_text}>Clinic</Text>
                  <Text style={styles.footer_text2}>Operation</Text>
                </>
              )
          }
        </>

      </View>
    </SafeAreaView>
  )
}

export default Auth

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12312b',
  },
  header: {
    flex: 1,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    width: scale(100),
    height: moderateScale(100),
    borderRadius: 10,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  footer: {
    flex: 1,
    height: moderateScale(50),
    alignItems: 'center',
    justifyContent: 'flex-end',
    fontSize: moderateScale(20),
    paddingBottom: moderateScale(40),
  },
  footer_text: {
    fontSize: moderateScale(20),
    color: '#fff',
    fontFamily: 'Montserrat_600SemiBold',
    letterSpacing: 1,
    paddingBottom: 5,
  },
  footer_text2: {
    fontSize: moderateScale(16),
    color: '#ffffff80',
    fontFamily: 'Sora_400Regular',
    letterSpacing: 1,
  }
})