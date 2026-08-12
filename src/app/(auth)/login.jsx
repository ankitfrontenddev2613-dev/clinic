import Button from '@/components/atoms/Button';
import { Link } from 'expo-router';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.body}>
        <View style={styles.content}>
          <View style={styles.welcome}>
            <Text style={styles.staffText}>Staff access</Text>
            <Text style={styles.welcomeText}>Welcome back</Text>
            <Text style={styles.SingText}>Sign in to run today's queue.</Text>
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
            <View style={styles.inputRow}>
              <Text style={styles.inputText}>Password</Text>
              <TextInput type="password"
                placeholder="Type here to Password"
                style={[{
                  height: 45,
                }, styles.input]}
              />
            </View>
          </View>
          <View style={styles.buttonRow}>
            <Button
              title="Sign in"
              href="/(main)/home"
              buttonStyle={[{ backgroundColor: 'black', color: "#fff", width: '100%' }, styles.button]}
              textStyle={{ fontSize: 18, color: 'white', width: '100%' }}

            />
            <Link href="/forgotpassword" style={{ marginTop: 10 }}><Text style={styles.forgotText}>Forgot password?</Text></Link>
            <Text style={{ fontSize: 15, color: "#1c7a6e", marginBottom: 10 }}>or</Text>
            <Button
              title="New clinic? Sign up"
              href="/choose-plan"
              buttonStyle={{ backgroundColor: 'white', color: "black", width: '100%' }}
              textStyle={{ fontSize: 18 }}
            />
          </View>
        </View>
      </View>
      <View style={styles.footer}></View>
    </SafeAreaView>
  )
}

export default Login

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
    paddingVertical: moderateScale(40),
    gap: 5,
    width: '100%',
    height: '100',
  },
  welcome: {
    marginBottom: 15
  },
  staffText: {
    fontSize: moderateScale(11),
    color: "#1c7a6e",
    textAlign: 'left',
    textTransform: 'uppercase',
    fontFamily: 'Sora_400Regular',
  },
  welcomeText: {
    color: "#12312b",
    fontSize: moderateScale(30),
    letterSpacing: 1,
    fontFamily: 'Montserrat_600SemiBold',
  },
  SingText: {
    color: '#5c6b62',
    fontSize: moderateScale(16),
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
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(10),
    backgroundColor: '#fff',
    fontSize: moderateScale(16),
    height: moderateScale(50),
    fontFamily: 'Sora_400Regular',
  },
  placeholder: {
    color: "red",
    fontSize: 12,
  },
  buttonRow: {
    gap: 10,
    marginTop: moderateScale(10),
    marginBottom: moderateScale(10),
    alignItems: 'center'
  },
  forgotText: {
    fontSize: moderateScale(15),
    color: "#1c7a6e",
    fontFamily: 'Sora_600SemiBold',
  }
})