import { Dimensions, Platform } from 'react-native'
import { initialWindowMetrics } from 'react-native-safe-area-context'

const baseWidth = 375
const templateHeight = 812
const { width, height, scale } = Dimensions.get('window')

const screenHeight = Dimensions.get('screen').height
const screenWidth = Dimensions.get('screen').width

export const ANDROID_SIZE_6 = Platform.OS === 'android' && screenHeight > 910
export const ANDROID_SIZE_5_7 =
  Platform.OS === 'android' && screenHeight < 910 && screenHeight > 750
export const ANDROID_SIZE_5 =
  Platform.OS === 'android' && screenHeight < 750 && screenHeight > 730
export const ANDROID_SIZE_4_7 =
  Platform.OS === 'android' && screenHeight < 730 && screenHeight >= 640
export const ANDROID_SIZE_4 =
  Platform.OS === 'android' && screenHeight < 640 && screenHeight > 533
export const ANDROID_SIZE_3_7 = Platform.OS === 'android' && screenHeight <= 320
export const ANDROID_SIZE_5_7_W_360 =
  Platform.OS === 'android' && screenWidth < 400 && screenWidth >= 360
export const ANDROID_SIZE_5_7_W_412 =
  Platform.OS === 'android' && screenWidth < 412 && screenWidth >= 400

export const FULL_WIDTH = width
export const FULL_HEIGHT = height
export const SCALE = scale

export const IPHONE_5_HEIGHT = Platform.OS === 'ios' && FULL_HEIGHT <= 568
export const IPHONE_8_HEIGHT =
  Platform.OS === 'ios' && FULL_HEIGHT > 568 && FULL_HEIGHT <= 768
export const IPHONE_12_HEIGHT = Platform.OS === 'ios' && FULL_HEIGHT >= 812
export const IPHONE_12_WIDTH = Platform.OS === 'ios' && FULL_WIDTH >= 414
export const IPHONE_13_WIDTH =
  Platform.OS === 'ios' && FULL_WIDTH >= 390 && FULL_WIDTH < 414
export const SMALL_ANDROID = Platform.OS === 'android' && FULL_HEIGHT <= 592
export const MEDIUM_ANDROID = Platform.OS === 'android' && FULL_HEIGHT <= 768
export const SMALL_DEVICE =
  FULL_HEIGHT <= 560 || SMALL_ANDROID || IPHONE_5_HEIGHT

export function portraitVw(size: number): number {
  return (FULL_WIDTH / baseWidth) * size
}

export function landscapeVw(size: number): number {
  return (FULL_HEIGHT / baseWidth) * size
}

export function vw(size: number): number {
  return FULL_WIDTH > FULL_HEIGHT ? landscapeVw(size) : portraitVw(size)
}

export function vh(templateSize: number): number {
  return (templateSize / templateHeight) * FULL_HEIGHT
}

export function bottomTutorialNumber(): number {
  const NEW_FULL_HEIGHT = initialWindowMetrics?.frame.height ?? FULL_HEIGHT

  return NEW_FULL_HEIGHT - vw(500 / 2 + vh(46)) //46 это половина высоты таб навигатора
}
