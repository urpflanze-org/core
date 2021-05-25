import * as SimplexNoise from 'simplex-noise'

import { ERepetitionType, IRepetition } from './types/repetitions'

import Vec2 from './math/Vec2'

// isDef: (object: any): boolean => typeof object !== 'undefined' && object !== null,
const measurement = typeof performance !== 'undefined' ? performance : Date
/**
 * Get current timestamp in milliseconds
 *
 * @category Utilities
 * @returns {number}
 */
export function now(): number {
	return measurement.now()
}

// aOr: (...args: Array<any>): any => {
// 	for (let i = 0; i < args.length; i++) if (Utilities.isDef(args[i])) return args[i]
// },

/**
 * Convert number from radians to degrees
 *
 * @category Utilities
 *
 * @example
 * ```javascript
 * Urpflanze.toDegrees(Math.PI) // 180
 * ```
 *
 * @param {number} radians
 * @returns {number}
 */
export function toDegrees(radians: number): number {
	return (radians * 180) / Math.PI
}

/**
 * Convert angle from degrees to radians
 * @example
 * ```javascript
 * Urpflanze.toRadians(180) // 3.141592653589793
 * ```
 *
 * @category Utilities
 * @param {number} degrees
 * @returns {number}
 */
export function toRadians(degrees: number): number {
	return (degrees * Math.PI) / 180
}

// perf: (name: string, callback: any, log: boolean = false): number => {
// 	const t1 = now()
// 	callback()
// 	const t2 = now()
// 	log && console.log('perf ' + name + ': ' + (t2 - t1))
// 	return t2 - t1
// }

/**
 * Linear interpolation from `a` when `i` as 0 an `b` when `i' as 1
 *
 * @category Utilities
 * @param {number} a
 * @param {number} b
 * @param {number} i
 * @returns {number}
 */
export function lerp(a: number, b: number, i: number): number {
	return (1 - i) * a + i * b
}

/**
 * Return number between min and max
 *
 * @category Utilities
 * @example
 * ```javascript
 * Urpflanze.clamp(0, 1, 1.2) // 1
 * Urpflanze.clamp(0, 1, -2) // 0
 * ```
 * @param {number} min
 * @param {number} max
 * @param {number} value
 * @returns {number}
 */
export function clamp(min: number, max: number, value: number): number {
	return value <= min ? min : value >= max ? max : value
}

/**
 * Map number between refMin e refMax from min and max
 *
 * @category Utilities
 *
 * @example
 * ```javascript
 * Urpflanze.relativeClamp(0, 1, 0.5, 100, 200) // 150
 * ```
 *
 * @param {number} refMin
 * @param {number} refMax
 * @param {number} value
 * @param {number} toMin
 * @param {number} toMax
 * @returns {number}
 */
export function relativeClamp(refMin: number, refMax: number, value: number, toMin: number, toMax: number): number {
	return clamp(toMin, toMax, ((value - refMin) / (refMax - refMin)) * (toMax - toMin) + toMin)
}

/**
 * @internal
 * @ignore
 */
const noises: {
	[key: string]: SimplexNoise
} = {
	random: new SimplexNoise(Math.random),
}

/**
 * <a href="https://github.com/jwagner/simplex-noise.js" target="_blank">SimplexNoise</a>
 * Use 'random' as seed property for random seed.
 * Return value between -1 and 1
 *
 * @category Utilities
 *
 * @param {string} [seed='random']
 * @param {number} [x=0]
 * @param {number} [y=0]
 * @param {number} [z=0]
 * @returns {number} between -1 and 1
 */
export function noise(seed = 'random', x = 0, y = 0, z = 0): number {
	if (typeof noises[seed] === 'undefined') {
		noises[seed] = new SimplexNoise(seed)
	}

	return noises[seed].noise3D(x, y, z)
}

/**
 * Return angle (atan) from offset (or center) for matrix repetition.
 * Offset is array between [-1, -1] and [1, 1].
 * The return value is between -Math.PI / 2 and Math.PI / 2
 *
 * @category Utilities
 *
 * @param {IRepetition} repetition
 * @param {[number, number]} offsetFromCenter
 * @returns {number} between -Math.PI / 2 and Math.PI / 2
 */
export function angleFromRepetition(repetition: IRepetition, offsetFromCenter: [number, number] = [0, 0]): number {
	if (repetition.type === ERepetitionType.Matrix) {
		const centerMatrix = [(repetition.col.count - 1) / 2, (repetition.row.count - 1) / 2]

		centerMatrix[0] += centerMatrix[0] * offsetFromCenter[0]
		centerMatrix[1] += centerMatrix[1] * offsetFromCenter[1]

		const x = repetition.col.index - 1 - centerMatrix[0]
		const y = repetition.row.index - 1 - centerMatrix[1]

		return x === 0 ? 0 : Math.atan(y / x)
	}

	return (repetition.angle - Math.PI) / 2
}

/**
 * Return angle (atan2, 4 quadrants) from offset (or center) for matrix repetition.
 * Offset is array between [-1, -1] and [1, 1].
 * The return value is between -Math.PI an Math.PI
 *
 * @category Utilities
 *
 * @param {IRepetition} repetition
 * @param {[number, number]} offsetFromCenter
 * @returns {number} between -Math.PI an Math.PI
 */
