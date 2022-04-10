const mapWidth = 12
const mapHeight = 8

// max weight to prevent tokens from appear on these space
const MW = 9999
// high weight to discourage tokens from appearing on these spaces
const HW = 500

// to place any element, let's give each space a "weight" based on adjacent objects (and edge of the board)
// additionally, we'll give a space weight if a previous version of the board has an object in that spot
// then we place based on which element has the least weight
const mapWeights = [
	// the edges will have HWs and the corners / starter zones have MWs
	// 01 for some noise in the map
	[MW, HW, HW, HW, MW, MW, MW, MW, HW, HW, HW, MW],
	[HW, 00, 01, 00, 01, 00, 01, 00, 00, 00, 01, HW],
	[MW, 00, 00, 01, 00, 01, 00, 01, 00, 01, 00, MW],
	[MW, 00, 01, 00, 01, 00, 00, 00, 01, 00, 01, MW],
	[MW, 01, 00, 00, 00, 01, 00, 01, 00, 01, 00, MW],
	[MW, 00, 01, 00, 01, 00, 01, 00, 01, 00, 01, MW],
	[HW, 00, 00, 01, 00, 01, 00, 01, 00, 01, 00, HW],
	[MW, HW, HW, HW, MW, MW, MW, MW, HW, HW, HW, MW],
].flat()

const buildNewMap = () => new Array(mapWidth * mapHeight).fill(' ')

// get all the adjacent indicies for this index
const getAdjacentIndicies = (index) => {
	const isOnLeftEdge = index % mapWidth === 0
	const isOnRightEdge = index % mapWidth === mapWidth - 1
	const isOnTopEdge = index < mapWidth
	const isOnBottomEdge = index > mapWidth * (mapHeight - 1)
	// only consider orthogonal directions when adding weights for adjacent spaces
	return [
		// top-left
		// ...(isOnLeftEdge || isOnTopEdge ? [] : [index - mapWidth - 1]),
		// top
		...(isOnTopEdge ? [] : [index - mapWidth]),
		// top-right
		// ...(isOnRightEdge || isOnTopEdge ? [] : [index - mapWidth + 1]),
		// left
		...(isOnLeftEdge ? [] : [index - 1]),
		// right
		...(isOnRightEdge ? [] : [index + 1]),
		// bottom-left
		// ...(isOnLeftEdge || isOnBottomEdge ? [] : [index + mapWidth - 1]),
		// bootom
		...(isOnBottomEdge ? [] : [index + mapWidth]),
		// bottom-right
		// ...(isOnRightEdge || isOnBottomEdge ? [] : [index + mapWidth + 1]),
	]
}

// recursive function to update the weight on this space,
// and one less on ever adjacent space (and so on, and so on...)
const increaseWeightOnIndex = (index, value) => {
	if (value > 0) {
		mapWeights[index] += value
		const adjacentIndicies = getAdjacentIndicies(index)
		adjacentIndicies.forEach((index) => increaseWeightOnIndex(index, value - 1))
	}
}

// helper function to map indicies to something we can sort (without losing the original index value)
const toSortableIndicies = (value, index) => {
	return { index, value }
}

// helper function to sort sortableIndicies by value
const sortByValue = (sortableIndexA, sortableIndexB) => {
	return sortableIndexA.value - sortableIndexB.value
}

// helper function to sort indicies and determine (based on the mapWeights)
// what is the best next index to add an object to
const getNextSortableIndexToAdd = () => {
	const nextSortableIndex = mapWeights
		.map(toSortableIndicies)
		.sort(sortByValue)[0]
	return nextSortableIndex
}

// helper function to chunk map into a presentation view
const intoChunks = (chunkSize) => (currentMap, nextChunk) => {
	const lastRow = currentMap.slice(-1)[0]
	lastRowWithChunk = [...lastRow, nextChunk]
	if (lastRowWithChunk.length === chunkSize) {
		return [...currentMap.slice(0, -1), lastRowWithChunk, []]
	}
	return [...currentMap.slice(0, -1), lastRowWithChunk]
}

// helper function to print maps
const printMap = (map) => {
	console.log(map.reduce(intoChunks(mapWidth), [[]]).join('\n'))
}

// main function to build all maps
const buildMaps = () => {
	const allMaps = []
	// we want 12 maps (we will actually toss the first one)
	while (allMaps.length < 13) {
		const nextMap = buildNewMap()
		// 5 enemies, and 10 traps
		const tokens = [
			['E', 3],
			['E', 3],
			['E', 3],
			['E', 3],
			['E', 3],
			['T', 2],
			['T', 2],
			['T', 2],
			['T', 2],
			['T', 2],
			['T', 2],
			['T', 2],
			['T', 2],
			['T', 2],
			['T', 2],
		]
		tokens.forEach(([token, weight]) => {
			let nextSortableIndex
			// keep trying to find a nextSortableIndex that isn't taken
			do {
				nextSortableIndex = getNextSortableIndexToAdd()
				increaseWeightOnIndex(nextSortableIndex.index, weight)
			} while (nextMap[nextSortableIndex.index] !== ' ')
			nextMap[nextSortableIndex.index] = token
		})

		console.log('-'.repeat(mapWidth * 2))
		printMap(nextMap)
		allMaps.push(nextMap)
	}
	return allMaps
}

const allMaps = buildMaps()

const getXYFromIndex = (index) => {
	const x = index % mapWidth
	const y = Math.floor(index / mapWidth)
	return { x, y }
}

// TODO make the CSV have the front and back of the card

const columns = [
	'quantity',
	'name',
	['E0X', 'E0Y', 'E1X', 'E1Y', 'E2X', 'E2Y', 'E3X', 'E3Y', 'E4X', 'E4Y'],
	['T0X', 'T0Y', 'T1X', 'T1Y', 'T2X', 'T2Y', 'T3X', 'T3Y', 'T4X', 'T4Y'],
	['T5X', 'T5Y', 'T6X', 'T6Y', 'T7X', 'T7Y', 'T8X', 'T8Y', 'T9X', 'T9Y'],
].flat()

console.log(columns.join(','))
console.log(
	allMaps
		.map((map, mapIndex) => {
			// get all the tokens as XY objects
			const tokens = map
				.map((space, spaceIndex) => ({ ...getXYFromIndex(spaceIndex), space }))
				.filter(({ space }) => space != ' ')
				.reduce((tokensArray, nextToken) => {
					return [...tokensArray, nextToken.x, nextToken.y]
				}, [])
			return [1, mapIndex + 1, ...tokens].join(',')
		})
		.join('\n')
)
