// Tiene que ser igual a /types/store.d.ts 'BasicOperationType'
// biome-ignore format:
export const BasicOperationOptions = [
	{ operation: 'Suma'          , color: { bg: '#008b8b', border: '#0B6666' } },
	{ operation: 'Resta'         , color: { bg: '#cd5c5c', border: '#AD3838' } },
	{ operation: 'Multiplicación', color: { bg: '#ffa500', border: '#D48F10' } },
	{ operation: 'División'      , color: { bg: '#7b68ee', border: '#5947C8' } },
]

// Tiene que ser igual a /types/store.d.ts 'BasicLevelType'
// biome-ignore format:
export const BasicLevelOptions = [
	{ level: 'Fácil'  , stars: [1, 0, 0, 0], color: 'lightgreen' },
	{ level: 'Normal' , stars: [1, 1, 0, 0], color: 'gold' },
	{ level: 'Difícil', stars: [1, 1, 1, 0], color: 'tomato' },
	{ level: 'Experto', stars: [1, 1, 1, 1], color: '#9A76FF' },
]

export const QuantilyOptions = [
	{ quantily: 20 },
	{ quantily: 40 },
	{ quantily: 60 },
	{ quantily: 80 },
]
