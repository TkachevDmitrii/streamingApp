import { Text } from 'react-native'
import styled from 'styled-components/native'
import { paletteLight, fonts, vw } from '../utils'

export const DefaultRegular = styled(Text)<{
  textColor?: string
  textAlign?: 'left' | 'right' | 'center'
}>`
  font-family: ${fonts.OPENSANS_REGULAR};
  color: ${({ textColor }) => textColor ?? paletteLight.TEXT_COLOR};
  text-align: ${({ textAlign }) => textAlign ?? 'left'};
`
export const DefaultMedium = styled(Text)<{
  textColor?: string
  textAlign?: 'left' | 'right' | 'center'
}>`
  font-family: ${fonts.OPENSANS_MEDIUM};
  color: ${({ textColor }) => textColor ?? paletteLight.TEXT_COLOR};
  text-align: ${({ textAlign }) => textAlign ?? 'left'};
`
export const DefaultSemiBold = styled(Text)<{
  textColor?: string
  textAlign?: 'left' | 'right' | 'center'
}>`
  font-family: ${fonts.OPENSANS_SEMIBOLD};
  color: ${({ textColor }) => textColor ?? paletteLight.TEXT_COLOR};
  text-align: ${({ textAlign }) => textAlign ?? 'left'};
`
export const DefaultBold = styled(Text)<{
  textColor?: string
  textAlign?: 'left' | 'right' | 'center'
}>`
  font-family: ${fonts.OPENSANS_BOLD};
  color: ${({ textColor }) => textColor ?? paletteLight.TEXT_COLOR};
  text-align: ${({ textAlign }) => textAlign ?? 'left'};
`

export const Regular11 = styled(DefaultRegular)`
  font-size: ${vw(11)};
`

export const Regular12 = styled(DefaultRegular)`
  font-size: ${vw(12)};
`
export const Medium12 = styled(DefaultMedium)`
  font-size: ${vw(12)};
`
export const SemiBold12 = styled(DefaultSemiBold)`
  font-size: ${vw(12)};
`
export const Bold12 = styled(DefaultBold)`
  font-size: ${vw(12)};
`

export const Regular13 = styled(DefaultRegular)`
  font-size: ${vw(13)};
`
export const Medium13 = styled(DefaultMedium)`
  font-size: ${vw(13)};
`
export const SemiBold13 = styled(DefaultSemiBold)`
  font-size: ${vw(13)};
`
export const Bold13 = styled(DefaultBold)`
  font-size: ${vw(13)};
`

export const Regular14 = styled(DefaultRegular)`
  font-size: ${vw(14)};
`
export const Medium14 = styled(DefaultMedium)`
  font-size: ${vw(14)};
`
export const SemiBold14 = styled(DefaultSemiBold)`
  font-size: ${vw(14)};
`
export const Bold14 = styled(DefaultBold)`
  font-size: ${vw(14)};
`

export const HintRegular10 = styled(DefaultRegular)`
  font-size: ${vw(10)};
`
export const HintMedium10 = styled(DefaultMedium)`
  font-size: ${vw(10)};
`
export const HintSemiBold10 = styled(DefaultSemiBold)`
  font-size: ${vw(10)};
`
export const HintMedium11 = styled(DefaultMedium)`
  font-size: ${vw(11)};
`
export const HintSemiBold11 = styled(DefaultSemiBold)`
  font-size: ${vw(11)};
`

export const GlobalTitleMedium15 = styled(DefaultMedium)`
  font-size: ${vw(15)};
`
export const GlobalTitleSemiBold15 = styled(DefaultSemiBold)`
  font-size: ${vw(15)};
`
export const GlobalTitleBold15 = styled(DefaultBold)`
  font-size: ${vw(15)};
`

export const GlobalTitleMedium16 = styled(DefaultMedium)`
  font-size: ${vw(16)};
`
export const GlobalTitleSemiBold16 = styled(DefaultSemiBold)`
  font-size: ${vw(16)};
`
export const GlobalTitleBold16 = styled(DefaultBold)`
  font-size: ${vw(16)};
`

export const GlobalTitleMedium28 = styled(DefaultMedium)`
  font-size: ${vw(28)};
`
export const GlobalTitleSemiBold28 = styled(DefaultSemiBold)`
  font-size: ${vw(28)};
`
export const GlobalTitleBold28 = styled(DefaultBold)`
  font-size: ${vw(28)};
`
