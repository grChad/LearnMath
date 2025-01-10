import { View } from 'react-native'

export default function HandleButton() {
	return (
		<View style={{ flex: 4, borderWidth: 1, position: 'relative' }}>
			<View
				style={{
					position: 'absolute',
					bottom: 0,
					left: 0,
					right: 0,
					height: '100%',
					backgroundColor: '#D7FFB7',
				}}
			/>
		</View>
	)
}
