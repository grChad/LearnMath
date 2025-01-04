import { View, Image, Text } from 'react-native'
import { useScheme } from '../hooks/useColor'

export default function WorkingPage() {
	const scheme = useScheme()

	return (
		<View style={{ justifyContent: 'center', alignItems: 'center' }}>
			<Image
				source={require('../../assets/images/working.png')}
				style={{ width: 300, height: 300, objectFit: 'contain' }}
			/>
			<Text
				style={{
					color: scheme.text,
					fontSize: 30,
					marginTop: 20,
					fontFamily: 'ComicNeue',
				}}
			>
				Estamos Cambeando, todavia no esta disponible.
			</Text>
		</View>
	)
}
