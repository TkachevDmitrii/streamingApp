import { useNavigation } from '@react-navigation/native'
import { useStore } from 'effector-react'
import React from 'react'
import { Button, Text } from 'react-native'
import { MainLayout } from '../../components'
import { $theme, switchTheme } from '../../models'

type NavigationProp = CustomStackNavigationProp<'Details'>

export const SettingsScreen = () => {
  const navigation = useNavigation<NavigationProp>()

  const theme = useStore($theme)

  const handleThemeSwitch = () => {
    theme === 'light' ? switchTheme('dark') : switchTheme('light')
  }

  return (
    <MainLayout>
      <Text>Settings screen</Text>
      <Button
        title='Go to Details'
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title='Switch theme to dark'
        onPress={() => handleThemeSwitch()}
      />
    </MainLayout>
  )
}
