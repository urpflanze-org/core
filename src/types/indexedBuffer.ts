import { ShapeBase } from '../shapes/ShapeBase'
import { ShapePrimitive } from '../shapes/ShapePrimitive'
import { IPropArguments } from './propArguments'
import { IBaseRepetition, IRecursionRepetition } from './repetitions'
import { IShapeBounding } from './shape-base'

/**
 * Object for index the buffer
 *
 * @category Types & Interfaces.Stream
 */
export type IBufferIndex<PropArguments extends IPropArguments = IPropArguments> = PropArguments & {
	/**
	 * Primitive to draw
	 */
	shape: ShapePrimitive<any, any> | ShapeBase<any, any>

	/**
	 * Frame length
	 */
	frameLength: number

	/**
	 * Parent indexing
	 */
	parent?: IBufferIndex<PropArguments>

	/**
	 * Current frame bunding
	 */
	singleRepetitionBounding: IShapeBounding
}

/**
 * Object for index the buffer
 *
 * @category Types & Interfaces.Stream
 */
export interface IBufferIndexWithRecursion
	extends IBufferIndex<
		IPropArguments & {
			recursion: IRecursionRepetition
		}
	> {}

/**
 * Object for index the buffer
 *
 * @category Types & Interfaces.Stream
 */
export interface IBufferIndexWithFollow
	extends IBufferIndex<
		IPropArguments & {
			follow: IBaseRepetition
		}
	> {}
