import { ShapeBase } from '../shapes/ShapeBase'
import { IBufferIndex } from '../types/shape-base'

/**
 * Repetition type enumerator.
 *
 * @category Core.Repetition
 * @internal
 */
export enum ERepetitionType {
	/**
	 * Defines the type of repetition of the shape,
	 * in a circular way starting from the center of the scene
	 * @order 1
	 */
	Ring = 1,

	/**
	 * Defines the type of repetition of the shape,
	 * on a nxm grid starting from the center of the scene
	 * @order 2
	 */
	Matrix = 2,
}

/**
 * Base repetition
 *
 * @category Core.Repetition
 */
export interface IBaseRepetition {
	/**
	 * Index of repetition, from 1 to count
	 * @order 1
	 */
	index: number

	/**
	 * Current repetition offset from 0 (first repetition) to 1 (last repetition)
	 * @order 2
	 */
	offset: number

	/**
	 * Number of repetitions
	 * @order 3
	 */
	count: number
}

/**
 *
 *
 * @category Core.Repetition
 */
export interface IShapeLoopRepetition extends IBaseRepetition {
	/**
	 * current tick value
	 *
	 * @order 4
	 */
	current: number
}

/**
 *
 *
 * @category Core.Repetition
 */
export interface IRecursionRepetition extends IBaseRepetition {
	level: IBaseRepetition

	/**
	 * parent recursion
	 *
	 * @order 4
	 */
	parent?: IRecursionRepetition
}

/**
 * Information about propArguments repetition
 *
 * @category Core.Repetition
 */
export interface IRepetition extends IBaseRepetition {
	/**
	 * Define the type of repetition
	 * @order 4
	 */
	angle: number

	/**
	 * Define the type of repetition
	 * @order 5
	 */
	type: ERepetitionType

	/**
	 * Information about rows of matrix repetition
	 * @order 6
	 */
	row: IBaseRepetition

	/**
	 * Information about columns of matrix repetition
	 * @order 7
	 */
	col: IBaseRepetition
}

/**
 * Props interface.
 * Remember: any size refere to dimension of a scene.
 *
 * @category Core.Props and Settings Interfaces
 */
export interface ISceneChildProps {
	/**
	 * It defines the type of repetition.
	 * If a number is passed the repetition will be Ring.
	 * If an array (1) is passed the repetition will be nxn,
	 * if an array (2) the repetition will be mxn [rows x columns]
	 *
	 * @type {(TSceneChildProp<number | [number, number]>)}
	 * @memberof ISceneChildProps
	 * @order 1
	 */
	repetitions?: TSceneChildProp<number | [number, number]> // number of shape repetitions

	/**
	 * If the repeat is Ring, pass a numerical value
	 * referring to the distance from the center.
	 * If the repeat is Matrix, pass an array (2) which refers
	 * to the distance between columns and rows.
	 *
	 * @type {(TSceneChildProp<number | [number, number]>)}
	 * @memberof ISceneChildProps
	 * @order 2
	 */
	distance?: TSceneChildProp<number | [number, number]>

	/**
	 * For Ring repeats, define the starting angle of the repeat
	 *
	 * @type {TSceneChildProp<number>}
	 * @memberof ISceneChildProps
	 * @order 3
	 */
	displace?: TSceneChildProp<number>

	/**
	 * skewX transformation.
	 *
	 * @type {TSceneChildProp<number>}
	 * @memberof ISceneChildProps
	 * @order 4
	 */
	skewX?: TSceneChildProp<number>

	/**
	 * skewY transformation
	 *
	 * @type {TSceneChildProp<number>}
	 * @memberof ISceneChildProps
	 * @order 5
	 */
	skewY?: TSceneChildProp<number>

	/**
	 * squeezeX transformation
	 *
	 * @type {TSceneChildProp<number>}
	 * @memberof ISceneChildProps
	 * @order 6
	 */
	squeezeX?: TSceneChildProp<number>

	/**
	 * squeezeY transformation
	 *
	 * @type {TSceneChildProp<number>}
	 * @memberof ISceneChildProps
	 * @order 7
	 */
	squeezeY?: TSceneChildProp<number>

