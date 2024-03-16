import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components'
import { Label } from '../../components/Label/Label'

const StyledView = styled(View)`
  background-color: black;
`

export const Header: React.FC<any> = ({ children }) => {
  return (
    <StyledView>
      <Label>{children}</Label>
    </StyledView>
  )
}
