import { Modifier } from './Modifier'

class Close extends Modifier {
	constructor() {
		super()
	}

	public apply(buffer: Float32Array, bClosed: boolean) {
		const len = buffer.length

		if (buffer[0] === buffer[len - 2] && buffer[1] === buffer[len - 1]) return buffer

		const result = new Float32Array(len + 2)
		result.set(buffer, 0)
		result[len] = result[0]
		result[len + 1] = result[1]

		return result
	}
}

export { Close }
