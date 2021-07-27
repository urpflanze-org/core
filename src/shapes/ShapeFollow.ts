// import { Bounding } from '../math/bounding'
import {
	IPropArguments,
	IShapeFollowProps,
	IShapeFollowSettings,
	IBufferIndex,
	IRecursionRepetition,
	IRepetition,
	IParentFollowPropArguments,
	IBufferIndexWithFollow,
	IBaseRepetition,
	IShapeBounding,
} from '../types'

import { Shape } from './Shape'
import { SceneChild } from '../SceneChild'

/**
 * Repeat `shape` on each point of `follow`
 *
 * @category Scene.Containers
 */
class ShapeFollow<
	PropArguments extends IPropArguments = IPropArguments,
	Props extends IShapeFollowProps<PropArguments> = IShapeFollowProps
> extends Shape<PropArguments, Props> {
	/**
	 * Contain the bounding of the last generated buffer
	 *
	 * @type {IShapeBounding}
	 * @internal
	 */
	//protected currentGenerationRecursiveBounding: IShapeBounding

	/**
	 * child shape
	 *
	 * @type {(SceneChild)}
	 */
	public shape!: SceneChild<IParentFollowPropArguments>

	/**
	 * Scene child to follow
	 *
	 * @type {SceneChild<IPropArguments>}
	 */
	public follow: SceneChild<IPropArguments>

	/**
	 * Generated buffer
	 *
	 * @protected
	 * @type {(Float32Array | undefined)}
	 */
	protected shapeFollowBuffer: Float32Array | undefined

	/**
	 * Regenerate child buffer each follow
	 *
	 * @protected
	 * @type {boolean}
	 */
	protected shapeUseFollow!: boolean

	/**
	 * Creates an instance of ShapeFollow.
	 *
	 * @param {IShapeFollowSettings} [settings={}]
	 */
	constructor(settings: IShapeFollowSettings<PropArguments>) {
		settings.type = settings.type || 'ShapeFollow'
		super(settings)

		this.follow = settings.follow || settings.shape

		this.bStatic = this.isStatic()
		this.bStaticIndexed = this.isStaticIndexed()

		this.shapeUseFollow = !!settings.shapeUseFollow
		// this.currentGenerationRecursiveBounding = Bounding.empty()
	}

	/**
	 *  Unset buffer
	 *
	 * @param {boolean} [bClearIndexed=false]
	 * @param {boolean} [bPropagateToParents=false]
	 * @param {boolean} [bPropagateToChildren=false]
	 */
	public clearBuffer(bClearIndexed = false, bPropagateToParents = true): void {
		if (bClearIndexed) {
			this.shapeFollowBuffer = undefined
		}
		super.clearBuffer(bClearIndexed, bPropagateToParents)
	}

	/**
	 *
	 * @returns {boolean}
	 */
	public isStatic(): boolean {
		return (this.follow ? this.follow.isStatic() : true) && super.isStatic()
	}

	/**
	 *
	 * @returns {boolean}
	 */
	public isStaticIndexed(): boolean {
		return (this.follow ? this.follow.isStaticIndexed() : true) && super.isStaticIndexed()
	}

	/**
	 * Return a buffer of children shape with recursion
	 *
	 * @protected
	 * @param {number} generateId
	 * @param {PropArguments} propArguments
	 * @returns {Float32Array}
	 */
	protected generateBuffer(generateId: number, propArguments: PropArguments): Float32Array {
		if (this.shape && this.follow) {
			if (
				typeof this.shapeFollowBuffer === 'undefined' ||
				this.shapeUseParent ||
				this.shape.generateId !== generateId ||
				this.follow.generateId !== generateId
			) {
				this.bindBuffer(generateId, propArguments)
			}

			return this.shapeFollowBuffer as Float32Array
		}

		return Shape.EMPTY_BUFFER
	}

	/**
	 * Generate Recoursive shape buffer
	 *
	 * @protected
	 * @param {number} generateId
	 * @param {PropArguments} propArguments
	 */
	protected bindBuffer(generateId: number, propArguments: PropArguments): void {
		const followShape = this.follow as SceneChild

		followShape.generate(generateId, false, propArguments)
		const followBuffer = followShape.getBuffer() as Float32Array
		// const followIndexed = followShape.getIndexedBuffer() as Array<IBufferIndex>

		const followPropArguments = {
			...propArguments,
			follow: {
				index: 1,
				offset: 1,
				count: 1,
			},
			// follow_repetition: followIndexed[0].repetition,
		}

		const childShape = this.shape as SceneChild<IParentFollowPropArguments>
		childShape.generate(generateId, false, followPropArguments)
		let shapeBuffer = childShape.getBuffer() as Float32Array

		// const tmpBounding = [undefined, undefined, undefined, undefined]
		const singleShapeBufferLength = shapeBuffer.length
		const followShapeBuffer = new Float32Array(singleShapeBufferLength * (followBuffer.length / 2))
		const totalFollowVertexCount = followBuffer.length / 2

		for (
			let currentShapeFollowRepetition = 0;
			currentShapeFollowRepetition < totalFollowVertexCount;
			currentShapeFollowRepetition++
		) {
			const currentFollowRepetition = {
				index: currentShapeFollowRepetition + 1,
				offset: totalFollowVertexCount > 1 ? currentShapeFollowRepetition / (totalFollowVertexCount - 1) : 1,
				count: totalFollowVertexCount,
			}

			if (this.shapeUseFollow) {
				followPropArguments.follow = currentFollowRepetition
				// followPropArguments.follow_repetition = followIndexed[currentShapeFollowRepetition].repetition
				childShape.generate(generateId, false, followPropArguments)

				shapeBuffer = childShape.getBuffer() as Float32Array
			}

			const shapeVertexBufferIndex = currentShapeFollowRepetition * singleShapeBufferLength

			// const centerVertexIndex = parentRecursionBufferStartIndex + currentShapeRecursionRepetition * 2
			const centerVertexIndex = currentShapeFollowRepetition * 2

			const centerX = followBuffer[centerVertexIndex]
			const centerY = followBuffer[centerVertexIndex + 1]

			for (let i = 0, len = shapeBuffer.length; i < len; i += 2) {
				followShapeBuffer[shapeVertexBufferIndex + i] = centerX + shapeBuffer[i]
				followShapeBuffer[shapeVertexBufferIndex + i + 1] = centerY + shapeBuffer[i + 1]

				// Bounding.add(
				// 	tmpBounding,
				// 	followShapeBuffer[shapeVertexBufferIndex + i],
				// 	followShapeBuffer[shapeVertexBufferIndex + i + 1]
				// )
			}
		}

		// Bounding.bind(this.currentGenerationRecursiveBounding, tmpBounding)
		this.shapeFollowBuffer = followShapeBuffer
	}

	/**
	 * Add this to indexedBuffer
	 *
	 * @protected
	 * @param {number} frameLength
	 * @param {IRepetition} repetition
	 * @returns {number} nextIndex
	 */
	protected addIndex(frameLength: number, repetition: IRepetition, singleRepetitionBounding: IShapeBounding): void {
		if (this.shape) {
			const propArguments = { repetition, shape: this } as IPropArguments as PropArguments

			const bufferIndex: IBufferIndexWithFollow = {
				shape: this,
				frameLength: frameLength,
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
				follow: {
					index: 1,
					offset: 1,
					count: 1,
				},
			}

			const childIndexedBuffer: Array<IBufferIndex> = this.shape.getIndexedBuffer() || []

			for (
				let childIndexed = 0, childIndexedLen = childIndexedBuffer.length;
				childIndexed < childIndexedLen;
				childIndexed++
			) {
				const vertexCount = this.follow.getBuffer()!.length / 2 // this.follow.getBufferLength({ ...propArguments, parent: { ...bufferIndex } }) / 2

				for (let j = 0, len = vertexCount; j < len; j++) {
					const followOffset = len > 1 ? j / (len - 1) : 1

					for (
						let childIndexed = 0, childIndexedLen = childIndexedBuffer.length;
						childIndexed < childIndexedLen;
						childIndexed++
					) {
						const currentIndexed = { ...childIndexedBuffer[childIndexed] }
						const currentFollowRepetition: IBaseRepetition = {
							index: j + 1,
							offset: followOffset,
							count: len,
						}

						const followBufferIndex = { ...bufferIndex, follow: currentFollowRepetition }
						const parent = currentIndexed.parent
							? Shape.setIndexedParent(currentIndexed.parent, followBufferIndex)
							: followBufferIndex

						this.indexedBuffer.push({ ...currentIndexed, parent })
					}
				}
			}
		}
	}

	/**
	 * Retturn summation value
	 *
	 * @static
	 * @param {number} recursion
	 * @param {number} vertexCount
	 * @returns {number}
	 */
	static summmation(recursion: number, vertexCount: number): number {
		if (recursion === 1) return 1

		let result = 1
		for (let i = 1; i < recursion; i++) result += vertexCount ** i

		return result
	}

	/**
	 * Empty recursion repetition
	 *
	 * @static
	 * @return {*}  {IRecursionRepetition}
	 */
	static getEmptyRecursion(): IRecursionRepetition {
		return {
			index: 1,
			offset: 1,
			count: 1,
			level: { index: 1, offset: 1, count: 1 },
		}
	}
}

export { ShapeFollow }
