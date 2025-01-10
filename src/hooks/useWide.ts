import { useWindowDimensions } from 'react-native'

export const useWide = () => {
	const { width, height } = useWindowDimensions()
	const widthThreshold = 500

	return width > height && width > widthThreshold
}

export const useWideNavigation = () => {
	const { width, height } = useWindowDimensions()
	const threshold = 530

	return width > threshold && height > threshold
}
