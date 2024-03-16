import React from 'react'
// import { Button } from 'react-native'
// import { NavRoutes } from '../../types/routes'
import { BottomTabNavigator, DefaultText, MainLayout } from '../../components'

export const Activity = () => {
  // const navigation = useNavigation<NavigationProp>()

  return (
    <>
      <MainLayout>
        <DefaultText>Activity</DefaultText>
        {/* <Button
          title='Go to Details'
          onPress={() => navigation.navigate(NavRoutes.DETAILS)}
        /> */}
      </MainLayout>
      <BottomTabNavigator />
    </>
  )
}
