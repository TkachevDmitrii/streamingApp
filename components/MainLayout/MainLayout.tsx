import React from 'react'
import { useStore } from 'effector-react'
import styled from 'styled-components/native'
import { View } from 'react-native'
import { palette } from '../../utils/palette'
import { $theme } from '../../models'
import { Theme } from '../../types/layouts'

const Layout = styled.View<{ theme?: string }>`
  background: ${({ theme }) => palette(theme as Theme).APP_BACKGROUND};
  height: 100%;
`

export const MainLayout: React.FC<any> = ({ children }) => {
  const theme = useStore($theme)

  return (
    <View>
      <Layout theme={theme}>{children}</Layout>
    </View>
  )
}
