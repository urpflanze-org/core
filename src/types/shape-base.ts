import { IPropArguments, ISceneChildProps, ISceneChildSettings, TSceneChildProp } from '../types/scene-child'
import { SceneChild } from '../SceneChild'
import { IBaseRepetition } from './repetitions'

/**
 * Callback to pass at vertextCallback property
 *
 * @category Core.Types
 */
export type TVertexCallback<PA extends IPropArguments = IPropArguments> = (
	vertex: [number, number, number],
	vertexRepetition: IBaseRepetition,
	propArguments: PA
) => void

/**
 * ShapeBaseSettings
 *
 * @category Core.Props and Settings Interfaces
 */
export interface IShapeBaseSettings<PA extends IPropArguments = IPropArguments> extends ISceneChildSettings<PA> {
	/**
	 * With this parameter the shape will be created at each repetition,
	 * useful if you want to encapsulate this shape in another and use its <mark>repetition</mark> object.
	 * In the case of ShapePrimitive style prop don't need to as they are generated during the buffer stream.
	 * @order -15
	 */
	bUseParent?: boolean

	/**
	 * If container is SHapeRecursive, will this parameter the shape will be created at each recursion,
	 * @order -14
	 */
	bUseRecursion?: boolean

	/**
	 * Callback to apply transform at any vertex
	 *
	 * @order -13
	 */
	vertexCallback?: TVertexCallback<PA>
}

// Shape

/**
 * Shape settings
 *
 * @category Core.Props and Settings Interfaces
 */
export interface IShapeSettings<PA extends IPropArguments = IPropArguments> extends IShapeBaseSettings<PA> {
	/**
	 * shape to apply repetitions and transformation
	 * @order -20
	 */
	shape?: SceneChild<any>
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
type TDrawerProp<T, G> = T | { (propArguments: G): T }
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
export interface IShapePrimitiveProps<PA extends IPropArguments = IPropArguments> extends ISceneChildProps<PA> {
	/**
	 * scalar that multiplies the buffer or loop
	 * @order -20
	 */
	sideLength?: TSceneChildProp<number | [number, number], PA>
}

/**
 *
 * @category Core.Props and Settings Interfaces
 */
export interface IShapePrimitiveSettings<
	PA extends IPropArguments = IPropArguments,
	D extends IDrawerProps<PA> = IDrawerProps<PA>
> extends IShapePrimitiveProps<PA>,
		IShapeBaseSettings<PA> {
	/**
	 * Callback to apply transform at any vertex
	 * @order -15.5
	 */
	bClosed?: boolean

	/**
	 *
	 * @order -15
	 */
	drawer?: D
}

/**
 * Shape recursive animate props
 *
 * @category Core.Props and Settings Interfaces
 */
export interface IShapeRecursiveProps<PA extends IPropArguments = IPropArguments> extends ISceneChildProps<PA> {
	/**
	 * number of recursions
	 * @order -25
	 */
	recursions?: TSceneChildProp<number, PA>

	/**
	 * scale factor for recursion
	 * @order -24
	 */
	recursionScale?: TSceneChildProp<number, PA>

	/**
	 * number of vertext to start recursion
	 * @order -23
	 */
	recursionVertex?: TSceneChildProp<number, PA>
}

/**
 * ShapeRecursive settings
 *
 * @category Core.Props and Settings Interfaces
 */
export interface IShapeRecursiveSettings<PA extends IPropArguments = IPropArguments>
	extends IShapeRecursiveProps<PA>,
		IShapeSettings<PA> {}

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
