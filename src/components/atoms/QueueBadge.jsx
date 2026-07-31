import { StyleSheet, Text, View } from 'react-native'

const QueueBadge = ({ queueNumber }) => {
  return (
    <View style={styles.queueBadge}>
      <Text style={styles.queueBadgeText}>{queueNumber}</Text>
    </View>
  )
}

export default QueueBadge

const styles = StyleSheet.create({
  queueBadge: {
    backgroundColor: '#FFF4E5',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  queueBadgeText: {
    color: '#E08B27',
    fontWeight: '700',
    fontSize: 12,
    fontFamily: 'Sora_400Regular',
    textTransform: 'capitalize'
  },
})