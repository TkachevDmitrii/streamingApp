import AsyncStorage from '@react-native-async-storage/async-storage'

export const switchAsyncStorageTheme = async (theme: 'light' | 'dark') => {
  await AsyncStorage.setItem('theme', theme)
}
