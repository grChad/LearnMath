import { useEffect } from 'react'
import { View } from 'react-native'
import Sound from 'react-native-sound'

// components
import SelectOperation from './SelectOperation'

const sound_press = new Sound('press.wav', Sound.MAIN_BUNDLE, (error) => {
	if (error) {
		throw new Error(`sound_press: failed to load the sound ${error}`)
	}
})

export default function BasicTabScreen() {
	const pressButtonSelect = () => {
		sound_press
			.play((success) => {
				if (!success) {
					throw new Error('sound_press: playback failed due to audio decoding errors')
				}
			})
			.setVolume(0.5)
	}

	useEffect(() => {
		return () => {
			sound_press.release()
		}
	}, [])

	return (
		<View style={{ flex: 1, alignItems: 'center', rowGap: 30, paddingVertical: 20 }}>
			<SelectOperation soundPress={pressButtonSelect} />
		</View>
	)
}
