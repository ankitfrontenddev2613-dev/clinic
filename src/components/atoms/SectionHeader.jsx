import { StyleSheet, Text, View } from 'react-native'

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
    marginTop: 8,
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#2A2A2A',
    letterSpacing: 0.5,
  },
  badge: {
    backgroundColor: '#FADCD9',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  badgeText: {
    color: '#C0473C',
    fontSize: 11,
    fontWeight: '600',
  },
})