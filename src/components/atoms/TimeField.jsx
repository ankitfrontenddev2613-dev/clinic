import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

// ---------- Time Field ----------
const TimeField = ({ label, value, onChange }) => {
  const [show, setShow] = useState(false)

  const formatTime = (date) => {
    const h = String(date.getHours()).padStart(2, '0')
    const m = String(date.getMinutes()).padStart(2, '0')
    return `${h} : ${m}`
  }

  return (
    <View style={styles.halfField}>
      <Text style={styles.timeLabel}>{label}</Text>
      <Pressable style={styles.timeBox} onPress={() => setShow(true)}>
        <Text style={styles.timeText}>{formatTime(value)}</Text>
        <Ionicons name="time-outline" size={17} color="#5B6B5B" />
      </Pressable>

      {show && (
        <DateTimePicker
          value={value}
          mode="time"
          style={styles.dateTime}
          is24Hour
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={(event, selectedDate) => {
            setShow(Platform.OS === 'ios')
            if (selectedDate) onChange(selectedDate)
          }}
        />
      )}
    </View>
  )
}

export default TimeField

const styles = StyleSheet.create({
  halfField: {
    flex: 2
  },
  timeBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: moderateScale(45),
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: moderateScale(16),
  }, timeText: {
    fontfamily: 'Montserrat_500Medium'
  }, dateTime: {
    fontfamily: 'Montserrat_500Medium'
  }
})