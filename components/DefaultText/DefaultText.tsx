import { useStore } from 'effector-react'
import React from 'react'
import styled from 'styled-components/native'
import { $theme } from '../../models'
import { paletteDark, paletteLight } from '../../utils/palette'

const Text = styled.Text<{ color: string }>`
  color: ${({ color }) => color};
  font-size: 20px;
`

export const DefaultText: React.FC<any> = ({ children }) => {
  const theme = useStore($theme)

  return (
    <Text
      color={
        theme === 'dark' ? paletteDark.TEXT_COLOR : paletteLight.TEXT_COLOR
      }
    >
      {children}
    </Text>
  )
}
