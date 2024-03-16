import React from 'react'
import styled from 'styled-components/native'
import { DefaultText } from '../../components/DefaultText'

const StyledLabel = styled(DefaultText)`
  font-size: 24;
  background-color: black;
`

export const Label: React.FC<any> = ({ children }) => {
  return <StyledLabel>{children}</StyledLabel>
}
