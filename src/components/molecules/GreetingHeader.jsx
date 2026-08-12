import { FontAwesome } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import DoctorAvailableModal from '../modals/DoctorAvailableModal'

const GreetingHeader = ({ greeting, clinicName }) => {
  const router = useRouter()
  const [availableDoctor, setAvailableDoctor] = useState(false);
  return (
    <View style={styles.headerConteiner}>
      <View>
        <Text style={styles.greeting}>{greeting}</Text>
        <Text style={styles.clinicName}>{clinicName}</Text>
      </View>
      <View style={styles.iconRow}>
        <View style={styles.icons}>
          <Pressable
            onPress={() => setAvailableDoctor(true)}
          >
            <FontAwesome name="stethoscope" color="#000" size={24} />
          </Pressable>
        </View>
        <DoctorAvailableModal
          visible={availableDoctor}
          onClose={() => setAvailableDoctor(false)}
        />
        <View style={styles.icons}>
          <Pressable onPress={() => router.push('/home/notification')}>
            <FontAwesome name="bell-o" color="#000" size={24} />
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default GreetingHeader

const styles = StyleSheet.create({
  headerConteiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  greeting: {
    fontSize: moderateScale(12),
    textTransform: 'uppercase',
    letterSpacing: moderateScale(2),
    paddingTop: moderateScale(5),
    fontFamily: 'Sora_500Medium',
  },
  clinicName: {
    fontSize: moderateScale(20),
    fontFamily: 'Montserrat_600SemiBold'
  },
  icons: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: '100%'
  },
  iconRow: {
    flexDirection: 'row',
    gap: 10
  }
})