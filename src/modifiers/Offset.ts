import { Modifier } from './Modifier'

interface IOffsetSettings {
	from?: number
	to?: number
}

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
