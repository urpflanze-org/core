import { IPropArguments, ISceneChildProps, ISceneChildSettings, IStreamArguments } from './types/scene-child'
import { IShapeBounding } from './types/shape-base'
import { IBufferIndex } from './types/indexedBuffer'

import { Scene } from './Scene'
import { SceneChild } from './SceneChild'
import { ShapeBase } from './shapes/ShapeBase'
import { Bounding } from './math/bounding'

/**
 * A SceneChild container, propagates properties to children
 *
 * @order 3
 * @category Core.Scene
 * @extends {SceneChild}
 * @example
 * ```javascript
 * // Group example
 *
 * const rect = new Urpflanze.Rect({
 * 	distance: 100 // <- if a property is set the group will not overwrite it
 * })
 * const group = new Urpflanze.Group({
 * 	repetitions: 3,
 * 	distance: 200
 * })
 *
 * group.add(rect)
 * group.add(new Urpflanze.Triangle())
 * ```
 * @class Group
 */
class Group extends SceneChild {
	/**
	 * a list of shapes or groups
	 *
	 * @internal
	 * @ignore
	 */
	private children: Array<SceneChild>

	/**
	 * Creates an instance of Group
	 *
	 * @param {ISceneChildSettings} [settings={}]
	 * @memberof Group
	 */
	constructor(settings: ISceneChildSettings = {}) {
		settings.type = 'Group'
		super(settings)

		this.children = []

		// remove sceneChild props
		;['id', 'name', 'data', 'order', 'type'].forEach((prop: string) => {
			if (prop in settings) delete settings[prop as keyof ISceneChildSettings]
		})

		this.props = settings
	}

	/**
	 * Check group has static children
	 *
	 * @returns {boolean}
	 * @memberof Group
	 */
	public isStatic(): boolean {
		const children = this.children
		for (let i = 0, len = children.length; i < len; i++) if (!children[i].isStatic()) return false

		return true
	}

	/**
	 * Check group has static children indexed
	 *
	 * @returns {boolean}
	 * @memberof Group
	 */
	public isStaticIndexed(): boolean {
		const children = this.children
		for (let i = 0, len = children.length; i < len; i++) if (!children[i].isStaticIndexed()) return false

		return true
	}

	/**
	 * Add item to Group
	 *
	 * @param {Array<SceneChild>} items
	 * @memberof Group
	 */
	public add(...items: Array<SceneChild>): void {
		for (let i = 0, len = items.length; i < len; i++) {
			const item = items[i]
			const rawItemProps = item.getProps()

			;(Object.keys(this.props) as Array<keyof ISceneChildProps>).forEach((propKey: keyof ISceneChildProps) => {
				if (typeof rawItemProps[propKey] === 'undefined') item.setProp(propKey, this.props[propKey])
			})

			item.order =
				typeof item.order !== 'undefined'
					? item.order
					: this.children.length > 0
					? Math.max.apply(
							this,
							this.children.map(e => e.order || 0)
					  ) + 1
					: 0
			item.bUseParent = item.bUseParent || this.bUseParent

			this.scene && Scene.propagateToChilden(item, this.scene)

			this.children.push(item)
		}

		this.sortChildren()
	}

	/**
	 * Sort children
	 *
	 * @memberof Group
	 */
	public sortChildren(): void {
		this.children.sort((a: SceneChild, b: SceneChild) => (a.order as number) - (b.order as number))

		this.children = this.children.map((child, index) => {
			child.order = index
			return child
		})

		this.clearBuffer(true)
	}

	/**
	 * Return shape children
	 *
	 * @returns {Array<SceneChild>}
	 * @memberof Group
	 */
	public getChildren(): Array<SceneChild> {
		return this.children
	}

