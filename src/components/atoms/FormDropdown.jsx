import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { FlatList, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import FieldLabel from './FieldLabel';


const FormDropdown = ({ icon, iconName, label, value, options, onSelect, placeholder }) => {
  const [visible, setVisible] = useState(false)

  return (
    <View style={styles.fieldContainer}>
      <FieldLabel icon={icon} iconName={iconName} label={label} />
      <Pressable style={styles.inputBox} onPress={() => setVisible(true)}>
        <Text style={[styles.inputText, !value && { color: '#B7BDB7' }]}>
          {value || placeholder}
        </Text>
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
  )
}

export default FormDropdown

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
    maxHeight: '50%',
    paddingVertical: moderateScale(8),
  },
  optionRow: {
    paddingVertical: moderateScale(14),
    paddingHorizontal: moderateScale(20),

  },
  optionText: {
    fontSize: moderateScale(15),
    color: '#2A2A2A',
    fontFamily: 'Montserrat_500Medium'
  },
  inputBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: moderateScale(14),
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(14),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: moderateScale(45),
  },
  inputText: {
    fontSize: moderateScale(15),
    color: '#2A2A2A',
    flex: 1,
    fontFamily: 'Montserrat_500Medium'
  }
})