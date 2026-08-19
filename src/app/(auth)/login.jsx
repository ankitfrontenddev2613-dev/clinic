import Button from '@/components/atoms/Button';
import FormInput from '@/components/atoms/FormInput';
import HeaderTitle from '@/components/molecules/HeaderTitle';
import { login } from '@/redux/slices/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link, router } from 'expo-router';
import { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';
import { useDispatch } from 'react-redux';
const Login = () => {
  const [email, setEmail] = useState('ankitchauhan@phoeniixx.in')
  const [password, setpassword] = useState('ankit@12345');

  const dispatch = useDispatch()
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert(
        'Error',
        'Please enter email and password'
      )
      return;
    }
    try {
      const storedUser = await AsyncStorage.getItem('user')
      if (!storedUser) {
        Alert.alert(
          'Error',
          'No account found. Please signup first.'
        )
        return;
      }
      const user = JSON.parse(storedUser);
      if (
        user.email === email &&
        user.passwrod === password
      ) {
        dispatch(login(user))
        router.replace('/(main)/home')
      } else {
        Alert.alert(
          'Login Failed',
          'Invalid email or password'
        );
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.body}>
        <View style={styles.content}>
          <View style={styles.welcome}>
            <HeaderTitle SubTitle="Staff access" Title="Welcome back" />
            <Text style={styles.SingText}>Sign in to run today's queue.</Text>
          </View>
          <View style={styles.inputContent}>
            <FormInput
              label="Email"
              placeholder="Type here to Email"
              autoCapitalize="auto"
              inputText={styles.input}
              value={email}
              keyboardType="email-address"
              onChangeText={setEmail}
            />
            <FormInput
              label="Password"
              placeholder="Type here to Password"
              value={password}
              secureTextEntry={true}
              inputText={styles.input}
              onChangeText={setpassword}
            />
          </View>
          <View style={styles.buttonRow}>
            <Button
              title="Sign in"
              href="/(main)/home"
              onPress={handleLogin}
              buttonStyle={[styles.button]}
              textStyle={{ fontSize: 18, color: 'white', width: '100%' }}

            />
            <Link href="/forgotpassword" style={{ marginTop: 10 }}><Text style={styles.forgotText}>Forgot password?</Text></Link>
            <Text style={[styles.orText]}>or</Text>
            <Button
              title="New clinic? Sign up"
              onPress={() => router.push('/choose-plan')}
              buttonStyle={[styles.secondButton]}
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
  },
  orText: {
    fontSize: moderateScale(15),
    color: "#1c7a6e",
    marginBottom: moderateScale(10),
  },
  button: {
    backgroundColor: 'black',
    color: "#fff",
    width: '100%'
  },
  secondButton: {
    backgroundColor: 'white',
    color: "black",
    width: '100%'
  }
})