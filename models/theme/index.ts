import { createEvent, createStore } from 'effector'

type Theme = 'light' | 'dark'

export const $theme = createStore<Theme>('light')

export const switchTheme = createEvent<Theme>()
