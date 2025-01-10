import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { RouteProp } from '@react-navigation/native'

export type RootStackParamList = {
	Home: undefined
	BasicGame: undefined
}

export type HomeRouteProp = RouteProp<RootStackParamList, 'Home'>
export type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>

export type BasicGameRouteProp = RouteProp<RootStackParamList, 'BasicGame'>
export type BasicGameNavigationProp = NativeStackNavigationProp<
	RootStackParamList,
	'BasicGame'
>

export type RootBottomTabParamList = {
	Basic: undefined
	Equation: undefined
	Function: undefined
	Config: undefined
}
