import { NavigationContainer } from '@react-navigation/native'
import { useTheme } from '../hooks/useColor'

import StackNavigation from './StackNavigation'

export default function NavigationApp() {
	const theme = useTheme()

	return (
		<NavigationContainer theme={theme}>
			<StackNavigation />
		</NavigationContainer>
	)
}
