import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const NotificationCard = ({ notificationTitle, notificationContent, read, notificationTime }) => {

  const [readText, setReadText] = useState(read)
  return (
    <View style={styles.notificationBox}>
      <View style={styles.flexRow}>

        {/* Icon */}
        <View style={styles.iconRow}>
          <MaterialIcons
            name="error-outline"
            size={25}
            color="#E15B44"
          />
        </View>

        {/* Content */}
        <View style={styles.contentRow}>
          <Text style={styles.title}>
            {notificationTitle}
          </Text>

          <Text style={styles.content}>
            {notificationContent}
          </Text>

          <Text style={styles.timer}>
            {notificationTime}
          </Text>
        </View>

        {/* Unread indicator */}
        {
          readText ?
            (<View style={styles.dotsColor} />)
            :
            (null)
        }


      </View>
    </View>
  )
}

export default NotificationCard

const styles = StyleSheet.create({
  notificationBox: {
    width: '100%',
  },

  flexRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    padding: moderateScale(16),
    borderRadius: moderateScale(12),
    gap: moderateScale(14),
    position: 'relative',
  },

  iconRow: {
    width: moderateScale(48),
    height: moderateScale(48),
    borderRadius: moderateScale(24),
    backgroundColor: '#E15B441A',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },

  contentRow: {
    flex: 1,
    paddingRight: moderateScale(10),
  },

  title: {
    color: '#12312B',
    fontSize: moderateScale(15),
    fontFamily: 'Sora_600SemiBold',
    marginBottom: moderateScale(5),
  },

  content: {
    fontSize: moderateScale(12),
    fontFamily: 'Sora_400Regular',
    color: '#5C6B62',
    lineHeight: moderateScale(18),
    paddingRight: moderateScale(10),
  },

  timer: {
    marginTop: moderateScale(8),
    fontSize: moderateScale(11),
    fontFamily: 'Sora_400Regular',
    color: '#9AA39D',
  },

  dotsColor: {
    position: 'absolute',
    top: moderateScale(16),
    right: moderateScale(16),
    width: moderateScale(9),
    height: moderateScale(9),
    borderRadius: moderateScale(5),
    backgroundColor: '#FFB020',
  },
})