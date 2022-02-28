import { registerSvg } from 'tram-one'

const svg = registerSvg()

export default ({ compassData }) => {
	const [northTriad, eastTriad, southTriad, westTriad] = compassData
	// note, the following svg was generated in excalidraw
	return svg`
		<svg class="compass-card" width="378px" height="330px">
			<rect x="0" y="0" width="368.9005170335713" height="327.5" fill="#ffffff"></rect>
			<g stroke-linecap="round" transform="translate(10.18623131928507 10) rotate(0 174.21428571428578 153)">
				<path d="M0.52 -0.73 C92.42 0.31, 185.66 0.06, 348.68 -0.46 M0.48 -0.56 C103.95 0.77, 208 0.99, 348.94 0.05 M348.93 -1.4 C349.38 91.12, 349.17 185.82, 348.88 305.11 M348.1 0.09 C345.87 101.83, 346.07 202.51, 348.93 305.39 M348.48 307.2 C245.4 304.61, 140.14 303.12, 0.39 305.66 M347.84 306.07 C274.64 306.61, 200.46 306.18, 0.12 306.41 M0.94 306.2 C-1.87 196.8, -0.83 90.45, 0.98 -0.24 M0.48 306.49 C-0.11 200.8, 0.47 94.02, 0.62 0.55" stroke="#000000" stroke-width="1" fill="none">
				</path>
			</g>
			<g stroke-linecap="round">
				<g transform="translate(14.400517033571305 11) rotate(0 170.21344255579163 151.70592859680295)">
					<path d="M0.48 -0.67 C57.44 49.83, 284.23 252.18, 341.16 302.7 M-0.73 1.59 C56.14 52.3, 283.2 253.76, 340.3 304.08" stroke="#000000" stroke-width="1" fill="none">
					</path>
				</g>
			</g>
			<g stroke-linecap="round">
				<g transform="translate(357.4005170335713 13) rotate(0 -173.11306395330462 151.63151058760008)">
					<path d="M-0.67 0.16 C-58.33 50.76, -288.65 253.55, -346.3 304.07 M1.17 -0.8 C-56.64 49.44, -289.28 251.59, -347.4 302.5" stroke="#000000" stroke-width="1" fill="none">
					</path>
				</g>
			</g>
			<g fill="orange">
				<g transform="translate(156.4005170335713 12) rotate(0 27.5 12.5)">
					<text x="0" y="18">North
					</text>
				</g>
				<g transform="translate(135.42880536595703 68.53300575749529) rotate(0 8 12.5)">
					<text x="0" y="18">
						${northTriad[0]}
					</text>
				</g>
				<g transform="translate(206.35733319798828 69.53299049870623) rotate(0 12 12.5)">
					<text x="0" y="18">
						${northTriad[1]}
					</text>
				</g>
				<g transform="translate(171.00018162153765 105.39014207515686) rotate(0 12.5 12.5)">
					<text x="0" y="18">
						${northTriad[2]}
					</text>
				</g>
			</g>
			<g fill="red">
				<g transform="translate(321.4005170335713 139) rotate(90 25 12.5)">
					<text x="0" y="18">East
					</text>
				</g>
				<g transform="translate(219.25021213911623 149.60443432892384) rotate(0 13 12.5)">
					<text x="0" y="18">
						${eastTriad[0]}
					</text>
				</g>
				<g transform="translate(256.46448913409404 112.89013117602212) rotate(0 9 12.5)">
					<text x="0" y="18">
						${eastTriad[1]}
					</text>
				</g>
				<g transform="translate(251.96444553755418 184.17585854069807) rotate(0 13 12.5)">
					<text x="0" y="18">
						${eastTriad[2]}
					</text>
				</g>
			</g>
			<g fill="green">
				<g transform="translate(158.4005170335713 292.5) rotate(180 28.5 12.5)">
					<text x="0" y="18">South
					</text>
				</g>
				<g transform="translate(137.57167122812234 217.60444304823193) rotate(0 13 12.5)">
					<text x="0" y="18">
						${southTriad[0]}
					</text>
				</g>
				<g transform="translate(174.78594822310015 180.8901398953302) rotate(0 9 12.5)">
					<text x="0" y="18">
						${southTriad[1]}
					</text>
				</g>
				<g transform="translate(204.0001990601545 219.60443432892362) rotate(0 13 12.5)">
					<text x="0" y="18">
						${southTriad[2]}
					</text>
				</g>
			</g>
			<g fill="blue">
				<g transform="translate(1.9005170335713046 153.5) rotate(270 24.5 12.5)">
					<text x="0" y="18">West
					</text>
				</g>
				<g transform="translate(126.85734191729603 145.3187200432095) rotate(0 13.5 12.5)">
					<text x="0" y="18">
						${westTriad[0]}
					</text>
				</g>
				<g transform="translate(97.78591334586758 110.31869824493947) rotate(0 9 12.5)">
					<text x="0" y="18">
						${westTriad[1]}
					</text>
				</g>
				<g transform="translate(93.28586974932819 181.60442560961542) rotate(0 13.5 12.5)">
					<text x="0" y="18">
						${westTriad[2]}
					</text>
				</g>
			</g>
		</svg>
	`
}
