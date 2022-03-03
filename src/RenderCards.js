import { registerSvg } from 'tram-one'
import CompassCard from './CompassCard'
import compasses from './compasses/all-compasses.json'
import './styles.css'

const svg = registerSvg({
	CompassCard: CompassCard,
})

const cardWidth = 368
const cardHeight = 327

const cardsWide = 7
const cardsHigh = 10

export default () => {
	const compassCards = []
	let x = 0
	let y = -1
	compasses.forEach((compassData, index) => {
		if (index % cardsWide === 0) {
			y++
			x = 0
		} else {
			x++
		}
		compassCards.push(
			svg`<CompassCard compassData=${compassData}
			x=${x * cardWidth} y=${y * cardHeight} />`
		)
	})

	// there are 69 compasses

	const height = cardHeight * cardsHigh
	const width = cardWidth * cardsWide

	return svg`
		<svg class="render-cards" width="${width}px" height="${height}px">${compassCards}</svg>
	`
}
