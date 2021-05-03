import { ShapeBase } from '../shapes/ShapeBase'
import { ShapePrimitive } from '../shapes/ShapePrimitive'
import { IPropArguments } from './propArguments'
import { IBaseRepetition, IRecursionRepetition } from './repetitions'

/**
 * Object for index the buffer
 *
 * @category Core.Stream
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

	// singleRepetitionBounding: IShapeBounding
}

/**
 * Object for index the buffer
 *
 * @category Core.Stream
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
 * @category Core.Stream
 */
export interface IBufferIndexWithFollow
	extends IBufferIndex<
		IPropArguments & {
			follow: IBaseRepetition
		}
	> {}
