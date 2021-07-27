import { IBaseRepetition } from '../types'
import { Modifier } from './Modifier'

/**
 *
 * @category Modifiers.Settings
 * @export
 * @interface ISolidifySettings
 */
export interface ISolidifySettings {
	thickness?: number | Array<number> | ((bufferRepetition: IBaseRepetition) => number)
	closed?: boolean
	error?: number
}

/**
 * Try tracing the edges of a path
 *
 * @category Modifiers
 * @class Solidify
 * @extends {Modifier}
 */
class Solidify extends Modifier {
	private thickness: number | Array<number> | ((bufferRepetition: IBaseRepetition) => number)
	private closed: boolean
	private error?: number

	constructor(args: ISolidifySettings = {}) {
		super()

		this.closed = args.closed === true
		this.thickness = args.thickness || 0.2
		this.error = args.error
	}

	public apply(buffer: Float32Array, bClosed: boolean) {
		return Solidify.solidify(buffer, this.thickness, this.closed, this.error)
	}

	/**
	 * @link https://gist.github.com/kekscom/4194148
	 */
	public static solidify(
		buffer: Float32Array,
		thickness: number | Array<number> | ((bufferRepetition: IBaseRepetition) => number),
		bClosed = false,
		error?: number
	): Float32Array {
		const solidified: Array<number> = []

		thickness = typeof thickness === 'number' ? [thickness] : thickness
		const thicknessLength = thickness.length

		let bFirst,
			bLast,
			prevA: [[number, number], [number, number]] = [
				[0, 0],
				[0, 0],
			],
			prevB: [[number, number], [number, number]] = [
				[0, 0],
				[0, 0],
			]

		for (let i = 0, t = 0, len = buffer.length - 2; i < len; i += 2, t++) {
			bFirst = i === 0
			bLast = i === len - 2

			const currentThicknessRep: IBaseRepetition = {
				index: i + 1,
				offset: i / len,
				count: len,
			}
			const nextThicknessRep: IBaseRepetition = {
				index: i + 2,
				offset: (i + 1) / len,
				count: len,
			}

			const currentThickness =
				typeof thickness === 'function' ? thickness(currentThicknessRep) : thickness[t % thicknessLength]
			const nextThickness =
				typeof thickness === 'function' ? thickness(nextThicknessRep) : thickness[(t + 1) % thicknessLength]

			const off = Solidify.getOffsets(buffer[i], buffer[i + 1], buffer[i + 2], buffer[i + 3], currentThickness)
			const off2 = Solidify.getOffsets(buffer[i], buffer[i + 1], buffer[i + 2], buffer[i + 3], nextThickness)

			const p0a: [number, number] = [buffer[i] + off[0], buffer[i + 1] + off[1]]
			const p1a: [number, number] = [buffer[i + 2] + off2[0], buffer[i + 3] + off2[1]]

			const p0b: [number, number] = [buffer[i] - off[0], buffer[i + 1] - off[1]]
			const p1b: [number, number] = [buffer[i + 2] - off2[0], buffer[i + 3] - off2[1]]

			if (!bFirst) {
				const interA = Solidify.getIntersection(prevA[0], prevA[1], p0a, p1a, error)

				if (interA) {
					solidified.unshift(interA[1])
					solidified.unshift(interA[0])
				}
				const interB = Solidify.getIntersection(prevB[0], prevB[1], p0b, p1b, error)

				if (interB) {
					solidified.push(interB[0])
					solidified.push(interB[1])
				}
			}

			if (bFirst) {
				solidified.unshift(p0a[1])
				solidified.unshift(p0a[0])
				solidified.push(p0b[0])
				solidified.push(p0b[1])
			}

			if (bLast) {
				solidified.unshift(p1a[1])
				solidified.unshift(p1a[0])
				solidified.push(p1b[0])
				solidified.push(p1b[1])
			}

			if (!bLast) {
				prevA = [p0a, p1a]
				prevB = [p0b, p1b]
			}
		}

		if (bClosed) {
			const centerIndex = buffer.length - 2
			const lastIndex = solidified.length - 2

			const x = 0.5 * solidified[0] + solidified[centerIndex] * 0.5
			const y = 0.5 * solidified[1] + solidified[centerIndex + 1] * 0.5

			const x2 = 0.5 * solidified[centerIndex + 2] + solidified[lastIndex] * 0.5
			const y2 = 0.5 * solidified[centerIndex + 3] + solidified[lastIndex + 1] * 0.5

			solidified[0] = x
			solidified[1] = y
			solidified[centerIndex] = x
			solidified[centerIndex + 1] = y

			solidified[centerIndex + 2] = x2
			solidified[centerIndex + 3] = y2
			solidified[lastIndex] = x2
			solidified[lastIndex + 1] = y2
		}

		return Float32Array.from(solidified)
	}

	private static getOffsets(ax: number, ay: number, bx: number, by: number, thickness: number) {
		const dx = bx - ax,
			dy = by - ay,
			len = Math.sqrt(dx * dx + dy * dy),
			scale = thickness / (2 * len)
		return [-scale * dy, scale * dx]
	}

	private static getIntersection(
		a1: [number, number],
		b1: [number, number],
		a2: [number, number],
		b2: [number, number],
		error = 0.00001
	): [number, number] | undefined {
		// directional constants
		const k1 = (b1[1] - a1[1]) / (b1[0] - a1[0]),
			k2 = (b2[1] - a2[1]) / (b2[0] - a2[0])
		// if the directional constants are equal, the lines are parallel

		// if (Math.abs(k1 - k2) < 0.00001) {
		if (Math.abs(k1 - k2) < error) {
			return
		}

		// y offset constants for both lines
		const m1 = a1[1] - k1 * a1[0]
		const m2 = a2[1] - k2 * a2[0]

		// compute x
		const x = (m1 - m2) / (k2 - k1)
		// use y = k * x + m to get y coordinate
		const y = k1 * x + m1

		return [x, y]
	}
}

export { Solidify }
