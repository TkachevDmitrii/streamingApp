import * as React from 'react'
import { Button, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

type RootStackParamList = {
  Home: undefined
  Settings: undefined
  Details: undefined
}

type Prop = NativeStackScreenProps<RootStackParamList>

const HomeStack = createNativeStackNavigator()
const SettingsStack = createNativeStackNavigator()
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
const Tab = createBottomTabNavigator<RootStackParamList>()

const DetailsScreen = () => (
  <View>
    <Text>Details!</Text>
  </View>
)

const HomeScreen = ({ navigation }: Prop) => (
  <View>
    <Text>Home screen</Text>
    <Button
      title='Go to Details'
      onPress={() => navigation.navigate('Details')}
    />
  </View>
)

const SettingsScreen = ({ navigation }: Prop) => {
  return (
    <View>
      <Text>Settings screen</Text>
      <Button
        title='Go to Details'
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  )
}

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen component={HomeScreen} name='Home' />
      <HomeStack.Screen component={DetailsScreen} name='Details' />
    </HomeStack.Navigator>
  )
}

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        header: () => (
          <View>
            <Text>aasdaf</Text>
          </View>
        ),
      }}
    >
      <SettingsStack.Screen component={SettingsScreen} name='Settings' />
      <SettingsStack.Screen component={DetailsScreen} name='Details' />
    </SettingsStack.Navigator>
  )
}

export function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen component={HomeStackScreen} name='Home' />
        <Tab.Screen component={SettingsStackScreen} name='Settings' />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
