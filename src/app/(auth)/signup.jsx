import Button from '@/components/atoms/Button'
import { AntDesign, Feather } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale } from 'react-native-size-matters'

const signup = () => {
  const router = useRouter()
  const inputFields = [
    {
      title: 'Clinic name',
      placeholder: 'HealthPlus Clinic',
      keyboardType: 'default',
      icon: <AntDesign name="home" size={18} color="#666" />,
    },
    {
      title: 'Email',
      placeholder: 'clinic@example.com',
      keyboardType: 'email-address',
      icon: <AntDesign name="mail" size={18} color="#666" />,
    },
    {
      title: 'Phone Number',
      placeholder: '+91 85586 58542',
      keyboardType: 'phone-pad',
      icon: <AntDesign name="phone" size={18} color="#666" />,
    },
    {
      title: 'Location',
      placeholder: 'City, State',
      keyboardType: 'default',
      icon: <AntDesign name="environment" size={18} color="#666" />,
    },
  ];

  const [input, setInput] = useState(Array(inputFields.length).fill(''));

  const handleChange = (text, index) => {
    const values = [...input];
    values[index] = text;
    setInput(values);
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.body}>
          <Pressable onPress={() => router.back()} style={styles.arrowBtn}>
            <Feather name="arrow-left" size={28} color="black" />
          </Pressable>
          <View style={styles.textContainer}>
            <Text style={styles.stepText}>Step 1 of 2</Text>
            <Text style={styles.chooseText}>Tell us about your clinic</Text>
            <Text style={styles.pickText}>Starter plan · ₹899/mo</Text>
          </View>
          <View style={styles.inputContent}>
            {inputFields.map((item, index) => (
              <View style={styles.inputRow} key={index}>
                <View style={styles.lableRow}>
                  {item.icon}
                  <Text style={styles.inputText}>{item.title}</Text>
                </View>

                <View style={styles.inputContainer}>
                  <TextInput
                    value={input[index]}
                    onChangeText={(text) => handleChange(text, index)}
                    placeholder={item.placeholder}
                    keyboardType={item.keyboardType}
                    autoCapitalize="none"
                    style={styles.input}
                  />
                </View>
              </View>
            ))}
          </View>
          <View style={styles.buttonRow}>
            <Button
              title="Sign in"
              href="/(main)"
              buttonStyle={[{ backgroundColor: 'black', color: "#fff", width: '100%' }, styles.button]}
              textStyle={{ fontSize: 18, color: 'white', width: '100%' }}

            />
            <Text style={styles.forgotText}>By continuing you agree to Nabz's Terms of Service and Privacy Policy.</Text>
          </View>

        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
  alignItems: 'center'
}

export default signup

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  body: {
    flex: 1,
    paddingTop: moderateScale(20),
    alignItems: 'start',
    paddingHorizontal: moderateScale(20),
    width: '100%'
  },
  textContainer: {
    width: '100%',
    gap: 10,
    marginBottom: moderateScale(10)
  },
  stepText: {
    fontSize: moderateScale(12),
    letterSpacing: moderateScale(1),
    textTransform: 'uppercase',
    color: '#5c6b62',
  },
  chooseText: {
    fontSize: moderateScale(25),
    fontWeight: '600'
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
    gap: 10,
    width: '100%'

  }, inputRow: {
    gap: 5
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
    fontSize: 12,
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
    fontWeight: 600
  }
})