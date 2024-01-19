import 'styled-components';

import { ITheme } from 'global/Themes'

declare module 'styled-components' {
    export interface DefaultTheme extends ITheme { }
}