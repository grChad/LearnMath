import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useScheme } from '../hooks/useColor'

// Screens
import HomeScreen from './example'

const Stack = createNativeStackNavigator()

export default function StackNavigation() {
	const scheme = useScheme()

	return (
		<Stack.Navigator
			screenOptions={{
				statusBarBackgroundColor: scheme.card,
				statusBarStyle: scheme.isDark ? 'light' : 'dark',
				navigationBarColor: scheme.card,
			}}
		>
			<Stack.Screen name="Home" component={HomeScreen} />
		</Stack.Navigator>
	)
}
