// Shape

import { SceneChild } from '../SceneChild'
import { IPropArguments } from './propArguments'
import { ISceneChildProps, TSceneChildProp } from './scene-child'
import { IShapeBaseSettings } from './shape-base'

/**
 * Shape settings
 *
 * @category Types & Interfaces.Shapes
 */
export interface IShapeSettings<PropArguments extends IPropArguments = IPropArguments>
	extends IShapeBaseSettings<PropArguments> {
	/**
	 * shape to apply repetitions and transformation
	 * @order -20
	 */
	shape: SceneChild

	/**
	 * With this parameter the shape child will be regenerate at each repetition,
	 * useful if you want to encapsulate this shape in another.
	 * In the case of ShapePrimitive drawer prop don't need to as they are generated during the buffer stream.
	 * @order -15
	 */
	shapeUseParent?: boolean
}

/**
 * Shape recursive animate props
 *
 * @category Types & Interfaces.Shapes
 */
export interface IShapeRecursiveProps<PropArguments extends IPropArguments = IPropArguments>
	extends ISceneChildProps<PropArguments> {
	/**
	 * number of recursions
	 * @order -25
	 */
	recursions?: TSceneChildProp<number, PropArguments>

	/**
	 * scale factor for recursion
	 * @order -24
	 */
	recursionScale?: TSceneChildProp<number, PropArguments>

	/**
	 * number of vertext to start recursion
	 * @order -23
	 */
	recursionVertex?: TSceneChildProp<number, PropArguments>
}

/**
 * ShapeRecursive settings
 *
 * @category Types & Interfaces.Shapes
 */
export interface IShapeRecursiveSettings<PropArguments extends IPropArguments = IPropArguments>
	extends IShapeRecursiveProps<PropArguments>,
		IShapeSettings<PropArguments> {
	/**
	 * With this parameter the shape child will be regenerate at each recursion.
	 * Combined with <mark>shapeUseParent</mark> the shape child will be regenerated at ach recursion of each repetition
	 * In the case of ShapePrimitive drawer prop don't need to as they are generated during the buffer stream.
	 * @order -15
	 */
	shapeUseRecursion?: boolean
}

/**
 * Shape Follow animate props
 *
 * @category Types & Interfaces.Shapes
 */
export interface IShapeFollowProps<PropArguments extends IPropArguments = IPropArguments>
	extends ISceneChildProps<PropArguments> {}

/**
 * ShapeFollow settings
 *
 * @category Types & Interfaces.Shapes
 */
export interface IShapeFollowSettings<PropArguments extends IPropArguments = IPropArguments>
	extends IShapeFollowProps<PropArguments>,
		IShapeSettings<PropArguments> {
	/**
	 * Scene child to repeat each vertex
	 */
	follow?: SceneChild

	/**
	 * With this parameter the shape child will be regenerate at vertex of following.
	 * @order -15
	 */
	shapeUseFollow?: boolean
}
