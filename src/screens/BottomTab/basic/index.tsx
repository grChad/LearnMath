import { useEffect } from 'react'
import { ScrollView, View } from 'react-native'
import Sound from 'react-native-sound'

// components
import SelectOperation from './SelectOperation'
import SelectLevel from './level'

const sound_bubble = new Sound('select_bubble.wav', Sound.MAIN_BUNDLE, (error) => {
	if (error) {
		throw new Error(`sound_bubble: failed to load the sound ${error}`)
	}
})

const sound_options = new Sound('select_options.wav', Sound.MAIN_BUNDLE, (error) => {
	if (error) {
		throw new Error(`sound_options: failed to load the sound ${error}`)
	}
})

export default function BasicTabScreen() {
	const pressButtonSelect = () => {
		sound_bubble.play((success) => {
			if (!success) {
				throw new Error('sound_bubble: falla el audio')
			}
		})
	}

	const pressButton = () => {
		sound_options
			.play((success) => {
				if (!success) {
					throw new Error('sound_options: falla el audio')
				}
			})
			.setVolume(0.5)
	}

	useEffect(() => {
		return () => {
			sound_bubble.release()
			sound_options.release()
		}
	}, [])

	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			showsHorizontalScrollIndicator={false}
		>
			<View style={{ flex: 1, alignItems: 'center', rowGap: 30, paddingVertical: 20 }}>
				<SelectOperation soundPress={pressButtonSelect} />
				<SelectLevel soundPress={pressButton} />
			</View>
		</ScrollView>
	)
}
