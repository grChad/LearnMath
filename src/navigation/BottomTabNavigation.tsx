import { View, Text, useWindowDimensions } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import type { RootBottomTabParamList } from '../types/navigation'

import { IconBasic, IconEquation, IconFunction, IconSetting } from '../components/Icons'

const Tab = createBottomTabNavigator<RootBottomTabParamList>()

function HomeScreenTab() {
	return (
		<View>
			<Text>Home Screen</Text>
		</View>
	)
}
function EquationScreenTab() {
	return (
		<View>
			<Text>Equation Screen</Text>
		</View>
	)
}

function FunctionScreenTab() {
	return (
		<View>
			<Text>Bookmarks Screen</Text>
		</View>
	)
}

function SettingsScreenTab() {
	return (
		<View>
			<Text>Settings Screen</Text>
		</View>
	)
}

export default function BottomTabNavigation() {
	const { width, height } = useWindowDimensions()
	const isLandscape = width > height

	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarPosition: isLandscape ? 'left' : 'bottom',
				tabBarVariant: isLandscape ? 'material' : 'uikit',
				tabBarLabelPosition: 'below-icon',
			}}
			initialRouteName="Basic"
		>
			<Tab.Screen
				name="Basic"
				component={HomeScreenTab}
				options={{
					tabBarIcon: ({ color, size }) => <IconBasic size={size} fill={color} />,
				}}
			/>
			<Tab.Screen
				name="Equation"
				component={EquationScreenTab}
				options={{
					tabBarIcon: ({ color, size }) => <IconEquation size={size} fill={color} />,
				}}
			/>
			<Tab.Screen
				name="Function"
				component={FunctionScreenTab}
				options={{
					tabBarIcon: ({ color, size }) => <IconFunction size={size} fill={color} />,
				}}
			/>
			<Tab.Screen
				name="Config"
				component={SettingsScreenTab}
				options={{
					tabBarIcon: ({ color, size, focused }) => (
						<IconSetting size={size} fill={color} focused={focused} />
					),
				}}
			/>
		</Tab.Navigator>
	)
}
