import BackButton from '@/components/atoms/BackButton';
import Button from '@/components/atoms/Button';
import HeaderTitle from '@/components/molecules/HeaderTitle';
import ScreenContainer from '@/components/molecules/ScreenContainer';
import { AntDesign, Ionicons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { useDispatch } from 'react-redux';
import { default as FormInput } from '../../components/atoms/FormInput';
import { signUp } from '../../redux/slices/authSlice';

const SignUp = () => {
  const router = useRouter()
  const inputFields = [
    {
      title: 'Clinic name',
      placeholder: 'HealthPlus Clinic',
      keyboardType: 'default',
      iconTag: AntDesign,
      iconName: 'home',
      icon: <AntDesign name="home" size={18} color="#666" />,
    },
    {
      title: 'Email',
      placeholder: 'clinic@example.com',
      keyboardType: 'email-address',
      secureTextEntry: false,
      iconTag: Ionicons,
      iconName: 'mail-outline',
      icon: <Ionicons name="mail-outline" color="#000" size={24} />,
    },
    {
      title: 'Phone Number',
      placeholder: '+91 85586 58542',
      keyboardType: 'phone-pad',
      secureTextEntry: false,
      iconTag: SimpleLineIcons,
      iconName: 'phone',
      icon: <SimpleLineIcons name="phone" color="#000" size={24} />,
    },
    {
      title: 'Location',
      placeholder: 'City, State',
      keyboardType: 'default',
      secureTextEntry: false,
      iconTag: AntDesign,
      iconName: 'environment',
      icon: <AntDesign name="environment" size={18} color="#666" />,
    },
    {
      title: 'Passowrd',
      placeholder: 'Password',
      keyboardType: 'default',
      secureTextEntry: true,
      iconTag: MaterialIcons,
      iconName: 'security',
      icon: <MaterialIcons name="security" color="#000" size={24} />,
    },
  ];

  const [input, setInput] = useState(Array(inputFields.length).fill(''));

  const handleChange = (text, index) => {
    const values = [...input];
    values[index] = text;
    setInput(values);
  };
  const { plan, price } = useLocalSearchParams()

  const dispatch = useDispatch()
  const handleSignup = async () => {
    const isEmpty = input.some(value => !value.trim())
    if (isEmpty) {
      Alert.alert(
        'Error', 'Please fill all fields'
      )
      return
    }
    const user = {
      clinicName: input[0],
      email: input[1],
      phone: input[2],
      location: input[3],
      password: input[4], plan, price,
    };
    try {
      await AsyncStorage.setItem('user', JSON.stringify(user))
      dispatch(signUp(user));
      Alert.alert(
        'Success',
        'Account created successfully'
      );
      router.replace('/createAccount');
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ScreenContainer childContainerStyle={styles.container}>
      <View style={styles.body}>
        <BackButton />

        <View style={styles.textContainer}>
          <HeaderTitle SubTitle="Step 2 of 2" Title="Tell us about your clinic" headingStyle={{ marginBottom: 0 }} />
          <Text style={styles.pickText}>Starter plan <Text style={styles.boldText}>{plan} ·₹{price}/mo</Text></Text>
        </View>

        <View style={styles.inputContent}>
          {inputFields.map((item, index) => (
            <View style={styles.inputRow} key={index}>
              <FormInput
                value={input[index]}
                onChangeText={(text) => handleChange(text, index)}
                placeholder={item.placeholder}
                keyboardType={item.keyboardType}
                inputText={styles.input}
                icon={item.iconTag}
                secureTextEntry={item.secureTextEntry}
                iconName={item.iconName}
                label={item.title}
              />
            </View>
          ))}
        </View>
        <View style={styles.buttonRow}>
          <Button
            title="Sign in"

            onPress={handleSignup}
            buttonStyle={[{ backgroundColor: 'black', color: "#fff", width: '100%' }, styles.button]}
            textStyle={{ fontSize: 18, color: 'white', width: '100%' }}

          />
          <Text style={styles.forgotText}>By continuing you agree to Nabz's Terms of Service and Privacy Policy.</Text>
        </View>

      </View>
    </ScreenContainer>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  boldText: {
    fontFamily: 'Sora_500Medium',
    color: '#000'
  },
  body: {
    flex: 1,
    paddingTop: moderateScale(20),
    alignItems: 'start',
    width: '100%'
  },
  textContainer: {
    width: '100%',
    gap: moderateScale(10),
    marginBottom: moderateScale(10)
  },
  pickText: {
    fontSize: moderateScale(15),
    fontWeight: '500',
    color: '#5c6b62',
  },
  arrowBtn: {
    backgroundColor: '#fff',
    width: moderateScale(45),
    height: moderateScale(45),
    borderRadius: moderateScale(50),
    marginBottom: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  lableRow: {
    flexDirection: 'row',
    gap: moderateScale(10),
    alignItems: 'center',
  },
  inputContent: {
    marginBottom: moderateScale(15),
    gap: moderateScale(10),
    width: '100%'

  }, inputRow: {
    gap: moderateScale(10)
  },
  inputText: {
    fontSize: moderateScale(12),
    color: "#5c6b62",
    letterSpacing: 1,
  },
  input: {
    borderRadius: moderateScale(10),
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(10),
    backgroundColor: '#fff',
    fontSize: moderateScale(16),
    height: moderateScale(50)
  },
  placeholder: {
    color: "red",
    fontSize: moderateScale(12),
  },
  buttonRow: {
    gap: 10,
    marginTop: moderateScale(10),
    marginBottom: moderateScale(10),
    alignItems: 'center',
    width: '100%'
  },
  forgotText: {
    fontSize: moderateScale(15),
    color: "#1c7a6e",
    fontFamily: 'Sora_400Regular'
  }
})