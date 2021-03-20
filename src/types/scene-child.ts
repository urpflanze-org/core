import { ShapeBase } from '../shapes/ShapeBase'
import { IBufferIndex } from '../types/indexedBuffer'
import { IRecursionRepetition, IRepetition } from './repetitions'

/**
 * Object argument for sceneChild props
 *
 * @category Core.Interfaces
 */
export interface IPropArguments {
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
	parent?: Partial<IPropArguments>
}

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
	parent?: Partial<IRecursionPropArguments>
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

/**
 * Value or callable
 *
 * @category Core.Types
 */
export type TSceneChildProp<T, PA extends IPropArguments = IPropArguments> = T | { (propArguments: PA): T }

////////////////////////////////////

/**
 * Props interface.
 * Remember: any size refere to dimension of a scene.
 *
 * @category Core.Props and Settings Interfaces
 */
export interface ISceneChildProps<PA extends IPropArguments = IPropArguments> {
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
	repetitions?: TSceneChildProp<number | [number, number], PA>

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
	distance?: TSceneChildProp<number | [number, number], PA>

	/**
	 * For Ring repeats, define the starting angle of the repeat
	 *
	 * @type {TSceneChildProp<number>}
	 * @memberof ISceneChildProps
	 * @order 3
	 */
	displace?: TSceneChildProp<number, PA>

	/**
	 * skewX transformation.
	 *
	 * @type {TSceneChildProp<number>}
	 * @memberof ISceneChildProps
	 * @order 4
	 */
	skewX?: TSceneChildProp<number, PA>

	/**
	 * skewY transformation
	 *
	 * @type {TSceneChildProp<number>}
	 * @memberof ISceneChildProps
	 * @order 5
	 */
	skewY?: TSceneChildProp<number, PA>

	/**
	 * squeezeX transformation
	 *
	 * @type {TSceneChildProp<number>}
	 * @memberof ISceneChildProps
	 * @order 6
	 */
	squeezeX?: TSceneChildProp<number, PA>

	/**
	 * squeezeY transformation
	 *
	 * @type {TSceneChildProp<number>}
	 * @memberof ISceneChildProps
	 * @order 7
	 */
	squeezeY?: TSceneChildProp<number, PA>

	/**
	 * scale transformation
	 *
	 * @type {(TSceneChildProp<number | [number, number]>)}
	 * @memberof ISceneChildProps
	 * @order 8
	 */
	scale?: TSceneChildProp<number | [number, number], PA>

	/**
	 * tranlsate transformation
	 *
	 * @type {(TSceneChildProp<number | [number, number]>)}
	 * @memberof ISceneChildProps
	 * @order 9
	 */
	translate?: TSceneChildProp<number | [number, number], PA>

	/**
	 * rotateX transformation in degeress
	 *
	 * @type {TSceneChildProp<number>}
	 * @memberof ISceneChildProps
	 * @order 10
	 */
	rotateX?: TSceneChildProp<number, PA>

	/**
	 * rotateY transformation in degeress
	 *
	 * @type {TSceneChildProp<number>}
	 * @memberof ISceneChildProps
	 * @order 11
	 */
	rotateY?: TSceneChildProp<number, PA>

	/**
	 * rotateZ transformation in degeress
	 *
	 * @type {TSceneChildProp<number>}
	 * @memberof ISceneChildProps
	 * @order 12
	 */
	rotateZ?: TSceneChildProp<number, PA>

	/**
	 * Origin of transformation
	 *
	 * @type {TSceneChildProp<number>}
	 * @memberof ISceneChildProps
	 * @order 13
	 */
	transformOrigin?: TSceneChildProp<number | [number, number], PA>

	/**
	 * perspective of rotation between 0 and 1
	 *
	 * @type {TSceneChildProp<number>}
	 * @memberof ISceneChildProps
	 * @order 14
	 */
	perspective?: TSceneChildProp<number, PA>

	/**
	 * perspective origin between [-1, -1] and [1, 1]
	 *
	 * @type {(TSceneChildProp<number | [number, number]>)}
	 * @memberof ISceneChildProps
	 * @order 15
	 */
	perspectiveOrigin?: TSceneChildProp<number | [number, number], PA>
}

/**
 *
 * @category Core.Props and Settings Interfaces
 */
export interface ISceneChildSettings<PA extends IPropArguments = IPropArguments> extends ISceneChildProps<PA> {
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

	/**
	 * With this parameter the shape will be created at each repetition,
	 * useful if you want to encapsulate this shape in another and use its <mark>repetition</mark> object.
	 * In the case of ShapePrimitive style prop don't need to as they are generated during the buffer stream.
	 * @order -15
	 */
	bUseParent?: boolean
}

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
