import { useRouter } from 'expo-router'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import BackButton from '../../../../components/atoms/BackButton'
import ScreenContainer from '../../../../components/molecules/ScreenContainer'

const Edit = () => {
  const router = useRouter()
  const handleSave = () => {
    router.push('/working-hours')
  }
  return (
    <ScreenContainer childContainerStyle={{ gap: 20 }}>
      <BackButton />
      <View style={styles.centerRow}>
        <View style={styles.rowBox}>
          <Text style={styles.testIN}>Rs</Text>
        </View>
      </View>
      <View style={styles.column}>
        <Text style={styles.nameText}>
          Dr. Robert Smith
        </Text>
        <Text style={styles.SText}>
          Cardiologist · 12 years experience
        </Text>
      </View>
      <View style={styles.rowText}>
        <View style={styles.columnContent}>
          <Text style={styles.title}>Patients seen</Text>
          <Text style={styles.content}>2.4k</Text>
        </View>
        <View style={styles.columnContent}>
          <Text style={styles.title}>Rating</Text>
          <Text style={styles.content}>4.9 ★</Text>
        </View>
      </View>
      <Pressable style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Set working hours</Text>
      </Pressable>
    </ScreenContainer>
  )
}

export default Edit

const styles = StyleSheet.create({
  centerRow: {
    alignItems: 'center',

  },
  rowBox: {
    width: moderateScale(100),
    height: moderateScale(100),
    backgroundColor: '#ffb02026',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(20)
  },
  testIN: {
    fontSize: moderateScale(28),
    fontFamily: 'Montserrat_500Medium'
  },
  row: {
    flexDirection: 'row'
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  rowText: {
    flexDirection: 'row',
    flex: 1,
    gap: 20
  },
  nameText: {
    fontSize: moderateScale(25),
    color: 'rgb(18 49 43 )',
    fontFamily: 'Sora_500Medium'
  },
  SText: {
    fontSize: moderateScale(15),
    color: 'rgb(92 107 98)',
    fontFamily: 'Sora_500Medium'
  },
  columnContent: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    gap: 10,
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(15),
  },
  title: {
    fontSize: moderateScale(13),
    fontFamily: 'Sora_500Medium',
  },
  content: {
    fontSize: moderateScale(18),
    fontFamily: 'Sora_500Medium'
  },
  saveButton: {
    backgroundColor: '#173A2E',
    borderRadius: moderateScale(30),
    paddingVertical: moderateScale(16),
    alignItems: 'center',
    marginTop: moderateScale(10),
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat_500Medium'
  }
})