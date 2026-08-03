import { StyleSheet, Text, View } from 'react-native'

const FormDateField = ({ label, value, onChange }) => {
  const [show, setShow] = useState(false)

  const formatDate = (date) => {
    const d = String(date.getDate()).padStart(2, '0')
    const m = String(date.getMonth() + 1).padStart(2, '0')
    const y = date.getFullYear()
    return `${d} - ${m} - ${y}`
  }

  return (
    <View style={styles.fieldContainer}>
      <FieldLabel icon={Ionicons} iconName="calendar-outline" label={label} />
      <Pressable style={styles.inputBox} onPress={() => setShow(true)}>
        <Text style={styles.inputText}>{value ? formatDate(value) : 'DD - MM - YYYY'}</Text>
        <Ionicons name="calendar-outline" size={18} color="#5B6B5B" />
      </Pressable>

      {show && (
        <DateTimePicker
          value={value || new Date(1990, 0, 1)}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          maximumDate={new Date()}
          onChange={(event, selectedDate) => {
            setShow(Platform.OS === 'ios')
            if (selectedDate) onChange(selectedDate)
          }}
        />
      )}
    </View>
  )
}

export default FromDateField

const styles = StyleSheet.create({})