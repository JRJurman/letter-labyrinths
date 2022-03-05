import { registerSvg } from 'tram-one'

const svg = registerSvg()

export default ({ compassData, x, y }) => {
	const [northTriad, eastTriad, southTriad, westTriad] = compassData
	// note, the following svg was generated in excalidraw
	return svg`
	<g class="CompassCard" transform="translate(${x} ${y})">
		<rect x="0" y="0" width="348.2071364652651" height="342.3552500494103" fill="#ffffff"></rect>
		<g transform="translate(116.13462872513799 27.48927214771379) rotate(0 12.5 22.5)">
			<text x="0" y="32" font-family="Virgil, Segoe UI Emoji" font-size="36px" fill="#e67700" text-anchor="start" style="white-space: pre;" direction="ltr">${northTriad[0]}</text>
		</g>
		<g transform="translate(199.70265894626095 28.540874075694774) rotate(0 13.5 22.5)">
			<text x="0" y="32" font-family="Virgil, Segoe UI Emoji" font-size="36px" fill="#e67700" text-anchor="start" style="white-space: pre;" direction="ltr">${northTriad[1]}</text>
		</g>
		<g transform="translate(160.58976850196507 78.7093821225858) rotate(0 12.5 22.5)">
			<text x="0" y="32" font-family="Virgil, Segoe UI Emoji" font-size="36px" fill="#e67700" text-anchor="start" style="white-space: pre;" direction="ltr">${northTriad[2]}</text>
		</g>
		<g transform="translate(244.40715505744936 147.00597352734064) rotate(0 12.5 22.5)">
			<text x="0" y="32" font-family="Virgil, Segoe UI Emoji" font-size="36px" fill="#c92a2a" text-anchor="start" style="white-space: pre;" direction="ltr">${eastTriad[0]}</text>
		</g>
		<g transform="translate(287.98514054852103 102.51244325390314) rotate(0 14.5 22.5)">
			<text x="0" y="32" font-family="Virgil, Segoe UI Emoji" font-size="36px" fill="#c92a2a" text-anchor="start" style="white-space: pre;" direction="ltr">${eastTriad[1]}</text>
		</g>
		<g transform="translate(283.4850359168249 193.34361129240722) rotate(0 11 22.5)">
			<text x="0" y="32" font-family="Virgil, Segoe UI Emoji" font-size="36px" fill="#c92a2a" text-anchor="start" style="white-space: pre;" direction="ltr">${eastTriad[2]}</text>
		</g>
		<g transform="translate(118.13462872513799 256.6942381016639) rotate(0 10.5 22.5)">
			<text x="0" y="32" font-family="Virgil, Segoe UI Emoji" font-size="36px" fill="#087f5b" text-anchor="start" style="white-space: pre;" direction="ltr">${southTriad[0]}</text>
		</g>
		<g transform="translate(162.58976850196507 215.43455531009045) rotate(0 10.5 22.5)">
			<text x="0" y="32" font-family="Virgil, Segoe UI Emoji" font-size="36px" fill="#087f5b" text-anchor="start" style="white-space: pre;" direction="ltr">${southTriad[1]}</text>
		</g>
		<g transform="translate(198.70265894626095 258.69425989993385) rotate(0 14.5 22.5)">
			<text x="0" y="32" font-family="Virgil, Segoe UI Emoji" font-size="36px" fill="#087f5b" text-anchor="start" style="white-space: pre;" direction="ltr">${southTriad[2]}</text>
		</g>
		<g transform="translate(77.24167131023808 147.00597352734064) rotate(0 11.5 22.5)">
			<text x="0" y="32" font-family="Virgil, Segoe UI Emoji" font-size="36px" fill="#364fc7" text-anchor="start" style="white-space: pre;" direction="ltr">${westTriad[0]}</text>
		</g>
		<g transform="translate(42.71568341263776 102.51244325390314) rotate(0 12 22.5)">
			<text x="0" y="32" font-family="Virgil, Segoe UI Emoji" font-size="36px" fill="#364fc7" text-anchor="start" style="white-space: pre;" direction="ltr">${westTriad[1]}</text>
		</g>
		<g transform="translate(40.03381608562961 193.34361129240722) rotate(0 11.5 22.5)">
			<text x="0" y="32" font-family="Virgil, Segoe UI Emoji" font-size="36px" fill="#364fc7" text-anchor="start" style="white-space: pre;" direction="ltr">${westTriad[2]}</text>
		</g>
		<g stroke-linecap="round">
			<g transform="translate(19.00497625322612 11.632301856083473) rotate(0 157.5982307913725 73.9851469816827)">
				<path d="M0.68 -1.63 C41.18 43.97, 86.8 85.36, 152.37 149.6 M0.15 -0.13 C46.14 46.04, 91.82 91.56, 151.75 148.04 M151.77 148.55 C201.98 102.56, 247.96 61.94, 313.34 2.14 M151.68 147.63 C198.23 104.22, 245.64 62.06, 315.16 1.74 M313.55 -0.1 C241.76 -0.22, 166.22 -1.4, 0.04 0.75 M314.55 1.08 C200.7 1.23, 85.3 0.62, 0.64 -0.33" stroke="#e67700" stroke-width="1" fill="none"></path>
			</g>
		</g>
		<g stroke-linecap="round">
			<g transform="translate(105.4599017903356 99.90505271057543) rotate(90.6081019036534 157.20544878211115 73.37409095373766)">
				<path d="M-1.13 -0.03 C57.75 58.04, 119.46 116.44, 152.74 147.11 M0.79 0.83 C37.54 37.01, 76.76 74.5, 151.59 148.37 M153.29 147.23 C202.86 102.26, 250.63 56.17, 315.54 2.52 M152.67 147.96 C185.44 115.65, 219.5 86.29, 314.51 0.69 M314.37 2.06 C249.3 -1.77, 183.3 -2.62, 1.14 -0.52 M314.53 0.64 C230.32 1.74, 147.24 0.61, 0 0.16" stroke="#c92a2a" stroke-width="1" fill="none"></path>
			</g>
		</g>
		<g stroke-linecap="round">
			<g transform="translate(12.596069808736843 179.21444854595404) rotate(180 157.28380306589088 74.4588063805839)">
				<path d="M1.16 1.49 C46.92 47.33, 93.42 92.03, 150.27 146.83 M-0.08 -0.68 C51.58 47.76, 101.14 96.89, 151.83 148.89 M150.74 149.59 C187.74 116.85, 220.23 87.98, 314.72 2.12 M151.09 147.92 C198.05 108.71, 243.21 67.53, 313.99 1.67 M313.99 1.06 C215.05 0.12, 115.74 -0.3, -0.15 -0.52 M313.89 1.35 C245.83 2.01, 175.48 1, -0.11 -0.59" stroke="#087f5b" stroke-width="1" fill="none"></path>
			</g>
		</g>
		<g stroke-linecap="round">
			<g transform="translate(-72.63122369794576 94.63227133850535) rotate(270 157.80253532733957 73.76347294107518)">
				<path d="M0.02 -1.41 C60.85 59.74, 121.1 117.02, 152.37 147.85 M0.34 0.13 C56.11 53.96, 112.76 109.68, 151.9 147.67 M150.1 147.41 C185.58 117.82, 220.99 83.88, 315.58 0.85 M152.16 148.93 C202.52 102.97, 251.39 59.59, 315.25 1.17 M314.12 0.29 C206.48 -1.1, 96.51 0.39, 0.74 -1.37 M315.1 0.68 C191.46 -1.14, 67.46 -1.27, 0.12 0.02" stroke="#364fc7" stroke-width="1" fill="none"></path>
			</g>
		</g>
	</g>

	`
}
