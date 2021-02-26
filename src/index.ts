/**
 * Types & Interface
 */
export * from './types/scene'
export * from './types/scene-child'
export * from './types/shape-base'
export * from './types/shape-primitives'

// Set glMatrixArrayType
import { glMatrix } from 'gl-matrix'

glMatrix.setMatrixArrayType(Array)

/**
 * Core
 */

export { default as Scene } from './Scene'
export { default as SceneChild } from './SceneChild'

export { default as Group } from './Group'

// Shapes
export { default as ShapeBase } from './shapes/ShapeBase'
export { default as ShapePrimitive } from './shapes/ShapePrimitive'
export { default as ShapeLoop } from './shapes/ShapeLoop'
export { default as ShapeBuffer } from './shapes/ShapeBuffer'
export { default as Shape } from './shapes/Shape'
export { default as ShapeRecursive } from './shapes/ShapeRecursive'

export { default as Line } from './shapes/primitives/Line'
export { default as Triangle } from './shapes/primitives/Triangle'
export { default as Rect } from './shapes/primitives/Rect'
export { default as Polygon } from './shapes/primitives/Polygon'
export { default as Circle } from './shapes/primitives/Circle'

export { default as Rose } from './shapes/primitives/Rose'
export { default as Spiral } from './shapes/primitives/Spiral'
export { default as Lissajous } from './shapes/primitives/Lissajous'
export { default as SuperShape } from './shapes/primitives/SuperShape'

// Utilities
export type { ICancelablePromise } from './Utilities'
export {
	cancelablePromise,
	lerp,
	clamp,
	relativeClamp,
	toDegrees,
	toRadians,
	now,
	noise,
	angleFromRepetition,
	angle2FromRepetition,
	distanceFromRepetition,
} from './Utilities'

export type { IColor, IConvertedColor } from './Color'
export { hslToRgb, parseColor, parseColorAndConvert, rgbToHsl } from './Color'

export { default as Vec2 } from './math/Vec2'

export { PHI, PI2, log, pmod } from './math'
