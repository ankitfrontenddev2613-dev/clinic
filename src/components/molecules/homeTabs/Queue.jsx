import { useState } from 'react'
import { FlatList, Pressable, StyleSheet, View } from 'react-native'
import PatientDetailsModal from '../../modals/PatientDetailsModal'
import ActionButtons from '../ActionButtons'
import PatientCard from '../PatientCard'

// Mock patient data array
const data = [
  {
    id: '1',
    queueNumber: '#1',
    initials: 'RV',
    name: 'Rahul Verma',
    time: '2:00 PM',
    department: 'Cardiology',
  },
  {
    id: '2',
    queueNumber: '#2',
    initials: 'SI',
    name: 'Sana Iyer',
    time: '2:30 PM',
    department: 'Dermatology',
  },
  {
    id: '3',
    queueNumber: '#3',
    initials: 'SI',
    name: 'Ankit Chauhan',
    time: '3:50 PM',
    department: 'Cardiology',
  },
  {
    id: '4',
    queueNumber: '#4',
    initials: 'DA',
    name: 'Divya Chauhan',
    time: '4:50 PM',
    department: 'Cardiology',
  },
]

const Queue = () => {
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
        data={data}
        keyExtractor={(item) => item.id}
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
                queueNumber={item?.queueNumber}
              />
            </Pressable>
            <View style={styles.divider} />
            <ActionButtons />
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

export default Queue

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