import React from 'react'
import { useStore } from 'effector-react'
import styled from 'styled-components/native'
import { View } from 'react-native'
import { paletteDark, paletteLight } from '../../utils/palette'
import { $theme } from '../../models'
import { Theme } from '../../types/layouts'

const Layout = styled.View<{ theme?: Theme }>`
  background: ${({ theme }) =>
    theme === 'light'
      ? paletteLight.APP_BACKGROUND
      : paletteDark.APP_BACKGROUND};
  height: 100%;
  padding-top: 40px;
`

export const MainLayout: React.FC<any> = ({ children }) => {
  const theme = useStore($theme)

  return (
    <View>
      <Layout theme={theme}>{children}</Layout>
    </View>
  )
}
