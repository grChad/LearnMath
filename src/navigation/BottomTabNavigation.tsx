import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import type { RootBottomTabParamList } from '../types/navigation'
import { useScheme } from '../hooks/useColor'
import { useWide } from '../hooks/useWide'

// components and icons
import {
	BasicTabScreen,
	EquationTabScreen,
	FunctionTabScreen,
	ConfigTabScreen,
} from '../screens/BottomTab'
import { IconBasic, IconEquation, IconFunction, IconSetting } from '../components/Icons'

const Tab = createBottomTabNavigator<RootBottomTabParamList>()

export default function BottomTabNavigation() {
	const scheme = useScheme()

	const isWide = useWide()

	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarPosition: isWide ? 'left' : 'bottom',
				tabBarVariant: isWide ? 'material' : 'uikit',
				tabBarLabelPosition: 'below-icon',
				tabBarStyle: {
					height: isWide ? '100%' : 60,
					backgroundColor: isWide ? scheme.background : scheme.card,
				},
				tabBarIconStyle: { marginBottom: 5 },
				tabBarItemStyle: { backgroundColor: scheme.card },
				tabBarLabelStyle: { fontSize: 11 },
			}}
			initialRouteName="Basic"
		>
			<Tab.Screen
				name="Basic"
				component={BasicTabScreen}
				options={{
					tabBarIcon: ({ color, size, focused }) => (
						<IconBasic
							size={size}
							fill={color}
							focused={focused}
							bgColor={focused ? scheme.primarySelected : 'transparent'}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Equation"
				component={EquationTabScreen}
				options={{
					tabBarIcon: ({ color, size, focused }) => (
						<IconEquation
							size={size}
							fill={color}
							focused={focused}
							bgColor={focused ? scheme.primarySelected : 'transparent'}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Function"
				component={FunctionTabScreen}
				options={{
					tabBarIcon: ({ color, size, focused }) => (
						<IconFunction
							size={size}
							fill={color}
							focused={focused}
							bgColor={focused ? scheme.primarySelected : 'transparent'}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Config"
				component={ConfigTabScreen}
				options={{
					tabBarIcon: ({ color, size, focused }) => (
						<IconSetting
							size={size}
							fill={color}
							focused={focused}
							bgColor={focused ? scheme.primarySelected : 'transparent'}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	)
}
