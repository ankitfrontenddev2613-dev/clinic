import { StyleSheet, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import AppointmentTabs from '../components/molecules/AppointmentTabs'
import GreetingHeader from '../components/molecules/GreetingHeader'
import QueueCard from '../components/organisms/QueueCard'


const HomeScreen = ({ homeStyle }) => {
  return (
    <View style={[styles.container, homeStyle]}>
      <GreetingHeader headerStyle={{}} greeting="Good Evening" clinicName="HealthPlus Clinic" />
      <QueueCard
        LinearStyle={{ flex: 1 }}
        token="15"
        nextPatient="Ankit Chauhan"
        appointments={12}
        waitingTime={12} />
      <View style={{ flex: 1 }}>
        <AppointmentTabs tabStyle={{ flex: 1 }} />
      </View>
    </View>

  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    gap: 20,
    flex: 1,
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(15),
    // backgroundColor: '#e5e7eb'
  }
})