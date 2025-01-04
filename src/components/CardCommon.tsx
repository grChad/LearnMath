import type { ReactNode } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useScheme } from '../hooks/useColor'

type TagPosition = 'left' | 'center' | 'right'
interface Props {
	title: string
	children: ReactNode
	useTag?: boolean
	tagName?: string | null
	tagPosition?: TagPosition
}

export default function CardCommon({
	title,
	children,
	useTag = false,
	tagName,
	tagPosition = 'center',
}: Props) {
	const scheme = useScheme()

	const setAlignItems = (pos: TagPosition) => {
		if (pos === 'left') return 'flex-start'
		if (pos === 'center') return 'center'
		if (pos === 'right') return 'flex-end'
		return 'center'
	}

	return (
		<View style={[styles.container, { borderColor: scheme.border }]}>
			<Text style={[styles.title, { color: scheme.text }]}>{title}</Text>
			{useTag && (
				<View style={{ width: '100%', alignItems: setAlignItems(tagPosition) }}>
					<Text
						style={[
							styles.nameOperation,
							{ backgroundColor: scheme.primary, color: scheme.background },
						]}
					>
						{tagName ?? '?'}
					</Text>
				</View>
			)}
			{children}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '90%',
		maxWidth: 500,
		padding: 10,
		alignItems: 'center',
		borderWidth: 1,
		borderRadius: 15,
	},
	title: { fontFamily: 'Asap', fontSize: 25, color: '#414559', marginBottom: 10 },
	nameOperation: {
		fontFamily: 'ComicNeue',
		fontSize: 14,
		paddingHorizontal: 15,
		borderRadius: 20,
	},
})
