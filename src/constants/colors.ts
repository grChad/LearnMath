import type { Theme } from '@react-navigation/native'

export const DarkTheme: Theme = {
	dark: true,
	colors: {
		primary: '#6FB5F7',
		background: '#121212',
		card: '#1D2020',
		text: '#DADADA',
		border: '#303446',
		notification: '#E78284',
	},
	fonts: {
		regular: {
			fontFamily: 'sans-serif',
			fontWeight: 'normal',
		},
		medium: {
			fontFamily: 'sans-serif-medium',
			fontWeight: 'normal',
		},
		bold: {
			fontFamily: 'sans-serif',
			fontWeight: '600',
		},
		heavy: {
			fontFamily: 'sans-serif',
			fontWeight: '700',
		},
	},
}

export const DefaultTheme: Theme = {
	dark: false,
	colors: {
		primary: '#00649B',
		background: '#FFFFFF',
		card: '#F0F4F8',
		text: '#2E2E2E',
		border: 'rgb(216, 216, 216)',
		notification: '#ff6c6b',
	},
	fonts: {
		regular: {
			fontFamily: 'sans-serif',
			fontWeight: 'normal',
		},
		medium: {
			fontFamily: 'sans-serif-medium',
			fontWeight: 'normal',
		},
		bold: {
			fontFamily: 'sans-serif',
			fontWeight: '600',
		},
		heavy: {
			fontFamily: 'sans-serif',
			fontWeight: '700',
		},
	},
}

export const SchemeDarkColor = {
	isDark: true,
	...DarkTheme.colors,
	secondText: '#9B9B9B',
	popup: '#484848',
	pressPopup: '#585858',
	light: '#D8D5D1',
	primarySelected: '#374A58',
	primaryDark: '#00649B',
}

export const SchemeLightColor = {
	isDark: false,
	...DefaultTheme.colors,
	secondText: '#787878',
	popup: '#F5F5F5',
	pressPopup: '#DFDFDF',
	light: '#FFFFFF',
	primarySelected: '#D5E5F7',
	primaryDark: '#0B4E73',
}

export enum NyanRainbow {
	red = '#ff1211',
	orange = '#ffa90b',
	yellow = '#ffff07',
	green = '#49ff0b',
	blue = '#0eaeff',
	purple = '#7643ff',
}
