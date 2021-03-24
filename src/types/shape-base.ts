import { ISceneChildProps, ISceneChildSettings, TSceneChildProp } from '../types/scene-child'
import { SceneChild } from '../SceneChild'
import { IBaseRepetition } from './repetitions'
import { IPropArguments } from './propArguments'

/**
 * Callback to pass at vertextCallback property
 *
 * @category Core.Types
 */
export type TVertexCallback<PropArguments extends IPropArguments = IPropArguments> = (
	vertex: [number, number, number],
	vertexRepetition: IBaseRepetition,
	propArguments: PropArguments
) => void

/**
 * ShapeBaseSettings
 *
 * @category Core.Props and Settings Interfaces
 */
export interface IShapeBaseSettings<PropArguments extends IPropArguments = IPropArguments>
	extends ISceneChildSettings<PropArguments> {
	/**
	 * Callback to apply transform at any vertex
	 *
	 * @order -13
	 */
	vertexCallback?: TVertexCallback<PropArguments>
}

// Shape

/**
 * Shape settings
 *
 * @category Core.Props and Settings Interfaces
 */
export interface IShapeSettings<PropArguments extends IPropArguments = IPropArguments>
	extends IShapeBaseSettings<PropArguments> {
	/**
	 * shape to apply repetitions and transformation
	 * @order -20
	 */
	shape?: SceneChild
}

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
 * Generic drawer interface
 *
 * @category Core.Props and Settings Interfaces
 */
export type TDrawerProp<T, G extends IPropArguments = IPropArguments> = T | { (propArguments: G): T }
/**
 * Generic drawer interface
 *
 * @category Core.Props and Settings Interfaces
 */
export interface IDrawerProps<G extends IPropArguments = IPropArguments> {
	[key: string]: TDrawerProp<string | number, G>
}

/**
 *
 * @category Core.Props and Settings Interfaces
 */
export interface IShapePrimitiveProps<PropArguments extends IPropArguments = IPropArguments>
	extends ISceneChildProps<PropArguments> {
	/**
	 * scalar that multiplies the buffer or loop
	 * @order -20
	 */
	sideLength?: TSceneChildProp<number | [number, number], PropArguments>
}

/**
 *
 * @category Core.Props and Settings Interfaces
 */
export interface IShapePrimitiveSettings<
	PropArguments extends IPropArguments = IPropArguments,
	DrawerProps extends IDrawerProps<PropArguments> = IDrawerProps<PropArguments>
> extends IShapePrimitiveProps<PropArguments>,
		IShapeBaseSettings<PropArguments> {
	/**
	 * Callback to apply transform at any vertex
	 * @order -15.5
	 */
	bClosed?: boolean

	/**
	 *
	 * @order -15
	 */
	drawer?: DrawerProps
}

/**
 * Shape recursive animate props
 *
 * @category Core.Props and Settings Interfaces
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
 * @category Core.Props and Settings Interfaces
 */
export interface IShapeRecursiveSettings<PropArguments extends IPropArguments = IPropArguments>
	extends IShapeRecursiveProps<PropArguments>,
		IShapeSettings<PropArguments> {}

/**
 * Size of a buffer and its position relative to the scene.
 * cx|y is the center
 *
 * @category Core.Interfaces
 */
export interface IShapeBounding {
	/**
	 * @order 1
	 */
	x: number

	/**
	 * @order 2
	 */
	y: number

	/**
	 * @order 3
	 */
	cx: number
	/**
	 * @order 4
	 */
	cy: number

	/**
	 * @order 5
	 */
	width: number

	/**
	 * @order 5
	 */
	height: number
}
