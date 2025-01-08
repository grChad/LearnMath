import { useEffect } from 'react'
import { ScrollView, View } from 'react-native'
import Sound from 'react-native-sound'

// components
import SelectOperation from './operation/'
import SelectLevel from './level'
import SelectQuantily from './SelectQuantily'
import ButtonPlay from './ButtonPlay'

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

const sound_number = new Sound('select_number.wav', Sound.MAIN_BUNDLE, (error) => {
	if (error) {
		throw new Error(`sound_number: failed to load the sound ${error}`)
	}
})

export default function BasicTabScreen() {
	const pressButtonBubble = () => {
		sound_bubble.play((success) => {
			if (!success) throw new Error('sound_bubble: falla el audio')
		})
	}

	const pressButtonOotions = () => {
		sound_options
			.play((success) => {
				if (!success) throw new Error('sound_options: falla el audio')
			})
			.setVolume(0.5)
	}

	const pressButtonNumber = () => {
		sound_number
			.play((success) => {
				if (!success) throw new Error('sound_number: falla el audio')
			})
			.setVolume(0.2)
	}

	useEffect(() => {
		return () => {
			sound_bubble.release()
			sound_options.release()
			sound_number.release()
		}
	}, [])

	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			showsHorizontalScrollIndicator={false}
		>
			<View
				style={{
					flexDirection: 'row',
					flexWrap: 'wrap',
					justifyContent: 'space-evenly',
					alignItems: 'center',
					gap: 30,
					padding: 20,
				}}
			>
				<SelectOperation soundPress={pressButtonBubble} />
				<SelectLevel soundPress={pressButtonOotions} />
				<SelectQuantily soundPress={pressButtonNumber} />
				<ButtonPlay />
			</View>
		</ScrollView>
	)
}
