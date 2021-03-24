import { ShapeBase } from '../shapes/ShapeBase'
import { IRecursionRepetition, IRepetition } from './repetitions'

/**
 * Object argument for sceneChild props
 *
 * @category Core.Interfaces
 */
export interface IPropArguments<ParentPropArguments = IParentPropArguments> {
	/**
	 * Information about repetition
	 * @order 1
	 */
	repetition: IRepetition

	/**
	 * Current Shape
	 * @order 5
	 */
	shape: ShapeBase<any, any>

	/**
	 * Parent repetition (if encapsulated)
	 * @order 7
	 */
	parent?: ParentPropArguments
}

interface IParentPropArguments extends IPropArguments<IParentPropArguments> {}

/**
 *
 *
 * @category Core.Interfaces
 */
export interface IRecursionPropArguments extends IPropArguments {
	/**
	 * Information about recursion (if is encapsulated in a ShapeRecursive)
	 * @order 2
	 */
	recursion: IRecursionRepetition

	/**
	 * Parent repetition (if encapsulated)
	 * @order 7
	 */
	parent?: IRecursionPropArguments
}

/**
 *
 *
 * @category Core.Interfaces
 */
export interface IParentRecursionPropArguments extends IPropArguments {
	/**
	 * Parent repetition (if encapsulated)
	 * @order 7
	 */
	parent: IRecursionPropArguments
}
