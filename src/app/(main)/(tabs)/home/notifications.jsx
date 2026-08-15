import { useState } from 'react'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

import BackButton from '../../../../components/atoms/BackButton'
import HeaderTitle from '../../../../components/molecules/HeaderTitle'
import NotificationCard from '../../../../components/molecules/NotificationCard'
import ScreenContainer from '../../../../components/molecules/ScreenContainer'
import { notificationsData as notification } from '../../../../data/notificationsData'

const Notifications = () => {
  const [notifications, setNotifications] = useState(notification)

  const markAllRead = () => {
    setNotifications(prev =>
      prev.map(item => ({
        ...item,
        read: true,
      }))
    )
  }

  return (
    <ScreenContainer childContainerStyle={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <BackButton />

        <Pressable onPress={markAllRead}>
          <Text style={styles.markRead}>
            Mark all read
          </Text>
        </Pressable>
      </View>

      {/* Title */}
      <HeaderTitle
        SubTitle="Update"
        Title="Notifications"
      />

      <Text style={styles.dayText}>
        Today
      </Text>

      {/* Notifications */}
      <FlatList
        data={notifications}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <NotificationCard
            notificationTitle={item.title}
            notificationContent={item.message}
            notificationTime={item.time}
            read={item.read}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => (
          <View style={styles.separator} />
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>
              No notifications
            </Text>

            <Text style={styles.emptyText}>
              You're all caught up!
            </Text>
          </View>
        }
      />

    </ScreenContainer>
  )
}

export default Notifications

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  markRead: {
    fontSize: moderateScale(12),
    fontFamily: 'Sora_500Medium',
    color: '#2F6B4F',
  },

  dayText: {
    fontSize: moderateScale(16),
    fontFamily: 'Sora_600SemiBold',
    color: '#5C6B62',
    paddingVertical: moderateScale(10),
  },

  listContent: {
    paddingBottom: moderateScale(100),
  },

  separator: {
    height: moderateScale(10),
  },

  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: moderateScale(60),
  },

  emptyTitle: {
    fontSize: moderateScale(16),
    fontFamily: 'Sora_600SemiBold',
    color: '#12312B',
  },

  emptyText: {
    marginTop: moderateScale(6),
    fontSize: moderateScale(12),
    fontFamily: 'Sora_400Regular',
    color: '#8A9490',
  },
})