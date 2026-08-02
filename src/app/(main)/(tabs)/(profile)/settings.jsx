import { useState } from 'react'
import { StyleSheet } from 'react-native'
import BackButton from '../../../../components/atoms/BackButton'
import HeaderTitle from '../../../../components/molecules/HeaderTitle'
import Language from '../../../../components/molecules/Language'
import ScreenContainer from '../../../../components/molecules/ScreenContainer'
import SettingSwitchButton from '../../../../components/molecules/SettingSwitchButton'

const Settings = () => {
  const [settings, setSettings] = useState([
    {
      id: '1',
      title: 'Push Notification',
      push: true
    },
    {
      id: '2',
      title: 'Sound on call-next',
      push: true
    }
  ])

  const onToggle = (id) => {
    setSettings((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, push: !item.push } : item
      )
    )
  }

  return (
    <ScreenContainer childContainerStyle={{ gap: 15 }}>
      <BackButton />
      <HeaderTitle Title="Setting" />
      {
        settings.map((item, index) => (
          <SettingSwitchButton key={item.id} title={item.title} value={item.push}
            onValueChange={() => onToggle(item.id)} />
        ))
      }
      <Language />
    </ScreenContainer>
  )
}

export default Settings

const styles = StyleSheet.create({})