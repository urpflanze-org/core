/**
 * Types & Interface
 */
export * from './types'

// Set glMatrixArrayType
import { glMatrix } from 'gl-matrix'

glMatrix.setMatrixArrayType(Array)

/**
 * Core
 */

export * from './Scene'
export * from './SceneChild'

export * from './Group'

// Shapes
export * from './shapes/ShapeBase'
export * from './shapes/ShapePrimitive'
export * from './shapes/ShapeLoop'
export * from './shapes/ShapeBuffer'
export * from './shapes/Shape'
export * from './shapes/ShapeRecursive'
export * from './shapes/ShapeFollow'

export * from './shapes/primitives/Line'
export * from './shapes/primitives/Triangle'
export * from './shapes/primitives/Rect'
export * from './shapes/primitives/Polygon'
export * from './shapes/primitives/Circle'
export * from './shapes/primitives/Star'

export * from './shapes/primitives/Rose'
export * from './shapes/primitives/Spiral'
export * from './shapes/primitives/Lissajous'
export * from './shapes/primitives/SuperShape'

// Utilities
export {
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
