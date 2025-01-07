import { useWindowDimensions } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import type { RootBottomTabParamList } from '../types/navigation'
import { useScheme } from '../hooks/useColor'

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
	const { width, height } = useWindowDimensions()
	const isHorizontal = width > height

	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarPosition: isHorizontal ? 'left' : 'bottom',
				tabBarVariant: isHorizontal ? 'material' : 'uikit',
				tabBarLabelPosition: 'below-icon',
				tabBarStyle: { height: 60 },
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
