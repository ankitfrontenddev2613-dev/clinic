import Button from '@/components/atoms/Button'
import imagePath from '@/constants/imagePath'
import { router } from 'expo-router'
import { Image, StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale } from 'react-native-size-matters'
const terms_agree = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}></View>
        <View style={styles.body}>
          <Image source={imagePath.reactLogo} style={{ width: moderateScale(100), height: moderateScale(100) }, styles.Image} />
          <Text style={styles.title}>Nabz</Text>
          <Text style={styles.description}>Clinic queue, without the guesswork</Text>
        </View>
        <View style={styles.footer}>
          <Button
            title="Sign in to your clinic"
            onPress={() => router.push('/login')}
            buttonStyle={[{ backgroundColor: 'white', color: "black", width: "100%" }]}
            textStyle={{ fontSize: 18 }}
          />
          <View style={styles.circle_body}>
            <View style={styles.circle_one}></View>
            <View style={styles.circle_two}></View>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default terms_agree

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12312b',
    paddingVertical: 30
  },
  header: {
    height: 100,
  },
  body: {
    flex: 1,
    padding: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    gap: moderateScale(10),
  },
  Image: {
    width: moderateScale(100),
    height: moderateScale(100),
    alignSelf: 'center',
    borderRadius: moderateScale(10),
  },
  title: {
    fontSize: moderateScale(24),
    color: '#fff',
    fontFamily: 'Montserrat_600SemiBold',
  },
  description: {
    fontSize: moderateScale(16),
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Sora_400Regular',
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(20),
    position: 'relative',
    height: 100
  }

})