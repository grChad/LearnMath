import ButtonCommon from '../../../components/ButtonCommon'
import { useNavigation } from '@react-navigation/native'
import type { HomeNavigationProp } from '../../../types/navigation'

// Store
import {
	setCountProgress,
	setGeneralDisabled,
	setOperationData,
	setSelectedAnswer,
} from '../../../store/ducks/basicGameSlice'
import { useAppSelector, useAppDispatch } from '../../../hooks/store'

export default function ButtonPlay() {
	const navigation = useNavigation<HomeNavigationProp>()
	const { level, quantily, operation } = useAppSelector((state) => state.basic)
	const dispatch = useAppDispatch()

	const isDisabled = level === null || quantily === null || operation === null

	const handlePress = () => {
		dispatch(setCountProgress('init')) // iniciar conteo en 1
		dispatch(setGeneralDisabled('enabled')) // se pueden usar todos los botones disponibles
		dispatch(setSelectedAnswer('reset')) // no hay seleccionado ninguna respuesta
		dispatch(setOperationData({ operator: operation ?? 'Suma', level: level ?? 'Fácil' }))

		// iniciar en nuevo Screen
		navigation.navigate('BasicGame')
	}

	return (
		<ButtonCommon
			title="play"
			disabled={isDisabled}
			onPress={handlePress}
			color={isDisabled ? { bg: '#B4B3B1', border: '#888' } : undefined}
		/>
	)
}
