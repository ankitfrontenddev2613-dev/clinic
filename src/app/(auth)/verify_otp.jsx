import { Feather } from "@expo/vector-icons"
import { Link, useRouter } from "expo-router"
import { useEffect, useRef, useState } from "react"
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale } from 'react-native-size-matters'

const VerifyOTP = () => {
  const router = useRouter();
  const otpLength = 6;
  const [otp, setOtp] = useState(Array(otpLength).fill(''))
  const inputRefs = useRef([]);
  const [timer, setTimer] = useState(60);
  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.body}>
        <Pressable onPress={() => router.back()} style={styles.arrowBtn}>
          <Feather name="arrow-left" size={28} color="black" />
        </Pressable>
        <View style={styles.content}>
          <View style={styles.EnterVerify}>
            <Text style={styles.verifyText}>Enter verification code</Text>
            <Text style={styles.code}>Code sent to</Text>
            <Text style={styles.email}>dr.s****@nabz.clinic</Text>
          </View>
          <View style={styles.inputContent}>
            <View style={styles.inputRow}>
              {otp.map((value, index) => (
                <TextInput
                  key={index}
                  ref={(ref) => (inputRefs.current[index] = ref)}
                  value={value}
                  keyboardType="number-pad"
                  maxLength={1}
                  style={[{ height: 45 }, styles.input]}
                  onChangeText={(text) => {
                    const newOtp = [...otp];
                    newOtp[index] = text;
                    setOtp(newOtp);

                    // Move to next input
                    if (text && index < otpLength - 1) {
                      inputRefs.current[index + 1]?.focus();
                    }
                  }}
                  onKeyPress={({ nativeEvent }) => {
                    if (
                      nativeEvent.key === "Backspace" &&
                      !otp[index] &&
                      index > 0
                    ) {
                      inputRefs.current[index - 1]?.focus();
                    }
                  }}
                />
              ))}
            </View>
            <View style={styles.hintCode}>
              <Text style={styles.hintCodetext}>Hint: use <Text style={styles.optHint, { fontWeight: 'bold', color: '#000' }}>123456</Text> for this demo</Text>
              <Text style={styles.codeExpire}>
                {timer > 0
                  ? `expires in ${timer}s`
                  : "Code expired"}
              </Text>
            </View>
          </View>
          <View style={styles.buttonRow}>
            <Link href="/verify_otp" style={{ marginTop: 20 }}>
              <Text style={styles.resendText, { fontSize: moderateScale(16), fontWeight: "600" }}>Resend Code</Text>
            </Link>
          </View>
        </View>
      </View>
      <View style={styles.footer}></View>
    </SafeAreaView>
  )
}

export default VerifyOTP

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f4ee'
  },
  header: {
  },
  footer: {
  },
  body: {
    paddingHorizontal: moderateScale(40),
    alingItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  EnterVerify: {
    marginBottom: 15,
    gap: 10
  },
  verifyText: {
    color: "#12312b",
    fontSize: moderateScale(25),
    fontWeight: '600',
    lineHeight: moderateScale(35),
    letterSpacing: 1,
    marginBottom: 5
  },
  code: {
    color: '#5c6b62',
    fontSize: moderateScale(15)
  },
  email: {
    color: '#000',
    fontSize: moderateScale(17),

  },
  inputContent: {
    marginBottom: moderateScale(15),
    gap: 10,

  }, inputRow: {
    flexDirection: "row",
    gap: 10
  },
  input: {
    borderRadius: moderateScale(5),
    paddingHorizontal: moderateScale(10),
    backgroundColor: '#fff',
    textSize: moderateScale(20),
    flex: 6,
    width: '100%',
    alignItems: 'center',
    textAlign: 'center',
    borderColor: '#e5e7eb',
    borderWidth: 2,
  },
  buttonRow: {
    gap: 10,
    marginTop: moderateScale(10),
    marginBottom: moderateScale(10),
    alignItems: 'center'
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
  hintCode: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: moderateScale(12),
    color: '#1c7a6e'
  }
})