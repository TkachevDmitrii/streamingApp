import { $theme, switchTheme } from './index'

$theme.on(switchTheme, (_, data) => data)
