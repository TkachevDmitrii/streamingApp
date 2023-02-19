import { useNavigation } from '@react-navigation/native'
import { useStore } from 'effector-react'
import React from 'react'
import { Button } from 'react-native'
import { DefaultText, MainLayout } from '../../components'
import { $theme, switchTheme } from '../../models'

export const SettingsScreen = () => {
  const navigation = useNavigation<NavigationProp>()

  const theme = useStore($theme)

  const handleThemeSwitch = () => {
    theme === 'light' ? switchTheme('dark') : switchTheme('light')
  }

  return (
    <MainLayout>
      <DefaultText>
        {console.log(theme)}
        Settings screen
      </DefaultText>
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
