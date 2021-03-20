import { ShapeBase } from 'shapes/ShapeBase'
import { ShapePrimitive } from 'shapes/ShapePrimitive'
import { IRecursionRepetition, IRepetition } from './repetitions'

/**
 * Parent object for index the buffer
 *
 * @category Core.Stream
 */
export interface IParentBufferIndex {
	/**
	 * Reference to shape
	 */
	shape: ShapeBase<any, any>

	/**
	 * Parent indexing
	 */
	parent?: IParentBufferIndex

	/**
	 * Frame length
	 */
	frameLength: number

	/**
	 * Current repetition reference of frame
	 */
	repetition: IRepetition

	/**
	 * Current recursion
	 */
	recursion?: IRecursionRepetition

	// singleRepetitionBounding: IShapeBounding
}
/**
 * Object for index the buffer
 *
 * @category Core.Stream
 */
export interface IBufferIndex {
	/**
	 * Reference to shape
	 */
	shape: ShapePrimitive

	/**
	 * Parent indexing
	 */
	parent?: IParentBufferIndex

	/**
	 * Frame length
	 */
	frameLength: number

	/**
	 * Current repetition reference of frame
	 */
	repetition: IRepetition
}
