import { IShapeBounding, IShapeSettings, ISceneChildProps, IBufferIndex, IRepetition, IPropArguments } from '../types'

import { Scene } from '../Scene'
import { SceneChild } from '../SceneChild'

import { ShapeBase } from './ShapeBase'

/**
 * Container of ShapeBase or Group, it applies transformations on each repetition
 *
 * @category Scene.Containers
 */
class Shape<
	PropArguments extends IPropArguments = IPropArguments,
	Props extends ISceneChildProps<PropArguments> = ISceneChildProps
> extends ShapeBase<PropArguments, Props> {
	/**
	 * child shape
	 *
	 * @type {(SceneChild)}
	 */
	public shape?: SceneChild

	/**
	 * regenerate child shape each repetition
	 *
	 * @type {boolean}
	 */
	public shapeUseParent: boolean

	/**
	 * Creates an instance of Shape.
	 *
	 * @param {ShapeSettings} [settings={}]
	 */
	constructor(settings: IShapeSettings<PropArguments>) {
		settings.type = settings.type || 'Shape'
		super(settings)

		if (settings.shape instanceof SceneChild) {
			this.shape = settings.shape
		} else {
			console.warn(
				"[Urpflanze:Shape] requires the 'shape' property to be instance of SceneChild,\nYou passed:",
				settings.shape
			)
		}
		this.shapeUseParent = !!settings.shapeUseParent

		this.bStatic = this.isStatic()
		this.bStaticIndexed = this.isStaticIndexed()
	}

	/**
	 * Check if shape is static
	 *
	 * @returns {boolean}
	 */
	public isStatic(): boolean {
		// return super.isStatic() && !this.shapeUseParent
		return super.isStatic() && (this.shape ? this.shape.isStatic() : true)
	}

	/**
	 * Check if shape has static index
	 *
	 * @returns {boolean}
	 */
	public isStaticIndexed(): boolean {
		return super.isStaticIndexed() && (this.shape ? this.shape.isStaticIndexed() : true)
	}

	/**
	 * Find shape by id or name
	 *
	 * @param {number | string} idOrName
	 * @returns {(SceneChild | null)}
	 */
	public find(idOrName: number | string): SceneChild<any, any> | null {
		if (this.id === idOrName || this.name === idOrName) return this as SceneChild<any, any>

		if (this.shape) return this.shape.find(idOrName)

		return null
	}

	/**
	 * Return length of buffer
	 *
	 * @param {PropArguments} propArguments
	 * @returns {number}
	 */
	public getBufferLength(propArguments?: PropArguments): number {
		if (this.bStatic && this.buffer && this.buffer.length > 0) return this.buffer.length

		const childBufferLength = this.shape ? this.shape.getBufferLength(propArguments) : 0

		return childBufferLength * this.getRepetitionCount()
	}

	/**
	 * Return a buffer of children shape or loop generated buffer
	 *
	 * @protected
	 * @param {number} generateId
	 * @param {PropArguments} propArguments
	 * @returns {Float32Array}
	 */
	protected generateBuffer(generateId: number, propArguments: PropArguments): Float32Array {
		if (this.shape) {
			if (this.shapeUseParent || !this.shape.isGenerated(generateId)) {
				if (this.shapeUseParent) {
					this.shape.clearBuffer(true, false)
				}
				this.shape.generate(generateId, false, propArguments)
			}

			return this.shape.getBuffer() as Float32Array
		}

		return Shape.EMPTY_BUFFER
	}

	/**
	 * Return bounding
	 *
	 * @param {boolean} bDirectSceneChild
	 * @returns {IShapeBounding}
	 */
	public getShapeBounding(): IShapeBounding {
		if (this.shape) {
			return this.shape.getBounding()
		}

		return this.bounding // empty bounding defined in ShapeBase
	}

	/**
	 * Add to indexed buffer
	 *
	 * @protected
	 * @param {number} frameLength
	 * @param {IRepetition} repetition
	 * @returns {number} nextIndex
	 */
	protected addIndex(frameLength: number, repetition: IRepetition, singleRepetitionBounding: IShapeBounding): void {
		if (this.shape) {
			const childIndexedBuffer: Array<IBufferIndex> = this.shape.getIndexedBuffer() || []

			const parentBufferIndex: IBufferIndex = {
				shape: this,
				frameLength,
				singleRepetitionBounding,
				repetition: {
					type: repetition.type,
					angle: repetition.angle,
					index: repetition.index,
					count: repetition.count,
					offset: repetition.offset,
					row: {
						index: repetition.row.index,
						count: repetition.row.count,
						offset: repetition.row.offset,
					},
					col: {
						index: repetition.col.index,
						count: repetition.col.count,
						offset: repetition.col.offset,
					},
				},
			}

			for (let i = 0, len = childIndexedBuffer.length; i < len; i++) {
				const currentIndexed: IBufferIndex = { ...childIndexedBuffer[i] }
				const parent = currentIndexed.parent
					? Shape.setIndexedParent(currentIndexed.parent, parentBufferIndex)
					: parentBufferIndex

				this.indexedBuffer.push({ ...currentIndexed, parent })
			}
		}
	}

	/**
	 * Set parent of indexed
	 *
	 * @static
	 * @param {(IBufferIndex )} current
	 * @param {IBufferIndex} parent
	 * @returns {(IBufferIndex )}
	 */
	static setIndexedParent(current: IBufferIndex, parent: IBufferIndex): IBufferIndex {
		const index: IBufferIndex = {
			...current,
		}

		index.parent = current.parent ? Shape.setIndexedParent(current.parent, parent) : parent

		return index
	}

	/**
	 * Set shape
	 *
	 * @param {(SceneChild | undefined)} [shape]
	 */
	public setShape(shape: SceneChild | undefined): void {
		if (typeof shape === 'undefined') {
			this.shape = undefined
			this.clearBuffer(true, true)
		} else {
			this.scene && Scene.propagateToChilden(shape, this.scene)

			this.shape = shape

			this.shape.clearBuffer(true, true)
		}
	}
}

export { Shape }
