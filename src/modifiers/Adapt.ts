import { IShapeBounding } from 'types'
import { Modifier } from './Modifier'

/**
 *
 *
 * @category Core.Enums
 */
export enum EAdaptMode {
	/**
	 * The buffer is not changed
	 * @order 1
	 */
	None,

	/**
	 * The buffer is scaled in a range between [-1, -1] and [1,1]
	 * @order 2
	 */
	Scale = 1 << 1,

	/**
	 * The buffer is scaled in a range between [-1, -1] and [1,1] and is centered
	 * @order 3
	 */
	Center = 1 << 2,

	/**
	 * The buffer is adapted centrally and expanded in a range between [-1, -1] and [1,1]
	 * @order 4
	 */
	Fill = 1 << 3,
}

/**
 * @internal
 * @ignore
 */
export const Bounding = {
	empty: (): IShapeBounding => ({
		cx: 0,
		cy: 0,
		x: -1,
		y: -1,
		width: 2,
		height: 2,
	}),

	clear: (tmpBounding: Array<number | undefined>): void => {
		tmpBounding[0] = undefined
		tmpBounding[1] = undefined
		tmpBounding[2] = undefined
		tmpBounding[3] = undefined
	},

	add: (tmpBounding: Array<number | undefined>, x: number, y: number): void => {
		if (typeof tmpBounding[0] === 'undefined' || x < tmpBounding[0]) tmpBounding[0] = x
		if (typeof tmpBounding[2] === 'undefined' || x > tmpBounding[2]) tmpBounding[2] = x
		if (typeof tmpBounding[1] === 'undefined' || y < tmpBounding[1]) tmpBounding[1] = y
		if (typeof tmpBounding[3] === 'undefined' || y > tmpBounding[3]) tmpBounding[3] = y
	},

	sum: (dest: Array<number | undefined>, bounding: Array<number | undefined>): void => {
		if (
			typeof bounding[0] !== 'undefined' &&
			typeof bounding[1] !== 'undefined' &&
			typeof bounding[2] !== 'undefined' &&
			typeof bounding[3] !== 'undefined'
		) {
			if (
				typeof dest[0] === 'undefined' ||
				typeof dest[1] === 'undefined' ||
				typeof dest[2] === 'undefined' ||
				typeof dest[3] === 'undefined'
			) {
				dest[0] = bounding[0]
				dest[1] = bounding[1]
				dest[2] = bounding[2]
				dest[3] = bounding[3]
			} else {
				if (dest[0] < bounding[0]) dest[0] = bounding[0]
				if (dest[2] > bounding[2]) dest[2] = bounding[2]
				if (dest[1] < bounding[1]) dest[1] = bounding[1]
				if (dest[3] > bounding[3]) dest[3] = bounding[3]
			}
		} else {
			console.warn('[Urplfanze:Bounding] cannot sum bounding')
		}
	},

	bind: (bounding: IShapeBounding, tmpBounding: Array<number | undefined>): void => {
		if (
			typeof tmpBounding[0] !== 'undefined' &&
			typeof tmpBounding[1] !== 'undefined' &&
			typeof tmpBounding[2] !== 'undefined' &&
			typeof tmpBounding[3] !== 'undefined'
		) {
			bounding.x = tmpBounding[0]
			bounding.y = tmpBounding[1]
			bounding.width = tmpBounding[2] - tmpBounding[0]
			bounding.height = tmpBounding[3] - tmpBounding[1]
			bounding.cx = bounding.x + bounding.width / 2
			bounding.cy = bounding.y + bounding.height / 2
		} else {
			console.warn('[Urplfanze:Bounding] cannot bind bounding')
		}
	},
}

interface IAdaptSettings {
	mode?: EAdaptMode
	rect: IShapeBounding
}

class Adapt extends Modifier {
	private rect: IShapeBounding
	private mode: EAdaptMode

	constructor(args: IAdaptSettings) {
		super()

		this.mode = args.mode || EAdaptMode.Fill
		this.rect = args.rect
	}

	public apply(buffer: Float32Array, bClosed: boolean) {
		return Adapt.adapt(buffer, this.mode, this.rect)
	}

	/**
	 * Return adapted buffer between [-1,-1] and [1,1]
	 *
	 * @public
	 * @static
	 * @param {Float32Array} input
	 * @param {EAdaptMode} mode
	 * @returns {Float32Array}
	 * @memberof ShapeBuffer
	 */
	public static adapt(input: Float32Array | Array<number>, mode: EAdaptMode, rect?: IShapeBounding): Float32Array {
		if (mode === EAdaptMode.None) return Float32Array.from(input)

		const output: Float32Array = new Float32Array(input.length)

		if (!rect) {
			rect = Adapt.getBounding(input)
		}

		const scale =
			rect.width >= 2 || rect.height >= 2 || (mode >= EAdaptMode.Fill && (rect.width < 2 || rect.height < 2))
				? 2 / Math.max(rect.width, rect.height)
				: 1

		const translateX = mode >= EAdaptMode.Center ? rect.cx : 0
		const translateY = mode >= EAdaptMode.Center ? rect.cy : 0

		for (let i = 0, len = input.length; i < len; i += 2) {
			output[i] = (input[i] - translateX) * scale
			output[i + 1] = (input[i + 1] - translateY) * scale
		}

		return output
	}

	/**
	 * Get buffer bounding
	 *
	 * @static
	 * @param {Float32Array | Array<number>} buffer
	 * @returns {IShapeBounding}
	 * @memberof ShapePrimitive
	 */
	public static getBounding(buffer: Float32Array | Array<number>, bounding?: IShapeBounding): IShapeBounding {
		if (typeof bounding === 'undefined') bounding = Bounding.empty()
		const tmp_bounding = [undefined, undefined, undefined, undefined]

		for (let i = 0, len = buffer.length; i < len; i += 2) {
			Bounding.add(tmp_bounding, buffer[i], buffer[i + 1])
		}

		Bounding.bind(bounding, tmp_bounding)

		return bounding
	}
}

export { Adapt }
