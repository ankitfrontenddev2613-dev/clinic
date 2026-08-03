import { StyleSheet, View } from 'react-native'
import DoctorActions from '../molecules/DoctorActions'
import DoctorHeader from '../molecules/DoctorHeader'

const DoctorCard = ({ doctor,
  onToggleAvailability,
  onDelete,
  onPress, }) => {
  return (
    <View style={styles.card}>
      <DoctorHeader
        doctor={doctor}
        onToggle={onToggleAvailability}
      />

      <View style={styles.line} />

      <DoctorActions
        available={doctor.available}
        onOpen={() => onPress(doctor)}
        onDelete={() => onDelete(doctor.id)}
      />
    </View>
  )
}

export default DoctorCard

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    gap: 20,
  }, line: {
    width: '100%',
    height: 2,
    backgroundColor: '#ccc'

  }
})