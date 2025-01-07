import { StyleSheet, Text, View } from 'react-native'
// Store
import { useAppSelector } from '../../../../hooks/store'

import { useScheme } from '../../../../hooks/useColor'
import { BasicLevelOptions as Lv } from '../../../../constants/basicData'

export default ({ title }: { title: string }) => {
	const scheme = useScheme()
	const level = useAppSelector((state) => state.basic.level)

	const bgColor = () => {
		let default_color = '#E2E2E2'

		if (title === level) {
			if (level === Lv.Easy) default_color = 'lightgreen'
			if (level === Lv.Normal) default_color = 'gold'
			if (level === Lv.Hard) default_color = 'tomato'
			if (level === Lv.Expert) default_color = '#9A76FF'
		}

		return default_color
	}
	return (
		<View
			style={[
				styles.container,
				{
					borderColor: scheme.isDark ? scheme.pressPopup : scheme.text,
					backgroundColor: bgColor(),
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
