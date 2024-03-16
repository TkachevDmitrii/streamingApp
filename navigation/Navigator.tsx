import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StatusBar, StyleSheet, View } from 'react-native'
import { useStore } from 'effector-react'
import { Activity, DetailsScreen, HomeScreen, SettingsScreen } from '../screens'
import { paletteDark, paletteLight } from '../utils/palette'
import { $theme } from '../models/theme'
import { vw } from '../utils/sizes'
import { RootStackParamList } from './types'

const HomeStack = createNativeStackNavigator()
const SettingsStack = createNativeStackNavigator()
const Tab = createBottomTabNavigator<RootStackParamList>()

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen component={HomeScreen} name='HomeSCREEN' />
    <HomeStack.Screen component={Activity} name='Activity' />
    <HomeStack.Screen component={DetailsScreen} name='Details' />
  </HomeStack.Navigator>
)

const SettingsStackScreen = () => (
  <SettingsStack.Navigator>
    <SettingsStack.Screen component={SettingsScreen} name='Settings' />
    <HomeStack.Screen component={Activity} name='Activity' />
    <SettingsStack.Screen component={DetailsScreen} name='Details' />
  </SettingsStack.Navigator>
)

export const Navigator = () => {
  const theme: 'light' | 'dark' = useStore($theme)

  return (
    <NavigationContainer>
      <View
        style={{
          backgroundColor:
            theme === 'light'
              ? paletteDark.APP_BACKGROUND
              : paletteDark.APP_BACKGROUND,
        }}
      >
        <StatusBar
          backgroundColor={
            theme === 'light'
              ? paletteDark.APP_BACKGROUND
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
      borderRadius: vw(15),
      borderTopWidth: 0,
      backgroundColor:
        theme === 'light'
          ? paletteLight.KEYBOARD_BACKGROUND
          : paletteDark.KEYBOARD_BACKGROUND,
    },
    header: {
      color: '#000',
      backgroundColor: '#000',
    },
    content: {
      backgroundColor: '#000',
    },
  })
