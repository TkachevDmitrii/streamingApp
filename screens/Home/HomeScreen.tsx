import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Text } from 'react-native'
import { MainLayout } from '../../components'

type NavigationProp = CustomStackNavigationProp<'Details'>

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>()

  return (
    <MainLayout>
      <Text>Home screen</Text>
      <Button
        title='Go to Details'
        onPress={() => navigation.navigate('Details')}
      />
    </MainLayout>
  )
}
