import { StyleSheet, Text, View } from 'react-native';

const PatientCard = ({ initials, name, time, department, queueNumber }) => {
  return (
    <>
      <View style={styles.card}>
        {/* Top Row: Initials, Details & Queue Badge */}
        <View style={styles.cardHeader}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{initials}</Text>
          </View>

          <View style={styles.patientInfo}>
            <Text style={styles.patientName}>{name}</Text>
            <Text style={styles.patientDetails}>
              {time}  •  {department}
            </Text>
          </View>

          <View style={styles.queueBadge}>
            <Text style={styles.queueBadgeText}>{queueNumber}</Text>
          </View>
        </View>
      </View>

    </>

  )
}

export default PatientCard

const styles = StyleSheet.create({

  card: {
    padding: 16,
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
    fontFamily: 'Montserrat_600SemiBold',
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
    fontFamily: 'Montserrat_600SemiBold',
  },
  patientDetails: {
    fontSize: 12,
    color: '#5B7068',
    marginTop: 4,
    fontFamily: 'Sora_500Medium'
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
    fontFamily: 'Sora_400Regular',
    textTransform: 'capitalize'
  },
  divider: {
    height: 1,
    backgroundColor: '#EEF2F0',
    marginVertical: 14,
  },


})