import { StyleSheet } from 'react-native'
import BackButton from '../../../../components/atoms/BackButton'
import HeaderTitle from '../../../../components/molecules/HeaderTitle'
import ScreenContainer from '../../../../components/molecules/ScreenContainer'
import DoctorCredentialsForm from '../../../../components/organisms/DoctorCredentialsForm'

const Registration = () => {

  return (
    <ScreenContainer childContainerStyle={{ gap: 10 }} >
      <BackButton />
      <HeaderTitle SubTitle='New Team Member' Title='New doctor registration' />
      <DoctorCredentialsForm />
    </ScreenContainer>
  )
}

export default Registration

const styles = StyleSheet.create({})