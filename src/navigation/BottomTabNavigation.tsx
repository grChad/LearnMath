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
import { IconBasic, IconEquation, IconFunction, IconSetting } from './IconButton'
import React from 'react'

const Tab = createBottomTabNavigator<RootBottomTabParamList>()

export default function BottomTabNavigation() {
	const scheme = useScheme()
	const isWide = useWide()

	type IconProps = { focused: boolean; color: string; size: number }
	const iconProps = (props: IconProps) => {
		const { focused, color, size } = props
		return { focused, color, size, bgSelect: scheme.primarySelected }
	}

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
				options={{ tabBarIcon: (props) => <IconBasic {...iconProps(props)} /> }}
			/>
			<Tab.Screen
				name="Equation"
				component={EquationTabScreen}
				options={{ tabBarIcon: (props) => <IconEquation {...iconProps(props)} /> }}
			/>
			<Tab.Screen
				name="Function"
				component={FunctionTabScreen}
				options={{ tabBarIcon: (props) => <IconFunction {...iconProps(props)} /> }}
			/>
			<Tab.Screen
				name="Config"
				component={ConfigTabScreen}
				options={{ tabBarIcon: (props) => <IconSetting {...iconProps(props)} /> }}
			/>
		</Tab.Navigator>
	)
}
