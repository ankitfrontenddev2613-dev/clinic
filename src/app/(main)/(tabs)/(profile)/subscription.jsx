import { StyleSheet, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import Button from '../../../../components/atoms/Button'
import HeaderTitle from '../../../../components/molecules/HeaderTitle'
import ScreenContainer from '../../../../components/molecules/ScreenContainer'
import SubscriptionCard from '../../../../components/molecules/SubscriptionCard'
import UsageCard from '../../../../components/molecules/UsageCard'

const Subscription = () => {
  const cards = [
    {
      title: 'Doctors',
      rating: '4',
      maxrating: '10'
    }, {
      title: 'Queue counters',
      rating: '2',
      maxrating: '5'
    }
  ]
  return (
    <ScreenContainer>
      <HeaderTitle Title="Subscription" SubTitle="Billing" />
      <SubscriptionCard />
      <View style={{ gap: 15, marginTop: 15 }}>

        {
          cards.map((item, index) => (
            <UsageCard key={index} title={item.title} rating={item.rating} maxrating={item.maxrating} />
          ))
        }
      </View>
      <Button href="" title="Upgrade" buttonStyle={{ background: 'rgb(255 176 32 )', marginTop: moderateScale(15) }} />
    </ScreenContainer>
  )
}

export default Subscription

const styles = StyleSheet.create({

})