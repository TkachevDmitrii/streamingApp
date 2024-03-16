/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useNavigation } from '@react-navigation/native'
import { useStore } from 'effector-react'
import React from 'react'
import { Button } from 'react-native'
import { NavRoutes } from '../../types/routes'
import { BottomTabNavigator, DefaultText, MainLayout } from '../../components'
import { $theme, switchTheme } from '../../models'
import { switchAsyncStorageTheme } from '.././../utils'

export const SettingsScreen = () => {
  const navigation = useNavigation<NavigationProp>()

  const theme = useStore($theme)

  const handleThemeSwitch = () => {
    theme === 'light' ? switchTheme('dark') : switchTheme('light')
    switchAsyncStorageTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      <MainLayout>
        <DefaultText>
          {console.log(theme)}
          Settings screen
        </DefaultText>
        <Button
          title='Go to Details'
          onPress={() =>
            navigation.navigate(NavRoutes.DETAILS, { animation: false })
          }
        />
        <Button
          title='Switch theme to dark'
          onPress={() => handleThemeSwitch()}
        />
      </MainLayout>
      <BottomTabNavigator />
    </>
  )
}
