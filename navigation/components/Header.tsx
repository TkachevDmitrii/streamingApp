import React from 'react'
import { View } from 'react-native'
import { Label } from '../../components/Label/Label'

export const Header: React.FC<any> = ({ children }) => {
  return (
    <View>
      <Label>{children}</Label>
    </View>
  )
}
