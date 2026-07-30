import { useState } from 'react'
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native'

const DoctorAvailableModal = ({ visible, onClose }) => {
  const [availableDoctor, setAvailableDoctor] = useState(false)
  const openDoctorDetails = (doctor) => {
    setAvailableDoctor(doctor)
  }
  const closeDoctorDetails = (doctor) => {
    setAvailableDoctor(null)
  }
  return (
    <View>
      <Modal
        visible={visible}
        transparent
        animationType="slide"
        onRequestClose={onClose}
      >
        <View style={styles.overlay}>
          <View style={styles.modalContainer}>

            {/* Drag Indicator */}
            <View style={styles.handle} />

            {/* Header */}
            <View style={styles.header}>
              <View>
                <Text style={styles.team}>TEAM</Text>
                <Text style={styles.title}>Doctors</Text>
              </View>

              <Pressable
                style={styles.closeButton}
                onPress={onClose}
              >
                <Text style={{ fontSize: 18 }}>✕</Text>
              </Pressable>
            </View>

            {/* Doctor Card */}
            <View style={styles.cardrow}>
              <View style={styles.card}>
                <Text style={styles.name}>Dr. Robert Smith</Text>
                <Text>Cardiologist • 12 yrs</Text>
              </View>
            </View>

            <View style={styles.card}>
              <Text style={styles.name}>Dr. Neha Pillai</Text>
              <Text>Dermatologist • 7 yrs</Text>
            </View>

          </View>
        </View>
      </Modal>
    </View>
  )
}

export default DoctorAvailableModal

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.35)",
  },

  modalContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 20,
    minHeight: "40%",
  },

  handle: {
    width: 60,
    height: 5,
    borderRadius: 5,
    backgroundColor: "#D9D9D9",
    alignSelf: "center",
    marginBottom: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  team: {
    fontSize: 12,
    color: "#7B7B7B",
    letterSpacing: 1,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    marginTop: 4,
  },

  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 18,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },

  name: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
})