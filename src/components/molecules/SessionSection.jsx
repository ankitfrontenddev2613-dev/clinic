import { StyleSheet, View } from 'react-native'
import FieldLabel from '../atoms/FieldLabel'
import TimeField from '../atoms/TimeField'

// ---------- Session Block ----------
const SessionSection = ({ icon, iconName, label, title, titleColor, startValue, endValue, onStartChange, onEndChange }) => (
  <View style={styles.sessionContainer}>
    <FieldLabel icon={icon} iconName={iconName} label={label} />
    <View style={styles.row}>
      <TimeField label="Starts at" value={startValue} onChange={onStartChange} />
      <TimeField label="Ends at" value={endValue} onChange={onEndChange} />
    </View>
  </View>
)

export default SessionSection

const styles = StyleSheet.create({
  sessionContainer: {
    width: '100%'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    gap: 20
  }
})