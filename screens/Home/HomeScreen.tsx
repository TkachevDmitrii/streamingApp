import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button } from 'react-native'
import { DefaultText, MainLayout } from '../../components'

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>()

  return (
    <MainLayout>
      <DefaultText>Home screen</DefaultText>
      <Button
        title='Go to Details'
        onPress={() => navigation.navigate('Details')}
      />
    </MainLayout>
  )
}
