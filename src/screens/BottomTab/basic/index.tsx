import { useEffect } from 'react'
import { ScrollView, View } from 'react-native'
import Sound from 'react-native-sound'

// components
import SelectOperation from './SelectOperation'
import SelectLevel from './level'

const sound_press_select = new Sound('press.wav', Sound.MAIN_BUNDLE, (error) => {
	if (error) {
		throw new Error(`sound_press_select: failed to load the sound ${error}`)
	}
})

const sound_press_button = new Sound('press_button.wav', Sound.MAIN_BUNDLE, (error) => {
	if (error) {
		throw new Error(`sound_press_button: failed to load the sound ${error}`)
	}
})

export default function BasicTabScreen() {
	const pressButtonSelect = () => {
		sound_press_select.play((success) => {
			if (!success) {
				throw new Error('sound_press_select: falla el audio')
			}
		})
	}

	const pressButton = () => {
		sound_press_button
			.play((success) => {
				if (!success) {
					throw new Error('sound_press_button: falla el audio')
				}
			})
			.setVolume(0.5)
	}

	useEffect(() => {
		return () => {
			sound_press_select.release()
			sound_press_button.release()
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
