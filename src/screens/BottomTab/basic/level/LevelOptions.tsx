import { StyleSheet, Text, View } from 'react-native'
// Store
import { useAppSelector } from '../../../../hooks/store'

import { useScheme } from '../../../../hooks/useColor'
import { BasicLevelOptions } from '../../../../constants/basicData'

export default ({ title }: { title: string }) => {
	const scheme = useScheme()
	const currentLevel = useAppSelector((state) => state.basic.level) // Store

	const bgColorDinamic =
		BasicLevelOptions.find(
			({ level }) => title === currentLevel && level === currentLevel,
		)?.color || '#E2E2E2'

	return (
		<View
			style={[
				styles.container,
				{
					borderColor: scheme.isDark ? scheme.pressPopup : scheme.text,
					backgroundColor: bgColorDinamic,
				},
			]}
		>
			<View style={styles.boxInset}>
				<Text style={styles.title}>{title}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		borderRadius: '20%',
		borderWidth: 2,
		overflow: 'hidden',
	},
	boxInset: {
		backgroundColor: '#3F3F3F',
		borderRadius: '20%',
		margin: 4,
		height: 30,
		minWidth: 100,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontFamily: 'Asap',
		fontSize: 12,
		color: '#E2E2E2',
		textAlign: 'center',
	},
})
