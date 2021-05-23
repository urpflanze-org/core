import { ISceneChildProps, ISceneChildSettings, TSceneChildProp } from '../types/scene-child'
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
