import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import Cancelled from './homeTabs/Cancelled';
import Complete from './homeTabs/Complete';
import Queue from './homeTabs/Queue';


const AppointmentTabs = ({ tabStyle }) => {
  const [currentPage, setCurrentPage] = useState("queue");
  const tabs = ['queue', 'complete', 'cancelled']
  const ActivePage = () => {
    switch (currentPage) {
      case "queue":
        return <Queue />
      case "complete":
        return <Complete />
      case "cancelled":
        return <Cancelled />
      default:
        return <Queue />
    }
  }
  return (

    <View style={[{ flex: 1 }, tabStyle]}>
      <Text style={styles.title}>Today's appointments</Text>
      <View style={styles.topBarContainer}>
        {tabs.map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.tabButton,
              currentPage === item && styles.activeTab,
            ]}
            onPress={() => setCurrentPage(item)}
          >
            <Text
              style={[
                styles.tabText,
                currentPage === item && styles.activeTabText,
              ]}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {ActivePage()}
    </View>
  )
}

export default AppointmentTabs

const styles = StyleSheet.create({
  topBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: moderateScale(10),
    backgroundColor: '#fff',
    paddingHorizontal: moderateScale(5),
    paddingVertical: moderateScale(5),
    borderRadius: moderateScale(50)
  },
  title: {
    fontSize: moderateScale(20),
    marginBottom: moderateScale(15),
    fontFamily: 'Sora_400Regular'
  },
  tabButton: {
    flexDirection: 'row',
    color: '#12312B',
    flex: 1,
  },
  tabText: {
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat_500Medium',
    letterSpacing: 1,
    color: '#12312B',
    width: '100%',
    textAlign: 'center',
    paddingHorizontal: moderateScale(15),
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(50),
  },
  activeTabText: {
    width: '100%',
    color: '#fff',
    backgroundColor: '#12312B',
  },

})