	/**
	 * Find scene child from id or name
	 *
	 * @param {number | string} idOrName
	 * @returns {(SceneChild | null)}
	 * @memberof Group
	 */
	public find(idOrName: number | string): SceneChild | null {
		if (this.id === idOrName || this.name === idOrName) return this

		const children: Array<SceneChild> = this.getChildren()

		for (let i = 0, len = children.length; i < len; i++) {
			const result: SceneChild | null = children[i].find(idOrName)

			if (result !== null) return result
		}

		return null
	}

	/**
	 * Get item from group
	 *
	 * @param {number} index
	 * @returns {(SceneChild | null)}
	 * @memberof Group
	 */
	public get(index: number): SceneChild | null {
		return index >= 0 && index < this.children.length ? this.children[index] : null
	}

	/**
	 * Remove item from group
	 *
	 * @param {number} index
	 * @returns {(false | Array<SceneChild>)}
	 * @memberof Group
	 */
	public remove(index: number): false | Array<SceneChild> {
		if (index >= 0 && index < this.children.length) {
			const removed: Array<SceneChild> = this.children.splice(index, 1)
			this.clearBuffer(true)
			return removed
		}

		return false
	}

	/**
	 * Remove from id
	 *
	 * @param {number} id
	 * @memberof Scene
	 */
	public removeFromId(id: number | string): void {
		for (let i = 0, len = this.children.length; i < len; i++) {
			if (this.children[i].id == id) {
				this.children.splice(i, 1)

				return this.clearBuffer(true)
			}
		}
	}

	/**
	 * Generate children buffers
	 *
	 * @param {number} generateId
	 * @param {boolean} [bDirectSceneChild=false]
	 * @param {IPropArguments} [parentPropArguments]
	 * @memberof Group
	 */
	public generate(generateId: number, bDirectSceneChild = false, parentPropArguments?: IPropArguments): void {
		this.children.forEach(item => item.generate(generateId, bDirectSceneChild, parentPropArguments))
	}

	/**
	 * Sum the children bounding
	 *
	 * @return {IShapeBounding}
	 */
	public getBounding(): IShapeBounding {
		const boundings: Array<IShapeBounding> = []
		const bounding: IShapeBounding = Bounding.empty()

		if (this.children.length > 0) {
			this.children.forEach(item => boundings.push(item.getBounding()))

			for (let i = 0, len = this.children.length; i < len; i++) {
				bounding.x = bounding.x > boundings[i].x ? boundings[i].x : bounding.x
				bounding.y = bounding.y > boundings[i].y ? boundings[i].y : bounding.y
				bounding.width = bounding.width < boundings[i].width ? boundings[i].width : bounding.width
				bounding.height = bounding.height < boundings[i].height ? boundings[i].height : bounding.height
			}

			bounding.cx = bounding.x + bounding.width / 2
			bounding.cy = bounding.y + bounding.height / 2
		}

		return bounding
	}

	/**
	 * Chear children buffer
	 *
	 * @param {boolean} [bClearIndexed=false]
	 * @param {boolean} [bPropagateToParents=false]
	 * @memberof Group
	 */
	public clearBuffer(bClearIndexed = false, bPropagateToParents = true): void {
		this.children.forEach(item => item.clearBuffer(bClearIndexed, false))

		if (this.scene && bPropagateToParents) {
			const parents = this.scene.getParentsOfSceneChild(this)
			parents.length > 0 && parents[parents.length - 1].clearBuffer(bClearIndexed, bPropagateToParents /* true */)
		}
		// if (bPropagateToParents && this.scene)
		// {
		//     const parents = this.scene.getParentsOfSceneChild(this)
		//     parents.length > 0 && parents[parents.length - 1].clearBuffer(bClearIndexed, true, false)
		// }

		// if (bPropagateToChildren)
		// {
		//     this.children.forEach(sceneChild => sceneChild.clearBuffer(bClearIndexed, false, true))
		// }
	}

