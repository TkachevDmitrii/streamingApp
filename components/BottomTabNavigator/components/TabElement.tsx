import React, { FC, ReactNode } from 'react'
import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import DropShadow from 'react-native-drop-shadow'
import { Icon, IconName } from '../../../components'
import { NavRoutes } from '../../../types/routes'
import { paletteLight, vh } from '../../../utils'
import { CurrentRoute } from '../BottomTabNavigator'
import { SemiBold12 } from '../../../styles'

interface IProps {
  active?: boolean
  type: CurrentRoute
  onPress: () => void
}

const Wrapper = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  margin-bottom: ${vh(10)};
`
const ItemText = styled(SemiBold12)<Pick<IProps, 'active'>>`
  color: ${({ active }) =>
    active ? paletteLight.PRIMARY_COLOR : paletteLight.TEXT_DISABLE};
`
const ImageWrapper = styled.View`
  padding-bottom: ${vh(8)};
`
const TextWrapper = styled.Text`
  text-align: center;
`
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#C8D6FF',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
})

const getIconType = (tabRoute: CurrentRoute): IconName => {
  switch (tabRoute) {
    case NavRoutes.HOME:
      return 'home'
    case NavRoutes.SETTINGS:
      return 'settings'
    case NavRoutes.ACTIVITY:
      return 'home'
    case NavRoutes.MAP:
      return 'home'
    case NavRoutes.FRIENDS:
      return 'home'
    default:
      return 'home'
  }
}

const renderIcon = (tabRoute: CurrentRoute, active?: boolean): ReactNode => {
  const color = active
    ? paletteLight.PRIMAY_SELECTED
    : paletteLight.TEXT_DISABLE

  switch (tabRoute) {
    case NavRoutes.HOME:
      return (
        <DropShadow style={active ? styles.shadow : null}>
          <Icon color={color} type={getIconType(tabRoute)} />
        </DropShadow>
      )
    case NavRoutes.SETTINGS:
      return (
        <DropShadow style={active ? styles.shadow : null}>
          <Icon color={color} type={getIconType(tabRoute)} />
        </DropShadow>
      )
    case NavRoutes.ACTIVITY:
      return (
        <DropShadow style={active ? styles.shadow : null}>
          <Icon color={color} type={getIconType(tabRoute)} />
        </DropShadow>
      )
    case NavRoutes.FRIENDS:
      return (
        <DropShadow style={active ? styles.shadow : null}>
          <Icon color={color} type={getIconType(tabRoute)} />
        </DropShadow>
      )
    case NavRoutes.MAP:
      return (
        <DropShadow style={active ? styles.shadow : null}>
          <Icon color={color} type={getIconType(tabRoute)} />
        </DropShadow>
      )
    default:
      return (
        <DropShadow style={active ? styles.shadow : null}>
          <Icon type={getIconType(tabRoute)} />
        </DropShadow>
      )
  }
}

const renderText = (tabRoute: CurrentRoute, active?: boolean): ReactNode => {
  switch (tabRoute) {
    case NavRoutes.HOME:
      return <ItemText active={active}>Home</ItemText>
    case NavRoutes.SETTINGS:
      return <ItemText active={active}>Settings</ItemText>
    case NavRoutes.ACTIVITY:
      return <ItemText active={active}>Activity</ItemText>
    case NavRoutes.MAP:
      return <ItemText active={active}>Map</ItemText>
    case NavRoutes.FRIENDS:
      return <ItemText active={active}>Friends</ItemText>
    default:
      return <ItemText>Home</ItemText>
  }
}

export const TabElement: FC<IProps> = ({ active, type, onPress }) => {
  return (
    <Wrapper onPress={onPress}>
      <ImageWrapper>{renderIcon(type, active)}</ImageWrapper>
      <TextWrapper>{renderText(type, active)}</TextWrapper>
    </Wrapper>
  )
}
