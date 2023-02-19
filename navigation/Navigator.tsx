import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StatusBar, StyleSheet, View } from 'react-native'
import { useStore } from 'effector-react'
import { DetailsScreen, HomeScreen, SettingsScreen } from '../screens'
import { paletteDark, paletteLight } from '../utils/palette'
import { $theme } from '../models/theme'
import { RootStackParamList } from './types'

const HomeStack = createNativeStackNavigator()
const SettingsStack = createNativeStackNavigator()
const Tab = createBottomTabNavigator<RootStackParamList>()

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      defaultScreenOptions={{
        contentStyle: { backgroundColor: '#000' },
      }}
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#000000' },
      }}
    >
      <HomeStack.Screen component={HomeScreen} name='HomeSCREEN' />
      <HomeStack.Screen component={DetailsScreen} name='Details' />
    </HomeStack.Navigator>
  )
}

const SettingsStackScreen = () => {
  const theme = useStore($theme)

  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: styles(theme).content,
      }}
    >
      <SettingsStack.Screen component={SettingsScreen} name='Settings' />
      <SettingsStack.Screen component={DetailsScreen} name='Details' />
    </SettingsStack.Navigator>
  )
}

export const Navigator = () => {
  const theme: 'light' | 'dark' = useStore($theme)

  return (
    <NavigationContainer>
      <View
        style={{
          backgroundColor:
            theme === 'light'
              ? paletteLight.APP_BACKGROUND
              : paletteDark.APP_BACKGROUND,
        }}
      >
        <StatusBar
          backgroundColor={
            theme === 'light'
              ? paletteLight.APP_BACKGROUND
              : paletteDark.APP_BACKGROUND
          }
          barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
          translucent
        />
      </View>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarStyle: styles(theme).tabs,
        }}
      >
        <Tab.Screen component={HomeStackScreen} name='Home' />
        <Tab.Screen component={SettingsStackScreen} name='Settings' />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = (theme: 'light' | 'dark') =>
  StyleSheet.create({
    tabs: {
      position: 'absolute',
      borderRadius: 15,
      borderTopWidth: 0,
      backgroundColor:
        theme === 'light'
          ? paletteLight.KEYBOARD_BACKGROUND
          : paletteDark.KEYBOARD_BACKGROUND,
    },
    content: {
      backgroundColor: '#000',
    },
  })
