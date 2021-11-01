import { EAdaptMode } from '../modifiers/Adapt'
import { Modifier } from '../modifiers/Modifier'
import { ILoopMeta } from '../shapes/ShapeLoop'
import { IPropArguments, TSceneChildProp } from '../types'
import { IShapeLoopRepetition } from './repetitions'
import { ISceneChildProps } from './scene-child'
import { IDrawerProps, IShapeBaseSettings } from './shape-base'

/**
 *
 * @category Scene.Settings
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
 * @category Scene.Settings
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
	 * A list of properties used by the drawer
	 * @order -15
	 */
	drawer?: DrawerProps

	/**
	 * A list of modifiers for manipulating the buffer
	 *
	 * @order -16
	 */
	modifiers?: Array<Modifier>
}

/**
 *
 * @category Shapes.Settings
 */
export interface IShapeBufferProps<PropArguments extends IPropArguments = IPropArguments>
	extends IShapePrimitiveProps<PropArguments> {}

/**
 *
 * @category Shapes.Settings
 */
export interface IShapeBufferSettings<
	PropArguments extends IPropArguments = IPropArguments,
	D extends IDrawerProps<PropArguments> = IDrawerProps<PropArguments>
> extends IShapeBufferProps<PropArguments>,
		IShapePrimitiveSettings<PropArguments, D> {
	/**
	 * [x1,y1, x2,y1-, ...., xn, yn]
	 * @order -30
	 */
	shape?: Float32Array | ((propArguments: PropArguments) => Float32Array)

	/**
	 * Adapt buffer mode, see <a href="[base_url]/EAdaptMode">EAdaptMode</a> for more details
	 * @order -16
	 */
	adaptMode?: EAdaptMode
}

/**
 *
 * @category Types & Interfaces.Shapes
 */
export type TShapeLoopGeneratorFormula<PropArguments extends IPropArguments = IPropArguments> = (
	shapeLoopRepetition: IShapeLoopRepetition,
	propArguments: PropArguments,
	loopMeta: ILoopMeta
) => [number, number]

/**
 * Object to create a shape from a loop from <mark>start</mark>
 * to <mark>end</mark> by <mark>inc</mark> increments.
 *
 * @example
 * ```javascript
 *  //
 *  // Example of creating a circle of 100 points
 *  //
 * ShapeLoop({
 * 	loop: {
 * 		start: 0,
 * 		end: 100,
 * 		inc: 1,
 * 		vertex: ({ offset }) => [Math.cos(offset * Math.PI * 2), Math.sin(offset * Math.PI * 2)]
 * 	}
 * })
 * ```
 * @category Types & Interfaces.Shapes
 */
export interface IShapeLoopGenerator<PropArguments extends IPropArguments = IPropArguments> {
	start?: TSceneChildProp<number, PropArguments>
	end?: TSceneChildProp<number, PropArguments>
	inc?: TSceneChildProp<number, PropArguments>
	vertex?: TShapeLoopGeneratorFormula<PropArguments>
}

/**
 *
 * @category Shapes.Settings
 */
export interface IShapeLoopProps<PropArguments extends IPropArguments = IPropArguments>
	extends IShapePrimitiveProps<PropArguments> {
	/**
	 * <a href="[base_url]/IShapeLoopGenerator">IShapeLoopGenerator</a> for more details
	 * @order -30
	 */
	loop?: IShapeLoopGenerator<PropArguments>
}

/**
 *
 * @category Shapes.Settings
 */
export interface IShapeLoopSettings<
	PropArguments extends IPropArguments = IPropArguments,
	D extends IDrawerProps<PropArguments> = IDrawerProps<PropArguments>
> extends IShapeLoopProps<PropArguments>,
		IShapePrimitiveSettings<PropArguments, D> {
	/**
	 * Array of properties on which shapeloop generation depends,
	 * for example the circle varies the number of points based on the radius (sideLength)
	 * @order -30
	 */
	loopDependencies?: Array<'propArguments' | keyof IShapeLoopProps<PropArguments> | string>
}

//////