	/**
	 * scale transformation
	 *
	 * @type {(TSceneChildProp<number | [number, number]>)}
	 * @memberof ISceneChildProps
	 * @order 8
	 */
	scale?: TSceneChildProp<number | [number, number]>

	/**
	 * tranlsate transformation
	 *
	 * @type {(TSceneChildProp<number | [number, number]>)}
	 * @memberof ISceneChildProps
	 * @order 9
	 */
	translate?: TSceneChildProp<number | [number, number]>

	/**
	 * rotateX transformation in degeress
	 *
	 * @type {TSceneChildProp<number>}
	 * @memberof ISceneChildProps
	 * @order 10
	 */
	rotateX?: TSceneChildProp<number>

	/**
	 * rotateY transformation in degeress
	 *
	 * @type {TSceneChildProp<number>}
	 * @memberof ISceneChildProps
	 * @order 11
	 */
	rotateY?: TSceneChildProp<number>

	/**
	 * rotateZ transformation in degeress
	 *
	 * @type {TSceneChildProp<number>}
	 * @memberof ISceneChildProps
	 * @order 12
	 */
	rotateZ?: TSceneChildProp<number>

	/**
	 * Origin of transformation
	 *
	 * @type {TSceneChildProp<number>}
	 * @memberof ISceneChildProps
	 * @order 13
	 */
	transformOrigin?: TSceneChildProp<number | [number, number]>

	/**
	 * perspective of rotation between 0 and 1
	 *
	 * @type {TSceneChildProp<number>}
	 * @memberof ISceneChildProps
	 * @order 14
	 */
	perspective?: TSceneChildProp<number>

	/**
	 * perspective origin between [-1, -1] and [1, 1]
	 *
	 * @type {(TSceneChildProp<number | [number, number]>)}
	 * @memberof ISceneChildProps
	 * @order 15
	 */
	perspectiveOrigin?: TSceneChildProp<number | [number, number]>
}

/**
 *
 * @category Core.Props and Settings Interfaces
 */
export interface ISceneChildSettings extends ISceneChildProps {
	/**
	 * id of element
	 * @order -5
	 */
	id?: string | number

	/**
	 * human readablle name
	 * @order -4
	 */
	name?: string

	/**
	 * order for drawing priority
	 * @order -3
	 */
	order?: number

	/**
	 * human readable type of element
	 * @order -2
	 */
	type?: string

	/**
	 * custom client data
	 * @order -1
	 */
	data?: any
}

/**
 * Object argument for sceneChild props
 *
 * @category Core.Interfaces
 */
export interface ISceneChildPropArguments {
	/**
	 * Information about repetition
	 * @order 1
	 */
	repetition: IRepetition
	/**
	 * Information about recursion (if is encapsulated in a ShapeRecursive)
	 * @order 2
	 */
	recursion?: IRecursionRepetition

	/**
	 * Current Shape
	 * @order 5
	 */
	shape: ShapeBase

	/**
	 * Parent repetition (if encapsulated)
	 * @order 7
	 */
	parent?: Partial<ISceneChildPropArguments>
}

/**
 * Value or callable
 *
 * @category Core.Types
 */
export type TSceneChildProp<T> = T | { (propArguments: ISceneChildPropArguments): T }

/**
 * Object passed to the drawer where it is possible to draw the current frame
 * starting from frameBufferIndex up to frameBuffeIndex + frameLength,
 * the fill or strtoke color of the frame is also present
 *
 * @category Core.Stream
 */
export interface IStreamArguments {
	/**
	 * @order 1
	 */
	buffer: Float32Array
	/**
	 * @order 2
	 */
	frameLength: number
	/**
	 * @order 3
	 */
	frameBufferIndex: number
	/**
	 * repetition of current generated shape
	 * @order 4
	 */
	currentIndexing: IBufferIndex
	/**
	 * @order 5
	 */
	currentShapeIndex: number
	/**
	 * total primitives
	 * @order 6
	 */
	totalShapes: number
}
