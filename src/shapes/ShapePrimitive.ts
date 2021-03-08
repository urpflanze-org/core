import { ShapeBase } from './ShapeBase'

import {
	IBufferIndex,
	IParentBufferIndex,
	IShapeBounding,
	IShapePrimitiveProps,
	IShapePrimitiveSettings,
} from '../types/shape-base'
import { IRecursionRepetition, IRepetition, ISceneChildPropArguments } from '../types/scene-child'
import * as glme from '../math/gl-matrix-extensions'
import { Bounding } from '../math/bounding'

/**
 * @category Core.Abstract
 */
abstract class ShapePrimitive<
	K extends IShapePrimitiveProps = IShapePrimitiveProps,
	T = { [key: string]: any }
> extends ShapeBase<K> {
	/**
	 * Props retrived by drawer
	 *
	 * @public
	 * @type {T}
	 */
	public style: T

	/**
	 * Define shape is closed, default true
	 *
	 * @type {boolean}
	 */
	public bClosed: boolean

	/**
	 * Contain the bounding of the last generated buffer
	 *
	 * @type {IShapeBounding}
	 */
	public currentGenerationPrimitiveBounding: IShapeBounding = Bounding.empty()

	/**
	 * Creates an instance of ShapePrimitive.
	 *
	 * @param {IShapePrimitiveSettings} [settings={}]
	 */
	constructor(settings: IShapePrimitiveSettings<T> = {}) {
		super(settings)

		this.props.sideLength =
			typeof settings.sideLength === 'undefined'
				? undefined
				: typeof settings.sideLength === 'function'
				? settings.sideLength
				: glme.toVec2(settings.sideLength)

		this.style = settings.style || ({} as T)
		this.bClosed = settings.bClosed ?? true
	}

	/**
	 * Check if shape is static
	 *
	 * @returns {boolean}
	 * @memberof ShapePrimitive
	 */
	public isStatic(): boolean {
		return typeof this.props.sideLength !== 'function' && super.isStatic()
	}

	public getRepetitionSideLength(propArguments: ISceneChildPropArguments): [number, number] {
		if (this.bStatic) {
			// not set default value into constructor because it can be overridden by group
			if (typeof this.props.sideLength === 'undefined') {
				this.props.sideLength = [50, 50]
			} else if (typeof this.props.sideLength === 'number') {
				this.props.sideLength = [this.props.sideLength, this.props.sideLength]
			}
			return this.props.sideLength as [number, number]
		}

		return glme.toVec2(this.getProp('sideLength', propArguments, [50, 50]))
	}

	/**
	 * Return a bounding of generated buffer if is direct scene child
	 *
	 * @returns {IShapeBounding}
	 * @memberof ShapePrimitive
	 */
	public getShapeBounding(): IShapeBounding {
		return this.currentGenerationPrimitiveBounding
	}

	/**
	 * Add this to indexedBuffer
	 *
	 * @protected
	 * @param {number} frameLength
	 * @param {IRepetition} repetition
	 * @returns {number} nextIndex
	 */
	protected addIndex(
		frameLength: number,
		repetition: IRepetition,
		recursion?: IRecursionRepetition
		// singleRepetitionBounding: IShapeBounding
	): void {
		const index: IParentBufferIndex = {
			shape: this,
			frameLength,
			// singleRepetitionBounding,
			repetition: {
				type: repetition.type,
				angle: repetition.angle,
				index: repetition.index,
				count: repetition.count,
				offset: repetition.offset,
				row: {
					index: repetition.row.index,
					count: repetition.row.count,
					offset: repetition.row.offset,
				},
				col: {
					index: repetition.col.index,
					count: repetition.col.count,
					offset: repetition.col.offset,
				},
			},
		}

		if (typeof recursion !== 'undefined') {
			index.recursion = {
				index: recursion.index,
				offset: recursion.offset,
				count: recursion.offset,
				level: recursion.level,
			}
		}

		this.indexedBuffer.push(index as IBufferIndex)
	}

	/**
	 * Return bClosed
	 *
	 * @returns {boolean}
	 * @memberof ShapePrimitive
	 */
	public isClosed(): boolean {
		return this.bClosed
	}

	/**
	 * Set bClosed
	 *
	 * @param {boolean} bClosed
	 * @memberof ShapePrimitive
	 */
	public setClosed(bClosed: boolean): void {
		this.bClosed = bClosed
	}
}

export { ShapePrimitive }
