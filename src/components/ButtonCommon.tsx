import { Pressable, StyleSheet, Text, View } from 'react-native'
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withRepeat,
	withTiming,
} from 'react-native-reanimated'

import { useScheme } from '../hooks/useColor'
import { useState } from 'react'

const RADIUS = 23
const TIME_DURATION = 150

interface Props {
	title: string
	onPress: () => void
	disabled?: boolean
	color?: { bg: string; border: string }
}

export default function ButtonCommon({ title, onPress, disabled = false, color }: Props) {
	const [onePress, setOnePress] = useState(false)
	const scheme = useScheme()
	const height = useSharedValue(0)

	const animatedStyle = useAnimatedStyle(() => ({ height: height.value }))

	const handlePress = () => {
		setOnePress(true)
		height.value = withRepeat(withTiming(5, { duration: TIME_DURATION }), 2, true)
		setTimeout(() => onPress(), TIME_DURATION)
		setTimeout(() => setOnePress(false), TIME_DURATION * 2)
	}

	return (
		<View style={styles.container}>
			<View style={styles.floatBox}>
				<Animated.View style={animatedStyle} />
				<Pressable
					disabled={disabled || onePress}
					style={[
						styles.buttonPressable,
						{
							backgroundColor: color?.bg || scheme.primary,
							boxShadow: [
								{
									offsetX: 2,
									offsetY: -1,
									blurRadius: 4,
									color: color?.border || scheme.primaryDark,
									inset: true,
								},
							],
						},
					]}
					onPress={handlePress}
				>
					<View style={styles.boxIntermediate}>
						<Text style={[styles.title, { color: scheme.background }]}>{title}</Text>
					</View>
				</Pressable>
			</View>
			<View
				style={[
					styles.boxBorderBottom,
					{ backgroundColor: color?.border || scheme.primaryDark },
				]}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		minWidth: 300,
		height: 55,
		justifyContent: 'flex-end',
		position: 'relative',
	},
	floatBox: { width: '100%', position: 'absolute', top: 0, zIndex: 50 },
	buttonPressable: {
		width: '100%',
		height: 50,
		padding: 4,
		borderRadius: RADIUS,
	},
	boxIntermediate: {
		height: '100%',
		width: '100%',
		justifyContent: 'center',
		borderRadius: RADIUS,
		// biome-ignore format:
		boxShadow: [
      { offsetX: -4, offsetY: 0, blurRadius: 3, spreadDistance: -3, color: 'whitesmoke', inset: true },
      { offsetX: 4, offsetY: 0, blurRadius: 3, spreadDistance: -3, color: 'whitesmoke' },
    ],
	},
	title: {
		fontFamily: 'Asap',
		fontSize: 18,
		textAlign: 'center',
		textTransform: 'uppercase',
	},
	boxBorderBottom: {
		height: 30,
		width: '100%',
		zIndex: 45,
		borderBottomLeftRadius: RADIUS,
		borderBottomRightRadius: RADIUS,
	},
})
