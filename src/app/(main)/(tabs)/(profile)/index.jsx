import { useRouter } from 'expo-router'
import { StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import Button from '../../../../components/atoms/Button'
import ClinicAvatar from '../../../../components/molecules/clinicProfile/ClinicAvatar'
import ClinicInfoCard from '../../../../components/molecules/clinicProfile/ClinicInfoCard'
import MenuItem from '../../../../components/molecules/clinicProfile/MenuItem'
import HeaderTitle from '../../../../components/molecules/HeaderTitle'
import ScreenContainer from '../../../../components/molecules/ScreenContainer'
import { logout } from '../../../../redux/slices/authSlice'

const Profile = () => {
  const router = useRouter()
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout())
    router.push('/login')
  }
  return (
    <ScreenContainer childContainerStyle={{ gap: 10 }} >
      <HeaderTitle Title='Clinic profile' SubTitle='Account' />
      <ClinicAvatar />
      <ClinicInfoCard title="HealthPlus Clinic" subTitle="Clinic name" />
      <MenuItem title="Subscription" iconSize={18} onPress={() => router.push('/subscription')} />
      <MenuItem title="Settings" iconSize={18} onPress={() => router.push('/settings')} />
      <Button
        onPress={handleLogout}
        title="Sign out"
        buttonStyle={[{ backgroundColor: '#e15b441a', color: 'rgb(225 91 68 )' },
        styles.button]}
      />
    </ScreenContainer>
  )
}

export default Profile

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    letterSpacing: 1
  }
})