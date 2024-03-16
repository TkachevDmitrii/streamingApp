import { NavigationContainerRef } from '@react-navigation/native'
import React, { createRef } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Appearance } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Routes } from './navigation/Routes'
import { switchTheme } from './models'
// import { Navigator } from './navigation'

export const navigationRef =
  createRef<NavigationContainerRef<IRootStackParamList>>()

const queryClient = new QueryClient()

export const App = () => {
  const nativeTheme = Appearance.getColorScheme()

  const initTheme = nativeTheme?.includes('light') ? 'light' : 'dark'

  const getTheme = async (initTheme: string) => {
    try {
      const theme = (await AsyncStorage.getItem('theme')) as
        | 'dark'
        | 'light'
        | null

      if (theme === null) {
        await AsyncStorage.setItem('theme', initTheme)
      }
      switchTheme(theme ?? 'light')
    } catch (e) {
      console.warn('error_storage', e)
    }
  }

  getTheme(initTheme)

  return (
    <QueryClientProvider client={queryClient}>
      <Routes navigationRef={navigationRef} />
    </QueryClientProvider>
  )
}
