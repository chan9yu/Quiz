import 'styled-components';

type ColorPalette = {
	'50': string;
	'100': string;
	'200': string;
	'300': string;
	'400': string;
	'500': string;
	'600': string;
	'700': string;
	'800': string;
	'900': string;
};

declare module 'styled-components' {
	export interface DefaultTheme {
		color: {
			white: string;
			black: string;
			gray: ColorPalette;
			primary: ColorPalette;
			secondary: ColorPalette;
			info: ColorPalette;
			error: ColorPalette;
			warning: ColorPalette;
			success: ColorPalette;
		};
		typography: {
			size: {
				'50': string;
				'75': string;
				'100': string;
				'200': string;
				'300': string;
				'400': string;
				'500': string;
				'600': string;
				'700': string;
				'800': string;
				'900': string;
			};
			weight: {
				regular: string;
				medium: string;
				bold: string;
			};
		};
	}
}
