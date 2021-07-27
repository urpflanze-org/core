import { Modifier } from './Modifier'

/**
 *
 * @category Modifiers.Settings
 * @export
 * @interface ISubdivideSettings
 */
export interface ISubdivideSettings {
	level?: number
}

/**
 * Adds points on the edges of a shape
 *
 * @category Modifiers
 * @class Subdivide
 * @extends {Modifier}
 */
class Subdivide extends Modifier {
	private level: number

	constructor(args: ISubdivideSettings = {}) {
		super()

		this.level = args.level || 1
		this.level = this.level < 1 ? 1 : this.level
	}

	public apply(buffer: Float32Array, bClosed: boolean) {
		const level = this.level
		let subdivided: Float32Array | undefined = buffer

		if (subdivided && subdivided.length > 0) {
			for (let i = 0; i < level; i++) subdivided = Subdivide.subdivide(subdivided, bClosed)
		}

		return subdivided
	}

	/**
	 * Subdivide buffer
	 *
	 * @static
	 * @param {Float32Array} shape
	 * @param {boolean} [bClosed=true]
	 * @returns {(Float32Array)}
	 */
	public static subdivide(buffer: Float32Array, bClosed = false): Float32Array {
		const bufferLength = buffer.length
		const subdivided = new Float32Array(bufferLength * 2 - (bClosed ? 0 : 2))

		for (let i = 0; i < bufferLength; i += 2) {
			if (i === 0) {
				subdivided[0] = buffer[0]
				subdivided[1] = buffer[1]
			} else {
				const px = buffer[i - 2]
				const py = buffer[i - 1]

				const x = buffer[i]
				const y = buffer[i + 1]

				const nx = (x + px) / 2
				const ny = (y + py) / 2

				subdivided[(i - 1) * 2] = nx
				subdivided[(i - 1) * 2 + 1] = ny

				subdivided[i * 2] = x
				subdivided[i * 2 + 1] = y
			}
		}

		if (bClosed) {
			subdivided[(bufferLength - 1) * 2] = (buffer[0] + buffer[bufferLength - 2]) / 2
			subdivided[(bufferLength - 1) * 2 + 1] = (buffer[1] + buffer[bufferLength - 1]) / 2
		}

		return subdivided
	}
}

export { Subdivide }
