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

/**
 *
 * @category Core.Primitive Interfaces
 */
export interface IPolygonProps<PropArguments extends IPropArguments = IPropArguments>
	extends IShapeLoopProps<PropArguments> {
	/**
	 * sideNumber / segments
	 * @order -35
	 */
	sideNumber?: TSceneChildProp<number, PropArguments>
}

/**
 *
 * @category Core.Primitive Interfaces
 */
export interface IPolygonSettings<
	PropArguments extends IPropArguments = IPropArguments,
	D extends IDrawerProps<PropArguments> = IDrawerProps<PropArguments>
> extends IPolygonProps<PropArguments>,
		IShapeLoopSettings<PropArguments, D> {}

/**
 * For <mark>n</mark> and <mark>d</mark> see Rose on <a target="_blank" href="https://en.wikipedia.org/wiki/Rose_(mathematics)">Wikipedia</a>
 *
 * @category Core.Primitive Interfaces
 */
export interface IRoseProps<PropArguments extends IPropArguments = IPropArguments>
	extends IShapeLoopProps<PropArguments> {
	/**
	 * n coefficient
	 * @order -31
	 */
	n?: TSceneChildProp<number, PropArguments>

	/**
	 * d coefficient
	 * @order -30
	 */
	d?: TSceneChildProp<number, PropArguments>
}

/**
 *
 * @category Core.Primitive Interfaces
 */
export interface IRoseSettings<
	PropArguments extends IPropArguments = IPropArguments,
	D extends IDrawerProps<PropArguments> = IDrawerProps<PropArguments>
> extends IRoseProps<PropArguments>,
		IShapeLoopSettings<PropArguments, D> {}

/**
 *
 * @category Core.Types
 */
export type TSpiralType = 'ARCHIMEDE' | 'HYPERBOLIC' | 'FERMAT' | 'LITUUS' | 'LOGARITHMIC'

/**
 *
 * @category Core.Primitive Interfaces
 */
export interface ISpiralProps<PropArguments extends IPropArguments = IPropArguments>
	extends IShapeLoopProps<PropArguments> {
	/**
	 * type of spiral
	 * @order -35
	 */
	spiral?: TSpiralType

	/**
	 * number of twists
	 * @order -34
	 */
	twists?: TSceneChildProp<number, PropArguments>

	/**
	 * twist start
	 * @order -33
	 */
	twistsStart?: TSceneChildProp<number, PropArguments>
}

/**
 *
 * @category Core.Primitive Interfaces
 */
export interface ISpiralSettings<
	PropArguments extends IPropArguments = IPropArguments,
	D extends IDrawerProps<PropArguments> = IDrawerProps<PropArguments>
> extends ISpiralProps<PropArguments>,
		IShapeLoopSettings<PropArguments, D> {}

/**
 * For <mark>wx</mark>, <mark>wy</mark> and <mark>wx</mark> see Lissajous on <a target="_blank" href="https://en.wikipedia.org/wiki/Lissajous_curve">Wikipedia</a>
 * @category Core.Primitive Interfaces
 */
export interface ILissajousProps<PropArguments extends IPropArguments = IPropArguments>
	extends IShapeLoopProps<PropArguments> {
	/**
	 * wx coefficient
	 * @order -37
	 */
	wx?: TSceneChildProp<number, PropArguments>

	/**
	 * wy coefficient
	 * @order -36
	 */
	wy?: TSceneChildProp<number, PropArguments>

	/**
	 * wz coefficient
	 * @order -35
	 */
	wz?: TSceneChildProp<number, PropArguments>
}

/**
 * http://paulbourke.net/geometry/supershape/
 *
 * @category Core.Primitive Interfaces
 */
export interface ILissajousSettings<
	PropArguments extends IPropArguments = IPropArguments,
	D extends IDrawerProps<PropArguments> = IDrawerProps<PropArguments>
> extends ILissajousProps<PropArguments>,
		IShapeLoopSettings<PropArguments, D> {}

/**
 *
 * @category Core.Primitive Interfaces
 */
export interface ISuperShapeProps<PropArguments extends IPropArguments = IPropArguments>
	extends IShapeLoopProps<PropArguments> {
	/**
	 * a coefficient
	 * @order -35
	 */
	a?: TSceneChildProp<number, PropArguments>

	/**
	 * b coefficient
	 * @order -34
	 */
	b?: TSceneChildProp<number, PropArguments>

	/**
	 * m coefficient
	 * @order -33
	 */
	m?: TSceneChildProp<number, PropArguments>

	/**
	 * n1 coefficient
	 * @order -32
	 */
	n1?: TSceneChildProp<number, PropArguments>

	/**
	 * n2 coefficient
	 * @order -31
	 */
	n2?: TSceneChildProp<number, PropArguments>

	/**
	 * n3 coefficient
	 * @order -30
	 */
	n3?: TSceneChildProp<number, PropArguments>
}

/**
 *
 * @category Core.Primitive Interfaces
 */
export interface ISuperShapeSettings<
	PropArguments extends IPropArguments = IPropArguments,
	D extends IDrawerProps<PropArguments> = IDrawerProps<PropArguments>
> extends ISuperShapeProps<PropArguments>,
		IShapeLoopSettings<PropArguments, D> {}
