import { StyleSheet, Text, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

// ---------- Section Header with Badge ----------
const SectionHeader = ({ title, badge }) => (
  <View style={styles.sectionHeaderRow}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {badge && (
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{badge}</Text>
      </View>
    )}
  </View>
)

export default SectionHeader

const styles = StyleSheet.create({
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: moderateScale(8),
    marginBottom: moderateScale(14),
  },
  sectionTitle: {
    fontSize: moderateScale(13),
    fontFamily: 'Montserrat_600SemiBold',
    color: '#2A2A2A',
    letterSpacing: 0.5,
  },
  badge: {
    backgroundColor: '#FADCD9',
    borderRadius: moderateScale(20),
    paddingHorizontal: moderateScale(12),
    paddingVertical: moderateScale(5),
  },
  badgeText: {
    color: '#C0473C',
    fontSize: moderateScale(11),
    fontFamily: 'Montserrat_500Medium',
  },
})