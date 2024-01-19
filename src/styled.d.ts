import 'styled-components';

import { Theme } from 'global/Themes'

export type ITheme = typeof Theme

declare module 'styled-components' {
    export interface DefaultTheme extends ITheme { }
}