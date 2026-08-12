import { MaterialIcons } from '@expo/vector-icons'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import BackButton from '../../../../components/atoms/BackButton'

import HeaderTitle from '../../../../components/molecules/HeaderTitle'
import ScreenContainer from '../../../../components/molecules/ScreenContainer'

const Notifications = () => {
  return (
    <ScreenContainer childContainerStyle={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <BackButton />
        <Pressable onPress={() => console.log('notification')}>
          <Text> Mark all read</Text>
        </Pressable>
      </View>
      <HeaderTitle SubTitle="Update" Title="Notifications" />
      <Text>Today</Text>
      <View>
        <View style={styles.flexRow}>

          <View style={styles.iconRow}>
            <MaterialIcons name="error-outline" size={25} color={'#000'} />
          </View>
          <View style={styles.contentRow}>
            <Text style={styles.title}>Queue running behind</Text>
            <Text style={styles.content}>OPD Counter 1 is 15 min behind schedule. 6 patients still waiting.</Text>
            <Text style={styles.timer}>2 min ago</Text>
          </View>
          <View style={styles.dotsColor}></View>
        </View>
      </View>
    </ScreenContainer>
  )
}

export default Notifications

const styles = StyleSheet.create({
  iconRow: {
    backgroundColor: '#E15B441A',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    flex: 1,
  },
  contentRow: {
    flexDirection: 'column',
    width: '100%',
    flex: 5,
  },
  flexRow: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    gap: 20
  },
  title: {
    color: '#12312B',
    fontSize: 15
  },
  content: {
    fontSize: 12,
    color: '#5c6b62',
  },
  dotsColor: {
    backgroundColor: '#ffb020',
    width: 10,
    height: 10,
    borderRadius: 10,
    flex: 1,
    position: 'absolute',
    top: 20,
    right: 20,
  },

})