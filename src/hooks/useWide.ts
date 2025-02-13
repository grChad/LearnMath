import { useWindowDimensions } from 'react-native'

export const useWide = () => {
	const { width, height } = useWindowDimensions()

	return width > height
}

export const useWideNav = () => {
	const { width, height } = useWindowDimensions()
	const threshold = 530

	return width > threshold && height > threshold
}
