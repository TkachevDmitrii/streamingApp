import React from 'react'
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createStackNavigator } from '@react-navigation/stack'
import { NavRoutes } from '../types/routes'
import {
  Activity,
  DetailsScreen,
  HomeScreen,
  SettingsScreen,
  MapScreen,
  FriendsScreen,
} from '../screens'
import { getDefaultHeaderOptions } from './utils'

export const Routes: React.FC<{
  navigationRef: React.RefObject<NavigationContainerRef<IRootStackParamList>>
}> = ({ navigationRef }) => {
  // const Stack = createNativeStackNavigator<IRootStackParamList>()
  const Stack = createStackNavigator<IRootStackParamList>()

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={({ navigation, route }) =>
          getDefaultHeaderOptions(navigation, route)
        }
      >
        <Stack.Screen
          component={HomeScreen}
          name={NavRoutes.HOME}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={DetailsScreen}
          name={NavRoutes.DETAILS}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={SettingsScreen}
          name={NavRoutes.SETTINGS}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={Activity}
          name={NavRoutes.ACTIVITY}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={MapScreen}
          name={NavRoutes.MAP}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={FriendsScreen}
          name={NavRoutes.FRIENDS}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
