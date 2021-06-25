import { clamp } from '../Utilities'
import { Close } from './Close'
import { Modifier } from './Modifier'

export interface ISmoothSettings {
	tension?: number
	level?: number
	closed?: boolean
	// interpolationPoints?: number
}

class Smooth extends Modifier {
	private tension: Array<number>
	private level: number
	private closed: boolean

	constructor(args: ISmoothSettings = {}) {
		super()

		this.level = args.level || 1

		const tension = Array.isArray(args.tension) ? args.tension : [args.tension]
		this.tension = new Array(this.level).fill(0.5).map((v, i) => clamp(0, 1, tension[i] || v))
		this.level = this.level < 1 ? 1 : this.level
		this.closed = args.closed === true
	}

	public apply(buffer: Float32Array, bClosed: boolean): Float32Array {
		if (bClosed && !Close.isClosed(buffer)) {
			const bufferLen = buffer.length

			const mofified = new Float32Array(bufferLen + 2)
			mofified.set(buffer, 0)

			mofified[bufferLen] = buffer[0]
			mofified[bufferLen + 1] = buffer[1]

			buffer = mofified
		}

		let smoothed = buffer

		for (let i = 0, len = this.level; i < len; i++)
			smoothed = Smooth.smooth(smoothed, this.tension[i], bClosed || this.closed)

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
	public static smooth(buffer: Float32Array, tension = 0.5, bClosed: boolean = false): Float32Array {
		const bufferLength = buffer.length
		const smoothed = new Float32Array((buffer.length - (bClosed ? 1 : 0)) * 2)

		if (!bClosed) {
			smoothed[0] = buffer[0]
			smoothed[1] = buffer[1]
		}

		const cutdist = 0.05 + tension * 0.4
		const ncutdist = 1 - cutdist

		let smoothedLength = bClosed ? 0 : 2
		for (let i = 0, len = bufferLength - 2; i < len; i += 2, smoothedLength += 4) {
			// q
			smoothed[smoothedLength] = ncutdist * buffer[i] + cutdist * buffer[i + 2]
			smoothed[smoothedLength + 1] = ncutdist * buffer[i + 1] + cutdist * buffer[i + 3]

			// r
			smoothed[smoothedLength + 2] = cutdist * buffer[i] + ncutdist * buffer[i + 2]
			smoothed[smoothedLength + 3] = cutdist * buffer[i + 1] + ncutdist * buffer[i + 3]
		}

		if (!bClosed) {
			smoothed[smoothedLength] = buffer[bufferLength - 2]
			smoothed[smoothedLength + 1] = buffer[bufferLength - 1]
		} else {
			smoothed[smoothedLength] = smoothed[0]
			smoothed[smoothedLength + 1] = smoothed[1]
		}

		return smoothed
	}
}

export { Smooth }
