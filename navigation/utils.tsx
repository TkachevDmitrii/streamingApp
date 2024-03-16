/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react'
import { View } from 'react-native'
import {
  CardStyleInterpolators,
  StackNavigationOptions,
} from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { NavRoutes } from '../types/routes'
import { vw, IPHONE_5_HEIGHT } from '../utils'
// import { BackButton } from './components'

export const getDefaultHeaderOptions = (
  _navigation: CustomStackNavigationProp<'Home'>,
  route?: RouteProp<IRootStackParamList, string>,
): StackNavigationOptions => {
  const ANIMATION = route?.params?.animation
  const routeName = route?.name

  const WITHOUT_BORDER =
    routeName === NavRoutes.HOME || routeName === NavRoutes.SETTINGS

  return {
    animationEnabled: false,
    headerTransparent: false,
    // headerTintColor: palette.cardFamily.WHITE,
    headerTitleAlign: 'center',
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    headerStyle: {
      // backgroundColor: palette.cardFamily.WHITE,
      shadowColor: 'transparent',
      elevation: 0,
      borderTopWidth: 0,
      shadowOpacity: 0,
      // borderBottomWidth: WITHOUT_BORDER ? 0 : 1,
      // borderBottomColor: palette.fontFamily.LIGHT_GRAY_2,
    },
    headerTitleStyle: {
      // fontFamily: fonts.OPENSANS_SEMIBOLD,
      fontSize: vw(14),
      // color: palette.fontFamily.DARK_BLUE,
      paddingLeft: vw(IPHONE_5_HEIGHT ? 8 : 0),
    },
    // headerLeft: () => <BackButton />,
    headerRight: () => <View />, // Для выравнивания хедера на Android
  }
}
