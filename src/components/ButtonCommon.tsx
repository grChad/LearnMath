import { Pressable, StyleSheet, Text, View } from 'react-native'
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withRepeat,
	withTiming,
} from 'react-native-reanimated'

import { useScheme } from '../hooks/useColor'

const RADIUS = 23
const TIME_DURATION = 100

interface Props {
	title: string
	onPress: () => void
	disabled?: boolean
}
export default function ButtonCommon({ title, onPress, disabled = false }: Props) {
	const scheme = useScheme()
	const height = useSharedValue(0)

	const animatedStyle = useAnimatedStyle(() => ({ height: height.value }))

	return (
		<View style={styles.container}>
			<View style={styles.floatBox}>
				<Animated.View style={animatedStyle} />
				<Pressable
					disabled={disabled}
					style={[
						styles.buttonPressable,
						{
							backgroundColor: scheme.primary,
							boxShadow: [
								{
									offsetX: 2,
									offsetY: -1,
									blurRadius: 4,
									color: scheme.primaryDark,
									inset: true,
								},
							],
						},
					]}
					onPress={() => {
						height.value = withRepeat(withTiming(5, { duration: TIME_DURATION }), 2, true)
						setTimeout(() => onPress(), TIME_DURATION)
					}}
				>
					<View style={styles.boxIntermediate}>
						<Text style={[styles.title, { color: scheme.background }]}>{title}</Text>
					</View>
				</Pressable>
			</View>
			<View style={[styles.boxBorderBottom, { backgroundColor: scheme.primaryDark }]} />
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
	floatBox: { width: '100%', position: 'absolute', top: 0, zIndex: 10 },
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
		borderBottomLeftRadius: RADIUS,
		borderBottomRightRadius: RADIUS,
	},
})
