import { View, Text, StyleSheet } from 'react-native'
import { useScheme } from '../../../hooks/useColor'

import { BasicLevelOptions as dataLevel } from '../../../constants/basicData'

// Store
import { useAppSelector } from '../../../hooks/store'
import { IconStar } from '../../../components/Icons'

export default function NavBar() {
	const scheme = useScheme()
	const { level, quantily, operation } = useAppSelector((state) => state.basic)

	let arrayStars: number[] = [0, 0, 0, 0]
	if (level === dataLevel.Easy) arrayStars = [1, 0, 0, 0]
	if (level === dataLevel.Normal) arrayStars = [1, 1, 0, 0]
	if (level === dataLevel.Hard) arrayStars = [1, 1, 1, 0]
	if (level === dataLevel.Expert) arrayStars = [1, 1, 1, 1]

	return (
		<View
			style={{
				backgroundColor: scheme.card,
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
				gap: 20,
				paddingHorizontal: 10,
				paddingVertical: 5,
			}}
		>
			<Text style={{ fontFamily: 'Asap', color: scheme.text, fontSize: 20 }}>
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
	boxStars: {
		marginTop: 5,
		flexDirection: 'row',
		paddingHorizontal: 8,
		paddingVertical: 3,
		borderRadius: 20,
	},
})
