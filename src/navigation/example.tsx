import { View, Text } from 'react-native'
import { useScheme } from '../hooks/useColor'
export default function Example() {
	const scheme = useScheme()

	return (
		<View style={{ backgroundColor: scheme.primary }}>
			<Text style={{ color: scheme.text }}>Example</Text>
		</View>
	)
}
