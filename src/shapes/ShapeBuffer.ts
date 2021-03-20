import type { IPropArguments } from '../types/scene-child'
import type { IDrawerProps, IShapeBounding, IShapePrimitiveProps } from '../types/shape-base'
import { EAdaptMode } from '../types/shape-base'
import type { IShapeBufferSettings } from '../types/shape-primitives'

import { Bounding } from '../math/bounding'
import { ShapePrimitive } from '../shapes/ShapePrimitive'

/**
 * @category Core.Shapes
 */
class ShapeBuffer<PA extends IPropArguments, D extends IDrawerProps<PA> = IDrawerProps<PA>> extends ShapePrimitive<
	IShapePrimitiveProps,
	PA,
	D
> {
	/**
	 * Custom vertex buffer or shape
	 *
	 * Float32Array between -1, 1
	 *
	 * @type {Float32Array}
	 */
	public shape: Float32Array

	/**
	 * Adapted buffer
	 *
	 * @protected
	 * @type {Float32Array}
	 */
	protected shapeBuffer?: Float32Array

	/**
	 * Adapt buffer mode, see <a href="[base_url]/EAdaptMode">EAdaptMode</a> for more details
	 *
	 * @type {EAdaptMode}
	 */
	public adaptMode: EAdaptMode

	/**
	 * Creates an instance of ShapeBuffer.
	 *
	 * @param {IShapeBufferSettings} [settings={}]
	 */
	constructor(settings: IShapeBufferSettings<PA, D> = {}) {
		settings.type = settings.type || 'ShapeBuffer'
		settings.adaptMode = settings.adaptMode ?? EAdaptMode.Scale

		super(settings)

		this.adaptMode = settings.adaptMode ?? EAdaptMode.Fill

		if (typeof settings.shape === 'undefined') {
			console.warn('[Urpflanze:ShapeBuffer] ShapeBuffer require a buffer passed from `shape` property')
			this.shape = ShapeBuffer.EMPTY_BUFFER
		} else {
			this.shape = ShapeBuffer.adapt(settings.shape, this.adaptMode)
		}

		this.bStatic = this.isStatic()
		this.bStaticIndexed = this.isStaticIndexed()
	}

	/**
	 *  Unset buffer
	 *
	 * @param {boolean} [bClearIndexed=false]
	 * @param {boolean} [bPropagateToParents=false]
	 */
	public clearBuffer(bClearIndexed = false, bPropagateToParents = true): void {
		super.clearBuffer(bClearIndexed, bPropagateToParents)

		this.shapeBuffer = undefined
	}

	/**
	 * Apply sideLength on <mark>.shape</mark> buffer and calculate bounding
	 *
	 * @protected
	 */
	protected bindBuffer(propArguments: PA) {
		const sideLength = this.getRepetitionSideLength(propArguments)

		const shapeBuffer = this.shape

		const tmpBounding = [undefined, undefined, undefined, undefined]

		for (let i = 0, len = shapeBuffer.length; i < len; i += 2) {
			shapeBuffer[i] *= sideLength[0]
			shapeBuffer[i + 1] *= sideLength[1]

			Bounding.add(tmpBounding, shapeBuffer[i], shapeBuffer[i + 1])
		}

		Bounding.bind(this.currentGenerationPrimitiveBounding, tmpBounding)

		this.shapeBuffer = shapeBuffer
	}

	/**
	 * Return length of buffer
	 *
	 * @param {IPropArguments} propArguments
	 * @returns {number}
	 */
	public getBufferLength(/*propArguments?: IPropArguments*/): number {
		if (this.buffer && this.buffer.length > 0) return this.buffer.length

		return this.shape.length * this.getRepetitionCount()
	}

	/**
	 * Return a buffer of children shape or loop generated buffer
	 *
	 * @protected
	 * @param {number} generateId
	 * @param {PA} propArguments
	 * @returns {Float32Array}
	 */
	protected generateBuffer(generateId: number, propArguments: PA): Float32Array {
		if (typeof this.shapeBuffer === 'undefined' || typeof this.props.sideLength === 'function') {
			this.bindBuffer(propArguments)
		}

		return this.shapeBuffer as Float32Array
	}

	/**
	 * Set shape
	 *
	 * @param {(Float32Array)} [shape]
	 */
	public setShape(shape: Float32Array): void {
		this.shape = ShapeBuffer.adapt(shape, this.adaptMode)

		this.clearBuffer(true)
	}

	/**
	 * Subdivide buffer n times
	 *
	 * @param {number} [level=1]
	 */
	public subdivide(level = 1) {
		let subdivided: Float32Array | undefined = this.shape

		if (subdivided && subdivided.length > 0) {
			for (let i = 0; i < level; i++) subdivided = ShapeBuffer.subdivide(subdivided, this.bClosed)

			this.setShape(subdivided)
		}
	}

	/**
	 * Subdivide buffer
	 *
	 * @static
	 * @param {Float32Array} shape
	 * @param {boolean} [bClosed=true]
	 * @returns {(Float32Array)}
	 */
	public static subdivide(shape: Float32Array, bClosed = true): Float32Array {
		const shapeLength = shape.length
		const subdivided = new Float32Array(shapeLength * 2 - (bClosed ? 0 : 2))

		for (let i = 0; i < shapeLength; i += 2) {
			if (i === 0) {
				subdivided[0] = shape[0]
				subdivided[1] = shape[1]
			} else {
				const px = shape[i - 2]
				const py = shape[i - 1]

				const x = shape[i]
				const y = shape[i + 1]

				const nx = (x + px) / 2
				const ny = (y + py) / 2

				subdivided[(i - 1) * 2] = nx
				subdivided[(i - 1) * 2 + 1] = ny

				subdivided[i * 2] = x
				subdivided[i * 2 + 1] = y
			}
		}

		if (bClosed) {
			subdivided[(shapeLength - 1) * 2] = (shape[0] + shape[shapeLength - 2]) / 2
			subdivided[(shapeLength - 1) * 2 + 1] = (shape[1] + shape[shapeLength - 1]) / 2
		}

		return subdivided
	}

	/**
	 * Return adaptMode
	 *
	 * @returns {EAdaptMode}
	 * @memberof ShapeBase
	 */
	public getAdaptMode(): EAdaptMode {
		return this.adaptMode as EAdaptMode
	}

	/**
	 * Set adaptMode
	 *
	 * @param {EAdaptMode} bAdapted
	 * @memberof ShapeBase
	 */
	public adapt(adaptMode: EAdaptMode): void {
		this.adaptMode = adaptMode

		this.shape = ShapeBuffer.adapt(this.shape, EAdaptMode.Fill)

		this.clearBuffer(true)
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
			rect = ShapeBuffer.getBounding(input)
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

export { ShapeBuffer }
