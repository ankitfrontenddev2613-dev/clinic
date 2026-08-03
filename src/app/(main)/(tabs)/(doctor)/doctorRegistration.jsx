import { StyleSheet } from 'react-native'
import HeaderTitle from '../../../../components/molecules/HeaderTitle'
import ScreenContainer from '../../../../components/molecules/ScreenContainer'

const doctorRegistration = () => {
  return (
    <ScreenContainer childContainerStyle={{ gap: 10 }} containerStyle={{ flex: 1 }}>
      <HeaderTitle SubTitle='New Team Member' Title='New doctor registration' />
    </ScreenContainer>
  )
}

export default doctorRegistration

const styles = StyleSheet.create({})