import { useState } from 'react'
import { FlatList, Pressable, StyleSheet, View } from 'react-native'
import PatientDetailsModal from '../../../components/modals/PatientDetailsModal'
import PatientCard from '../../../components/molecules/PatientCard'

// Mock patient data array
const data = [
  {
    id: '1',
    seen: 'seen',
    initials: 'AC',
    name: 'Anamika Chauhan',
    time: '2:00 PM',
    department: 'Cardiology',
  },
  {
    id: '2',
    seen: 'seen',
    initials: 'RV',
    name: 'Rahul Verma',
    time: '2:00 PM',
    department: 'Cardiology',
  },
  {
    id: '3',
    seen: 'seen',
    initials: 'SI',
    name: 'Sana Iyer',
    time: '2:30 PM',
    department: 'Dermatology',
  },
  {
    id: '4',
    seen: 'seen',
    initials: 'SI',
    name: 'Ankit Chauhan',
    time: '3:50 PM',
    department: 'Cardiology',
  },
  {
    id: '5',
    seen: 'seen',
    initials: 'DA',
    name: 'Divya Chauhan',
    time: '4:50 PM',
    department: 'Cardiology',
  },
]
const Complete = () => {
  const [selectedPatient, setSelectedPatient] = useState(null)
  const openPatientDetails = (patient) => {
    setSelectedPatient(patient)
  }
  const closePatientDetails = () => {
    setSelectedPatient(null)
  }
  return (
    <View>

      <FlatList
        showsVerticalScrollIndicator={false}
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
                queueNumber={item?.seen}
              />
            </Pressable>

          </View>
        )
        }
      />
      <PatientDetailsModal
        patient={selectedPatient}
        visible={!!selectedPatient}
        onClose={closePatientDetails}
      />
    </View>
  )
}

export default Complete

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
    paddingBottom: 170,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccccccab',
  },
})