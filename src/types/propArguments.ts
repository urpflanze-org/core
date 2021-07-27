import { ShapeBase } from '../shapes/ShapeBase'
import { IBaseRepetition, IRecursionRepetition, IRepetition } from './repetitions'

/**
 * Object argument for sceneChild props
 *
 * @category Types & Interfaces.PropArguments
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
 * @category Types & Interfaces.PropArguments
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
 * @category Types & Interfaces.PropArguments
 */
export interface IParentRecursionPropArguments extends IPropArguments {
	/**
	 * Parent repetition (if encapsulated)
	 * @order 7
	 */
	parent: IRecursionPropArguments
}

/**
 *
 *
 * @category Types & Interfaces.PropArguments
 */
export interface IFollowPropArguments extends IPropArguments {
	/**
	 * Information about follow (if is encapsulated in a ShapeFollow)
	 * @order 2
	 */
	follow: IBaseRepetition

	/**
	 * Parent repetition (if encapsulated)
	 * @order 7
	 */
	parent?: IFollowPropArguments
}

/**
 *
 *
 * @category Types & Interfaces.PropArguments
 */
export interface IParentFollowPropArguments extends IPropArguments {
	/**
	 * Parent repetition (if encapsulated)
	 * @order 7
	 */
	parent: IFollowPropArguments
}
