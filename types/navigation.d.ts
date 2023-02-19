declare interface IRootStackParamList {
  [key?: string]: any
  Details: undefined
}

declare type CustomStackNavigationProp<T extends keyof IRootStackParamList> =
  import('@react-navigation/native-stack').NativeStackNavigationProp<
    IRootStackParamList,
    T
  >

declare type CustomRouteProp<T extends keyof IRootStackParamList> =
  import('@react-navigation/native').RouteProp<IRootStackParamList, T>

declare type NavigationProp = CustomStackNavigationProp<'Details'>
