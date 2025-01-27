import { View, Text, Button } from 'react-native'
import type { SummaryNavigationProp } from '../../../types/navigation'

interface Props {
	navigation: SummaryNavigationProp
}
export default function ({ navigation }: Props) {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text style={{ fontFamily: 'Asap', fontSize: 30 }}>Summary</Text>
			<Button title="Regregar a home" onPress={() => navigation.navigate('Home')} />
		</View>
	)
}
