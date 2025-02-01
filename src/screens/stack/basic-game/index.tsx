import { useEffect } from 'react'
import { Alert, BackHandler, View } from 'react-native'
import Sound from 'react-native-sound'

import { useWide } from '../../../hooks/useWide'
import type { BasicGameNavigationProp } from '../../../types/navigation'

// State
import { setOperation, setLevelBasic, setQuantily } from '../../../store/ducks/basicSlice'
import { setSuccess } from '../../../store/ducks/basicGameSlice'
import { useAppDispatch } from '../../../hooks/store'

// components
import NavBar from './NavBar'
import Operations from './Operations'
import Options from './Options'
import HandleButton from './HandleButton'
import ProgressBar from './ProgressBar'

// Create new sound objects
const sound_correct = new Sound('correct.wav', Sound.MAIN_BUNDLE, (error) => {
	if (error) {
		throw new Error(`sound_correct: failed to load the sound ${error}`)
	}
})

const sound_fail = new Sound('fail.wav', Sound.MAIN_BUNDLE, (error) => {
	if (error) {
		throw new Error(`sound_fail: failed to load the sound ${error}`)
	}
})

interface Props {
	navigation: BasicGameNavigationProp
}
export default function ({ navigation }: Props) {
	const isWide = useWide()
	const dispatch = useAppDispatch()

	const playSoundCorrect = () => {
		sound_correct.play((success) => {
			if (!success) throw new Error('sound_correct: falla el audio')
		})
	}

	const playSoundFail = () => {
		sound_fail.play((success) => {
			if (!success) throw new Error('sound_fail: falla el audio')
		})
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: <No dependencies>
	useEffect(() => {
		const backActionHandler = () => {
			Alert.alert('¡Salir!', 'Perderas todo tu progreso', [
				{ text: 'Mejor lo termino', onPress: () => null, style: 'cancel' },
				{
					text: 'Quiero salir 😭',
					onPress: () => {
						dispatch(setOperation(null))
						dispatch(setLevelBasic(null))
						dispatch(setQuantily(null))

						dispatch(setSuccess('reset'))

						navigation.goBack() // return to 'HomeScreen'
					},
				},
			])

			return true
		}

		BackHandler.addEventListener('hardwareBackPress', backActionHandler)

		return () => {
			BackHandler.removeEventListener('hardwareBackPress', backActionHandler)
		}
	}, [])

	return (
		<View style={{ flex: 1 }}>
			<NavBar />
			<ProgressBar />

			<View style={{ flex: 1, flexDirection: isWide ? 'row' : 'column' }}>
				<Operations />
				<View style={{ flex: 1 }}>
					<Options />
					<HandleButton
						navigateTosummary={() => navigation.popTo('Summary')}
						playSoundCorrect={playSoundCorrect}
						playSoundFail={playSoundFail}
					/>
				</View>
			</View>
		</View>
	)
}
