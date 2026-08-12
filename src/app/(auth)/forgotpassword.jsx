import Button from '@/components/atoms/Button';
import { Feather } from "@expo/vector-icons";
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';
const forgetpassword = () => {
  const router = useRouter()
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.body}>
        <Pressable onPress={() => router.back()} style={styles.arrowBtn}>
          <Feather name="arrow-left" size={28} color="black" />
        </Pressable>
        <View style={styles.content}>
          <View style={styles.reset}>
            <Text style={styles.restPassText}>Reset password</Text>
            <Text style={styles.sendText}>We'll send a reset link to your registered email.</Text>
          </View>
          <View style={styles.inputContent}>

            <View style={styles.inputRow}>
              <Text style={styles.inputText}>Email</Text>
              <TextInput keyboardType="email-address"
                autoCapitalize="none"
                placeholder="Type here to Email"
                style={[{
                  height: 45,
                }, styles.input]}
              />
            </View>
          </View>
          <View style={styles.buttonRow}>
            <Button
              title="Send reset link"
              href="/verification_email"
              buttonStyle={[{ backgroundColor: 'black', color: "#fff", width: '100%' }, styles.button]}
              textStyle={{ fontSize: 18, color: 'white', width: '100%' }}
            />
          </View>
        </View>
      </View>
      <View style={styles.footer}></View>
    </SafeAreaView>
  )
}

export default forgetpassword

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f4ee'
  },
  header: {
    height: moderateScale(50)
  },
  footer: {
    height: moderateScale(50)
  },
  body: {
    flex: 1,
    paddingHorizontal: moderateScale(20),
    justifyContent: 'center',
    width: '100%',
    height: '100',
  },
  reset: {
    marginBottom: 15
  },
  restPassText: {
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
  inputContent: {
    marginBottom: moderateScale(15),
    gap: 10,
    fontFamily: 'Sora_400Regular',

  }, inputRow: {
    gap: 5
  },
  inputText: {
    fontSize: moderateScale(12),
    color: "#5c6b62",
    letterSpacing: 1,
    fontFamily: 'Sora_400Regular',
  },
  input: {
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(10),
    backgroundColor: '#fff',
    textSize: moderateScale(20),
    fontFamily: 'Sora_400Regular',
  },
  placeholder: {
    color: "red"
  },
  buttonRow: {
    gap: 10,
    marginTop: moderateScale(10),
    marginBottom: moderateScale(10),
    alignItems: 'center',

  }, arrowBtn: {
    backgroundColor: '#fff',
    width: moderateScale(45),
    height: moderateScale(45),
    borderRadius: moderateScale(50),
    marginBottom: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
  }
})