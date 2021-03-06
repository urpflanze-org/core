import {
	IBaseRepetition,
	IRecursionRepetition,
	IRepetition,
	ISceneChildPropArguments,
	ISceneChildProps,
	ISceneChildSettings,
	TSceneChildProp,
} from '../types/scene-child'
import { SceneChild } from '../SceneChild'
import { ShapeBase } from '../shapes/ShapeBase'
import { ShapePrimitive } from '../shapes/ShapePrimitive'

/**
 * Parent object for index the buffer
 *
 * @category Core.Stream
 */
export interface IParentBufferIndex {
	/**
	 * Reference to shape
	 */
	shape: ShapeBase

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

/**
 * Callback to pass at vertextCallback property
 *
 * @category Core.Types
 */
export type TVertexCallback = (
	vertex: [number, number, number],
	vertexRepetition: IBaseRepetition,
	propArguments: ISceneChildPropArguments
) => void

/**
 * ShapeBaseSettings
 *
 * @category Core.Props and Settings Interfaces
 */
export interface IShapeBaseSettings extends ISceneChildSettings {
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
	vertexCallback?: TVertexCallback
}

// Shape

/**
 * Shape settings
 *
 * @category Core.Props and Settings Interfaces
 */
export interface IShapeSettings extends IShapeBaseSettings {
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
 *
 * @category Core.Props and Settings Interfaces
 */
export interface IShapePrimitiveProps extends ISceneChildProps {
	/**
	 * scalar that multiplies the buffer or loop
	 * @order -20
	 */
	sideLength?: TSceneChildProp<number | Array<number>>
}

/**
 *
 * @category Core.Props and Settings Interfaces
 */
export interface IShapePrimitiveSettings<T = { [key: string]: any }> extends IShapePrimitiveProps, IShapeBaseSettings {
	/**
	 * Callback to apply transform at any vertex
	 * @order -15.5
	 */
	bClosed?: boolean

	/**
	 *
	 * @order -15
	 */
	style?: T
}

/**
 * Shape recursive animate props
 *
 * @category Core.Props and Settings Interfaces
 */
export interface IShapeRecursiveProps extends ISceneChildProps {
	/**
	 * number of recursions
	 * @order -25
	 */
	recursions?: TSceneChildProp<number>

	/**
	 * scale factor for recursion
	 * @order -24
	 */
	recursionScale?: TSceneChildProp<number>

	/**
	 * number of vertext to start recursion
	 * @order -23
	 */
	recursionVertex?: TSceneChildProp<number>
}

/**
 * ShapeRecursive settings
 *
 * @category Core.Props and Settings Interfaces
 */
export interface IShapeRecursiveSettings extends IShapeRecursiveProps, IShapeSettings {}

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
