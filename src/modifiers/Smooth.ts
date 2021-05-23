import { clamp } from '../Utilities'
import { Modifier } from './Modifier'

export interface ISmoothSettings {
	tension?: number
	level?: number
}

class Smooth extends Modifier {
	private tension: number
	private level: number

	constructor(args: ISmoothSettings = {}) {
		super()

		this.tension = clamp(0, 1, args.tension || 0.5)
		this.level = args.level || 1
		this.level = this.level < 1 ? 1 : this.level
	}

	public apply(buffer: Float32Array, bClosed: boolean): Float32Array {
		let smoothed

		if (bClosed) {
			const bl = buffer.length
			smoothed = new Float32Array(bl + 2)
			smoothed[0] = buffer[bl - 2]
			smoothed[1] = buffer[bl - 1]
			smoothed.set(buffer, 2)
		} else {
			smoothed = buffer
		}

		for (let i = 0, len = this.level; i < len; i++) smoothed = Smooth.smooth(smoothed, this.tension)

		return smoothed
	}

	/**
	 * Chaikin smooth
	 *
	 * the tension factor defines a scale between corner cutting distance in segment half length,
	 * i.e. between 0.05 and 0.45. The opposite corner will be cut by the inverse
	 * (i.e. 1-cutting distance) to keep symmetry.
	 * with a tension value of 0.5 this amounts to 0.25 = 1/4 and 0.75 = 3/4,
	 * the original Chaikin values
	 *
	 * @link https://www.codeproject.com/Articles/1093960/D-Polyline-Vertex-Smoothing
	 * @param buffer
	 */
	public static smooth(buffer: Float32Array, tension = 0.5): Float32Array {
		const bufferLength = buffer.length
		const smoothed = new Float32Array((bufferLength - 2) * 2 + 2)

		smoothed[0] = buffer[0]
		smoothed[1] = buffer[1]

		let smoothedLength = 2

		const cutdist = 0.05 + tension * 0.4
		const ncutdist = 1 - cutdist

		for (let i = 0, len = bufferLength - 2; i < len; i += 2, smoothedLength += 4) {
			// q
			smoothed[smoothedLength] = ncutdist * buffer[i] + cutdist * buffer[i + 2]
			smoothed[smoothedLength + 1] = ncutdist * buffer[i + 1] + cutdist * buffer[i + 3]

			// r
			smoothed[smoothedLength + 2] = cutdist * buffer[i] + ncutdist * buffer[i + 2]
			smoothed[smoothedLength + 3] = cutdist * buffer[i + 1] + ncutdist * buffer[i + 3]
		}

		smoothed[smoothedLength] = buffer[bufferLength - 2]
		smoothed[smoothedLength] = buffer[bufferLength - 1]

		console.log({ buffer, smoothed })
		return smoothed
	}
}

export { Smooth }
