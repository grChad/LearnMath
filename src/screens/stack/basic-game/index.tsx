import { View } from 'react-native'
import Sound from 'react-native-sound'

import { useWide } from '../../../hooks/useWide'
import type { BasicGameNavigationProp } from '../../../types/navigation'

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