export function angle2FromRepetition(repetition: IRepetition, offsetFromCenter: [number, number] = [0, 0]): number {
	if (repetition.type === ERepetitionType.Matrix) {
		const centerMatrix = [(repetition.col.count - 1) / 2, (repetition.row.count - 1) / 2]

		centerMatrix[0] += centerMatrix[0] * offsetFromCenter[0]
		centerMatrix[1] += centerMatrix[1] * offsetFromCenter[1]

		const x = repetition.col.index - 1 - centerMatrix[0]
		const y = repetition.row.index - 1 - centerMatrix[1]

		return x === 0 ? 0 : Math.atan2(y, x)
	}

	return repetition.angle - Math.PI
}

/**
 * Return distance from offset (or center) for matrix repetition.
 * The return value is between 0 and 1
 *
 * @category Utilities
 *
 * @param {IRepetition} repetition
 * @param {[number, number]} offsetFromCenter offset relative to distance prop
 * @returns {number} between 0 and 1
 */
export function distanceFromRepetition(repetition: IRepetition, offsetFromCenter: [number, number] = [0, 0]): number {
	if (repetition.type === ERepetitionType.Matrix) {
		const centerMatrix = [0.5, 0.5]

		centerMatrix[0] += centerMatrix[0] * offsetFromCenter[0]
		centerMatrix[1] += centerMatrix[1] * offsetFromCenter[1]

		const current = [repetition.col.offset, repetition.row.offset]

		return Vec2.distance(current, centerMatrix)
	}

	return 1
}

/**
 *
 * @param from
 * @param to
 * @param offset
 * @returns
 */
export function interpolate(from: Float32Array, to: Float32Array, offset = 0.5): Float32Array {
	const fromBufferLength = from.length
	const toBufferLength = to.length

	if (fromBufferLength === toBufferLength) {
		const result = new Float32Array(fromBufferLength)

		for (let i = 0; i < fromBufferLength; i += 2) {
			result[i] = (1 - offset) * from[i] + offset * to[i]
			result[i + 1] = (1 - offset) * from[i + 1] + offset * to[i + 1]
		}

		return result
	}

	/////

	const maxBufferLength = fromBufferLength > toBufferLength ? fromBufferLength : toBufferLength
	const difference = Math.abs(fromBufferLength - toBufferLength)
	const minBufferLength = maxBufferLength - difference

	if (toBufferLength < toBufferLength) {
		offset = 1 - offset
	}

	const b = fromBufferLength < toBufferLength ? to : from
	const t = fromBufferLength < toBufferLength ? from : to

	const a = new Float32Array(maxBufferLength)

	/////

	if (difference >= minBufferLength) {
		const newPointsOnEdge = Math.floor(difference / minBufferLength)
		// console.log({ newPointsOnEdge })
		const newPointOffset = 1 / (newPointsOnEdge + 1)
		const lastPoint = minBufferLength - 2

		for (let i = 0, j = 0; i < minBufferLength; i += 2, j += 2 + newPointsOnEdge * 2) {
			const ax = t[i]
			const ay = t[i + 1]
			const bx = i === lastPoint ? t[0] : t[i + 2]
			const by = i === lastPoint ? t[1] : t[i + 3]

			a[j] = ax
			a[j + 1] = ay

			for (let h = 0; h < newPointsOnEdge; h++) {
				const o = newPointOffset * (h + 1)
				a[j + 2 + h * 2] = (1 - o) * ax + o * bx
				a[j + 2 + h * 2 + 1] = (1 - o) * ay + o * by
			}
		}
	} else {
		a.set(t)
	}

	////

	const remainingPoints = (difference % minBufferLength) / 2

	if (remainingPoints > 0) {
		const totalLength = a.length
		const clone = new Float32Array(totalLength)
		clone.set(a)

		const settedLength = totalLength - remainingPoints * 2
		const offset = Math.floor(settedLength / remainingPoints)

		for (let i = 0; i < remainingPoints; i++) {
			const startIndex = i * offset
			const endIndex = (i + 1) * offset
			a.set(clone.subarray(startIndex, endIndex), startIndex + i * 2)

			if (i > 0) {
				a[startIndex + i * 2 - 2] = 0.5 * clone[startIndex - 2] + 0.5 * clone[startIndex]
				a[startIndex + i * 2 - 1] = 0.5 * clone[startIndex - 1] + 0.5 * clone[startIndex + 1]
			}
		}

		a[totalLength - 2] = 0.5 * clone[0] + 0.5 * clone[settedLength - 2]
		a[totalLength - 1] = 0.5 * clone[1] + 0.5 * clone[settedLength - 1]
	}

	////

	const result = new Float32Array(maxBufferLength)

	for (let i = 0; i < maxBufferLength; i += 2) {
		result[i] = (1 - offset) * a[i] + offset * b[i]
		result[i + 1] = (1 - offset) * a[i + 1] + offset * b[i + 1]
	}

	return result
}
