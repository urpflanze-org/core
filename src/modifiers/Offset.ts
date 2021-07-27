import { Modifier } from './Modifier'

/**
 *
 * @category Modifiers.Settings
 * @interface IOffsetSettings
 */
export interface IOffsetSettings {
	from?: number
	to?: number
}

/**
 * Takes a part of the buffer
 *
 * @category Modifiers
 * @class Offset
 * @extends {Modifier}
 */
class Offset extends Modifier {
	private from?: number
	private to?: number

	constructor(args: IOffsetSettings = { from: 0, to: undefined }) {
		super()

		this.from = args.from
		this.to = args.to
	}

	public apply(buffer: Float32Array, bClosed: boolean) {
		return buffer.subarray(this.from, this.to ? (this.to < 0 ? buffer.length + this.to : this.to) : undefined)
	}
}

export { Offset }
