import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'

const PatientDetailsModal = ({
  patient,
  visible,
  onClose,
}) => {
  if (!patient) return null

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <Pressable onPress={onClose} style={styles.overlays}>

        </Pressable>
        <View style={styles.modalContainer}>

          {/* Top Handle */}
          <View style={styles.handle} />

          {/* Patient Header */}
          <View style={styles.patientHeader}>

            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {patient.initials}
              </Text>
            </View>

            <View style={styles.patientInfo}>
              <Text style={styles.patientName}>
                {patient.name}
              </Text>

              <Text style={styles.patientMeta}>
                {patient.age} yrs · {patient.gender}
              </Text>
            </View>

            {/* Close */}
            <Pressable
              onPress={onClose}
              style={styles.closeButton}
            >
              <Text style={styles.closeText}>×</Text>
            </Pressable>

          </View>

          {/* Details Card */}
          <View style={styles.detailsCard}>

            <DetailItem
              label="Doctor"
              value={patient.doctor}
            />

            <View style={styles.separator} />

            <DetailItem
              label="Slot"
              value={patient.time}
            />

            <View style={styles.separator} />

            <DetailItem
              label="Phone"
              value={patient.phone}
            />

            <View style={styles.separator} />

            <DetailItem
              label="Reason for visit"
              value={patient.reason}
            />

          </View>

        </View>

      </View>
    </Modal>
  )
}

const DetailItem = ({ label, value }) => {
  return (
    <View style={styles.detailItem}>
      <Text style={styles.label}>
        {label}
      </Text>

      <Text style={styles.value}>
        {value}
      </Text>
    </View>
  )
}

export default PatientDetailsModal

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlays: {
    position: 'absolute',
    top: 0,
    backgroundColor: 'rgba(10, 45, 40, 0.45)',
    width: '100%',
    height: '100%'
  },
  modalContainer: {
    backgroundColor: '#F5F7F2',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 35,
    minHeight: '72%',
  },

  handle: {
    width: 40,
    height: 6,
    borderRadius: 10,
    backgroundColor: '#DCE2D8',
    alignSelf: 'center',
    marginBottom: 25,
  },

  patientHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },

  avatar: {
    width: 56,
    height: 56,
    borderRadius: 15,
    backgroundColor: '#F9EED2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarText: {
    fontSize: 16,
    color: '#0B2F2B',
  },

  patientInfo: {
    flex: 1,
    marginLeft: 12,
  },

  patientName: {
    fontSize: 19,
    fontWeight: '500',
    color: '#071E1B',
  },

  patientMeta: {
    marginTop: 2,
    fontSize: 13,
    color: '#6C716F',
  },

  closeButton: {
    width: 38,
    height: 38,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DCE1DA',
    alignItems: 'center',
    justifyContent: 'center',
  },

  closeText: {
    fontSize: 25,
    lineHeight: 27,
    color: '#163B36',
    fontWeight: '300',
  },

  detailsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#DDE2DA',
    paddingHorizontal: 20,
  },

  detailItem: {
    paddingVertical: 17,
  },

  label: {
    fontSize: 13,
    color: '#68716D',
    marginBottom: 7,
  },

  value: {
    fontSize: 16,
    color: '#061D1A',
    fontWeight: '600',
  },

  separator: {
    height: 1,
    backgroundColor: '#DDE2DA',
  },
})