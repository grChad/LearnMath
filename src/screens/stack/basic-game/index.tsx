import { View } from 'react-native'
import { useWide } from '../../../hooks/useWide'
import type { BasicGameNavigationProp } from '../../../types/navigation'

// components
import NavBar from './NavBar'
import Operations from './Operations'
import Options from './Options'
import HandleButton from './HandleButton'
import ProgressBar from './ProgressBar'

interface Props {
	navigation: BasicGameNavigationProp
}
export default function ({ navigation }: Props) {
	const isWide = useWide()

	return (
		<View style={{ flex: 1 }}>
			<NavBar />
			<ProgressBar />

			<View style={{ flex: 1, flexDirection: isWide ? 'row' : 'column' }}>
				<Operations />
				<View style={{ flex: 1 }}>
					<Options />
					<HandleButton navigateTosummary={() => navigation.navigate('Summary')} />
				</View>
			</View>
		</View>
	)
}
