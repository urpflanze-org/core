import { ShapePrimitive } from '../shapes/ShapePrimitive'
import { Modifier } from './Modifier'

/**
 * Adds a closing point if it doesn't exist
 *
 * @category Modifiers
 * @class Close
 * @extends {Modifier}
 */
class Close extends Modifier {
	constructor() {
		super()
	}

	public apply(buffer: Float32Array, bClosed: boolean, shape: ShapePrimitive) {
		return Close.call(buffer)
	}

	static call(buffer: Float32Array) {
		const len = buffer.length

		if (Close.isClosed(buffer)) return buffer

		const result = new Float32Array(len + 2)
		result.set(buffer, 0)
		result[len] = result[0]
		result[len + 1] = result[1]

		return result
	}

	static isClosed(buffer: Float32Array): boolean {
		const len = buffer.length
		return buffer[0] === buffer[len - 2] && buffer[1] === buffer[len - 1]
	}
}

export { Close }
