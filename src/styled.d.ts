import 'styled-components';

import { ThemeType } from 'global/Themes';

declare module 'styled-components' {
	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	export interface DefaultTheme extends ThemeType { }
}