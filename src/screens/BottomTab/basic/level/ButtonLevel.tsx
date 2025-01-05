import { useEffect } from 'react'
import { StyleSheet, Text } from 'react-native'
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated'

// Store
import { useAppSelector } from '../../../../hooks/store'

import { useScheme } from '../../../../hooks/useColor'

interface Props {
	title: string
	maxHeight: number
}
export default ({ title, maxHeight }: Props) => {
	const scheme = useScheme()
	const height = useSharedValue(maxHeight - 5)
	const level = useAppSelector((state) => state.basic.level)

	const animatedViewStyle = useAnimatedStyle(() => ({ height: height.value }))

	const isOk = title === level
	const changeHeight = () => {
		if (isOk) height.value = withTiming(maxHeight, { duration: 200 })
		else height.value = withTiming(maxHeight - 5, { duration: 200 })
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: <changeHeight, level>
	useEffect(() => {
		changeHeight()
	}, [level])

	return (
		<Animated.View
			style={[styles.view, { backgroundColor: '#31A6F6' }, animatedViewStyle]}
		>
			<Text
				style={[
					styles.title,
					{
						color: isOk ? scheme.background : scheme.secondText,
						textShadowColor: isOk && !scheme.isDark ? 'black' : 'transparent',
						textShadowRadius: isOk && !scheme.isDark ? 1 : 0,
					},
				]}
			>
				{title}
			</Text>
		</Animated.View>
	)
}

const styles = StyleSheet.create({
	view: {
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		paddingHorizontal: 15,
	},
	title: { fontFamily: 'Asap', textTransform: 'uppercase', textAlignVertical: 'center' },
})
