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
	[MW, HW, HW, HW, MW, MW, MW, MW, HW, HW, HW, MW],
	[HW, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, HW],
	[MW, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, MW],
	[MW, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, MW],
	[MW, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, MW],
	[MW, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, MW],
	[HW, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, HW],
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
	// keep building maps until we get a value that is larger than 99
	while (allMaps.length < 12) {
		const nextMap = buildNewMap()
		// 5 enemies, and 10 traps
		const tokens = [
			...new Array(5).fill(['E', 5]),
			...new Array(5).fill(['T', 4]),
		]
		tokens.forEach(([token, weight]) => {
			const nextSortableIndex = getNextSortableIndexToAdd()
			nextMap[nextSortableIndex.index] = token
			increaseWeightOnIndex(nextSortableIndex.index, weight)
		})

		// console.log('-'.repeat(mapWidth * 2))
		// printMap(nextMap)
		allMaps.push(nextMap)
	}
	return allMaps
}

const allMaps = buildMaps()

const columns = [
	'quantity',
	'name',
	...[...new Array(mapHeight * mapWidth)].map((_, index) => index),
]
console.log(columns.join(','))
console.log(
	allMaps.map((map, mapIndex) => [1, mapIndex + 1, ...map].join(',')).join('\n')
)
