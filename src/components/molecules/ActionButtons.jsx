import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const ActionButtons = () => {
  return (
    <>
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
    </>

  )
}

export default ActionButtons

const styles = StyleSheet.create({
  // Action Buttons Styles
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    padding: 16
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
    fontFamily: 'Sora_400Regular',
    letterSpacing: 1
  },
  skipBtn: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D8E2DC',
  },
  skipBtnText: {
    color: '#4A635A',
    fontSize: 13,
    fontFamily: 'Sora_600SemiBold'
  },
  cancelBtn: {
    backgroundColor: '#FDEEEF',
  },
  cancelBtnText: {
    color: '#E05353',
    fontWeight: '600',
    fontSize: 13,
    fontFamily: 'Sora_600SemiBold'
  },
})