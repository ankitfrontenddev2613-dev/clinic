import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
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

const styles = StyleSheet.create({
  saveButton: {
    backgroundColor: '#173A2E',
    borderRadius: moderateScale(30),
    paddingVertical: moderateScale(16),
    alignItems: 'center',
    marginTop: moderateScale(10),
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat_500Medium'
  },
})