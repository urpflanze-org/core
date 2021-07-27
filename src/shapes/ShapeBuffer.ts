import { Adapt, Bounding, EAdaptMode } from '../modifiers/Adapt'
import { ShapePrimitive } from '../shapes/ShapePrimitive'
import { IDrawerProps, IPropArguments, IShapeBufferSettings, IShapePrimitiveProps } from '../types'

/**
 * Create a shape from static buffer
 *
 * @category Shapes.Primitives
 */
class ShapeBuffer<
	PropArguments extends IPropArguments = IPropArguments,
	DrawerProps extends IDrawerProps<PropArguments> = IDrawerProps<PropArguments>
> extends ShapePrimitive<PropArguments, DrawerProps, IShapePrimitiveProps> {
	/**
	 * Custom vertex buffer or shape
	 *
	 * Float32Array between -1, 1
	 *
	 * @type {Float32Array}
	 */
	public shape: Float32Array | ((propArguments: PropArguments) => Float32Array | Array<number>)

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
	constructor(settings: IShapeBufferSettings<PropArguments, DrawerProps> = {}) {
		settings.type = settings.type || 'ShapeBuffer'
		settings.adaptMode = settings.adaptMode ?? EAdaptMode.Scale

		super(settings)

		this.adaptMode = settings.adaptMode ?? EAdaptMode.Fill

		if (typeof settings.shape === 'undefined') {
			console.warn('[Urpflanze:ShapeBuffer] ShapeBuffer require a buffer passed from `shape` property')
			this.shape = ShapeBuffer.EMPTY_BUFFER
		} else {
			this.shape = typeof settings.shape !== 'function' ? Adapt.adapt(settings.shape, this.adaptMode) : settings.shape
		}

		this.bStatic = this.isStatic()
		this.bStaticIndexed = this.isStaticIndexed()
	}

	/**
	 * Check shape is static
	 *
	 * @returns boolean
	 */
	public isStatic(): boolean {
		return typeof this.shape !== 'function' && super.isStatic()
	}

	/**
	 * Check shape is static indexed
	 *
	 * @returns boolean
	 */
	public isStaticIndexed(): boolean {
		return typeof this.shape !== 'function' && super.isStaticIndexed()
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
	protected bindBuffer(propArguments: PropArguments) {
		const sideLength = this.getRepetitionSideLength(propArguments)

		const shapeBuffer = this.applyModifiers(
			Float32Array.from(typeof this.shape === 'function' ? this.shape(propArguments) : this.shape),
			propArguments
		)

		const tmpBounding = [undefined, undefined, undefined, undefined]

		for (let i = 0, len = shapeBuffer.length; i < len; i += 2) {
			shapeBuffer[i] = shapeBuffer[i] * sideLength[0]
			shapeBuffer[i + 1] = shapeBuffer[i + 1] * sideLength[1]

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
	 * @param {PropArguments} propArguments
	 * @returns {Float32Array}
	 */
	protected generateBuffer(generateId: number, propArguments: PropArguments): Float32Array {
		if (
			typeof this.shapeBuffer === 'undefined' ||
			typeof this.props.sideLength === 'function' ||
			typeof this.shape === 'function'
		) {
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
		this.shape = Adapt.adapt(shape, this.adaptMode)

		this.clearBuffer(true)
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
	 * Get static buffer
	 *
	 * @param sideLength
	 * @returns
	 */
	public static getBuffer(props: IShapeBufferSettings = {}): Float32Array {
		const shape = new this({ ...props, sideLength: props.sideLength || 1 })
		shape.generate()
		return shape.getBuffer() || new Float32Array()
	}
}

export { ShapeBuffer }
