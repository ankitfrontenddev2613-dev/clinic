import { StyleSheet, Text, View } from 'react-native'

const Language = () => {
  return (
    <View style={styles.languageBox}>
      <Text style={styles.text}>Language</Text>
      <Text style={styles.languText}>English</Text>
    </View>
  )
}

export default Language

const styles = StyleSheet.create({
  languageBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 15
  }, text: {
    fontSize: 15,
    fontFamily: 'Sora_500Medium',
    color: '#12312B'
  }, languText: {
    color: '#5c6b62',
    fontFamily: 'Monstrrat_400Medium'
  }
})