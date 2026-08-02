import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const PATIENTS = [
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
];
const AppointmentList = () => {
  return (
    <View style={{ marginBottom: 15 }}>
      <FlatList
        contentContainerStyle={{ marginVertical: 10 }}
        horizontal
        data={PATIENTS}
        renderItem={({ item }) => {
          return (
            <View key={item.id} style={styles.cardWrapper}>
              {/* Left Timeline Line & Dot */}
              <View style={styles.timelineContainer}>
                <View style={styles.timelineDot} />
                {index < item.length - 1 && <View style={styles.timelineLine} />}
              </View>

              {/* Main Patient Card */}
              <View style={styles.card}>
                {/* Top Row: Initials, Details & Queue Badge */}
                <View style={styles.cardHeader}>
                  <View style={styles.avatar}>
                    <Text style={styles.avatarText}>{item.initials}</Text>
                  </View>

                  <View style={styles.patientInfo}>
                    <Text style={styles.patientName}>{patient.name}</Text>
                    <Text style={styles.patientDetails}>
                      {item.time}  •  {item.department}
                    </Text>
                  </View>

                  <View style={styles.queueBadge}>
                    <Text style={styles.queueBadgeText}>{item.queueNumber}</Text>
                  </View>
                </View>

                <View style={styles.divider} />

                {/* Bottom Row: Action Buttons */}
                <View style={styles.actionRow}>
                  {/* Pick Button */}
                  <TouchableOpacity style={[styles.actionBtn, styles.pickBtn]}>
                    <Text style={styles.pickBtnText}>✓  Pick</Text>
                  </TouchableOpacity>

                  {/* Skip Button */}
                  <TouchableOpacity style={[styles.actionBtn, styles.skipBtn]}>
                    <Text style={styles.skipBtnText}>▷|  Skip</Text>
                  </TouchableOpacity>

                  {/* Cancel Button */}
                  <TouchableOpacity style={[styles.actionBtn, styles.cancelBtn]}>
                    <Text style={styles.cancelBtnText}>✕  Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )
        }}
      />

    </View>
  )
}

export default AppointmentList

const styles = StyleSheet.create({
  // Card Styling
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 16,
    marginLeft: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 14,
    backgroundColor: '#FFF4E5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
  patientInfo: {
    flex: 1,
    marginLeft: 12,
  },
  patientName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F201C',
  },
  patientDetails: {
    fontSize: 12,
    color: '#5B7068',
    marginTop: 4,
  },
  queueBadge: {
    backgroundColor: '#FFF4E5',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  queueBadgeText: {
    color: '#E08B27',
    fontWeight: '700',
    fontSize: 12,
  },
  divider: {
    height: 1,
    backgroundColor: '#EEF2F0',
    marginVertical: 14,
  },

  // Action Buttons
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  actionBtn: {
    flex: 1,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickBtn: {
    backgroundColor: '#126B57',
  },
  pickBtnText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 13,
  },
  skipBtn: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D8E2DC',
  },
  skipBtnText: {
    color: '#4A635A',
    fontWeight: '600',
    fontSize: 13,
  },
  cancelBtn: {
    backgroundColor: '#FDEEEF',
  },
  cancelBtnText: {
    color: '#E05353',
    fontWeight: '600',
    fontSize: 13,
  },
})