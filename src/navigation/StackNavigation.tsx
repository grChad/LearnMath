import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useScheme } from '../hooks/useColor'
import type { RootStackParamList } from '../types/navigation'

// NOTE: component BottomTab from '@react-navigatoin/bottom-tabs'
import BottomTabNavigation from './BottomTabNavigation'
import { BasicGameStackScreen } from '../screens/stack/'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function StackNavigation() {
	const scheme = useScheme()

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				statusBarBackgroundColor: scheme.card,
				statusBarStyle: scheme.isDark ? 'light' : 'dark',
				navigationBarColor: scheme.card,
			}}
		>
			<Stack.Screen
				name="Home"
				component={BottomTabNavigation}
				options={{ statusBarBackgroundColor: scheme.background }}
			/>
			<Stack.Screen name="BasicGame" component={BasicGameStackScreen} />
		</Stack.Navigator>
	)
}
