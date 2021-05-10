import { IPropArguments, TSceneChildProp } from '../types'
import { IShapeLoopRepetition } from './repetitions'
import { EAdaptMode, IDrawerProps, IShapePrimitiveProps, IShapePrimitiveSettings } from './shape-base'

/**
 *
 * @category Core.Props and Settings Interfaces
 */
export interface IShapeBufferProps<PropArguments extends IPropArguments = IPropArguments>
	extends IShapePrimitiveProps<PropArguments> {}

/**
 *
 * @category Core.Props and Settings Interfaces
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
	shape?: Float32Array | Array<number>

	/**
	 * Adapt buffer mode, see <a href="[base_url]/EAdaptMode">EAdaptMode</a> for more details
	 * @order -16
	 */
	adaptMode?: EAdaptMode
}

/**
 *
 * @category Core.Types
 */
export type TShapeLoopGeneratorFormula<PropArguments extends IPropArguments = IPropArguments> = (
	shapeLoopRepetition: IShapeLoopRepetition,
	propArguments: PropArguments
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
 * @category Core.Interfaces
 */
export interface IShapeLoopGenerator<PropArguments extends IPropArguments = IPropArguments> {
	start?: TSceneChildProp<number, PropArguments>
	end?: TSceneChildProp<number, PropArguments>
	inc?: TSceneChildProp<number, PropArguments>
	vertex?: TShapeLoopGeneratorFormula<PropArguments>
}

/**
 *
 * @category Core.Props and Settings Interfaces
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
 * @category Core.Props and Settings Interfaces
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
