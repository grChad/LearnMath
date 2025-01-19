import { View, Text, StyleSheet } from 'react-native'

import { useScheme } from '../../../hooks/useColor'
import { BasicLevelOptions } from '../../../constants/basicData'

// Store
import { useAppSelector } from '../../../hooks/store'
import { IconStar } from '../../../components/Icons'

export default function NavBar() {
	const scheme = useScheme()
	const { level, quantily, operation } = useAppSelector((state) => state.basic)

	const arrayStars = BasicLevelOptions.find((ele) => ele.level === level)?.stars || [
		0, 0, 0, 0,
	]

	return (
		<View style={[styles.container, { backgroundColor: scheme.card }]}>
			<Text style={[styles.titleOperation, { textShadowColor: scheme.text }]}>
				{operation}
			</Text>

			{/* Level section */}
			<View style={{ alignItems: 'center' }}>
				<Text style={{ fontFamily: 'ComicNeue', color: scheme.text, fontSize: 16 }}>
					{level}
				</Text>
				<View style={[styles.boxStars, { backgroundColor: scheme.primarySelected }]}>
					{arrayStars.map((star, index) => (
						<IconStar
							key={index.toString()}
							size={22}
							fill={star ? 'gold' : 'gray'}
							hasStroke={true}
							stroke={star ? '#B29D2C' : '#383838'}
						/>
					))}
				</View>
			</View>

			{/* Progress section */}
			<View style={{ alignItems: 'center' }}>
				<Text style={{ fontFamily: 'ComicNeue', color: scheme.text, fontSize: 16 }}>
					Progreso
				</Text>
				<View style={[styles.boxStars, { backgroundColor: scheme.primarySelected }]}>
					<Text style={{ fontFamily: 'Asap', color: scheme.text, fontSize: 14 }}>
						1 / {quantily}
					</Text>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: 20,
		paddingHorizontal: 10,
		paddingVertical: 5,
	},
	titleOperation: {
		fontFamily: 'Asap',
		color: '#ED8A78',
		fontSize: 22,
		textShadowRadius: 1,
	},
	boxStars: {
		marginTop: 5,
		flexDirection: 'row',
		paddingHorizontal: 8,
		paddingVertical: 3,
		borderRadius: 20,
	},
})
