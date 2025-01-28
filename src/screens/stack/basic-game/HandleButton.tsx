import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated'

// biome-ignore format:
import {
  setGeneralDisabled, setSelectedAnswer, setSuccess, setCountProgress, setOperationData, setIsCorrect,
} from '../../../store/ducks/basicGameSlice'
import { useAppSelector, useAppDispatch } from '../../../hooks/store'

// Components
import ButtonCommon from '../../../components/ButtonCommon'
import { IconCheck, IconIncorrect } from '../../../components/icons/Icons'

const the_green = '#59A705'
const the_red = '#E52C28'
const the_button = {
	default: { bg: '#B4B3B1', border: '#888' },
	correct: { bg: '#56CD02', border: the_green },
	incorrect: { bg: '#FF4B4C', border: the_red },
}

interface Props {
	navigateTosummary: () => void
	playSoundCorrect: () => void
	playSoundFail: () => void
}
export default function HandleButton({
	navigateTosummary,
	playSoundCorrect,
	playSoundFail,
}: Props) {
	const [showBanner, setShowBanner] = useState(false)
	const [theTitle, setTheTitle] = useState('comprobar')
	const [colorButton, setColorButton] = useState<
		{ bg: string; border: string } | undefined
	>(the_button.default)
	const [intermediate, setIntermediate] = useState(false)
	const { width } = useWindowDimensions()

	const {
		isCorrect,
		countProgress,
		selectedAnswer,
		operationData: { correctAnswer },
	} = useAppSelector((state) => state.basicGame) // Store
	const { level, operation, quantily } = useAppSelector((state) => state.basic)
	const dispatch = useAppDispatch() // Store

	const width_anim = useSharedValue(0) // Animations

	const parseSelectedAnswer = Number.parseInt(selectedAnswer.join(''), 10)

	const resetValues = () => {
		width_anim.value = 0
		setTheTitle('comprobar')
		setColorButton(the_button.default)
		setShowBanner(false)
		setIntermediate(false)

		dispatch(setIsCorrect('reset'))
		dispatch(setSelectedAnswer('reset'))
		dispatch(setGeneralDisabled('enabled'))
	}

	const hasMoreQuestions = quantily && countProgress < quantily
	// const hasMoreQuestions = countProgress < 3 // para testear

	const setBefore = () => {
		dispatch(setGeneralDisabled('disabled'))
		width_anim.value = withTiming(width)
		setTimeout(() => setShowBanner(true), 350)
		setIntermediate(true)

		if (hasMoreQuestions) {
			if (correctAnswer === parseSelectedAnswer) {
				setTheTitle('continuar')
				setColorButton(the_button.correct)
				dispatch(setIsCorrect(true))
				dispatch(setSuccess('correct')) // +1 de correcto

				playSoundCorrect()
			} else {
				setTheTitle('ok')
				setColorButton(the_button.incorrect)
				dispatch(setIsCorrect(false))

				playSoundFail()
			}
		} else {
			setTheTitle('ver resultados')

			if (correctAnswer === parseSelectedAnswer) {
				dispatch(setIsCorrect(true))
				dispatch(setSuccess('correct')) // +1 de correcto

				playSoundCorrect()
			} else {
				dispatch(setIsCorrect(false))

				playSoundFail()
			}
		}
	}

	const setAfter = () => {
		if (hasMoreQuestions) {
			resetValues()
			dispatch(
				setOperationData({ operator: operation ?? 'Suma', level: level ?? 'Fácil' }),
			)
			dispatch(setCountProgress('next'))
		} else {
			navigateTosummary()
		}
	}

	const animatedStyles = useAnimatedStyle(() => ({ width: width_anim.value }))

	// Antes de validar la respuesta, muestra el color por defecto (blockeado o default del componente)
	useEffect(() => {
		if (!showBanner) {
			if (selectedAnswer.length === 0) setColorButton(the_button.default)
			else setColorButton(undefined)
		}
	}, [showBanner, selectedAnswer])

	return (
		<View style={styles.container}>
			<View style={{ maxWidth: 300 }}>
				<ButtonCommon
					disabled={selectedAnswer.length === 0}
					title={theTitle}
					onPress={() => (!intermediate ? setBefore() : setAfter())}
					color={colorButton}
				/>
			</View>
			<Animated.View
				style={[
					{
						backgroundColor: isCorrect ? '#D7FFB7' : '#FFE0E0',
						height: isCorrect ? 150 : 210,
					},
					styles.viewAnimated,
					animatedStyles,
				]}
			>
				{showBanner && (
					<View style={{ margin: 20 }}>
						<View style={styles.boxTitleBanner}>
							{isCorrect ? (
								<IconCheck size={30} fill={the_green} />
							) : (
								<IconIncorrect size={30} fill={the_red} />
							)}
							<Text
								style={{
									color: isCorrect ? the_green : the_red,
									fontFamily: 'Asap',
									fontSize: 25,
								}}
							>
								{isCorrect ? '¡Correcto!' : 'Incorrecto'}
							</Text>
						</View>

						{!isCorrect && (
							<View>
								<Text style={{ color: the_red, fontFamily: 'Asap', fontSize: 20 }}>
									Respuesta correcta:{'   '}
									<Text style={styles.resultBanner}>{correctAnswer}</Text>
								</Text>
							</View>
						)}
					</View>
				)}
			</Animated.View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		position: 'relative',
		justifyContent: 'center',
		alignItems: 'center',
		height: 100,
	},
	viewAnimated: { position: 'absolute', bottom: 0, right: 0 },
	boxTitleBanner: {
		flexDirection: 'row',
		alignItems: 'center',
		columnGap: 20,
		marginBottom: 20,
	},
	resultBanner: {
		color: the_red,
		fontFamily: 'Asap',
		fontSize: 25,
		textShadowColor: 'black',
		textShadowRadius: 1,
	},
})
