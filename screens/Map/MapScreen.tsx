// import { useNavigation } from '@react-navigation/native'
import React from 'react'
// import { Button } from 'react-native'
// import { NavRoutes } from '../../types/routes'
import { BottomTabNavigator, DefaultText, MainLayout } from '../../components'

export const MapScreen = () => {
  // const navigation = useNavigation<NavigationProp>()

  return (
    <>
      <MainLayout>
        <DefaultText>MapScreen</DefaultText>
        {/* <Button
          title='Go to Details'
          onPress={() => navigation.navigate(NavRoutes.DETAILS)}
        /> */}
      </MainLayout>
      <BottomTabNavigator />
    </>
  )
}
