import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { useWideNav } from '../hooks/useWide'
import { useScheme } from '../hooks/useColor'
import type { RootStackParamList } from '../types/navigation'

// NOTE: component BottomTab from '@react-navigatoin/bottom-tabs'
import BottomTabNavigation from './BottomTabNavigation'
import { BasicGameStackScreen } from '../screens/stack/'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function StackNavigation() {
	const scheme = useScheme()
	const isWidedeNav = useWideNav()

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				statusBarBackgroundColor: scheme.card,
				statusBarStyle: scheme.isDark ? 'light' : 'dark',
				navigationBarColor: scheme.card,
				navigationBarTranslucent: false,
				orientation: isWidedeNav ? 'default' : 'portrait',
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
