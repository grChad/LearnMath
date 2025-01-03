import { useWindowDimensions } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import type { RootBottomTabParamList } from '../types/navigation'

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
	const { width, height } = useWindowDimensions()
	const isHorizontal = width > height

	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarPosition: isHorizontal ? 'left' : 'bottom',
				tabBarVariant: isHorizontal ? 'material' : 'uikit',
				tabBarLabelPosition: 'below-icon',
			}}
			initialRouteName="Basic"
		>
			<Tab.Screen
				name="Basic"
				component={BasicTabScreen}
				options={{
					tabBarIcon: ({ color, size }) => <IconBasic size={size} fill={color} />,
				}}
			/>
			<Tab.Screen
				name="Equation"
				component={EquationTabScreen}
				options={{
					tabBarIcon: ({ color, size }) => <IconEquation size={size} fill={color} />,
				}}
			/>
			<Tab.Screen
				name="Function"
				component={FunctionTabScreen}
				options={{
					tabBarIcon: ({ color, size }) => <IconFunction size={size} fill={color} />,
				}}
			/>
			<Tab.Screen
				name="Config"
				component={ConfigTabScreen}
				options={{
					tabBarIcon: ({ color, size, focused }) => (
						<IconSetting size={size} fill={color} focused={focused} />
					),
				}}
			/>
		</Tab.Navigator>
	)
}
