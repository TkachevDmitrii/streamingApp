interface WithAnimation {
  animation?: boolean
}

declare interface IRootStackParamList {
  [key?: string]: any
  Home: WithAnimation
  Settings: WithAnimation
  Details: undefined
}

declare type CustomStackNavigationProp<T extends keyof IRootStackParamList> =
  import('@react-navigation/native-stack').StackNavigationProp<
    IRootStackParamList,
    T
  >

declare type CustomRouteProp<T extends keyof IRootStackParamList> =
  import('@react-navigation/native').RouteProp<IRootStackParamList, T>

declare type NavigationProp = CustomStackNavigationProp<'Details'>
