import { Ionicons } from '@expo/vector-icons'
import DateTimePicker from '@react-native-community/datetimepicker'
import { useState } from 'react'
import {
  FlatList,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { ScreenContainer } from 'react-native-screens'

// ---------- Dropdown Field ----------
const IntervalDropdown = ({ value, options, onSelect }) => {
  const [visible, setVisible] = useState(false)

  return (
    <ScreenContainer>
      <View style={styles.fieldContainer}>
        <View style={styles.labelRow}>
          <Ionicons name="timer-outline" size={15} color="#5B6B5B" />
          <Text style={styles.labelText}>Slot interval</Text>
        </View>
        <Pressable style={styles.inputBox} onPress={() => setVisible(true)}>
          <Text style={styles.intervalText}>{value}</Text>
          <Ionicons name="chevron-down" size={18} color="#5B6B5B" />
        </Pressable>

        <Modal visible={visible} transparent animationType="fade">
          <Pressable style={styles.modalOverlay} onPress={() => setVisible(false)}>
            <View style={styles.modalContent}>
              <FlatList
                data={options}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <Pressable
                    style={styles.optionRow}
                    onPress={() => {
                      onSelect(item)
                      setVisible(false)
                    }}
                  >
                    <Text style={styles.optionText}>{item}</Text>
                  </Pressable>
                )}
              />
            </View>
          </Pressable>
        </Modal>
      </View>
    </ScreenContainer>
  )
}

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

// ---------- Session Block ----------
const SessionSection = ({ icon, title, titleColor, startValue, endValue, onStartChange, onEndChange }) => (
  <View style={styles.sessionContainer}>
    <View style={styles.sessionHeaderRow}>
      <Text style={styles.sessionIcon}>{icon}</Text>
      <Text style={[styles.sessionTitle, { color: titleColor }]}>{title}</Text>
    </View>
    <View style={styles.row}>
      <TimeField label="Starts at" value={startValue} onChange={onStartChange} />
      <TimeField label="Ends at" value={endValue} onChange={onEndChange} />
    </View>
  </View>
)

// ---------- Helper to build a Date at a given hour/minute ----------
const timeAt = (h, m) => {
  const d = new Date()
  d.setHours(h, m, 0, 0)
  return d
}

// ---------- Main Screen ----------
const ClinicHoursForm = () => {
  const [interval, setInterval] = useState('Every 15 minutes')

  const [morningStart, setMorningStart] = useState(timeAt(7, 0))
  const [morningEnd, setMorningEnd] = useState(timeAt(14, 0))

  const [eveningStart, setEveningStart] = useState(timeAt(14, 0))
  const [eveningEnd, setEveningEnd] = useState(timeAt(23, 0))

  const handleSave = () => {
    console.log({
      interval,
      morning: { start: morningStart, end: morningEnd },
      evening: { start: eveningStart, end: eveningEnd },
    })
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.scrollContent}>
      <IntervalDropdown
        value={interval}
        options={['Every 10 minutes', 'Every 15 minutes', 'Every 20 minutes', 'Every 30 minutes']}
        onSelect={setInterval}
      />

      <SessionSection
        icon="🌤️"
        title="MORNING SESSION"
        titleColor="#C9922E"
        startValue={morningStart}
        endValue={morningEnd}
        onStartChange={setMorningStart}
        onEndChange={setMorningEnd}
      />

      <SessionSection
        icon="🌙"
        title="EVENING SESSION"
        titleColor="#2E6B8A"
        startValue={eveningStart}
        endValue={eveningEnd}
        onStartChange={setEveningStart}
        onEndChange={setEveningEnd}
      />

      <Pressable style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save hours</Text>
      </Pressable>
    </ScrollView>
  )
}

export default ClinicHoursForm

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#EEF1EA',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },
  fieldContainer: {
    marginBottom: 28,
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 6,
  },
  labelText: {
    fontSize: 13,
    color: '#5B6B5B',
    fontWeight: '500',
  },
  inputBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  intervalText: {
    fontSize: 15,
    color: '#2E6B4F',
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  sessionContainer: {
    marginBottom: 24,
  },
  sessionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 14,
  },
  sessionIcon: {
    fontSize: 15,
  },
  sessionTitle: {
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  halfField: {
    flex: 1,
  },
  timeLabel: {
    fontSize: 13,
    color: '#3A3A3A',
    fontWeight: '500',
    marginBottom: 6,
  },
  timeBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timeText: {
    fontSize: 15,
    color: '#C0473C',
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  saveButton: {
    backgroundColor: '#173A2E',
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 10,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '50%',
    paddingVertical: 8,
  },
  optionRow: {
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  optionText: {
    fontSize: 15,
    color: '#2A2A2A',
  },
})