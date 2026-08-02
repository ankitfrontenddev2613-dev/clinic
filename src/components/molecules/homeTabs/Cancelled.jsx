import { useState } from 'react'
import { FlatList, Pressable, StyleSheet, View } from 'react-native'
import PatientDetailsModal from '../../modals/PatientDetailsModal'
import PatientCard from '../PatientCard'

// Mock patient data array
const data = [
  {
    id: '1',
    cancelled: 'cancelled',
    initials: 'RS',
    name: 'Rohit Sharma',
    time: '2:30 PM',
    department: 'Dermatology',
  },
  {
    id: '2',
    cancelled: 'cancelled',
    initials: 'SI',
    name: 'Sana Iyer',
    time: '2:30 PM',
    department: 'Dermatology',
  },
  {
    id: '3',
    cancelled: 'cancelled',
    initials: 'SI',
    name: 'Ankit Chauhan',
    time: '3:50 PM',
    department: 'Cardiology',
  },
  {
    id: '4',
    cancelled: 'cancelled',
    initials: 'RV',
    name: 'Rahul Verma',
    time: '2:00 PM',
    department: 'Cardiology',
  },
  {
    id: '5',
    cancelled: 'cancelled',
    initials: 'DA',
    name: 'Divya Chauhan',
    time: '4:50 PM',
    department: 'Cardiology',
  },
]
const Cancelled = () => {
  const [selectedPatient, setSelectedPatient] = useState(null)
  const openPatientDetails = (patient) => {
    setSelectedPatient(patient)
  }
  const closePatientDetails = () => {
    setSelectedPatient(null)
  }
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        showsVerticalScrollIndicator={true}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item, index }) => (
          <View style={styles.container}>
            <Pressable
              onPress={() => openPatientDetails(item)}
              style={({ pressed }) => [
                pressed && styles.pressed,
              ]}
            >

              <PatientCard
                name={item?.name}
                initials={item?.initials}
                time={item?.time}
                department={item?.department}
                queueNumber={item?.cancelled}
              />
            </Pressable>
            {/* Patient Details Modal */}
            <PatientDetailsModal
              patient={selectedPatient}
              visible={!!selectedPatient}
              onClose={closePatientDetails}
            />
          </View>
        )
        }
      />
    </View>
  )
}

export default Cancelled

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 10,
  },

  listContainer: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    gap: 20,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccccccab',
  },
})