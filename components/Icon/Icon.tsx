import React from 'react'
import * as Svg from './Svg'

const icons = {
  medicalBook: Svg.MedicalBook,
  documents: Svg.Documents,
  home: Svg.Home,
  settings: Svg.Settings,
}

export type IconName = keyof typeof icons

interface IIcon {
  type: IconName
  width?: number
  height?: number
  color?: string
}

export const Icon = ({ type, ...props }: IIcon): JSX.Element | null => {
  const Component = icons[type]

  if (!Component) return null

  return <Component {...props} />
}
