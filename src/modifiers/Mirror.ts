import { Modifier } from './Modifier'

/**
 *
 * @category Modifiers.Settings
 * @interface IMirrorSettings
 */
export interface IMirrorSettings {
	x?: boolean
	y?: boolean
}

/**
 * Reflects the shape on the x and y axes
 *
 * @category Modifiers
 * @class Mirror
 * @extends {Modifier}
 */
class Mirror extends Modifier {
	private x: boolean
	private y: boolean

	constructor(args: IMirrorSettings = { x: true, y: true }) {
		super()

		this.x = args.x === true
		this.y = args.y === true
	}

	public apply(buffer: Float32Array, bClosed: boolean) {
		const bufferLength = buffer.length

		const mirror = new Float32Array(bufferLength * (this.x ? 2 : 1) * (this.y ? 2 : 1))

		const sideLengthX = 1
		const sideLengthY = 1

		if (this.x && this.y) {
			const bufferLengthX2 = bufferLength + bufferLength
			const bufferLengthX3 = bufferLengthX2 + bufferLength

			// |1|2|
			// |4|3|
			for (let i = 0; i < bufferLength; i += 2) {
				mirror[i] = buffer[i] - sideLengthX
				mirror[i + 1] = buffer[i + 1] - sideLengthY

				mirror[bufferLength + i] = buffer[bufferLength - 2 - i] * -1 + sideLengthX
				mirror[bufferLength + i + 1] = buffer[bufferLength - 2 - i + 1] - sideLengthY

				mirror[bufferLengthX2 + i] = buffer[i] * -1 + sideLengthX
				mirror[bufferLengthX2 + i + 1] = buffer[i + 1] * -1 + sideLengthY

				mirror[bufferLengthX3 + i] = buffer[bufferLength - 2 - i] - sideLengthX
				mirror[bufferLengthX3 + i + 1] = buffer[bufferLength - 2 - i + 1] * -1 + sideLengthY
			}
		} else if (this.x) {
			for (let i = 0; i < bufferLength; i += 2) {
				mirror[i] = buffer[i] - sideLengthX
				mirror[i + 1] = buffer[i + 1]

				mirror[bufferLength + i] = buffer[bufferLength - 2 - i] * -1 + sideLengthX
				mirror[bufferLength + i + 1] = buffer[bufferLength - 2 - i + 1]
			}
		} else if (this.y) {
			for (let i = 0; i < bufferLength; i += 2) {
				mirror[i] = buffer[i]
				mirror[i + 1] = buffer[i + 1] - sideLengthY

				mirror[bufferLength + i] = buffer[bufferLength - 2 - i]
				mirror[bufferLength + i + 1] = buffer[bufferLength - 2 - i + 1] * -1 + sideLengthY
			}
		} else {
			return buffer
		}

		return mirror
	}
}

export { Mirror }
