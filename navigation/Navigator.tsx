import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StatusBar, StyleSheet, View } from 'react-native'
import { useStore } from 'effector-react'
// import { Layout } from '../styles/containers'
import { DetailsScreen, HomeScreen, SettingsScreen } from '../screens'
import { palette } from '../utils/palette'
import { $theme } from '../models/theme'
import { RootStackParamList } from './types'

const HomeStack = createNativeStackNavigator()
const SettingsStack = createNativeStackNavigator()
const Tab = createBottomTabNavigator<RootStackParamList>()

const HomeStackScreen = () => {
  const theme: 'light' | 'dark' = useStore($theme)

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: styles(theme).header,
      }}
    >
      <HomeStack.Screen component={HomeScreen} name='Home1' />
      <HomeStack.Screen component={DetailsScreen} name='Details' />
    </HomeStack.Navigator>
  )
}

const SettingsStackScreen = () => {
  const theme: 'light' | 'dark' = useStore($theme)

  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerStyle: styles(theme).header,
      }}
    >
      <SettingsStack.Screen component={SettingsScreen} name='Settings1' />
      <SettingsStack.Screen component={DetailsScreen} name='Details' />
    </SettingsStack.Navigator>
  )
}

export const Navigator = () => {
  const theme: 'light' | 'dark' = useStore($theme)

  return (
    <NavigationContainer>
      <View>
        <StatusBar
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
      backgroundColor: palette(theme).KEYBOARD_BACKGROUND,
    },
    header: {
      backgroundColor: palette(theme).KEYBOARD_BACKGROUND,
    },
  })
