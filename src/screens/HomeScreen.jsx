import { ScrollView, StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { SafeAreaView } from 'react-native-web'
import AppointmentTabs from '../components/molecules/AppointmentTabs'
import GreetingHeader from '../components/molecules/GreetingHeader'
import QueueCard from '../components/organisms/QueueCard'


const HomeScreen = ({ homeStyle }) => {
  return (
    <SafeAreaView style={styles.container}>
      <GreetingHeader greeting="Good Evening" clinicName="HealthPlus Clinic" />
      <QueueCard
        token="15"
        nextPatient="Ankit Chauhan"
        appointments={12}
        waitingTime={12} />
        <ScrollView showsHorizontalScrollIndicator={false}>
          <AppointmentTabs />
        </ScrollView>
    </SafeAreaView>

  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(15),
    // backgroundColor: '#e5e7eb'
  }
})