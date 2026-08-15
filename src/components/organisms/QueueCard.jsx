import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, Text, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

const QueueCard = ({ LinearStyle, token, nextPatient, appointments, waitingTime, linearGradientStyles }) => {
  return (
    <LinearGradient style={[LinearStyle]} colors={['#1B4038', '#0D211D']}
      start={{ x: 0.2, y: 0 }}
      end={{ x: 0.8, y: 1 }} style={[styles.container, linearGradientStyles]}>
      <View style={styles.cardHeader}>
        <View style={styles.columnOne}>
          <View style={styles.rowText}>
            <Text style={styles.textNow}>now Serving . OPD 1</Text>
          </View>
          <Text style={styles.tokenText}>0{token}</Text>
        </View>
        <View style={styles.columnTwo}>
          <Text style={styles.textLive}>Live</Text>
          <Text style={styles.textNext}>up next</Text>
          <Text style={styles.textPatient}>{nextPatient}</Text>
        </View>
      </View>
      <View style={[styles.cardBottom, { borderTopWidth: moderateScale(1), borderTopColor: '#e5e7eb' }]}>
        <View style={[styles.cardContent, { borderRightColor: '#e5e7eb', borderRightWidth: moderateScale(1) }]}>
          <Text style={styles.cardTitle}>Appointments today</Text>
          <Text style={styles.cardText}>{appointments}</Text>
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Avg. wait time</Text>
          <Text style={styles.cardText}>{waitingTime}min</Text>
        </View>
      </View>
    </LinearGradient>
  )
}

export default QueueCard

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
  },
  rowText: {
    flexDirection: 'row',
    alignItems: "center",
  },
  textNow: {
    color: '#ffffff80',
    fontSize: moderateScale(9),
    fontFamily: 'Sora_500Medium',
    letterSpacing: 2,
    textTransform: 'uppercase',
    gap: 20
  },
  tokenText: {
    fontSize: moderateScale(40),
    lineHeight: moderateScale(40),
    fontFamily: 'Montserrat_700Bold',
    letterSpacing: 3,
    color: '#FFB020',
    // Text Shadow Properties
    // textShadowColor: 'rgba(255, 176, 32, 0.55)', // Blue glow
    // textShadowOffset: { width: 0, height: 2 },
    // textShadowRadius: 10,
  },
  columnOne: {
    flexDirection: 'column',
    gap: moderateScale(5),
  },
  columnTwo: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: moderateScale(5)
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: '#ffffff1a',
    padding: moderateScale(15)
  },
  textLive: {
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(3),
    fontSize: moderateScale(12),
    fontFamily: 'Sora_500Medium',
    letterSpacing: 1,
    backgroundColor: '#ffffff1a',
    border: '#e5e7eb',
    borderRadius: moderateScale(50),
    color: '#fffc'
  },
  textNext: {
    color: '#ffffff80',
    fontSize: moderateScale(13),
    fontFamily: 'Sora_500Medium',
    letterSpacing: 1,
  },
  textPatient: {
    color: '#fff',
    fontSize: moderateScale(16),
    fontFamily: 'Sora_500Medium',
    letterSpacing: 1,
  },
  cardContent: {
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: moderateScale(15),
    flex: 1,
    gap: 5,
  },
  cardTitle: {
    fontSize: moderateScale(10),
    fontFamily: 'Sora_400Regular',
    letterSpacing: 1,
    color: '#ffffff80',
  },
  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: moderateScale(10),

  },
  cardText: {
    fontSize: moderateScale(10),
    fontFamily: 'Sora_400Regular',
    letterSpacing: 1,
    color: '#fff',
    fontSize: moderateScale(15),
    gap: 5
  }
})