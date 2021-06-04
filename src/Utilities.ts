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
 * Random number generator
 */

const randoms: {
	[key: string]: () => number
} = {}

/**
 * random number generator
 * @param seed
 * @returns
 */
export function random(seed?: string | number) {
	const key: string = seed + ''

	if (typeof randoms[key] === 'undefined') {
		const seed = xmur3(key)
		randoms[key] = sfc32(seed(), seed(), seed(), seed())
	}

	return randoms[key]()
}

/**
 *
 * @internal
 * @param str
 * @returns
 */
function xmur3(str: string) {
	let i = 0,
		h = 1779033703 ^ str.length
	for (; i < str.length; i++) (h = Math.imul(h ^ str.charCodeAt(i), 3432918353)), (h = (h << 13) | (h >>> 19))

	return function () {
		h = Math.imul(h ^ (h >>> 16), 2246822507)
		h = Math.imul(h ^ (h >>> 13), 3266489909)
		return (h ^= h >>> 16) >>> 0
	}
}

/**
 * @internal
 * @param a
 * @param b
 * @param c
 * @param d
 * @returns
 */
function sfc32(a: number, b: number, c: number, d: number) {
	return function () {
		a >>>= 0
		b >>>= 0
		c >>>= 0
		d >>>= 0
		let t = (a + b) | 0
		a = b ^ (b >>> 9)
		b = (c + (c << 3)) | 0
		c = (c << 21) | (c >>> 11)
		d = (d + 1) | 0
		t = (t + d) | 0
		c = (c + t) | 0
		return (t >>> 0) / 4294967296
	}
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

/// Interpolation

/**
 *
 * @param from
 * @param to
 * @returns
 */
export function prepareBufferForInterpolation(from: Float32Array, to: Float32Array): [Float32Array, Float32Array] {
	const fromBufferLength = from.length
	const toBufferLength = to.length

	if (fromBufferLength === toBufferLength) {
		return [from, to]
	}

	const maxBufferLength = fromBufferLength > toBufferLength ? fromBufferLength : toBufferLength
	const difference = Math.abs(fromBufferLength - toBufferLength)
	const minBufferLength = maxBufferLength - difference

	/////

	const b = fromBufferLength < toBufferLength ? to : from
	const t = fromBufferLength < toBufferLength ? from : to

	const a = distributePointsInBuffer(t, Math.floor(difference / 2))

	// a[maxBufferLength - 2] = t[minBufferLength - 2]
	// a[maxBufferLength - 1] = t[minBufferLength - 1]

	return fromBufferLength > toBufferLength ? [b, a] : [a, b]
}

/**
 *
 * @param from
 * @param to
 * @param offset
 * @returns
 */
export function interpolate(
	from: Float32Array,
	to: Float32Array,
	initialOffset: number | Array<number> = 0.5
): Float32Array {
	const [a, b] = prepareBufferForInterpolation(from, to)
	const maxBufferLength = Math.max(a.length, b.length)
	const offset = typeof initialOffset === 'number' ? [initialOffset] : initialOffset
	const maxPoints = maxBufferLength / 2

	if (offset.length !== maxPoints) {
		const tl = offset.length
		for (let i = 0; i < maxPoints; i++) {
			offset[i] = offset[i % tl]
		}
	}

	////

	const result = new Float32Array(maxBufferLength)

	for (let i = 0, off = 0; i < maxBufferLength; i += 2, off++) {
		result[i] = (1 - offset[off]) * a[i] + offset[off] * b[i]
		result[i + 1] = (1 - offset[off]) * a[i + 1] + offset[off] * b[i + 1]
	}

	return result
}

export function distributePointsInBuffer(buffer: Float32Array, count: number): Float32Array {
	const bufferLen = buffer.length
	const pointsLen = bufferLen / 2
	const finalBufferLength = (pointsLen + count) * 2
	const edges = pointsLen - 1

	if (edges > 1) {
		const lastPoint = bufferLen - 2
		const newPointsOnEdge = Math.floor(count / edges)
		const bufferWithPointsEveryEdge = bufferLen + newPointsOnEdge * lastPoint
		let remainingPoints = (finalBufferLength - bufferWithPointsEveryEdge) / 2
		const edgeRemainingIndex = Math.round(edges / remainingPoints)
		const result = new Float32Array(finalBufferLength)

		for (let i = 0, edgeIndex = 0, r = 0; i < lastPoint; i += 2, edgeIndex++, r += 2) {
			const ax = buffer[i]
			const ay = buffer[i + 1]
			const bx = buffer[i + 2]
			const by = buffer[i + 3]
			result[r] = ax
			result[r + 1] = ay

			const addReminingPoints = remainingPoints > 0 && edgeIndex % edgeRemainingIndex === 0
			const currentPointsOnEdge = newPointsOnEdge + (addReminingPoints ? 1 : 0)
			const newPointOffset = 1 / (currentPointsOnEdge + 1)

			for (let h = 0; h < currentPointsOnEdge; h++, r += 2) {
				const o = newPointOffset * (h + 1)
				result[r + 2] = (1 - o) * ax + o * bx
				result[r + 3] = (1 - o) * ay + o * by
			}
			if (addReminingPoints) {
				remainingPoints--
			}
		}
		result[finalBufferLength - 2] = buffer[bufferLen - 2]
		result[finalBufferLength - 1] = buffer[bufferLen - 1]

		return result
	}

	const result = new Float32Array(finalBufferLength)

	for (let i = 0; i < finalBufferLength; i += 2) {
		result[i] = buffer[i % bufferLen]
		result[i + 1] = buffer[(i + 1) % bufferLen]
	}

	return result
}
