/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import { useStore } from 'effector-react'
import { $theme } from '../../models'
import { NavRoutes } from '../../types/routes'
import { vh, vw } from '../../utils/sizes'
// import { paletteDark, paletteLight } from '../../utils'
import { Theme } from '../../types/layouts'
import { TabElement } from './components'

export type CurrentRoute = NavRoutes

type RouteProp = CustomRouteProp<'Homne'>

const Wrapper = styled.View<{ theme?: Theme }>`
  height: ${vh(80)};
  width: 100%;
  background: ${({ theme }) => (theme === 'light' ? 'white' : 'black')};
  position: absolute;
  z-index: 2;
  bottom: 0;
  box-shadow: 2px 3px 5px rgba(24, 35, 61, 0.25);
  border-top-right-radius: 20;
  border-top-left-radius: 20;
`
const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  /* margin-horizontal: ${vw(5)}; */
`
const styles = StyleSheet.create({
  shadow: {
    // shadowColor: '#E0E4EF',
    shadowOffset: {
      width: vw(1),
      height: vh(1),
    },
    shadowOpacity: 1,
    shadowRadius: vw(5),
    elevation: 10,
  },
})

export const BottomTabNavigator = () => {
  const theme = useStore($theme)
  // const [visible, setVisible] = useState<boolean>(true)

  // const unreadSupportMessagesCount = useStore<number>($freshchatUnreadCount)
  // const invitationsCount = useStore($invitationsCount)

  const navigation = useNavigation<NavigationProp>()
  const route = useRoute<RouteProp>()
  const routeName = route.name

  const computeActiveRoute = (currentRoute: string): CurrentRoute => {
    switch (currentRoute) {
      case NavRoutes.HOME:
        return NavRoutes.HOME
      case NavRoutes.ACTIVITY:
        return NavRoutes.ACTIVITY
      case NavRoutes.MAP:
        return NavRoutes.MAP
      case NavRoutes.FRIENDS:
        return NavRoutes.FRIENDS
      case NavRoutes.SETTINGS:
        return NavRoutes.SETTINGS
      default:
        return NavRoutes.HOME
    }
  }

  const ACTIVE_ROUTE = computeActiveRoute(routeName)

  return (
    <Wrapper style={styles.shadow} theme={theme}>
      <Container>
        <TabElement
          active={ACTIVE_ROUTE === NavRoutes.HOME}
          type={NavRoutes.HOME}
          onPress={() =>
            navigation.navigate(NavRoutes.HOME, { animation: false })
          }
        />
        <TabElement
          active={ACTIVE_ROUTE === NavRoutes.ACTIVITY}
          type={NavRoutes.ACTIVITY}
          onPress={() =>
            navigation.navigate(NavRoutes.ACTIVITY, { animation: false })
          }
        />
        <TabElement
          active={ACTIVE_ROUTE === NavRoutes.MAP}
          type={NavRoutes.MAP}
          onPress={() =>
            navigation.navigate(NavRoutes.MAP, { animation: false })
          }
        />
        <TabElement
          active={ACTIVE_ROUTE === NavRoutes.FRIENDS}
          type={NavRoutes.FRIENDS}
          onPress={() =>
            navigation.navigate(NavRoutes.FRIENDS, { animation: false })
          }
        />
        <TabElement
          active={ACTIVE_ROUTE === NavRoutes.SETTINGS}
          type={NavRoutes.SETTINGS}
          onPress={() =>
            navigation.navigate(NavRoutes.SETTINGS, { animation: false })
          }
        />
      </Container>
    </Wrapper>
  )
}
