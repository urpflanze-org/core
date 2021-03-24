import { IBufferIndex } from '../types/indexedBuffer'
import { IPropArguments } from './propArguments'

/**
 * Value or callable
 *
 * @category Core.Types
 */
export type TSceneChildProp<T, PropArguments extends IPropArguments = IPropArguments> =
	| T
	| { (propArguments: PropArguments): T }

////////////////////////////////////

/**
 * Props interface.
 * Remember: any size refere to dimension of a scene.
 *
 * @category Core.Props and Settings Interfaces
 */
export interface ISceneChildProps<PropArguments extends IPropArguments = IPropArguments> {
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
	repetitions?: TSceneChildProp<number | [number, number], PropArguments>

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
	distance?: TSceneChildProp<number | [number, number], PropArguments>

	/**
	 * For Ring repeats, define the starting angle of the repeat
	 *
	 * @type {TSceneChildProp<number>}
	 * @memberof ISceneChildProps
	 * @order 3
	 */
	displace?: TSceneChildProp<number, PropArguments>

	/**
	 * skewX transformation.
	 *
	 * @type {TSceneChildProp<number>}
	 * @memberof ISceneChildProps
	 * @order 4
	 */
	skewX?: TSceneChildProp<number, PropArguments>

	/**
	 * skewY transformation
	 *
	 * @type {TSceneChildProp<number>}
	 * @memberof ISceneChildProps
	 * @order 5
	 */
	skewY?: TSceneChildProp<number, PropArguments>

	/**
	 * squeezeX transformation
	 *
	 * @type {TSceneChildProp<number>}
	 * @memberof ISceneChildProps
	 * @order 6
	 */
	squeezeX?: TSceneChildProp<number, PropArguments>

	/**
	 * squeezeY transformation
	 *
	 * @type {TSceneChildProp<number>}
	 * @memberof ISceneChildProps
	 * @order 7
	 */
	squeezeY?: TSceneChildProp<number, PropArguments>

	/**
	 * scale transformation
	 *
	 * @type {(TSceneChildProp<number | [number, number]>)}
	 * @memberof ISceneChildProps
	 * @order 8
	 */
	scale?: TSceneChildProp<number | [number, number], PropArguments>

	/**
	 * tranlsate transformation
	 *
	 * @type {(TSceneChildProp<number | [number, number]>)}
	 * @memberof ISceneChildProps
	 * @order 9
	 */
	translate?: TSceneChildProp<number | [number, number], PropArguments>

	/**
	 * rotateX transformation in degeress
	 *
	 * @type {TSceneChildProp<number>}
	 * @memberof ISceneChildProps
	 * @order 10
	 */
	rotateX?: TSceneChildProp<number, PropArguments>

	/**
	 * rotateY transformation in degeress
	 *
	 * @type {TSceneChildProp<number>}
	 * @memberof ISceneChildProps
	 * @order 11
	 */
	rotateY?: TSceneChildProp<number, PropArguments>

	/**
	 * rotateZ transformation in degeress
	 *
	 * @type {TSceneChildProp<number>}
	 * @memberof ISceneChildProps
	 * @order 12
	 */
	rotateZ?: TSceneChildProp<number, PropArguments>

	/**
	 * Origin of transformation
	 *
	 * @type {TSceneChildProp<number>}
	 * @memberof ISceneChildProps
	 * @order 13
	 */
	transformOrigin?: TSceneChildProp<number | [number, number], PropArguments>

	/**
	 * perspective of rotation between 0 and 1
	 *
	 * @type {TSceneChildProp<number>}
	 * @memberof ISceneChildProps
	 * @order 14
	 */
	perspective?: TSceneChildProp<number, PropArguments>

	/**
	 * perspective origin between [-1, -1] and [1, 1]
	 *
	 * @type {(TSceneChildProp<number | [number, number]>)}
	 * @memberof ISceneChildProps
	 * @order 15
	 */
	perspectiveOrigin?: TSceneChildProp<number | [number, number], PropArguments>
}

/**
 *
 * @category Core.Props and Settings Interfaces
 */
export interface ISceneChildSettings<PropArguments extends IPropArguments = IPropArguments>
	extends ISceneChildProps<PropArguments> {
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
 * Object passed to the drawer where it is possible to draw the current frame
 * starting from frameBufferIndex up to frameBuffeIndex + frameLength,
 * the fill or strtoke color of the frame is also present
 *
 * @category Core.Stream
 */
export interface IStreamArguments<PropArguments extends IPropArguments = IPropArguments> {
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
	currentIndexing: IBufferIndex<PropArguments>
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