	/**
	 * Set a single or multiple props
	 *
	 * @abstract
	 * @param {(keyof ISceneChildProps | ISceneChildProps)} key
	 * @param {*} [value]
	 * @memberof SceneChild
	 */
	public setProp(key: keyof ISceneChildProps | ISceneChildProps, value?: any): void {
		if (typeof key === 'object')
			Object.keys(key).forEach(
				(k: string) => (this.props[k as keyof ISceneChildProps] = key[k as keyof ISceneChildProps] as any)
			)
		else this.props[key] = value

		this.children.forEach(item => item.setProp(key, value))
	}

	/**
	 * Set a single or multiple props
	 *
	 * @param {(keyof ISceneChildProps | ISceneChildProps)} key
	 * @param {*} [value]
	 * @memberof ShapeBase
	 */
	public setPropUnsafe(key: keyof ISceneChildProps | ISceneChildProps, value?: any): void {
		super.setPropUnsafe(key, value)

		this.children.forEach(item => item.setPropUnsafe(key, value))
	}

	/**
	 * Return length of buffer
	 *
	 * @param {IPropArguments} propArguments
	 * @returns {number}
	 * @memberof Group
	 */
	public getBufferLength(propArguments?: IPropArguments): number {
		return this.children.map(sceneChild => sceneChild.getBufferLength(propArguments)).reduce((p, c) => p + c, 0)
	}

	/**
	 * return a single buffer binded from children
	 *
	 * @returns {Float32Array}
	 * @memberof Group
	 */
	public getBuffer(): Float32Array | undefined {
		const buffers: Array<Float32Array> = this.children
			.map(item => item.getBuffer())
			.filter(b => b !== undefined) as Array<Float32Array>

		const size = buffers.reduce((currLength: number, buffer: Float32Array) => currLength + buffer.length, 0)

		if (size > 0) {
			const result = new Float32Array(size)
			result.set(buffers[0], 0)

			for (let i = 1, offset = 0, len = buffers.length; i < len; i++) {
				offset += buffers[i - 1].length
				result.set(buffers[i], offset)
			}

			return result
		}

		return ShapeBase.EMPTY_BUFFER
	}

	/**
	 * return a single buffer binded from children
	 *
	 * @returns {(Array<IBufferIndex> | undefined)}
	 * @memberof Group
	 */
	public getIndexedBuffer(): Array<IBufferIndex> | undefined {
		const indexed = this.children.map(item => item.getIndexedBuffer()).filter(b => b !== undefined) as Array<
			Array<IBufferIndex>
		>

		return ([] as Array<IBufferIndex>).concat.apply([], indexed)
	}

	/**
	 * Call strem on children
	 *
	 * @param {(streamArguments: IStreamArguments) => void} callback
	 * @memberof Group
	 */
	public stream(callback: (streamArguments: IStreamArguments) => void): void {
		this.children.forEach(item => item.stream(callback))
	}

	// /**
	//  * Remove duplicate props
	//  *
	//  * @private
	//  * @static
	//  * @param {Group} group
	//  * @param {SceneChild} dest
	//  * @returns {ISceneChildProps}
	//  * @memberof Group
	//  */
	// private static removeIntersected(group: Group, dest: SceneChild): ISceneChildProps {
	// 	const groupProps = group.getProps()
	// 	const destProps = dest.getProps()

	// 	const groupPropsKeys = Object.keys(groupProps) as Array<keyof ISceneChildProps>
	// 	const destPropsKeys = Object.keys(destProps) as Array<keyof ISceneChildProps>

	// 	const result: ISceneChildProps = {}

	// 	groupPropsKeys.forEach((key: keyof ISceneChildProps) => {
	// 		// destPropsKeys.indexOf(key) >= 0 && !isDef(destProps[key]) && (result[key] = groupProps[key] as any)
	// 		destPropsKeys.indexOf(key) >= 0 && (result[key] = groupProps[key] as any)
	// 	})

	// 	return result
	// }
}

export { Group }
