import React, { useEffect } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withTiming,
} from 'react-native-reanimated'

import { useScheme } from '../../../hooks/useColor'
import { NyanRainbow as Nyan } from '../../../constants/colors'

// State Global
import { useAppSelector } from '../../../hooks/store'

export default function ProgressBar() {
	const scheme = useScheme()
	const progress = useSharedValue(0)

	const countProgress = useAppSelector((state) => state.basicGame.countProgress)
	const quantily = useAppSelector((state) => state.basic.quantily)

	const progress_percent = (countProgress / (quantily ?? 20)) * 100 // si 'quantily' es null toma '20'

	const animatedStyle = useAnimatedStyle(() => ({
		width: `${progress.value}%`,
	}))

	// biome-ignore lint/correctness/useExhaustiveDependencies: <countProgress>
	useEffect(() => {
		progress.value = withTiming(progress_percent, { duration: 1000 })
	}, [countProgress])

	return (
		<View style={[styles.container, { backgroundColor: scheme.primarySelected }]}>
			<Animated.View style={[styles.boxRainbow, animatedStyle]}>
				<View style={[styles.lineRainbow, { backgroundColor: Nyan.red }]} />
				<View style={[styles.lineRainbow, { backgroundColor: Nyan.orange }]} />
				<View style={[styles.lineRainbow, { backgroundColor: Nyan.yellow }]} />
				<View style={[styles.lineRainbow, { backgroundColor: Nyan.green }]} />
				<View style={[styles.lineRainbow, { backgroundColor: Nyan.blue }]} />
				<View style={[styles.lineRainbow, { backgroundColor: Nyan.purple }]} />
				<View style={styles.boxCat}>
					<Image
						style={{ width: '100%', height: '100%' }}
						source={require('../../../../assets/images/nyan-cat.png')}
					/>
				</View>
			</Animated.View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: { width: '100%', height: 30, paddingRight: 26 },
	boxRainbow: { width: '100%', height: '100%', position: 'relative' },
	lineRainbow: { width: '100%', height: 5 },
	boxCat: { position: 'absolute', top: -1.5, right: -26, width: 53, height: 32 },
})
