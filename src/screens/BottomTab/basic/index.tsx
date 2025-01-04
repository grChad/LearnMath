import { View, useWindowDimensions } from 'react-native'
import SelectOperation from './SelectOperation'

export default function BasicTabScreen() {
	const { width } = useWindowDimensions()
	console.log(width)

	return (
		<View style={{ flex: 1, alignItems: 'center', rowGap: 30, paddingVertical: 20 }}>
			<SelectOperation />
		</View>
	)
}
