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

export { Scene } from './Scene'
export { SceneChild } from './SceneChild'

export { Group } from './Group'

// Shapes
export { ShapeBase } from './shapes/ShapeBase'
export { ShapePrimitive } from './shapes/ShapePrimitive'
export { ShapeLoop } from './shapes/ShapeLoop'
export { ShapeBuffer } from './shapes/ShapeBuffer'
export { Shape } from './shapes/Shape'
export { ShapeRecursive } from './shapes/ShapeRecursive'

export { Line } from './shapes/primitives/Line'
export { Triangle } from './shapes/primitives/Triangle'
export { Rect } from './shapes/primitives/Rect'
export { Polygon } from './shapes/primitives/Polygon'
export { Circle } from './shapes/primitives/Circle'

export { Rose } from './shapes/primitives/Rose'
export { Spiral } from './shapes/primitives/Spiral'
export { Lissajous } from './shapes/primitives/Lissajous'
export { SuperShape } from './shapes/primitives/SuperShape'

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

export { default as Vec2 } from './math/Vec2'

export { PHI, PI2, log, pmod } from './math'
