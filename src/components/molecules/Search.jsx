import { FontAwesome } from '@expo/vector-icons'
import { useState } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { TextInput } from 'react-native-web'
const Search = ({ placeholder }) => {
  const [text, setText] = useState("")

  const handleChange = (value) => {
    setText(value)
    onSearch(value)
  }
  return (
    <View style={styles.inputCard}>
      <TextInput
        value={text}
        onChangeText={handleChange}
        autoCapitalize="words"
        autoFocus={false}
        placeholder={placeholder}
        placeholderTextColor="#ccc"
        borderColor="#5c6b62"
        style={styles.input} />
      <Pressable style={styles.iconsBox}>
        <FontAwesome name="search" size={20} color='#5c6b62' style={styles.icon} />
      </Pressable>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  inputCard: {
    position: 'relative'
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#fff',
    paddingLeft: moderateScale(55),
    borderRadius: 10,
    fontSize: 16,
    letterSpacing: 1
  },
  iconsBox: {
    position: 'absolute',
    height: 50,
    width: 50,
    top: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
})