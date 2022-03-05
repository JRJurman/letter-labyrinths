const buildCompasses = () => {
	const letters = {
		vowels: ['A', 'E', 'I', 'O', 'U'],
		rares: ['J', 'Q', 'Z', 'K', 'W', 'Y', 'X', 'V'],
		commons: ['S', 'F', 'G', 'R', 'N', 'D', 'H', 'M', 'B', 'C', 'T', 'L', 'P'],
	}

	/* =================== TRIADS =================== */

	// to filter for triads that have the given letter
	const forLetter = (letter) => (triad) => triad.includes(letter)

	// for sorting letters based on their frequency in a Triad
	const byLetterFrequency = (allTriads) => (letterA, letterB) => {
		// get the count of triads that have letter a or b
		const countOfA = allTriads.filter(forLetter(letterA)).length
		const countOfB = allTriads.filter(forLetter(letterB)).length
		return countOfA - countOfB
	}

	// for filtering out candidate letters that already exist in triads
	const notInTriads = (triads) => (letter) =>
		!triads.some((triad) => triad.includes(letter))

	// build triads of vowels, rares, and commons
	const buildTriad = (allTriads) => {
		// find a common candidate (should be the one we've used the least)
		const workingCommon = letters.commons.sort(byLetterFrequency(allTriads))[0]

		// get all triads that have the common
		const triadsWithCommon = allTriads.filter(forLetter(workingCommon))

		// find a vowel candidate (should be the one we've used the least and never with the common)
		const validVowels = letters.vowels.filter(notInTriads(triadsWithCommon))
		const workingVowel = validVowels.sort(byLetterFrequency(allTriads))[0]

		// if we couldn't find a vowel, return an incomplete array (an error)
		if (!workingVowel) {
			return [workingCommon]
		}

		// get all triads that have this vowel
		const triadsWithVowel = allTriads.filter(forLetter(workingVowel))

		// find a rare candidate (should be the one we've used the least and never with the common or vowel)
		const validRare = letters.rares
			.filter(notInTriads(triadsWithCommon))
			.filter(notInTriads(triadsWithVowel))
		const workingRare = validRare.sort(byLetterFrequency(allTriads))[0]

		// if we couldn't find a rare, return an empty array (an error)
		if (!workingRare) {
			return [workingCommon, workingVowel]
		}

		return [workingCommon, workingVowel, workingRare]
	}

	const allTriads = []
	let nextTriad = []
	do {
		nextTriad = buildTriad(allTriads)
		if (nextTriad.length === 3) {
			allTriads.push(nextTriad)
		} else {
			break
		}
	} while (nextTriad.length === 3)

	/* =================== COMPASSES =================== */

	const compassIncludesTriad = (compass, triad) => {
		const triadString = triad.join()
		const compassString = compass.join('|')
		return compassString.match(triadString)
	}

	// to filter for compasses that have the given triad
	const forTriad = (triad) => (compass) => compassIncludesTriad(compass, triad)

	// for sorting triads based on their frequency in a Compass
	const byTriadFrequency = (allCompasses) => (triadA, triadB) => {
		// get the count of triads that have triad a or b
		const countOfA = allCompasses.filter(forTriad(triadA)).length
		const countOfB = allCompasses.filter(forTriad(triadB)).length
		return countOfA - countOfB
	}

	// determine if triads have any similar letters
	const hasNoMatchingLetters = (workingTriad) => (testLetters) => {
		const joinedSet = new Set([...workingTriad, ...testLetters])
		return joinedSet.size === workingTriad.length + testLetters.length
	}

	// determine if a triad has ever appeared in other compasses at this index
	const notInCompassesAtIndex = (allCompasses, index) => (triad) => {
		const someCompassHasTriadAtIndex = allCompasses.some(
			(compass) => compass[index] === triad
		)
		return !someCompassHasTriadAtIndex
	}

	// now that we have all the triads, lets build all the compasses (which will be 4 triads with non-matching letters)
	const buildCompass = (allCompasses, allTriads) => {
		// filter out any triads that appear in the north before
		const workingNorth = allTriads
			.filter(notInCompassesAtIndex(allCompasses, 0))
			.sort(byTriadFrequency(allCompasses))[0]

		// find a east candidate (no matching letters, not at this index, and the least used)
		const workingEast = allTriads
			.filter(hasNoMatchingLetters(workingNorth))
			.filter(notInCompassesAtIndex(allCompasses, 1))
			.sort(byTriadFrequency(allCompasses))[0]

		// if we couldn't find a east, return an incomplete array (an error)
		if (!workingEast) {
			return [workingNorth]
		}

		// find a south candidate (no matching letters, not at this index, and the least used)
		const workingSouth = allTriads
			.filter(hasNoMatchingLetters([...workingNorth, ...workingEast]))
			.filter(notInCompassesAtIndex(allCompasses, 2))
			.sort(byTriadFrequency(allCompasses))[0]

		// if we couldn't find a south, return an incomplete array (an error)
		if (!workingSouth) {
			return [workingNorth, workingEast]
		}

		// find a west candidate(no matching letters, not at this index, and the least used)
		const workingWest = allTriads
			.filter(
				hasNoMatchingLetters([...workingNorth, ...workingEast, ...workingSouth])
			)
			.filter(notInCompassesAtIndex(allCompasses, 3))
			.sort(byTriadFrequency(allCompasses))[0]

		// if we couldn't find a west, return an incomplete array (an error)
		if (!workingWest) {
			return [workingNorth, workingEast, workingSouth]
		}

		return [workingNorth, workingEast, workingSouth, workingWest]
	}

	const allCompasses = []
	let nextCompass = []
	do {
		nextCompass = buildCompass(allCompasses, allTriads)
		if (nextCompass.length === 4) {
			allCompasses.push(nextCompass)
		} else {
			break
		}
	} while (nextCompass.length === 4)

	return allCompasses
}

const allCompasses = buildCompasses()
console.log(JSON.stringify(allCompasses))
