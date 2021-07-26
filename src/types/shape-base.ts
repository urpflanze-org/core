import { ISceneChildSettings } from '../types/scene-child'
import { IPropArguments } from './propArguments'
import { IBaseRepetition } from './repetitions'

export enum EBoundingType {
	/**
	 * Relative to the real bounding of the shape
	 * @order 2
	 */
	Relative = 1,

	/**
	 * Fixed to te width and height of the shape
	 * @order 3
	 */
	Fixed = 2,
}

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
	 * Set the center of the shape, default center
	 */
	anchor?: ['left' | 'right' | 'center' | number, 'top' | 'bottom' | 'center' | number]

	/**
	 * Callback to apply transform at any vertex
	 *
	 * @order -13
	 */
	vertexCallback?: TVertexCallback<PropArguments>

	/**
	 * Using to shape transformation
	 *
	 * @order -14
	 */
	boundingType?: EBoundingType | 'fixed' | 'relative'
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
	[key: string]: TDrawerProp<string | number, G> | undefined
}

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
