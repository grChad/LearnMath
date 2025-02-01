import { View, Text, StyleSheet } from 'react-native'
import type { SummaryNavigationProp } from '../../../types/navigation'
import ButtonCommon from '../../../components/ButtonCommon'
import { useScheme } from '../../../hooks/useColor'
import { BasicLevelOptions } from '../../../constants/basicData'

// State
import { useAppSelector } from '../../../hooks/store'

// components
import {
	IconAddition,
	IconDivision,
	IconMultiplication,
	IconSubstraction,
} from '../../../components/icons/numbersAndSymbols'
import { IconStar } from '../../../components/icons/Icons'

interface Props {
	navigation: SummaryNavigationProp
}
export default function ({ navigation }: Props) {
	const { level, quantily, operation } = useAppSelector((state) => state.basic)
	const success = useAppSelector((state) => state.basicGame.success)
	const scheme = useScheme()

	const iconSharedProps = {
		size: 60,
		color: scheme.notification,
		stroke: scheme.text,
	}

	const arrayStars = BasicLevelOptions.find((item) => item.level === level)?.stars || [
		0, 0, 0, 0,
	]

	return (
		<View style={{ flex: 1, padding: 20 }}>
			<View style={styles.box}>
				<Text style={[styles.Mtext, { color: scheme.text }]}>Operación:</Text>
				{operation === 'Suma' && <IconAddition {...iconSharedProps} />}
				{operation === 'Resta' && <IconSubstraction {...iconSharedProps} />}
				{operation === 'Multiplicación' && <IconMultiplication {...iconSharedProps} />}
				{operation === 'División' && <IconDivision {...iconSharedProps} />}
			</View>

			<View style={styles.box}>
				<Text style={[styles.Mtext, { color: scheme.text }]}>Nivel:</Text>
				<View style={{ flexDirection: 'row', columnGap: 5 }}>
					{arrayStars.map((star, index) => (
						<IconStar
							key={index.toString()}
							size={30}
							fill={star ? 'gold' : 'gray'}
							hasStroke={true}
							stroke={star ? '#B29D2C' : '#383838'}
						/>
					))}
				</View>
			</View>

			<View style={styles.box}>
				<Text style={[styles.Mtext, { color: scheme.text }]}>Nº de ejercicios:</Text>
				<View style={{ flexDirection: 'row', columnGap: 5 }}>
					<Text style={[styles.Ltext, { color: scheme.text }]}>{quantily}</Text>
				</View>
			</View>

			<View style={styles.box}>
				<Text style={[styles.Mtext, { color: scheme.text }]}>Resultados:</Text>
				<Text style={[styles.Ltext, { color: scheme.text }]}>
					{success} / {quantily}
				</Text>
			</View>

			<View style={{ marginHorizontal: 'auto', marginTop: 100 }}>
				<ButtonCommon
					title="¿Quieres otra partida?"
					onPress={() => navigation.popToTop()}
				/>
			</View>
		</View>
	)
}

// NOTE: falta formatear todos los datos antes de ir a home
// eliminar las pantallas activas
// inavilitar los el button return en `game` y `summary`

const styles = StyleSheet.create({
	box: { flexDirection: 'row', alignItems: 'center', columnGap: 20 },
	Mtext: { fontSize: 20, fontFamily: 'Asap' },
	Ltext: { fontSize: 30, fontFamily: 'Asap' },
})
