/*!
 * @license Urpflanze v"0.5.4"
 * urpflanze.js
 *
 * Github: https://github.com/urpflanze-org/core
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/******/ var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ERepetitionType": () => (/* reexport safe */ _repetitions__WEBPACK_IMPORTED_MODULE_2__.ERepetitionType),
/* harmony export */   "EBoundingType": () => (/* reexport safe */ _shape_base__WEBPACK_IMPORTED_MODULE_5__.EBoundingType)
/* harmony export */ });
/* harmony import */ var _indexedBuffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _propArguments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _repetitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _scene_child__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _shape_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _shape_primitives__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9);








//# sourceMappingURL=index.js.map

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=indexedBuffer.js.map

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=propArguments.js.map

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ERepetitionType": () => (/* binding */ ERepetitionType)
/* harmony export */ });
/**
 * Repetition type enumerator.
 *
 * @category Core.Repetition
 * @internal
 */
var ERepetitionType;
(function (ERepetitionType) {
    /**
     * Defines the type of repetition of the shape,
     * in a circular way starting from the center of the scene
     * @order 1
     */
    ERepetitionType[ERepetitionType["Ring"] = 1] = "Ring";
    /**
     * Defines the type of repetition of the shape,
     * on a nxm grid starting from the center of the scene
     * @order 2
     */
    ERepetitionType[ERepetitionType["Matrix"] = 2] = "Matrix";
})(ERepetitionType || (ERepetitionType = {}));
//# sourceMappingURL=repetitions.js.map

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=scene-child.js.map

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=scene.js.map

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EBoundingType": () => (/* binding */ EBoundingType)
/* harmony export */ });
var EBoundingType;
(function (EBoundingType) {
    /**
     * Relative to the real bounding of the shape
     * @order 2
     */
    EBoundingType[EBoundingType["Relative"] = 1] = "Relative";
    /**
     * Fixed to te width and height of the shape
     * @order 3
     */
    EBoundingType[EBoundingType["Fixed"] = 2] = "Fixed";
})(EBoundingType || (EBoundingType = {}));
//# sourceMappingURL=shape-base.js.map

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//////
//# sourceMappingURL=shape-primitives.js.map

/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Shape

//# sourceMappingURL=shapes.js.map

/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EPSILON": () => (/* binding */ EPSILON),
/* harmony export */   "ARRAY_TYPE": () => (/* binding */ ARRAY_TYPE),
/* harmony export */   "RANDOM": () => (/* binding */ RANDOM),
/* harmony export */   "setMatrixArrayType": () => (/* binding */ setMatrixArrayType),
/* harmony export */   "toRadian": () => (/* binding */ toRadian),
/* harmony export */   "equals": () => (/* binding */ equals)
/* harmony export */ });
/**
 * Common utilities
 * @module glMatrix
 */
// Configuration Constants
var EPSILON = 0.000001;
var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
var RANDOM = Math.random;
/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Float32ArrayConstructor | ArrayConstructor} type Array type, such as Float32Array or Array
 */

function setMatrixArrayType(type) {
  ARRAY_TYPE = type;
}
var degree = Math.PI / 180;
/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */

function toRadian(a) {
  return a * degree;
}
/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */

function equals(a, b) {
  return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
}
if (!Math.hypot) Math.hypot = function () {
  var y = 0,
      i = arguments.length;

  while (i--) {
    y += arguments[i] * arguments[i];
  }

  return Math.sqrt(y);
};

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scene": () => (/* binding */ Scene)
/* harmony export */ });
/* harmony import */ var _SceneChild__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _Group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _shapes_Shape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);



/**
 * Container for all SceneChild.
 * The main purpose is to manage the drawing order and update the child buffers
 *
 * @order 1
 * @category Core.Scene
 * @class Scene
 */
class Scene {
    /**
     * Creates an instance of Scene.
     * You can see the default values in the property definitions
     */
    constructor(settings = {}) {
        /**
         * Logical number, the drawer will take care of defining the unit of measure
         */
        this.width = 400;
        /**
         * Logical number, the drawer will take care of defining the unit of measure
         */
        this.height = 400;
        /**
         * Default background color (black)
         */
        this.background = 'hsla(0, 0%, 0%, 1)';
        /**
         * Default ScenePrimitive stroke color (white)
         */
        this.color = 'hsla(0, 0%, 100%, 1)';
        /**
         * Current time
         */
        this.currentTime = 0;
        if (typeof settings.width !== 'undefined')
            this.width = settings.width;
        if (typeof settings.height !== 'undefined')
            this.height = settings.height;
        if (typeof settings.background !== 'undefined')
            this.background = settings.background;
        if (typeof settings.color !== 'undefined')
            this.color = settings.color;
        this.children = [];
        this.center = [this.width / 2, this.height / 2];
        this.anchor =
            settings.anchor && Array.isArray(settings.anchor)
                ? [
                    settings.anchor[0] === 'left' ? 0 : settings.anchor[0] === 'right' ? this.width : this.center[0],
                    settings.anchor[1] === 'top' ? 0 : settings.anchor[1] === 'bottom' ? this.height : this.center[1],
                ]
                : [this.center[0], this.center[1]];
    }
    /**
     * Return width percentage
     *
     * @param {number} [percentage=100]
     * @returns {number}
     */
    getWidth(percentage = 100) {
        return (this.width * percentage) / 100;
    }
    /**
     * Return height percentage
     *
     * @param {number} [percentage=100]
     * @returns {number}
     */
    getHeight(percentage = 100) {
        return (this.height * percentage) / 100;
    }
    /**
     * Resize the scene size
     *
     * @param {number} width
     * @param {number} [height=width]
     * @memberof Scene
     */
    resize(width, height = width) {
        this.width = width;
        this.height = height;
        this.center = [this.width / 2, this.height / 2];
        const anchor = [this.width / this.anchor[0], this.height / this.anchor[1]];
        this.anchor = [this.width / anchor[0], this.height / anchor[1]];
        this.children.forEach(sceneChild => sceneChild.clearBuffer(true, false));
    }
    /**
     * Update all children, generate a streamable buffer for drawing
     *
     * @param {number} [atTime] time in ms
     * @memberof Scene
     */
    update(atTime = 0) {
        this.currentTime = atTime;
        for (let i = 0, len = this.children.length; i < len; i++) {
            this.children[i].generate(this.currentTime, true);
        }
    }
    /**
     * Traverse the child buffer and use it with callback
     *
     * @param {(streamArguments: IStreamArguments) => void} callback
     * @memberof Scene
     */
    stream(callback) {
        this.children.forEach(sceneChild => sceneChild.stream(callback));
    }
    /*
     |--------------------------------------------------------------------------
     |  SceneChild
     |--------------------------------------------------------------------------
     */
    /**
     * Return a list of children
     *
     * @returns {Array<SceneChild>}
     * @memberof Scene
     */
    getChildren() {
        return this.children;
    }
    /**
     * Add SceneChild to Scene, pass `order` as last parameter for drawing priorities
     *
     * @param {Array<SceneChild>} items
     * @param {number} [order]
     * @memberof Scene
     */
    add(...items /**, order: number */) {
        const order = typeof items[items.length - 1] === 'number' ? items[items.length - 1] : undefined;
        const len = items.length - (typeof order === 'undefined' ? 0 : 1);
        for (let i = 0; i < len; i++) {
            const item = items[i];
            item.order =
                typeof order !== 'undefined'
                    ? order + i
                    : typeof item.order !== 'undefined'
                        ? item.order
                        : this.children.length > 0
                            ? Math.max.apply(this, this.children.map(e => e.order || 0)) + 1
                            : 0;
            Scene.propagateToChilden(item, this);
            this.children.push(item);
            item.clearBuffer(true, false);
            item.generate(0, true);
        }
        this.sortChildren();
    }
    /**
     * Sort children by order
     *
     * @memberof Scene
     */
    sortChildren() {
        this.children.sort((a, b) => a.order - b.order);
        this.children = this.children.map((child, index) => {
            child.order = index;
            return child;
        });
    }
    /**
     * Find sceneChild from id or name in the whole scene
     *
     * @param {string | number} idOrName
     * @returns {(SceneChild | null)}
     * @memberof Scene
     */
    find(idOrName) {
        const children = this.getChildren();
        for (let i = 0, len = children.length; i < len; i++) {
            const result = children[i].find(idOrName);
            if (result !== null)
                return result;
        }
        return null;
    }
    /**
     * Get shape by index
     *
     * @param {number} index
     * @returns {(SceneChild | null)}
     * @memberof Scene
     */
    get(index) {
        return index >= 0 && index < this.children.length ? this.children[index] : null;
    }
    /**
     * Remove a shape by index
     *
     * @param {number} index
     * @memberof Scene
     */
    remove(index) {
        index >= 0 && index < this.children.length && this.children.splice(index, 1);
    }
    /**
     * Removes all children
     *
     * @memberof Scene
     */
    removeChildren() {
        this.children = [];
    }
    /**
     * Remove sceneChild by id or name
     *
     * @param {number | number} idOrName
     * @memberof Scene
     */
    removeFromId(idOrName) {
        for (let i = 0, len = this.children.length; i < len; i++)
            if (this.children[i].id === idOrName || this.children[i].name === idOrName) {
                this.children.splice(i, 1);
                return;
            }
    }
    /**
     * Return true if sceneChild is direct children
     *
     * @param {SceneChild} sceneChild
     * @returns {boolean}
     * @memberof Scene
     */
    isFirstLevelChild(sceneChild) {
        for (let i = 0, len = this.children.length; i < len; i++)
            if (this.children[i].id === sceneChild.id)
                return true;
        const parents = this.getParentsOfSceneChild(sceneChild);
        return parents.length === 1 && parents[0] instanceof _Group__WEBPACK_IMPORTED_MODULE_1__.Group;
    }
    /**
     * Returns the list of sceneChild hierarchy starting from the scene
     *
     * @param {SceneChild} sceneChild
     * @returns {Array<SceneChild>}
     * @memberof Scene
     */
    getParentsOfSceneChild(sceneChild) {
        const result = Scene.getParentsOfSceneChild(this, sceneChild);
        if (result) {
            result.splice(0, 1);
            return result;
        }
        return [];
    }
    /**
     * Returns the list of sceneChild hierarchy starting from the scene
     *
     * @static
     * @param {(Scene | SceneChild)} current
     * @param {SceneChild} sceneChild
     * @param {(Array<SceneChild | Scene>)} [parents=[]]
     * @returns {(Array<SceneChild | Scene> | null)}
     * @memberof Scene
     */
    static getParentsOfSceneChild(current, sceneChild, parents = []) {
        let result;
        if (current instanceof _SceneChild__WEBPACK_IMPORTED_MODULE_0__.SceneChild) {
            if (current.id == sceneChild.id)
                return parents;
            if (current instanceof _shapes_Shape__WEBPACK_IMPORTED_MODULE_2__.Shape && current.shape) {
                const tmpParents = parents.slice();
                tmpParents.push(current);
                if ((result = Scene.getParentsOfSceneChild(current.shape, sceneChild, tmpParents)))
                    return result;
            }
        }
        if (current instanceof Scene || current instanceof _Group__WEBPACK_IMPORTED_MODULE_1__.Group) {
            const children = current.getChildren();
            parents.push(current);
            for (let i = 0, len = children.length; i < len; i++) {
                const child = children[i];
                if ((result = Scene.getParentsOfSceneChild(child, sceneChild, parents)))
                    return result;
            }
            parents.pop();
        }
        return null;
    }
    /**
     * Walk through the scene
     *
     * @static
     * @param {SceneChild} callbackk
     * @param {(Scene | SceneChild)} current
     * @memberof Scene
     */
    static walk(callback, current) {
        if (current instanceof _SceneChild__WEBPACK_IMPORTED_MODULE_0__.SceneChild) {
            if (callback(current) === false)
                return false;
            if (current instanceof _shapes_Shape__WEBPACK_IMPORTED_MODULE_2__.Shape && current.shape)
                if (Scene.walk(callback, current.shape) === false)
                    return false;
        }
        if (current instanceof Scene || current instanceof _Group__WEBPACK_IMPORTED_MODULE_1__.Group) {
            const children = current.getChildren();
            for (let i = 0, len = children.length; i < len; i++) {
                const child = children[i];
                if (Scene.walk(callback, child) === false)
                    return false;
            }
        }
    }
    /**
     * Propagate scene to sceneChild (and children)
     *
     * @static
     * @param {SceneChild} sceneChild
     * @param {Scene} scene
     * @memberof Scene
     */
    static propagateToChilden(sceneChild, scene) {
        sceneChild.scene = scene;
        if (sceneChild instanceof _Group__WEBPACK_IMPORTED_MODULE_1__.Group) {
            sceneChild.getChildren().forEach((item) => {
                Scene.propagateToChilden(item, scene);
            });
        }
        else if (sceneChild instanceof _shapes_Shape__WEBPACK_IMPORTED_MODULE_2__.Shape && sceneChild.shape) {
            sceneChild.shape.scene = scene;
            Scene.propagateToChilden(sceneChild.shape, scene);
        }
    }
}

//# sourceMappingURL=Scene.js.map

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SceneChild": () => (/* binding */ SceneChild)
/* harmony export */ });
/**
 * Autoincrement sceneChild default id
 *
 * @internal
 * @ignore
 */
let __id = 0;
/**
 * The element to be added into a scene.
 * Preserve props, drawing order, generate and return buffers.
 * The only implementations of this class are <a href="[base_url]/Group">Group</a> and <a href="[base_url]/ShapeBase">ShapeBase</a>
 *
 * @abstract
 * @category Core.Abstract
 * @order 2
 * @class SceneChild
 */
class SceneChild {
    /**
     * Creates an instance of SceneChild.
     * Base values will be assigned in case they are not passed
     *
     * @param {ISceneChildSettings} settings
     */
    constructor(settings) {
        /**
         * Shape generation id
         * used for prevent buffer calculation
         *
         * @internal
         * @ignore
         */
        this.generateId = -1;
        this.id = settings.id ?? ++__id;
        this.type = settings.type || 'SceneChild';
        this.name = settings.name || this.type + '_' + this.id;
        this.data = settings.data || {};
        this.props = {};
    }
    /**
     * Find this or form or children.
     * Overridden by classes that extend it
     *
     * @param {string | number} idOrName
     * @returns {(SceneChild | null)}
     */
    find(idOrName) {
        if (this.id === idOrName || this.name === idOrName)
            return this;
        return null;
    }
    /**
     * Return the sceneChild properties
     *
     * @returns {Props}
     */
    getProps() {
        return this.props;
    }
    /**
     * Return a sceneChild prop or default value
     *
     * @param {keyof Props} key
     * @param {PropArguments} [propArguments]
     * @param {*} [defaultValue]
     * @returns {*}
     */
    getProp(key, propArguments, defaultValue) {
        return (this.props[key] ?? defaultValue);
    }
    /**
     * Check SceneChild has prop
     *
     * @param {keyof Props} key
     * @returns
     */
    hasProp(key) {
        return typeof this.props[key] !== 'undefined';
    }
    /**
     * Set a single or multiple props
     *
     * @param {(keyof ISceneChildProps<PropArguments> | ISceneChildProps<PropArguments>)} key
     * @param {*} [value]
     */
    setPropUnsafe(key, value) {
        if (typeof key == 'string')
            this.props[key] = value;
        else
            Object.keys(key).forEach((k) => (this.props[k] = key[k]));
    }
}

//# sourceMappingURL=SceneChild.js.map

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Group": () => (/* binding */ Group)
/* harmony export */ });
/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _SceneChild__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _shapes_ShapeBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _modifiers_Adapt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);




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
class Group extends _SceneChild__WEBPACK_IMPORTED_MODULE_1__.SceneChild {
    /**
     * Creates an instance of Group
     *
     * @param {ISceneChildSettings} [settings={}]
     * @memberof Group
     */
    constructor(settings = {}) {
        settings.type = 'Group';
        super(settings);
        this.children = [];
        ['id', 'name', 'data', 'order', 'type'].forEach((prop) => {
            if (prop in settings)
                delete settings[prop];
        });
        this.props = settings;
    }
    /**
     * Check group has static children
     *
     * @returns {boolean}
     * @memberof Group
     */
    isStatic() {
        const children = this.children;
        for (let i = 0, len = children.length; i < len; i++)
            if (!children[i].isStatic())
                return false;
        return true;
    }
    /**
     * Check group has static children indexed
     *
     * @returns {boolean}
     * @memberof Group
     */
    isStaticIndexed() {
        const children = this.children;
        for (let i = 0, len = children.length; i < len; i++)
            if (!children[i].isStaticIndexed())
                return false;
        return true;
    }
    /**
     * Add item to Group
     *
     * @param {Array<SceneChild>} items
     * @memberof Group
     */
    add(...items) {
        for (let i = 0, len = items.length; i < len; i++) {
            const item = items[i];
            const rawItemProps = item.getProps();
            Object.keys(this.props).forEach((propKey) => {
                if (typeof rawItemProps[propKey] === 'undefined')
                    item.setProp(propKey, this.props[propKey]);
            });
            item.order =
                typeof item.order !== 'undefined'
                    ? item.order
                    : this.children.length > 0
                        ? Math.max.apply(this, this.children.map(e => e.order || 0)) + 1
                        : 0;
            this.scene && _Scene__WEBPACK_IMPORTED_MODULE_0__.Scene.propagateToChilden(item, this.scene);
            this.children.push(item);
        }
        this.sortChildren();
    }
    /**
     * Sort children
     *
     * @memberof Group
     */
    sortChildren() {
        this.children.sort((a, b) => a.order - b.order);
        this.children = this.children.map((child, index) => {
            child.order = index;
            return child;
        });
        this.clearBuffer(true);
    }
    /**
     * Return shape children
     *
     * @returns {Array<SceneChild>}
     * @memberof Group
     */
    getChildren() {
        return this.children;
    }
    /**
     * Find scene child from id or name
     *
     * @param {number | string} idOrName
     * @returns {(SceneChild | null)}
     * @memberof Group
     */
    find(idOrName) {
        if (this.id === idOrName || this.name === idOrName)
            return this;
        const children = this.getChildren();
        for (let i = 0, len = children.length; i < len; i++) {
            const result = children[i].find(idOrName);
            if (result !== null)
                return result;
        }
        return null;
    }
    /**
     * Get item from group
     *
     * @param {number} index
     * @returns {(SceneChild | null)}
     * @memberof Group
     */
    get(index) {
        return index >= 0 && index < this.children.length ? this.children[index] : null;
    }
    /**
     * Remove item from group
     *
     * @param {number} index
     * @returns {(false | Array<SceneChild>)}
     * @memberof Group
     */
    remove(index) {
        if (index >= 0 && index < this.children.length) {
            const removed = this.children.splice(index, 1);
            this.clearBuffer(true);
            return removed;
        }
        return false;
    }
    /**
     * Remove from id
     *
     * @param {number} id
     * @memberof Scene
     */
    removeFromId(id) {
        for (let i = 0, len = this.children.length; i < len; i++) {
            if (this.children[i].id == id) {
                this.children.splice(i, 1);
                return this.clearBuffer(true);
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
    generate(generateId, bDirectSceneChild = false, parentPropArguments) {
        this.generateId = generateId;
        this.children.forEach(item => item.generate(generateId, bDirectSceneChild, parentPropArguments));
    }
    /**
     * Sum the children bounding
     *
     * @return {IShapeBounding}
     */
    getBounding() {
        const boundings = [];
        const bounding = _modifiers_Adapt__WEBPACK_IMPORTED_MODULE_3__.Bounding.empty();
        if (this.children.length > 0) {
            this.children.forEach(item => boundings.push(item.getBounding()));
            for (let i = 0, len = this.children.length; i < len; i++) {
                bounding.x = bounding.x > boundings[i].x ? boundings[i].x : bounding.x;
                bounding.y = bounding.y > boundings[i].y ? boundings[i].y : bounding.y;
                bounding.width = bounding.width < boundings[i].width ? boundings[i].width : bounding.width;
                bounding.height = bounding.height < boundings[i].height ? boundings[i].height : bounding.height;
            }
            bounding.cx = bounding.x + bounding.width / 2;
            bounding.cy = bounding.y + bounding.height / 2;
        }
        return bounding;
    }
    /**
     * Chear children buffer
     *
     * @param {boolean} [bClearIndexed=false]
     * @param {boolean} [bPropagateToParents=false]
     * @memberof Group
     */
    clearBuffer(bClearIndexed = false, bPropagateToParents = true) {
        this.children.forEach(item => item.clearBuffer(bClearIndexed, false));
        if (this.scene && bPropagateToParents) {
            const parents = this.scene.getParentsOfSceneChild(this);
            parents.length > 0 && parents[parents.length - 1].clearBuffer(bClearIndexed, bPropagateToParents /* true */);
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
    setProp(key, value) {
        if (typeof key === 'object')
            Object.keys(key).forEach((k) => (this.props[k] = key[k]));
        else
            this.props[key] = value;
        this.children.forEach(item => item.setProp(key, value));
    }
    /**
     * Set a single or multiple props
     *
     * @param {(keyof ISceneChildProps | ISceneChildProps)} key
     * @param {*} [value]
     * @memberof ShapeBase
     */
    setPropUnsafe(key, value) {
        super.setPropUnsafe(key, value);
        this.children.forEach(item => item.setPropUnsafe(key, value));
    }
    /**
     * Return length of buffer
     *
     * @param {IPropArguments} propArguments
     * @returns {number}
     * @memberof Group
     */
    getBufferLength(propArguments) {
        return this.children.map(sceneChild => sceneChild.getBufferLength(propArguments)).reduce((p, c) => p + c, 0);
    }
    /**
     * return a single buffer binded from children
     *
     * @returns {Float32Array}
     * @memberof Group
     */
    getBuffer() {
        const buffers = this.children
            .map(item => item.getBuffer())
            .filter(b => b !== undefined);
        const size = buffers.reduce((currLength, buffer) => currLength + buffer.length, 0);
        if (size > 0) {
            const result = new Float32Array(size);
            result.set(buffers[0], 0);
            for (let i = 1, offset = 0, len = buffers.length; i < len; i++) {
                offset += buffers[i - 1].length;
                result.set(buffers[i], offset);
            }
            return result;
        }
        return _shapes_ShapeBase__WEBPACK_IMPORTED_MODULE_2__.ShapeBase.EMPTY_BUFFER;
    }
    /**
     * return a single buffer binded from children
     *
     * @returns {(Array<IBufferIndex> | undefined)}
     * @memberof Group
     */
    getIndexedBuffer() {
        const indexed = this.children.map(item => item.getIndexedBuffer()).filter(b => b !== undefined);
        return [].concat.apply([], indexed);
    }
    /**
     * Call strem on children
     *
     * @param {(streamArguments: IStreamArguments) => void} callback
     * @memberof Group
     */
    stream(callback) {
        this.children.forEach(item => item.stream(callback));
    }
}

//# sourceMappingURL=Group.js.map

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShapeBase": () => (/* binding */ ShapeBase)
/* harmony export */ });
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22);
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23);
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _math_Vec2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var _modifiers_Adapt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20);
/* harmony import */ var _SceneChild__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);








const tmpMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_7__.create();
const transformMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_7__.create();
const perspectiveMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_7__.create();
const repetitionMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_7__.create();
/**
 * Main class for shape generation
 *
 * @category Core.Abstract
 * @abstract
 * @class ShapeBase
 * @order 4
 * @extends {SceneChild}
 */
class ShapeBase extends _SceneChild__WEBPACK_IMPORTED_MODULE_6__.SceneChild {
    /**
     * Creates an instance of ShapeBase
     *
     * @param {ISceneChildSettings} [settings={}]
     */
    constructor(settings = {}) {
        super(settings);
        /**
         * Flag used to determine if indexedBuffer has been generated
         *
         * @internal
         * @ignore
         */
        this.bIndexed = false;
        /**
         * Array used for index a vertex buffer
         * only for first level scene children
         *
         * @internal
         * @ignore
         */
        this.indexedBuffer = [];
        /**
         * The bounding inside the scene
         *
         * @type {IShapeBounding}
         */
        this.bounding = {
            cx: 0,
            cy: 0,
            x: -1,
            y: -1,
            width: 2,
            height: 2,
        };
        this.props = {
            distance: settings.distance,
            repetitions: settings.repetitions,
            rotateX: settings.rotateX,
            rotateY: settings.rotateY,
            rotateZ: settings.rotateZ,
            skewX: settings.skewX,
            skewY: settings.skewY,
            squeezeX: settings.squeezeX,
            squeezeY: settings.squeezeY,
            displace: settings.displace,
            translate: settings.translate,
            scale: settings.scale,
            transformOrigin: settings.transformOrigin,
            perspective: settings.perspective,
            perspectiveOrigin: settings.perspectiveOrigin,
        };
        this.vertexCallback = settings.vertexCallback;
        this.boundingType = settings.boundingType || _types__WEBPACK_IMPORTED_MODULE_0__.EBoundingType.Fixed;
    }
    /**
     * Check if the shape should be generated every time
     *
     * @returns {boolean}
     */
    isStatic() {
        const props = this.props;
        return (typeof props.repetitions !== 'function' &&
            typeof props.distance !== 'function' &&
            typeof props.displace !== 'function' &&
            typeof props.scale !== 'function' &&
            typeof props.translate !== 'function' &&
            typeof props.skewX !== 'function' &&
            typeof props.skewY !== 'function' &&
            typeof props.squeezeX !== 'function' &&
            typeof props.squeezeY !== 'function' &&
            typeof props.rotateX !== 'function' &&
            typeof props.rotateY !== 'function' &&
            typeof props.rotateZ !== 'function' &&
            typeof props.transformOrigin !== 'function' &&
            typeof props.perspective !== 'function' &&
            typeof props.perspectiveOrigin !== 'function');
    }
    /**
     * Check if the indexedBuffer array needs to be recreated every time,
     * this can happen when a shape generates an array of vertices different in length at each repetition
     *
     * @returns {boolean}
     */
    isStaticIndexed() {
        return typeof this.props.repetitions !== 'function';
    }
    /**
     * Return a prop value
     *
     * @param {keyof ISceneChildProps} key
     * @param {PropArguments} [propArguments]
     * @param {*} [defaultValue]
     * @returns {*}
     */
    getProp(key, propArguments, defaultValue) {
        let attribute = this.props[key];
        if (typeof attribute === 'function') {
            attribute = attribute(propArguments);
        }
        return typeof attribute === 'undefined' || Number.isNaN(attribute) ? defaultValue : attribute;
    }
    /**
     * Set a single or multiple props
     *
     * @param {(keyof ISceneChildProps<PropArguments> | ISceneChildProps<PropArguments>)} key
     * @param {*} [value]
     * @param {boolean} [bClearIndexed=false]
     */
    setProp(key, value, bClearIndexed = false) {
        if (typeof key === 'string') {
            bClearIndexed = bClearIndexed || key == 'repetitions';
            this.props[key] = value;
        }
        else {
            bClearIndexed = bClearIndexed || 'repetitions' in key;
            Object.keys(key).forEach((k) => (this.props[k] = key[k]));
        }
        this.clearBuffer(bClearIndexed, true);
    }
    /**
     *  Unset buffer
     *
     * @param {boolean} [bClearIndexed=false]
     * @param {boolean} [bPropagateToParents=false]
     * @param {boolean} [bPropagateToChildren=false]
     */
    clearBuffer(bClearIndexed = false, bPropagateToParents = true) {
        this.buffer = undefined;
        if (bClearIndexed) {
            this.bIndexed = false;
            this.indexedBuffer = [];
        }
        this.bStatic = this.isStatic();
        this.bStaticIndexed = this.isStaticIndexed();
        if (bPropagateToParents && this.scene && !this.scene.isFirstLevelChild(this)) {
            const parents = this.scene.getParentsOfSceneChild(this);
            parents.length > 0 && parents[parents.length - 1].clearBuffer(bClearIndexed, bPropagateToParents /* true */);
        }
    }
    /**
     * Update the vertex array if the shape is not static and update the indexedBuffer if it is also not static
     *
     * @param {number} generateId generation id
     * @param {boolean} [bDirectSceneChild=false] adjust shape of center of scene
     * @param {PropArguments} [parentPropArguments]
     */
    generate(generateId = 0, bDirectSceneChild = false, parentPropArguments) {
        if (this.buffer && this.bStatic) {
            return;
        }
        this.generateId = generateId;
        if (!this.bStaticIndexed || !this.bIndexed)
            this.indexedBuffer = [];
        const propArguments = ShapeBase.getEmptyPropArguments(this, parentPropArguments);
        const repetition = propArguments.repetition;
        const repetitions = this.getProp('repetitions', propArguments, 1);
        const repetitionType = Array.isArray(repetitions) ? _types__WEBPACK_IMPORTED_MODULE_0__.ERepetitionType.Matrix : _types__WEBPACK_IMPORTED_MODULE_0__.ERepetitionType.Ring;
        const repetitionCount = Array.isArray(repetitions)
            ? repetitions[0] * (repetitions[1] ?? repetitions[0])
            : repetitions;
        const repetitionRowCount = Array.isArray(repetitions) ? repetitions[0] : repetitionCount;
        const repetitionColCount = Array.isArray(repetitions) ? repetitions[1] ?? repetitions[0] : 1;
        const rowRepetition = repetition.row;
        rowRepetition.count = repetitionRowCount;
        const colRepetition = repetition.col;
        colRepetition.count = repetitionColCount;
        repetition.count = repetitionCount;
        repetition.col.count = repetitionColCount;
        repetition.row.count = repetitionRowCount;
        repetition.type = repetitionType;
        let totalBufferLength = 0;
        const buffers = [];
        let currentIndex = 0;
        const centerMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_8__.fromValues((repetitionColCount - 1) / 2, (repetitionRowCount - 1) / 2);
        const sceneAnchor = this.scene ? [this.scene.anchor[0], this.scene.anchor[1], 0] : [0, 0, 0];
        const tmpTotalShapeBounding = [undefined, undefined, undefined, undefined];
        const tmpSingleRepetitionBounding = [undefined, undefined, undefined, undefined];
        for (let currentRowRepetition = 0; currentRowRepetition < repetitionRowCount; currentRowRepetition++) {
            for (let currentColRepetition = 0; currentColRepetition < repetitionColCount; currentColRepetition++, currentIndex++) {
                repetition.index = currentIndex + 1;
                repetition.offset = repetitionCount > 1 ? currentIndex / (repetitionCount - 1) : 1;
                repetition.angle = repetitionType === _types__WEBPACK_IMPORTED_MODULE_0__.ERepetitionType.Ring ? (_math__WEBPACK_IMPORTED_MODULE_3__.PI2 / repetitionCount) * currentIndex : 0;
                colRepetition.index = currentColRepetition + 1;
                colRepetition.offset = repetitionColCount > 1 ? currentColRepetition / (repetitionColCount - 1) : 1;
                rowRepetition.index = currentRowRepetition + 1;
                rowRepetition.offset = repetitionRowCount > 1 ? currentRowRepetition / (repetitionRowCount - 1) : 1;
                // Generate primitives buffer recursively
                const buffer = this.generateBuffer(generateId, propArguments);
                const bufferLength = buffer.length;
                const bounding = this.getShapeBounding();
                buffers[currentIndex] = new Float32Array(bufferLength);
                totalBufferLength += bufferLength;
                {
                    const distance = _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_1__.toVec2(this.getProp('distance', propArguments, _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_1__.VEC2_ZERO));
                    const displace = this.getProp('displace', propArguments, 0);
                    const scale = _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_1__.toVec3(this.getProp('scale', propArguments, _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_1__.VEC2_ONE), 1);
                    const translate = _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_1__.toVec3(this.getProp('translate', propArguments, _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_1__.VEC2_ZERO), 0);
                    const skewX = this.getProp('skewX', propArguments, 0);
                    const skewY = this.getProp('skewY', propArguments, 0);
                    const squeezeX = this.getProp('squeezeX', propArguments, 0);
                    const squeezeY = this.getProp('squeezeY', propArguments, 0);
                    const rotateX = this.getProp('rotateX', propArguments, 0);
                    const rotateY = this.getProp('rotateY', propArguments, 0);
                    const rotateZ = this.getProp('rotateZ', propArguments, 0);
                    const perspective = (0,_Utilities__WEBPACK_IMPORTED_MODULE_5__.clamp)(0, 1, this.getProp('perspective', propArguments, 0));
                    const perspectiveOrigin = _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_1__.toVec3(this.getProp('perspectiveOrigin', propArguments, _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_1__.VEC2_ZERO), 0);
                    const transformOrigin = _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_1__.toVec3(this.getProp('transformOrigin', propArguments, _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_1__.VEC2_ZERO), 0);
                    let offset;
                    switch (repetitionType) {
                        case _types__WEBPACK_IMPORTED_MODULE_0__.ERepetitionType.Ring:
                            offset = gl_matrix__WEBPACK_IMPORTED_MODULE_9__.fromValues(distance[0], 0, 0);
                            gl_matrix__WEBPACK_IMPORTED_MODULE_9__.rotateZ(offset, offset, _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_1__.VEC3_ZERO, repetition.angle + displace);
                            break;
                        case _types__WEBPACK_IMPORTED_MODULE_0__.ERepetitionType.Matrix:
                            offset = gl_matrix__WEBPACK_IMPORTED_MODULE_9__.fromValues(distance[1] * (currentColRepetition - centerMatrix[0]), distance[0] * (currentRowRepetition - centerMatrix[1]), 0);
                            break;
                    }
                    const perspectiveSize = perspective > 0 ? Math.max(bounding.width, bounding.height) / 2 : 1;
                    const perspectiveValue = perspective > 0 ? perspectiveSize + (1 - perspective) * (perspectiveSize * 10) : 0;
                    const bTransformOrigin = (this.boundingType === _types__WEBPACK_IMPORTED_MODULE_0__.EBoundingType.Relative ? bounding.cx !== 0 || bounding.cy !== 0 : true) ||
                        perspective !== 0 ||
                        transformOrigin[0] !== 0 ||
                        transformOrigin[1] !== 0;
                    const bPerspectiveOrigin = perspectiveOrigin[0] !== 0 || perspectiveOrigin[1] !== 0;
                    if (bTransformOrigin) {
                        if (this.boundingType === _types__WEBPACK_IMPORTED_MODULE_0__.EBoundingType.Relative) {
                            transformOrigin[0] = transformOrigin[0] * (bounding.width / 2) + bounding.cx;
                            transformOrigin[1] = transformOrigin[1] * (bounding.height / 2) + bounding.cy;
                        }
                        else {
                            transformOrigin[0] *= bounding.width / 2;
                            transformOrigin[1] *= bounding.height / 2;
                        }
                        transformOrigin[2] = perspectiveValue;
                    }
                    /**
                     * Create Matrices
                     */
                    {
                        /**
                         * Create Transformation matrix
                         */
                        gl_matrix__WEBPACK_IMPORTED_MODULE_7__.identity(transformMatrix);
                        bTransformOrigin && gl_matrix__WEBPACK_IMPORTED_MODULE_7__.translate(transformMatrix, transformMatrix, transformOrigin);
                        if (translate[0] !== 0 || translate[1] !== 0)
                            gl_matrix__WEBPACK_IMPORTED_MODULE_7__.translate(transformMatrix, transformMatrix, translate);
                        if (skewX !== 0 || skewY !== 0) {
                            _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_1__.fromSkew(tmpMatrix, [skewX, skewY]);
                            gl_matrix__WEBPACK_IMPORTED_MODULE_7__.multiply(transformMatrix, transformMatrix, tmpMatrix);
                        }
                        rotateX !== 0 && gl_matrix__WEBPACK_IMPORTED_MODULE_7__.rotateX(transformMatrix, transformMatrix, rotateX);
                        rotateY !== 0 && gl_matrix__WEBPACK_IMPORTED_MODULE_7__.rotateY(transformMatrix, transformMatrix, rotateY);
                        rotateZ !== 0 && gl_matrix__WEBPACK_IMPORTED_MODULE_7__.rotateZ(transformMatrix, transformMatrix, rotateZ);
                        if (scale[0] !== 1 || scale[1] !== 1)
                            gl_matrix__WEBPACK_IMPORTED_MODULE_7__.scale(transformMatrix, transformMatrix, scale);
                        bTransformOrigin &&
                            gl_matrix__WEBPACK_IMPORTED_MODULE_7__.translate(transformMatrix, transformMatrix, gl_matrix__WEBPACK_IMPORTED_MODULE_9__.scale(transformOrigin, transformOrigin, -1));
                        /**
                         * Create Perspective matrix
                         */
                        if (perspectiveValue > 0) {
                            if (bPerspectiveOrigin) {
                                if (this.boundingType === _types__WEBPACK_IMPORTED_MODULE_0__.EBoundingType.Relative) {
                                    perspectiveOrigin[0] = perspectiveOrigin[0] * (bounding.width / 2) + bounding.cx;
                                    perspectiveOrigin[1] = perspectiveOrigin[1] * (bounding.height / 2) + bounding.cy;
                                }
                                else {
                                    perspectiveOrigin[0] *= bounding.width / 2;
                                    perspectiveOrigin[1] *= bounding.height / 2;
                                }
                                perspectiveOrigin[2] = 0;
                            }
                            gl_matrix__WEBPACK_IMPORTED_MODULE_7__.perspective(perspectiveMatrix, -Math.PI / 2, 1, 0, Infinity);
                        }
                        /**
                         * Create Repetition matrix
                         */
                        gl_matrix__WEBPACK_IMPORTED_MODULE_7__.identity(repetitionMatrix);
                        gl_matrix__WEBPACK_IMPORTED_MODULE_7__.translate(repetitionMatrix, repetitionMatrix, offset);
                        if (bDirectSceneChild) {
                            gl_matrix__WEBPACK_IMPORTED_MODULE_7__.translate(repetitionMatrix, repetitionMatrix, sceneAnchor);
                        }
                        if (repetitionType === _types__WEBPACK_IMPORTED_MODULE_0__.ERepetitionType.Ring)
                            gl_matrix__WEBPACK_IMPORTED_MODULE_7__.rotateZ(repetitionMatrix, repetitionMatrix, repetition.angle + displace);
                    }
                    _modifiers_Adapt__WEBPACK_IMPORTED_MODULE_4__.Bounding.clear(tmpSingleRepetitionBounding);
                    // Apply matrices on vertex
                    for (let bufferIndex = 0; bufferIndex < bufferLength; bufferIndex += 2) {
                        const vertex = [buffer[bufferIndex], buffer[bufferIndex + 1], perspectiveValue];
                        {
                            // Apply squeeze, can be insert into transformMatrix?
                            squeezeX !== 0 && _math_Vec2__WEBPACK_IMPORTED_MODULE_2__.default.squeezeX(vertex, squeezeX);
                            squeezeY !== 0 && _math_Vec2__WEBPACK_IMPORTED_MODULE_2__.default.squeezeY(vertex, squeezeY);
                            // Apply transforms
                            gl_matrix__WEBPACK_IMPORTED_MODULE_9__.transformMat4(vertex, vertex, transformMatrix);
                            // Apply perspective
                            if (perspectiveValue > 0) {
                                bPerspectiveOrigin && gl_matrix__WEBPACK_IMPORTED_MODULE_9__.add(vertex, vertex, perspectiveOrigin);
                                gl_matrix__WEBPACK_IMPORTED_MODULE_9__.transformMat4(vertex, vertex, perspectiveMatrix);
                                gl_matrix__WEBPACK_IMPORTED_MODULE_9__.scale(vertex, vertex, perspectiveValue);
                                bPerspectiveOrigin && gl_matrix__WEBPACK_IMPORTED_MODULE_9__.sub(vertex, vertex, perspectiveOrigin);
                            }
                            // apply repetition matrix
                            gl_matrix__WEBPACK_IMPORTED_MODULE_9__.transformMat4(vertex, vertex, repetitionMatrix);
                            // custom vertex manipulation
                            if (this.vertexCallback) {
                                const index = bufferIndex / 2;
                                const count = bufferLength / 2;
                                const vertexRepetition = {
                                    index: index + 1,
                                    count,
                                    offset: count > 1 ? index / (count - 1) : 1,
                                };
                                this.vertexCallback(vertex, vertexRepetition, propArguments);
                            }
                        }
                        buffers[currentIndex][bufferIndex] = vertex[0];
                        buffers[currentIndex][bufferIndex + 1] = vertex[1];
                        _modifiers_Adapt__WEBPACK_IMPORTED_MODULE_4__.Bounding.add(tmpSingleRepetitionBounding, vertex[0], vertex[1]);
                        // Bounding.add(tmpTotalShapeBounding, vertex[0], vertex[1])
                    }
                }
                _modifiers_Adapt__WEBPACK_IMPORTED_MODULE_4__.Bounding.sum(tmpTotalShapeBounding, tmpSingleRepetitionBounding);
                // After buffer creation, add a frame into indexedBuffer if not static or update bounding
                const singleRepetitionBounding = { cx: 0, cy: 0, x: -1, y: -1, width: 2, height: 2 };
                _modifiers_Adapt__WEBPACK_IMPORTED_MODULE_4__.Bounding.bind(singleRepetitionBounding, tmpSingleRepetitionBounding);
                if (!this.bStaticIndexed || !this.bIndexed) {
                    this.addIndex(bufferLength, repetition, singleRepetitionBounding);
                }
            }
        }
        _modifiers_Adapt__WEBPACK_IMPORTED_MODULE_4__.Bounding.bind(this.bounding, tmpTotalShapeBounding);
        this.buffer = new Float32Array(totalBufferLength);
        for (let i = 0, offset = 0, len = buffers.length; i < len; offset += buffers[i].length, i++)
            this.buffer.set(buffers[i], offset);
        this.bIndexed = true;
    }
    /**
     * Return current shape (whit repetions) bounding
     *
     * @return {*}  {IShapeBounding}
     */
    getBounding() {
        return this.bounding;
    }
    /**
     * Get number of repetitions
     *
     * @returns {number}
     */
    getRepetitionCount() {
        const repetitions = this.getProp('repetitions', undefined, 1);
        return Array.isArray(repetitions) ? repetitions[0] * (repetitions[1] ?? repetitions[0]) : repetitions;
    }
    /**
     * Return buffer
     *
     * @returns {(Float32Array | undefined)}
     */
    getBuffer() {
        return this.buffer;
    }
    /**
     * Return indexed buffer
     *
     * @returns {(Array<IBufferIndex<Props, PropArguments>> | undefined)}
     */
    getIndexedBuffer() {
        return this.indexedBuffer;
    }
    /**
     * Return number of encapsulation
     *
     * @param {IBufferIndex} index
     * @returns {number}
     */
    static getIndexParentLevel(index) {
        if (typeof index.parent === 'undefined')
            return 0;
        let currentParent = index.parent;
        let currentParentLevel = 1;
        while (typeof currentParent.parent !== 'undefined') {
            currentParentLevel++;
            currentParent = currentParent.parent;
        }
        return currentParentLevel;
    }
    /**
     * Stream buffer
     *
     * @param {(TStreamCallback} callback
     */
    stream(callback) {
        if (this.buffer && this.indexedBuffer) {
            for (let i = 0, j = 0, len = this.indexedBuffer.length; i < len; i++) {
                const currentIndexing = this.indexedBuffer[i];
                callback({
                    buffer: this.buffer,
                    frameLength: currentIndexing.frameLength,
                    frameBufferIndex: j,
                    currentIndexing: currentIndexing,
                    currentShapeIndex: i,
                    totalShapes: len,
                });
                j += currentIndexing.frameLength;
            }
        }
    }
    /**
     * Return empty propArguments
     *
     * @static
     * @param {ShapeBase} shape
     * @return {*}  {PropArguments}
     */
    static getEmptyPropArguments(shape, parentPropArguments) {
        const repetition = {
            type: _types__WEBPACK_IMPORTED_MODULE_0__.ERepetitionType.Ring,
            angle: 0,
            index: 1,
            offset: 1,
            count: 1,
            row: { index: 1, offset: 1, count: 1 },
            col: { index: 1, offset: 1, count: 1 },
        };
        return {
            repetition,
            shape,
            parent: parentPropArguments,
        };
    }
}
/**
 * Empty buffer
 *
 * @internal
 * @ignore
 */
ShapeBase.EMPTY_BUFFER = new Float32Array(0);
/**
 * Empty BaseRepetition
 *
 * @internal
 * @ignore
 */
ShapeBase.getEmptySimpleRepetition = () => ({
    index: 1,
    offset: 1,
    count: 1,
});
/**
 * Empty Repetition
 *
 * @internal
 * @ignore
 */
ShapeBase.getEmptyRepetition = () => ({
    type: _types__WEBPACK_IMPORTED_MODULE_0__.ERepetitionType.Ring,
    angle: 0,
    ...ShapeBase.getEmptySimpleRepetition(),
    row: ShapeBase.getEmptySimpleRepetition(),
    col: ShapeBase.getEmptySimpleRepetition(),
});

//# sourceMappingURL=ShapeBase.js.map

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VEC3_ZERO": () => (/* binding */ VEC3_ZERO),
/* harmony export */   "VEC3_ONE": () => (/* binding */ VEC3_ONE),
/* harmony export */   "VEC2_ZERO": () => (/* binding */ VEC2_ZERO),
/* harmony export */   "VEC2_ONE": () => (/* binding */ VEC2_ONE),
/* harmony export */   "fromSkew": () => (/* binding */ fromSkew),
/* harmony export */   "toVec2": () => (/* binding */ toVec2),
/* harmony export */   "toVec3": () => (/* binding */ toVec3)
/* harmony export */ });
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);

const VEC3_ZERO = [0, 0, 0];
const VEC3_ONE = [1, 1, 1];
const VEC2_ZERO = [0, 0];
const VEC2_ONE = [1, 1];
gl_matrix__WEBPACK_IMPORTED_MODULE_0__.setMatrixArrayType(Array);
/**
 * Skew matrix
 *
 * @internal
 * @ignore
 */
function fromSkew(out, skew) {
    out[0] = 1;
    out[1] = Math.tan(skew[1]);
    out[2] = 0;
    out[3] = 0;
    out[4] = Math.tan(skew[0]);
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
/**
 * number to vec 2
 *
 * @internal
 * @ignore
 */
function toVec2(x) {
    if (Array.isArray(x))
        return [x[0], x[1]];
    return [x, x];
}
/**
 * number to vec 3
 *
 * @internal
 * @ignore
 */
function toVec3(x, defaultZValue = 0) {
    if (Array.isArray(x)) {
        return [x[0], x[1], defaultZValue];
    }
    return [x, x, defaultZValue];
}
//# sourceMappingURL=gl-matrix-extensions.js.map

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Temporany matrix
 *
 * @internal
 * @ignore
 */
const MATRIX = new Array(4);
/**
 * Vec2 operation
 *
 * @category Core.Utilities
 */
const Vec2 = {
    /**
     * from new vertex
     *
     * @param {Array<number> | number} [x=0]
     * @param {number} [y]
     * @returns {Array<number>}
     */
    from: (x = 0, y) => {
        const out = new Array(2);
        if (typeof x === 'number') {
            out[0] = x;
            out[1] = y ?? x;
        }
        else {
            out[0] = x[0];
            out[1] = x[1];
        }
        return out;
    },
    normalize: (v) => {
        const len = Vec2.length(v);
        return len !== 0 ? [v[0] / len, v[1] / len] : [0, 0];
    },
    /**
     * Distance between two points
     *
     * @param {Array<number>} a
     * @param {Array<number>} b
     * @returns {number}
     */
    distance: (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]),
    /**
     * dot product
     *
     * @param {Array<number>} a
     * @param {Array<number>} b
     * @returns {number}
     */
    dot: (a, b) => a[0] * b[0] + a[1] * b[1],
    /**
     * length of point
     *
     * @param {Array<number>} vec
     * @returns {number}
     */
    length: (vec) => Math.hypot(vec[0], vec[1]),
    /**
     * angle between two point
     *
     * @param {Array<number>} a
     * @param {Array<number>} b
     * @returns {number}
     */
    angle: (a, b) => {
        a = Vec2.normalize(a);
        b = Vec2.normalize(b);
        return Math.acos(Vec2.dot(a, b));
    },
    /**
     * skewX point
     *
     * @param {Array<number>} vec
     * @param {number} m
     */
    skewX: (vec, m) => {
        vec[0] += Math.tan(m) * vec[1];
    },
    /**
     * skewY point
     *
     * @param {Array<number>} vec
     * @param {number} m
     */
    skewY: (vec, m) => {
        vec[1] += Math.tan(m) * vec[0];
    },
    /**
     * squeezeX point
     *
     * @param {Array<number>} vec
     * @param {number} m
     */
    squeezeX: (vec, m) => {
        vec[1] += vec[1] * (vec[0] * -m);
    },
    /**
     * squeezeY point
     *
     * @param {Array<number>} vec
     * @param {number} m
     */
    squeezeY: (vec, m) => {
        vec[0] += vec[0] * (vec[1] * m);
    },
    /**
     * Rotate point
     *
     * @param {Array<number>} vec
     * @param {Array<number>} MATRIX
     * @param {Array<number>} fromPoint
     * @internal
     */
    rotate: (vec, MATRIX, fromPoint) => {
        const p0 = vec[0] - fromPoint[0];
        const p1 = vec[1] - fromPoint[1];
        vec[0] = p0 * MATRIX[0] + p1 * MATRIX[1] + fromPoint[0];
        vec[1] = p0 * MATRIX[2] + p1 * MATRIX[3] + fromPoint[1];
    },
    /**
     * RotateX point
     *
     * @param {Array<number>} vec
     * @param {Array<number>} fromPoint
     * @param {number} rad
     */
    rotateX: (vec, fromPoint, rad) => {
        MATRIX[0] = 1;
        MATRIX[1] = 0;
        MATRIX[2] = 0;
        MATRIX[3] = Math.cos(rad);
        Vec2.rotate(vec, MATRIX, fromPoint);
    },
    /**
     * RotateY point
     *
     * @param {Array<number>} vec
     * @param {Array<number>} fromPoint
     * @param {number} rad
     */
    rotateY: (vec, fromPoint, rad) => {
        MATRIX[0] = Math.cos(rad);
        MATRIX[1] = 0;
        MATRIX[2] = 0;
        MATRIX[3] = 1;
        Vec2.rotate(vec, MATRIX, fromPoint);
    },
    /**
     * RotateZ point
     *
     * @param {Array<number>} vec
     * @param {Array<number>} fromPoint
     * @param {number} rad
     */
    rotateZ: (vec, fromPoint, rad) => {
        MATRIX[0] = Math.cos(rad);
        MATRIX[1] = -Math.sin(rad);
        MATRIX[2] = Math.sin(rad);
        MATRIX[3] = Math.cos(rad);
        Vec2.rotate(vec, MATRIX, fromPoint);
    },
    /**
     * Translate vertex
     *
     * @param {Array<number>} vec
     * @param {Array<number>} to
     */
    translate: (vec, to) => {
        vec[0] += to[0];
        vec[1] += to[1];
    },
    /**
     * Scale vertex
     *
     * @param {Array<number>} vec
     * @param {Array<number>} to
     */
    scale: (vec, to) => {
        vec[0] *= to[0];
        vec[1] *= to[1];
    },
    /**
     * Scale vertex
     *
     * @param {Array<number>} vec
     * @param {Array<number>} to
     */
    divide: (vec, to) => {
        vec[0] /= to[0];
        vec[1] /= to[1];
    },
    /**
     * Vec to string
     *
     * @param {Array<number>} vec
     * @return {string}
     */
    toString: (vec) => `x: ${vec[0]}, y: ${vec[1]}`,
    /**
     * Vertex [0, 0]
     */
    ZERO: Array.from([0, 0]),
    /**
     * Vertex [1, 1]
     */
    ONE: Array.from([1, 1]),
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vec2);
//# sourceMappingURL=Vec2.js.map

/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "log": () => (/* binding */ log),
/* harmony export */   "PI2": () => (/* binding */ PI2),
/* harmony export */   "PHI": () => (/* binding */ PHI),
/* harmony export */   "mod": () => (/* binding */ mod)
/* harmony export */ });
/**
 * Return logarith value and base
 *
 * @category Core.Utilities
 *
 * @param n number
 * @param base number
 */
const log = (n, base) => Math.log(n) / Math.log(base);
/**
 * @category Core.Utilities
 */
const PI2 = Math.PI * 2;
/**
 * @category Core.Utilities
 */
const PHI = (1 + Math.sqrt(5)) / 2;
/**
 * Return a positive module of positive or negative value
 *
 * @category Core.Utilities
 *
 * @param value number
 * @param base number
 */
const mod = (value, base) => {
    const result = value % base;
    return result < 0 ? result + base : result;
};
//# sourceMappingURL=index.js.map

/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EAdaptMode": () => (/* binding */ EAdaptMode),
/* harmony export */   "Bounding": () => (/* binding */ Bounding),
/* harmony export */   "Adapt": () => (/* binding */ Adapt)
/* harmony export */ });
/* harmony import */ var _Modifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);

/**
 *
 *
 * @category Core.Enums
 */
var EAdaptMode;
(function (EAdaptMode) {
    /**
     * The buffer is not changed
     * @order 1
     */
    EAdaptMode[EAdaptMode["None"] = 0] = "None";
    /**
     * The buffer is scaled in a range between [-1, -1] and [1,1]
     * @order 2
     */
    EAdaptMode[EAdaptMode["Scale"] = 2] = "Scale";
    /**
     * The buffer is scaled in a range between [-1, -1] and [1,1] and is centered
     * @order 3
     */
    EAdaptMode[EAdaptMode["Center"] = 4] = "Center";
    /**
     * The buffer is adapted centrally and expanded in a range between [-1, -1] and [1,1]
     * @order 4
     */
    EAdaptMode[EAdaptMode["Fill"] = 8] = "Fill";
})(EAdaptMode || (EAdaptMode = {}));
/**
 * @internal
 * @ignore
 */
const Bounding = {
    empty: () => ({
        cx: 0,
        cy: 0,
        x: -1,
        y: -1,
        width: 2,
        height: 2,
    }),
    clear: (tmpBounding) => {
        tmpBounding[0] = undefined;
        tmpBounding[1] = undefined;
        tmpBounding[2] = undefined;
        tmpBounding[3] = undefined;
    },
    add: (tmpBounding, x, y) => {
        if (typeof tmpBounding[0] === 'undefined' || x < tmpBounding[0])
            tmpBounding[0] = x;
        if (typeof tmpBounding[2] === 'undefined' || x > tmpBounding[2])
            tmpBounding[2] = x;
        if (typeof tmpBounding[1] === 'undefined' || y < tmpBounding[1])
            tmpBounding[1] = y;
        if (typeof tmpBounding[3] === 'undefined' || y > tmpBounding[3])
            tmpBounding[3] = y;
    },
    sum: (dest, bounding) => {
        if (typeof bounding[0] !== 'undefined' &&
            typeof bounding[1] !== 'undefined' &&
            typeof bounding[2] !== 'undefined' &&
            typeof bounding[3] !== 'undefined') {
            if (typeof dest[0] === 'undefined' ||
                typeof dest[1] === 'undefined' ||
                typeof dest[2] === 'undefined' ||
                typeof dest[3] === 'undefined') {
                dest[0] = bounding[0];
                dest[1] = bounding[1];
                dest[2] = bounding[2];
                dest[3] = bounding[3];
            }
            else {
                if (dest[0] < bounding[0])
                    dest[0] = bounding[0];
                if (dest[2] > bounding[2])
                    dest[2] = bounding[2];
                if (dest[1] < bounding[1])
                    dest[1] = bounding[1];
                if (dest[3] > bounding[3])
                    dest[3] = bounding[3];
            }
        }
        else {
            console.warn('[Urplfanze:Bounding] cannot sum bounding');
        }
    },
    bind: (bounding, tmpBounding) => {
        if (typeof tmpBounding[0] !== 'undefined' &&
            typeof tmpBounding[1] !== 'undefined' &&
            typeof tmpBounding[2] !== 'undefined' &&
            typeof tmpBounding[3] !== 'undefined') {
            bounding.x = tmpBounding[0];
            bounding.y = tmpBounding[1];
            bounding.width = tmpBounding[2] - tmpBounding[0];
            bounding.height = tmpBounding[3] - tmpBounding[1];
            bounding.cx = bounding.x + bounding.width / 2;
            bounding.cy = bounding.y + bounding.height / 2;
        }
        else {
            console.warn('[Urplfanze:Bounding] cannot bind bounding');
        }
    },
};
class Adapt extends _Modifier__WEBPACK_IMPORTED_MODULE_0__.Modifier {
    constructor(args) {
        super();
        this.mode = args.mode || EAdaptMode.Fill;
        this.rect = args.rect;
    }
    apply(buffer, bClosed) {
        return Adapt.adapt(buffer, this.mode, this.rect);
    }
    /**
     * Return adapted buffer between [-1,-1] and [1,1]
     *
     * @public
     * @static
     * @param {Float32Array} input
     * @param {EAdaptMode} mode
     * @returns {Float32Array}
     * @memberof ShapeBuffer
     */
    static adapt(input, mode, rect) {
        if (mode === EAdaptMode.None)
            return Float32Array.from(input);
        const output = new Float32Array(input.length);
        if (!rect) {
            rect = Adapt.getBounding(input);
        }
        const scale = rect.width >= 2 || rect.height >= 2 || (mode >= EAdaptMode.Fill && (rect.width < 2 || rect.height < 2))
            ? 2 / Math.max(rect.width, rect.height)
            : 1;
        const translateX = mode >= EAdaptMode.Center ? rect.cx : 0;
        const translateY = mode >= EAdaptMode.Center ? rect.cy : 0;
        for (let i = 0, len = input.length; i < len; i += 2) {
            output[i] = (input[i] - translateX) * scale;
            output[i + 1] = (input[i + 1] - translateY) * scale;
        }
        return output;
    }
    /**
     * Get buffer bounding
     *
     * @static
     * @param {Float32Array | Array<number>} buffer
     * @returns {IShapeBounding}
     * @memberof ShapePrimitive
     */
    static getBounding(buffer, bounding) {
        if (typeof bounding === 'undefined')
            bounding = Bounding.empty();
        const tmp_bounding = [undefined, undefined, undefined, undefined];
        for (let i = 0, len = buffer.length; i < len; i += 2) {
            Bounding.add(tmp_bounding, buffer[i], buffer[i + 1]);
        }
        Bounding.bind(bounding, tmp_bounding);
        return bounding;
    }
}
Adapt.MODES = EAdaptMode;

//# sourceMappingURL=Adapt.js.map

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Modifier": () => (/* binding */ Modifier)
/* harmony export */ });
class Modifier {
}

//# sourceMappingURL=Modifier.js.map

/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "now": () => (/* binding */ now),
/* harmony export */   "toDegrees": () => (/* binding */ toDegrees),
/* harmony export */   "toRadians": () => (/* binding */ toRadians),
/* harmony export */   "lerp": () => (/* binding */ lerp),
/* harmony export */   "clamp": () => (/* binding */ clamp),
/* harmony export */   "relativeClamp": () => (/* binding */ relativeClamp),
/* harmony export */   "noise": () => (/* binding */ noise),
/* harmony export */   "random": () => (/* binding */ random),
/* harmony export */   "angleFromRepetition": () => (/* binding */ angleFromRepetition),
/* harmony export */   "angle2FromRepetition": () => (/* binding */ angle2FromRepetition),
/* harmony export */   "distanceFromRepetition": () => (/* binding */ distanceFromRepetition),
/* harmony export */   "prepareBufferForInterpolation": () => (/* binding */ prepareBufferForInterpolation),
/* harmony export */   "interpolate": () => (/* binding */ interpolate),
/* harmony export */   "distributePointsInBuffer": () => (/* binding */ distributePointsInBuffer)
/* harmony export */ });
/* harmony import */ var simplex_noise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var simplex_noise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simplex_noise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types_repetitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _math_Vec2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);



// isDef: (object: any): boolean => typeof object !== 'undefined' && object !== null,
const measurement = typeof performance !== 'undefined' ? performance : Date;
/**
 * Get current timestamp in milliseconds
 *
 * @category Utilities
 * @returns {number}
 */
function now() {
    return measurement.now();
}
// aOr: (...args: Array<any>): any => {
// 	for (let i = 0; i < args.length; i++) if (Utilities.isDef(args[i])) return args[i]
// },
/**
 * Convert number from radians to degrees
 *
 * @category Utilities
 *
 * @example
 * ```javascript
 * Urpflanze.toDegrees(Math.PI) // 180
 * ```
 *
 * @param {number} radians
 * @returns {number}
 */
function toDegrees(radians) {
    return (radians * 180) / Math.PI;
}
/**
 * Convert angle from degrees to radians
 * @example
 * ```javascript
 * Urpflanze.toRadians(180) // 3.141592653589793
 * ```
 *
 * @category Utilities
 * @param {number} degrees
 * @returns {number}
 */
function toRadians(degrees) {
    return (degrees * Math.PI) / 180;
}
// perf: (name: string, callback: any, log: boolean = false): number => {
// 	const t1 = now()
// 	callback()
// 	const t2 = now()
// 	log && console.log('perf ' + name + ': ' + (t2 - t1))
// 	return t2 - t1
// }
/**
 * Linear interpolation from `a` when `i` as 0 an `b` when `i' as 1
 *
 * @category Utilities
 * @param {number} a
 * @param {number} b
 * @param {number} i
 * @returns {number}
 */
function lerp(a, b, i) {
    return (1 - i) * a + i * b;
}
/**
 * Return number between min and max
 *
 * @category Utilities
 * @example
 * ```javascript
 * Urpflanze.clamp(0, 1, 1.2) // 1
 * Urpflanze.clamp(0, 1, -2) // 0
 * ```
 * @param {number} min
 * @param {number} max
 * @param {number} value
 * @returns {number}
 */
function clamp(min, max, value) {
    return value <= min ? min : value >= max ? max : value;
}
/**
 * Map number between refMin e refMax from min and max
 *
 * @category Utilities
 *
 * @example
 * ```javascript
 * Urpflanze.relativeClamp(0, 1, 0.5, 100, 200) // 150
 * ```
 *
 * @param {number} refMin
 * @param {number} refMax
 * @param {number} value
 * @param {number} toMin
 * @param {number} toMax
 * @returns {number}
 */
function relativeClamp(refMin, refMax, value, toMin, toMax) {
    return clamp(toMin, toMax, ((value - refMin) / (refMax - refMin)) * (toMax - toMin) + toMin);
}
/**
 * @internal
 * @ignore
 */
const noises = {
    random: new simplex_noise__WEBPACK_IMPORTED_MODULE_0__(Math.random),
};
/**
 * <a href="https://github.com/jwagner/simplex-noise.js" target="_blank">SimplexNoise</a>
 * Use 'random' as seed property for random seed.
 * Return value between -1 and 1
 *
 * @category Utilities
 *
 * @param {string} [seed='random']
 * @param {number} [x=0]
 * @param {number} [y=0]
 * @param {number} [z=0]
 * @returns {number} between -1 and 1
 */
function noise(seed = 'random', x = 0, y = 0, z = 0) {
    if (typeof noises[seed] === 'undefined') {
        noises[seed] = new simplex_noise__WEBPACK_IMPORTED_MODULE_0__(seed);
    }
    return noises[seed].noise3D(x, y, z);
}
/**
 * Random number generator
 */
const randoms = {};
/**
 * random number generator
 * @param seed
 * @returns
 */
function random(seed, min = 0, max = 1, decimals) {
    const key = seed + '';
    if (typeof randoms[key] === 'undefined') {
        const seed = xmur3(key);
        randoms[key] = sfc32(seed(), seed(), seed(), seed());
    }
    const value = min + randoms[key]() * (max - min);
    return typeof decimals !== 'undefined' ? Math.round(value * 10 ** decimals) / 10 ** decimals : value;
}
/**
 *
 * @internal
 * @param str
 * @returns
 */
function xmur3(str) {
    let i = 0, h = 1779033703 ^ str.length;
    for (; i < str.length; i++)
        (h = Math.imul(h ^ str.charCodeAt(i), 3432918353)), (h = (h << 13) | (h >>> 19));
    return function () {
        h = Math.imul(h ^ (h >>> 16), 2246822507);
        h = Math.imul(h ^ (h >>> 13), 3266489909);
        return (h ^= h >>> 16) >>> 0;
    };
}
/**
 * @internal
 * @param a
 * @param b
 * @param c
 * @param d
 * @returns
 */
function sfc32(a, b, c, d) {
    return function () {
        a >>>= 0;
        b >>>= 0;
        c >>>= 0;
        d >>>= 0;
        let t = (a + b) | 0;
        a = b ^ (b >>> 9);
        b = (c + (c << 3)) | 0;
        c = (c << 21) | (c >>> 11);
        d = (d + 1) | 0;
        t = (t + d) | 0;
        c = (c + t) | 0;
        return (t >>> 0) / 4294967296;
    };
}
/**
 * Return angle (atan) from offset (or center) for matrix repetition.
 * Offset is array between [-1, -1] and [1, 1].
 * The return value is between -Math.PI / 2 and Math.PI / 2
 *
 * @category Utilities
 *
 * @param {IRepetition} repetition
 * @param {[number, number]} offsetFromCenter
 * @returns {number} between -Math.PI / 2 and Math.PI / 2
 */
function angleFromRepetition(repetition, offsetFromCenter = [0, 0]) {
    if (repetition.type === _types_repetitions__WEBPACK_IMPORTED_MODULE_1__.ERepetitionType.Matrix) {
        const centerMatrix = [(repetition.col.count - 1) / 2, (repetition.row.count - 1) / 2];
        centerMatrix[0] += centerMatrix[0] * offsetFromCenter[0];
        centerMatrix[1] += centerMatrix[1] * offsetFromCenter[1];
        const x = repetition.col.index - 1 - centerMatrix[0];
        const y = repetition.row.index - 1 - centerMatrix[1];
        return x === 0 ? 0 : Math.atan(y / x);
    }
    return (repetition.angle - Math.PI) / 2;
}
/**
 * Return angle (atan2, 4 quadrants) from offset (or center) for matrix repetition.
 * Offset is array between [-1, -1] and [1, 1].
 * The return value is between -Math.PI an Math.PI
 *
 * @category Utilities
 *
 * @param {IRepetition} repetition
 * @param {[number, number]} offsetFromCenter
 * @returns {number} between -Math.PI an Math.PI
 */
function angle2FromRepetition(repetition, offsetFromCenter = [0, 0]) {
    if (repetition.type === _types_repetitions__WEBPACK_IMPORTED_MODULE_1__.ERepetitionType.Matrix) {
        const centerMatrix = [(repetition.col.count - 1) / 2, (repetition.row.count - 1) / 2];
        centerMatrix[0] += centerMatrix[0] * offsetFromCenter[0];
        centerMatrix[1] += centerMatrix[1] * offsetFromCenter[1];
        const x = repetition.col.index - 1 - centerMatrix[0];
        const y = repetition.row.index - 1 - centerMatrix[1];
        return x === 0 ? 0 : Math.atan2(y, x);
    }
    return repetition.angle - Math.PI;
}
/**
 * Return distance from offset (or center) for matrix repetition.
 * The return value is between 0 and 1
 *
 * @category Utilities
 *
 * @param {IRepetition} repetition
 * @param {[number, number]} offsetFromCenter offset relative to distance prop
 * @returns {number} between 0 and 1
 */
function distanceFromRepetition(repetition, offsetFromCenter = [0, 0]) {
    if (repetition.type === _types_repetitions__WEBPACK_IMPORTED_MODULE_1__.ERepetitionType.Matrix) {
        const centerMatrix = [0.5, 0.5];
        centerMatrix[0] += centerMatrix[0] * offsetFromCenter[0];
        centerMatrix[1] += centerMatrix[1] * offsetFromCenter[1];
        const current = [repetition.col.offset, repetition.row.offset];
        return _math_Vec2__WEBPACK_IMPORTED_MODULE_2__.default.distance(current, centerMatrix);
    }
    return 1;
}
/// Interpolation
/**
 *
 * @param from
 * @param to
 * @returns
 */
function prepareBufferForInterpolation(from, to) {
    const fromBufferLength = from.length;
    const toBufferLength = to.length;
    if (fromBufferLength === toBufferLength) {
        return [from, to];
    }
    const maxBufferLength = fromBufferLength > toBufferLength ? fromBufferLength : toBufferLength;
    const difference = Math.abs(fromBufferLength - toBufferLength);
    const minBufferLength = maxBufferLength - difference;
    /////
    const b = fromBufferLength < toBufferLength ? to : from;
    const t = fromBufferLength < toBufferLength ? from : to;
    const a = distributePointsInBuffer(t, Math.floor(difference / 2));
    // a[maxBufferLength - 2] = t[minBufferLength - 2]
    // a[maxBufferLength - 1] = t[minBufferLength - 1]
    return fromBufferLength > toBufferLength ? [b, a] : [a, b];
}
/**
 *
 * @param from
 * @param to
 * @param offset
 * @returns
 */
function interpolate(from, to, initialOffset = 0.5) {
    const [a, b] = prepareBufferForInterpolation(from, to);
    const maxBufferLength = Math.max(a.length, b.length);
    const offset = typeof initialOffset === 'number' ? [initialOffset] : initialOffset;
    const maxPoints = maxBufferLength / 2;
    if (offset.length !== maxPoints) {
        const tl = offset.length;
        for (let i = 0; i < maxPoints; i++) {
            offset[i] = offset[i % tl];
        }
    }
    ////
    const result = new Float32Array(maxBufferLength);
    for (let i = 0, off = 0; i < maxBufferLength; i += 2, off++) {
        result[i] = (1 - offset[off]) * a[i] + offset[off] * b[i];
        result[i + 1] = (1 - offset[off]) * a[i + 1] + offset[off] * b[i + 1];
    }
    return result;
}
function distributePointsInBuffer(buffer, count) {
    const bufferLen = buffer.length;
    const pointsLen = bufferLen / 2;
    const finalBufferLength = (pointsLen + count) * 2;
    const edges = pointsLen - 1;
    if (edges > 1) {
        const lastPoint = bufferLen - 2;
        const newPointsOnEdge = Math.floor(count / edges);
        const bufferWithPointsEveryEdge = bufferLen + newPointsOnEdge * lastPoint;
        let remainingPoints = (finalBufferLength - bufferWithPointsEveryEdge) / 2;
        const edgeRemainingIndex = Math.round(edges / remainingPoints);
        const result = new Float32Array(finalBufferLength);
        for (let i = 0, edgeIndex = 0, r = 0; i < lastPoint; i += 2, edgeIndex++, r += 2) {
            const ax = buffer[i];
            const ay = buffer[i + 1];
            const bx = buffer[i + 2];
            const by = buffer[i + 3];
            result[r] = ax;
            result[r + 1] = ay;
            const addReminingPoints = remainingPoints > 0 && (edgeIndex % edgeRemainingIndex === 0 || i === lastPoint - 2);
            const currentPointsOnEdge = newPointsOnEdge + (addReminingPoints ? 1 : 0);
            const newPointOffset = 1 / (currentPointsOnEdge + 1);
            for (let h = 0; h < currentPointsOnEdge; h++, r += 2) {
                const o = newPointOffset * (h + 1);
                result[r + 2] = (1 - o) * ax + o * bx;
                result[r + 3] = (1 - o) * ay + o * by;
            }
            if (addReminingPoints) {
                remainingPoints--;
            }
        }
        result[finalBufferLength - 2] = buffer[bufferLen - 2];
        result[finalBufferLength - 1] = buffer[bufferLen - 1];
        return result;
    }
    const result = new Float32Array(finalBufferLength);
    for (let i = 0; i < finalBufferLength; i += 2) {
        result[i] = buffer[i % bufferLen];
        result[i + 1] = buffer[(i + 1) % bufferLen];
    }
    return result;
}
//# sourceMappingURL=Utilities.js.map

/***/ }),
/* 21 */
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 * A fast javascript implementation of simplex noise by Jonas Wagner

Based on a speed-improved simplex noise algorithm for 2D, 3D and 4D in Java.
Which is based on example code by Stefan Gustavson (stegu@itn.liu.se).
With Optimisations by Peter Eastman (peastman@drizzle.stanford.edu).
Better rank ordering method by Stefan Gustavson in 2012.


 Copyright (c) 2018 Jonas Wagner

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
(function() {
  'use strict';

  var F2 = 0.5 * (Math.sqrt(3.0) - 1.0);
  var G2 = (3.0 - Math.sqrt(3.0)) / 6.0;
  var F3 = 1.0 / 3.0;
  var G3 = 1.0 / 6.0;
  var F4 = (Math.sqrt(5.0) - 1.0) / 4.0;
  var G4 = (5.0 - Math.sqrt(5.0)) / 20.0;

  function SimplexNoise(randomOrSeed) {
    var random;
    if (typeof randomOrSeed == 'function') {
      random = randomOrSeed;
    }
    else if (randomOrSeed) {
      random = alea(randomOrSeed);
    } else {
      random = Math.random;
    }
    this.p = buildPermutationTable(random);
    this.perm = new Uint8Array(512);
    this.permMod12 = new Uint8Array(512);
    for (var i = 0; i < 512; i++) {
      this.perm[i] = this.p[i & 255];
      this.permMod12[i] = this.perm[i] % 12;
    }

  }
  SimplexNoise.prototype = {
    grad3: new Float32Array([1, 1, 0,
      -1, 1, 0,
      1, -1, 0,

      -1, -1, 0,
      1, 0, 1,
      -1, 0, 1,

      1, 0, -1,
      -1, 0, -1,
      0, 1, 1,

      0, -1, 1,
      0, 1, -1,
      0, -1, -1]),
    grad4: new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1,
      0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1,
      1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1,
      -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1,
      1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1,
      -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1,
      1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0,
      -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]),
    noise2D: function(xin, yin) {
      var permMod12 = this.permMod12;
      var perm = this.perm;
      var grad3 = this.grad3;
      var n0 = 0; // Noise contributions from the three corners
      var n1 = 0;
      var n2 = 0;
      // Skew the input space to determine which simplex cell we're in
      var s = (xin + yin) * F2; // Hairy factor for 2D
      var i = Math.floor(xin + s);
      var j = Math.floor(yin + s);
      var t = (i + j) * G2;
      var X0 = i - t; // Unskew the cell origin back to (x,y) space
      var Y0 = j - t;
      var x0 = xin - X0; // The x,y distances from the cell origin
      var y0 = yin - Y0;
      // For the 2D case, the simplex shape is an equilateral triangle.
      // Determine which simplex we are in.
      var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
      if (x0 > y0) {
        i1 = 1;
        j1 = 0;
      } // lower triangle, XY order: (0,0)->(1,0)->(1,1)
      else {
        i1 = 0;
        j1 = 1;
      } // upper triangle, YX order: (0,0)->(0,1)->(1,1)
      // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
      // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
      // c = (3-sqrt(3))/6
      var x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
      var y1 = y0 - j1 + G2;
      var x2 = x0 - 1.0 + 2.0 * G2; // Offsets for last corner in (x,y) unskewed coords
      var y2 = y0 - 1.0 + 2.0 * G2;
      // Work out the hashed gradient indices of the three simplex corners
      var ii = i & 255;
      var jj = j & 255;
      // Calculate the contribution from the three corners
      var t0 = 0.5 - x0 * x0 - y0 * y0;
      if (t0 >= 0) {
        var gi0 = permMod12[ii + perm[jj]] * 3;
        t0 *= t0;
        n0 = t0 * t0 * (grad3[gi0] * x0 + grad3[gi0 + 1] * y0); // (x,y) of grad3 used for 2D gradient
      }
      var t1 = 0.5 - x1 * x1 - y1 * y1;
      if (t1 >= 0) {
        var gi1 = permMod12[ii + i1 + perm[jj + j1]] * 3;
        t1 *= t1;
        n1 = t1 * t1 * (grad3[gi1] * x1 + grad3[gi1 + 1] * y1);
      }
      var t2 = 0.5 - x2 * x2 - y2 * y2;
      if (t2 >= 0) {
        var gi2 = permMod12[ii + 1 + perm[jj + 1]] * 3;
        t2 *= t2;
        n2 = t2 * t2 * (grad3[gi2] * x2 + grad3[gi2 + 1] * y2);
      }
      // Add contributions from each corner to get the final noise value.
      // The result is scaled to return values in the interval [-1,1].
      return 70.0 * (n0 + n1 + n2);
    },
    // 3D simplex noise
    noise3D: function(xin, yin, zin) {
      var permMod12 = this.permMod12;
      var perm = this.perm;
      var grad3 = this.grad3;
      var n0, n1, n2, n3; // Noise contributions from the four corners
      // Skew the input space to determine which simplex cell we're in
      var s = (xin + yin + zin) * F3; // Very nice and simple skew factor for 3D
      var i = Math.floor(xin + s);
      var j = Math.floor(yin + s);
      var k = Math.floor(zin + s);
      var t = (i + j + k) * G3;
      var X0 = i - t; // Unskew the cell origin back to (x,y,z) space
      var Y0 = j - t;
      var Z0 = k - t;
      var x0 = xin - X0; // The x,y,z distances from the cell origin
      var y0 = yin - Y0;
      var z0 = zin - Z0;
      // For the 3D case, the simplex shape is a slightly irregular tetrahedron.
      // Determine which simplex we are in.
      var i1, j1, k1; // Offsets for second corner of simplex in (i,j,k) coords
      var i2, j2, k2; // Offsets for third corner of simplex in (i,j,k) coords
      if (x0 >= y0) {
        if (y0 >= z0) {
          i1 = 1;
          j1 = 0;
          k1 = 0;
          i2 = 1;
          j2 = 1;
          k2 = 0;
        } // X Y Z order
        else if (x0 >= z0) {
          i1 = 1;
          j1 = 0;
          k1 = 0;
          i2 = 1;
          j2 = 0;
          k2 = 1;
        } // X Z Y order
        else {
          i1 = 0;
          j1 = 0;
          k1 = 1;
          i2 = 1;
          j2 = 0;
          k2 = 1;
        } // Z X Y order
      }
      else { // x0<y0
        if (y0 < z0) {
          i1 = 0;
          j1 = 0;
          k1 = 1;
          i2 = 0;
          j2 = 1;
          k2 = 1;
        } // Z Y X order
        else if (x0 < z0) {
          i1 = 0;
          j1 = 1;
          k1 = 0;
          i2 = 0;
          j2 = 1;
          k2 = 1;
        } // Y Z X order
        else {
          i1 = 0;
          j1 = 1;
          k1 = 0;
          i2 = 1;
          j2 = 1;
          k2 = 0;
        } // Y X Z order
      }
      // A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),
      // a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and
      // a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where
      // c = 1/6.
      var x1 = x0 - i1 + G3; // Offsets for second corner in (x,y,z) coords
      var y1 = y0 - j1 + G3;
      var z1 = z0 - k1 + G3;
      var x2 = x0 - i2 + 2.0 * G3; // Offsets for third corner in (x,y,z) coords
      var y2 = y0 - j2 + 2.0 * G3;
      var z2 = z0 - k2 + 2.0 * G3;
      var x3 = x0 - 1.0 + 3.0 * G3; // Offsets for last corner in (x,y,z) coords
      var y3 = y0 - 1.0 + 3.0 * G3;
      var z3 = z0 - 1.0 + 3.0 * G3;
      // Work out the hashed gradient indices of the four simplex corners
      var ii = i & 255;
      var jj = j & 255;
      var kk = k & 255;
      // Calculate the contribution from the four corners
      var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
      if (t0 < 0) n0 = 0.0;
      else {
        var gi0 = permMod12[ii + perm[jj + perm[kk]]] * 3;
        t0 *= t0;
        n0 = t0 * t0 * (grad3[gi0] * x0 + grad3[gi0 + 1] * y0 + grad3[gi0 + 2] * z0);
      }
      var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
      if (t1 < 0) n1 = 0.0;
      else {
        var gi1 = permMod12[ii + i1 + perm[jj + j1 + perm[kk + k1]]] * 3;
        t1 *= t1;
        n1 = t1 * t1 * (grad3[gi1] * x1 + grad3[gi1 + 1] * y1 + grad3[gi1 + 2] * z1);
      }
      var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
      if (t2 < 0) n2 = 0.0;
      else {
        var gi2 = permMod12[ii + i2 + perm[jj + j2 + perm[kk + k2]]] * 3;
        t2 *= t2;
        n2 = t2 * t2 * (grad3[gi2] * x2 + grad3[gi2 + 1] * y2 + grad3[gi2 + 2] * z2);
      }
      var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
      if (t3 < 0) n3 = 0.0;
      else {
        var gi3 = permMod12[ii + 1 + perm[jj + 1 + perm[kk + 1]]] * 3;
        t3 *= t3;
        n3 = t3 * t3 * (grad3[gi3] * x3 + grad3[gi3 + 1] * y3 + grad3[gi3 + 2] * z3);
      }
      // Add contributions from each corner to get the final noise value.
      // The result is scaled to stay just inside [-1,1]
      return 32.0 * (n0 + n1 + n2 + n3);
    },
    // 4D simplex noise, better simplex rank ordering method 2012-03-09
    noise4D: function(x, y, z, w) {
      var perm = this.perm;
      var grad4 = this.grad4;

      var n0, n1, n2, n3, n4; // Noise contributions from the five corners
      // Skew the (x,y,z,w) space to determine which cell of 24 simplices we're in
      var s = (x + y + z + w) * F4; // Factor for 4D skewing
      var i = Math.floor(x + s);
      var j = Math.floor(y + s);
      var k = Math.floor(z + s);
      var l = Math.floor(w + s);
      var t = (i + j + k + l) * G4; // Factor for 4D unskewing
      var X0 = i - t; // Unskew the cell origin back to (x,y,z,w) space
      var Y0 = j - t;
      var Z0 = k - t;
      var W0 = l - t;
      var x0 = x - X0; // The x,y,z,w distances from the cell origin
      var y0 = y - Y0;
      var z0 = z - Z0;
      var w0 = w - W0;
      // For the 4D case, the simplex is a 4D shape I won't even try to describe.
      // To find out which of the 24 possible simplices we're in, we need to
      // determine the magnitude ordering of x0, y0, z0 and w0.
      // Six pair-wise comparisons are performed between each possible pair
      // of the four coordinates, and the results are used to rank the numbers.
      var rankx = 0;
      var ranky = 0;
      var rankz = 0;
      var rankw = 0;
      if (x0 > y0) rankx++;
      else ranky++;
      if (x0 > z0) rankx++;
      else rankz++;
      if (x0 > w0) rankx++;
      else rankw++;
      if (y0 > z0) ranky++;
      else rankz++;
      if (y0 > w0) ranky++;
      else rankw++;
      if (z0 > w0) rankz++;
      else rankw++;
      var i1, j1, k1, l1; // The integer offsets for the second simplex corner
      var i2, j2, k2, l2; // The integer offsets for the third simplex corner
      var i3, j3, k3, l3; // The integer offsets for the fourth simplex corner
      // simplex[c] is a 4-vector with the numbers 0, 1, 2 and 3 in some order.
      // Many values of c will never occur, since e.g. x>y>z>w makes x<z, y<w and x<w
      // impossible. Only the 24 indices which have non-zero entries make any sense.
      // We use a thresholding to set the coordinates in turn from the largest magnitude.
      // Rank 3 denotes the largest coordinate.
      i1 = rankx >= 3 ? 1 : 0;
      j1 = ranky >= 3 ? 1 : 0;
      k1 = rankz >= 3 ? 1 : 0;
      l1 = rankw >= 3 ? 1 : 0;
      // Rank 2 denotes the second largest coordinate.
      i2 = rankx >= 2 ? 1 : 0;
      j2 = ranky >= 2 ? 1 : 0;
      k2 = rankz >= 2 ? 1 : 0;
      l2 = rankw >= 2 ? 1 : 0;
      // Rank 1 denotes the second smallest coordinate.
      i3 = rankx >= 1 ? 1 : 0;
      j3 = ranky >= 1 ? 1 : 0;
      k3 = rankz >= 1 ? 1 : 0;
      l3 = rankw >= 1 ? 1 : 0;
      // The fifth corner has all coordinate offsets = 1, so no need to compute that.
      var x1 = x0 - i1 + G4; // Offsets for second corner in (x,y,z,w) coords
      var y1 = y0 - j1 + G4;
      var z1 = z0 - k1 + G4;
      var w1 = w0 - l1 + G4;
      var x2 = x0 - i2 + 2.0 * G4; // Offsets for third corner in (x,y,z,w) coords
      var y2 = y0 - j2 + 2.0 * G4;
      var z2 = z0 - k2 + 2.0 * G4;
      var w2 = w0 - l2 + 2.0 * G4;
      var x3 = x0 - i3 + 3.0 * G4; // Offsets for fourth corner in (x,y,z,w) coords
      var y3 = y0 - j3 + 3.0 * G4;
      var z3 = z0 - k3 + 3.0 * G4;
      var w3 = w0 - l3 + 3.0 * G4;
      var x4 = x0 - 1.0 + 4.0 * G4; // Offsets for last corner in (x,y,z,w) coords
      var y4 = y0 - 1.0 + 4.0 * G4;
      var z4 = z0 - 1.0 + 4.0 * G4;
      var w4 = w0 - 1.0 + 4.0 * G4;
      // Work out the hashed gradient indices of the five simplex corners
      var ii = i & 255;
      var jj = j & 255;
      var kk = k & 255;
      var ll = l & 255;
      // Calculate the contribution from the five corners
      var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0 - w0 * w0;
      if (t0 < 0) n0 = 0.0;
      else {
        var gi0 = (perm[ii + perm[jj + perm[kk + perm[ll]]]] % 32) * 4;
        t0 *= t0;
        n0 = t0 * t0 * (grad4[gi0] * x0 + grad4[gi0 + 1] * y0 + grad4[gi0 + 2] * z0 + grad4[gi0 + 3] * w0);
      }
      var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1 - w1 * w1;
      if (t1 < 0) n1 = 0.0;
      else {
        var gi1 = (perm[ii + i1 + perm[jj + j1 + perm[kk + k1 + perm[ll + l1]]]] % 32) * 4;
        t1 *= t1;
        n1 = t1 * t1 * (grad4[gi1] * x1 + grad4[gi1 + 1] * y1 + grad4[gi1 + 2] * z1 + grad4[gi1 + 3] * w1);
      }
      var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2 - w2 * w2;
      if (t2 < 0) n2 = 0.0;
      else {
        var gi2 = (perm[ii + i2 + perm[jj + j2 + perm[kk + k2 + perm[ll + l2]]]] % 32) * 4;
        t2 *= t2;
        n2 = t2 * t2 * (grad4[gi2] * x2 + grad4[gi2 + 1] * y2 + grad4[gi2 + 2] * z2 + grad4[gi2 + 3] * w2);
      }
      var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3 - w3 * w3;
      if (t3 < 0) n3 = 0.0;
      else {
        var gi3 = (perm[ii + i3 + perm[jj + j3 + perm[kk + k3 + perm[ll + l3]]]] % 32) * 4;
        t3 *= t3;
        n3 = t3 * t3 * (grad4[gi3] * x3 + grad4[gi3 + 1] * y3 + grad4[gi3 + 2] * z3 + grad4[gi3 + 3] * w3);
      }
      var t4 = 0.6 - x4 * x4 - y4 * y4 - z4 * z4 - w4 * w4;
      if (t4 < 0) n4 = 0.0;
      else {
        var gi4 = (perm[ii + 1 + perm[jj + 1 + perm[kk + 1 + perm[ll + 1]]]] % 32) * 4;
        t4 *= t4;
        n4 = t4 * t4 * (grad4[gi4] * x4 + grad4[gi4 + 1] * y4 + grad4[gi4 + 2] * z4 + grad4[gi4 + 3] * w4);
      }
      // Sum up and scale the result to cover the range [-1,1]
      return 27.0 * (n0 + n1 + n2 + n3 + n4);
    }
  };

  function buildPermutationTable(random) {
    var i;
    var p = new Uint8Array(256);
    for (i = 0; i < 256; i++) {
      p[i] = i;
    }
    for (i = 0; i < 255; i++) {
      var r = i + ~~(random() * (256 - i));
      var aux = p[i];
      p[i] = p[r];
      p[r] = aux;
    }
    return p;
  }
  SimplexNoise._buildPermutationTable = buildPermutationTable;

  function alea() {
    // Johannes Baagøe <baagoe@baagoe.com>, 2010
    var s0 = 0;
    var s1 = 0;
    var s2 = 0;
    var c = 1;

    var mash = masher();
    s0 = mash(' ');
    s1 = mash(' ');
    s2 = mash(' ');

    for (var i = 0; i < arguments.length; i++) {
      s0 -= mash(arguments[i]);
      if (s0 < 0) {
        s0 += 1;
      }
      s1 -= mash(arguments[i]);
      if (s1 < 0) {
        s1 += 1;
      }
      s2 -= mash(arguments[i]);
      if (s2 < 0) {
        s2 += 1;
      }
    }
    mash = null;
    return function() {
      var t = 2091639 * s0 + c * 2.3283064365386963e-10; // 2^-32
      s0 = s1;
      s1 = s2;
      return s2 = t - (c = t | 0);
    };
  }
  function masher() {
    var n = 0xefc8249d;
    return function(data) {
      data = data.toString();
      for (var i = 0; i < data.length; i++) {
        n += data.charCodeAt(i);
        var h = 0.02519603282416938 * n;
        n = h >>> 0;
        h -= n;
        h *= n;
        n = h >>> 0;
        h -= n;
        n += h * 0x100000000; // 2^32
      }
      return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
    };
  }

  // amd
  if (true) !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {return SimplexNoise;}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  // common js
  if (true) exports.SimplexNoise = SimplexNoise;
  // browser
  else {}
  // nodejs
  if (true) {
    module.exports = SimplexNoise;
  }

})();


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "clone": () => (/* binding */ clone),
/* harmony export */   "copy": () => (/* binding */ copy),
/* harmony export */   "fromValues": () => (/* binding */ fromValues),
/* harmony export */   "set": () => (/* binding */ set),
/* harmony export */   "identity": () => (/* binding */ identity),
/* harmony export */   "transpose": () => (/* binding */ transpose),
/* harmony export */   "invert": () => (/* binding */ invert),
/* harmony export */   "adjoint": () => (/* binding */ adjoint),
/* harmony export */   "determinant": () => (/* binding */ determinant),
/* harmony export */   "multiply": () => (/* binding */ multiply),
/* harmony export */   "translate": () => (/* binding */ translate),
/* harmony export */   "scale": () => (/* binding */ scale),
/* harmony export */   "rotate": () => (/* binding */ rotate),
/* harmony export */   "rotateX": () => (/* binding */ rotateX),
/* harmony export */   "rotateY": () => (/* binding */ rotateY),
/* harmony export */   "rotateZ": () => (/* binding */ rotateZ),
/* harmony export */   "fromTranslation": () => (/* binding */ fromTranslation),
/* harmony export */   "fromScaling": () => (/* binding */ fromScaling),
/* harmony export */   "fromRotation": () => (/* binding */ fromRotation),
/* harmony export */   "fromXRotation": () => (/* binding */ fromXRotation),
/* harmony export */   "fromYRotation": () => (/* binding */ fromYRotation),
/* harmony export */   "fromZRotation": () => (/* binding */ fromZRotation),
/* harmony export */   "fromRotationTranslation": () => (/* binding */ fromRotationTranslation),
/* harmony export */   "fromQuat2": () => (/* binding */ fromQuat2),
/* harmony export */   "getTranslation": () => (/* binding */ getTranslation),
/* harmony export */   "getScaling": () => (/* binding */ getScaling),
/* harmony export */   "getRotation": () => (/* binding */ getRotation),
/* harmony export */   "fromRotationTranslationScale": () => (/* binding */ fromRotationTranslationScale),
/* harmony export */   "fromRotationTranslationScaleOrigin": () => (/* binding */ fromRotationTranslationScaleOrigin),
/* harmony export */   "fromQuat": () => (/* binding */ fromQuat),
/* harmony export */   "frustum": () => (/* binding */ frustum),
/* harmony export */   "perspective": () => (/* binding */ perspective),
/* harmony export */   "perspectiveFromFieldOfView": () => (/* binding */ perspectiveFromFieldOfView),
/* harmony export */   "ortho": () => (/* binding */ ortho),
/* harmony export */   "lookAt": () => (/* binding */ lookAt),
/* harmony export */   "targetTo": () => (/* binding */ targetTo),
/* harmony export */   "str": () => (/* binding */ str),
/* harmony export */   "frob": () => (/* binding */ frob),
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "subtract": () => (/* binding */ subtract),
/* harmony export */   "multiplyScalar": () => (/* binding */ multiplyScalar),
/* harmony export */   "multiplyScalarAndAdd": () => (/* binding */ multiplyScalarAndAdd),
/* harmony export */   "exactEquals": () => (/* binding */ exactEquals),
/* harmony export */   "equals": () => (/* binding */ equals),
/* harmony export */   "mul": () => (/* binding */ mul),
/* harmony export */   "sub": () => (/* binding */ sub)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);

/**
 * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
 * @module mat4
 */

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(16);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
  }

  out[0] = 1;
  out[5] = 1;
  out[10] = 1;
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(16);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */

function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(16);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */

function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    var a12 = a[6],
        a13 = a[7];
    var a23 = a[11];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }

  return out;
}
/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
  return out;
}
/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
  out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
  out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
  out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
  out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
  out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
  out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
  out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
  out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
  out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
  out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
  out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
  out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
  return out;
}
/**
 * Calculates the determinant of a mat4
 *
 * @param {ReadonlyMat4} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15]; // Cache only the current line of the second matrix

  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[4];
  b1 = b[5];
  b2 = b[6];
  b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[8];
  b1 = b[9];
  b2 = b[10];
  b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[12];
  b1 = b[13];
  b2 = b[14];
  b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}
/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to translate
 * @param {ReadonlyVec3} v vector to translate by
 * @returns {mat4} out
 */

function translate(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;

  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a03;
    out[4] = a10;
    out[5] = a11;
    out[6] = a12;
    out[7] = a13;
    out[8] = a20;
    out[9] = a21;
    out[10] = a22;
    out[11] = a23;
    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }

  return out;
}
/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {ReadonlyVec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/

function scale(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function rotate(out, a, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;
  var b00, b01, b02;
  var b10, b11, b12;
  var b20, b21, b22;

  if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;
  a00 = a[0];
  a01 = a[1];
  a02 = a[2];
  a03 = a[3];
  a10 = a[4];
  a11 = a[5];
  a12 = a[6];
  a13 = a[7];
  a20 = a[8];
  a21 = a[9];
  a22 = a[10];
  a23 = a[11]; // Construct the elements of the rotation matrix

  b00 = x * x * t + c;
  b01 = y * x * t + z * s;
  b02 = z * x * t - y * s;
  b10 = x * y * t - z * s;
  b11 = y * y * t + c;
  b12 = z * y * t + x * s;
  b20 = x * z * t + y * s;
  b21 = y * z * t - x * s;
  b22 = z * z * t + c; // Perform rotation-specific matrix multiplication

  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  return out;
}
/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateX(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateY(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateZ(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */

function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Scaling vector
 * @returns {mat4} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function fromRotation(out, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;

  if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c; // Perform rotation-specific matrix multiplication

  out[0] = x * x * t + c;
  out[1] = y * x * t + z * s;
  out[2] = z * x * t - y * s;
  out[3] = 0;
  out[4] = x * y * t - z * s;
  out[5] = y * y * t + c;
  out[6] = z * y * t + x * s;
  out[7] = 0;
  out[8] = x * z * t + y * s;
  out[9] = y * z * t - x * s;
  out[10] = z * z * t + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromXRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromYRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = 0;
  out[2] = -s;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromZRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */

function fromRotationTranslation(out, q, v) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 from a dual quat.
 *
 * @param {mat4} out Matrix
 * @param {ReadonlyQuat2} a Dual Quaternion
 * @returns {mat4} mat4 receiving operation result
 */

function fromQuat2(out, a) {
  var translation = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7];
  var magnitude = bx * bx + by * by + bz * bz + bw * bw; //Only scale if it makes sense

  if (magnitude > 0) {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
  } else {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  }

  fromRotationTranslation(out, a, translation);
  return out;
}
/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];
  return out;
}
/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getScaling(out, mat) {
  var m11 = mat[0];
  var m12 = mat[1];
  var m13 = mat[2];
  var m21 = mat[4];
  var m22 = mat[5];
  var m23 = mat[6];
  var m31 = mat[8];
  var m32 = mat[9];
  var m33 = mat[10];
  out[0] = Math.hypot(m11, m12, m13);
  out[1] = Math.hypot(m21, m22, m23);
  out[2] = Math.hypot(m31, m32, m33);
  return out;
}
/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */

function getRotation(out, mat) {
  var scaling = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  getScaling(scaling, mat);
  var is1 = 1 / scaling[0];
  var is2 = 1 / scaling[1];
  var is3 = 1 / scaling[2];
  var sm11 = mat[0] * is1;
  var sm12 = mat[1] * is2;
  var sm13 = mat[2] * is3;
  var sm21 = mat[4] * is1;
  var sm22 = mat[5] * is2;
  var sm23 = mat[6] * is3;
  var sm31 = mat[8] * is1;
  var sm32 = mat[9] * is2;
  var sm33 = mat[10] * is3;
  var trace = sm11 + sm22 + sm33;
  var S = 0;

  if (trace > 0) {
    S = Math.sqrt(trace + 1.0) * 2;
    out[3] = 0.25 * S;
    out[0] = (sm23 - sm32) / S;
    out[1] = (sm31 - sm13) / S;
    out[2] = (sm12 - sm21) / S;
  } else if (sm11 > sm22 && sm11 > sm33) {
    S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
    out[3] = (sm23 - sm32) / S;
    out[0] = 0.25 * S;
    out[1] = (sm12 + sm21) / S;
    out[2] = (sm31 + sm13) / S;
  } else if (sm22 > sm33) {
    S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
    out[3] = (sm31 - sm13) / S;
    out[0] = (sm12 + sm21) / S;
    out[1] = 0.25 * S;
    out[2] = (sm23 + sm32) / S;
  } else {
    S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
    out[3] = (sm12 - sm21) / S;
    out[0] = (sm31 + sm13) / S;
    out[1] = (sm23 + sm32) / S;
    out[2] = 0.25 * S;
  }

  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @returns {mat4} out
 */

function fromRotationTranslationScale(out, q, v, s) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @param {ReadonlyVec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */

function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  var ox = o[0];
  var oy = o[1];
  var oz = o[2];
  var out0 = (1 - (yy + zz)) * sx;
  var out1 = (xy + wz) * sx;
  var out2 = (xz - wy) * sx;
  var out4 = (xy - wz) * sy;
  var out5 = (1 - (xx + zz)) * sy;
  var out6 = (yz + wx) * sy;
  var out8 = (xz + wy) * sz;
  var out9 = (yz - wx) * sz;
  var out10 = (1 - (xx + yy)) * sz;
  out[0] = out0;
  out[1] = out1;
  out[2] = out2;
  out[3] = 0;
  out[4] = out4;
  out[5] = out5;
  out[6] = out6;
  out[7] = 0;
  out[8] = out8;
  out[9] = out9;
  out[10] = out10;
  out[11] = 0;
  out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
  out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
  out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
  out[15] = 1;
  return out;
}
/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyQuat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */

function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;
  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;
  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */

function frustum(out, left, right, bottom, top, near, far) {
  var rl = 1 / (right - left);
  var tb = 1 / (top - bottom);
  var nf = 1 / (near - far);
  out[0] = near * 2 * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = near * 2 * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = far * near * 2 * nf;
  out[15] = 0;
  return out;
}
/**
 * Generates a perspective projection matrix with the given bounds.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */

function perspective(out, fovy, aspect, near, far) {
  var f = 1.0 / Math.tan(fovy / 2),
      nf;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;

  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = (far + near) * nf;
    out[14] = 2 * far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -2 * near;
  }

  return out;
}
/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function perspectiveFromFieldOfView(out, fov, near, far) {
  var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
  var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
  var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
  var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
  var xScale = 2.0 / (leftTan + rightTan);
  var yScale = 2.0 / (upTan + downTan);
  out[0] = xScale;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  out[4] = 0.0;
  out[5] = yScale;
  out[6] = 0.0;
  out[7] = 0.0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = (upTan - downTan) * yScale * 0.5;
  out[10] = far / (near - far);
  out[11] = -1.0;
  out[12] = 0.0;
  out[13] = 0.0;
  out[14] = far * near / (near - far);
  out[15] = 0.0;
  return out;
}
/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function ortho(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}
/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis.
 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */

function lookAt(out, eye, center, up) {
  var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
  var eyex = eye[0];
  var eyey = eye[1];
  var eyez = eye[2];
  var upx = up[0];
  var upy = up[1];
  var upz = up[2];
  var centerx = center[0];
  var centery = center[1];
  var centerz = center[2];

  if (Math.abs(eyex - centerx) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON && Math.abs(eyey - centery) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON && Math.abs(eyez - centerz) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    return identity(out);
  }

  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;
  len = 1 / Math.hypot(z0, z1, z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;
  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len = Math.hypot(x0, x1, x2);

  if (!len) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;
  len = Math.hypot(y0, y1, y2);

  if (!len) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len = 1 / len;
    y0 *= len;
    y1 *= len;
    y2 *= len;
  }

  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;
  return out;
}
/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */

function targetTo(out, eye, target, up) {
  var eyex = eye[0],
      eyey = eye[1],
      eyez = eye[2],
      upx = up[0],
      upy = up[1],
      upz = up[2];
  var z0 = eyex - target[0],
      z1 = eyey - target[1],
      z2 = eyez - target[2];
  var len = z0 * z0 + z1 * z1 + z2 * z2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }

  var x0 = upy * z2 - upz * z1,
      x1 = upz * z0 - upx * z2,
      x2 = upx * z1 - upy * z0;
  len = x0 * x0 + x1 * x1 + x2 * x2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
}
/**
 * Returns a string representation of a mat4
 *
 * @param {ReadonlyMat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return "mat4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + ")";
}
/**
 * Returns Frobenius norm of a mat4
 *
 * @param {ReadonlyMat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
}
/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}
/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  out[9] = a[9] + b[9] * scale;
  out[10] = a[10] + b[10] * scale;
  out[11] = a[11] + b[11] * scale;
  out[12] = a[12] + b[12] * scale;
  out[13] = a[13] + b[13] * scale;
  out[14] = a[14] + b[14] * scale;
  out[15] = a[15] + b[15] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7];
  var a8 = a[8],
      a9 = a[9],
      a10 = a[10],
      a11 = a[11];
  var a12 = a[12],
      a13 = a[13],
      a14 = a[14],
      a15 = a[15];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  var b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7];
  var b8 = b[8],
      b9 = b[9],
      b10 = b[10],
      b11 = b[11];
  var b12 = b[12],
      b13 = b[13],
      b14 = b[14],
      b15 = b[15];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a15), Math.abs(b15));
}
/**
 * Alias for {@link mat4.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat4.subtract}
 * @function
 */

var sub = subtract;

/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "clone": () => (/* binding */ clone),
/* harmony export */   "fromValues": () => (/* binding */ fromValues),
/* harmony export */   "copy": () => (/* binding */ copy),
/* harmony export */   "set": () => (/* binding */ set),
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "subtract": () => (/* binding */ subtract),
/* harmony export */   "multiply": () => (/* binding */ multiply),
/* harmony export */   "divide": () => (/* binding */ divide),
/* harmony export */   "ceil": () => (/* binding */ ceil),
/* harmony export */   "floor": () => (/* binding */ floor),
/* harmony export */   "min": () => (/* binding */ min),
/* harmony export */   "max": () => (/* binding */ max),
/* harmony export */   "round": () => (/* binding */ round),
/* harmony export */   "scale": () => (/* binding */ scale),
/* harmony export */   "scaleAndAdd": () => (/* binding */ scaleAndAdd),
/* harmony export */   "distance": () => (/* binding */ distance),
/* harmony export */   "squaredDistance": () => (/* binding */ squaredDistance),
/* harmony export */   "length": () => (/* binding */ length),
/* harmony export */   "squaredLength": () => (/* binding */ squaredLength),
/* harmony export */   "negate": () => (/* binding */ negate),
/* harmony export */   "inverse": () => (/* binding */ inverse),
/* harmony export */   "normalize": () => (/* binding */ normalize),
/* harmony export */   "dot": () => (/* binding */ dot),
/* harmony export */   "cross": () => (/* binding */ cross),
/* harmony export */   "lerp": () => (/* binding */ lerp),
/* harmony export */   "random": () => (/* binding */ random),
/* harmony export */   "transformMat2": () => (/* binding */ transformMat2),
/* harmony export */   "transformMat2d": () => (/* binding */ transformMat2d),
/* harmony export */   "transformMat3": () => (/* binding */ transformMat3),
/* harmony export */   "transformMat4": () => (/* binding */ transformMat4),
/* harmony export */   "rotate": () => (/* binding */ rotate),
/* harmony export */   "angle": () => (/* binding */ angle),
/* harmony export */   "zero": () => (/* binding */ zero),
/* harmony export */   "str": () => (/* binding */ str),
/* harmony export */   "exactEquals": () => (/* binding */ exactEquals),
/* harmony export */   "equals": () => (/* binding */ equals),
/* harmony export */   "len": () => (/* binding */ len),
/* harmony export */   "sub": () => (/* binding */ sub),
/* harmony export */   "mul": () => (/* binding */ mul),
/* harmony export */   "div": () => (/* binding */ div),
/* harmony export */   "dist": () => (/* binding */ dist),
/* harmony export */   "sqrDist": () => (/* binding */ sqrDist),
/* harmony export */   "sqrLen": () => (/* binding */ sqrLen),
/* harmony export */   "forEach": () => (/* binding */ forEach)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);

/**
 * 2 Dimensional Vector
 * @module vec2
 */

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(2);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
  }

  return out;
}
/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {ReadonlyVec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(2);
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */

function fromValues(x, y) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(2);
  out[0] = x;
  out[1] = y;
  return out;
}
/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the source vector
 * @returns {vec2} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */

function set(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}
/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
}
/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
}
/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  return out;
}
/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to ceil
 * @returns {vec2} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  return out;
}
/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to floor
 * @returns {vec2} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  return out;
}
/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  return out;
}
/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  return out;
}
/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to round
 * @returns {vec2} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  return out;
}
/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  return out;
}
/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return Math.hypot(x, y);
}
/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return x * x + y * y;
}
/**
 * Calculates the length of a vec2
 *
 * @param {ReadonlyVec2} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0],
      y = a[1];
  return Math.hypot(x, y);
}
/**
 * Calculates the squared length of a vec2
 *
 * @param {ReadonlyVec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0],
      y = a[1];
  return x * x + y * y;
}
/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to negate
 * @returns {vec2} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
}
/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to invert
 * @returns {vec2} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  return out;
}
/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to normalize
 * @returns {vec2} out
 */

function normalize(out, a) {
  var x = a[0],
      y = a[1];
  var len = x * x + y * y;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  return out;
}
/**
 * Calculates the dot product of two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1];
}
/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec3} out
 */

function cross(out, a, b) {
  var z = a[0] * b[1] - a[1] * b[0];
  out[0] = out[1] = 0;
  out[2] = z;
  return out;
}
/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec2} out
 */

function lerp(out, a, b, t) {
  var ax = a[0],
      ay = a[1];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */

function random(out, scale) {
  scale = scale || 1.0;
  var r = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2.0 * Math.PI;
  out[0] = Math.cos(r) * scale;
  out[1] = Math.sin(r) * scale;
  return out;
}
/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat2} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat2(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  return out;
}
/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat2d} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat2d(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y + m[4];
  out[1] = m[1] * x + m[3] * y + m[5];
  return out;
}
/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat3} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
}
/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat4(out, a, m) {
  var x = a[0];
  var y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}
/**
 * Rotate a 2D vector
 * @param {vec2} out The receiving vec2
 * @param {ReadonlyVec2} a The vec2 point to rotate
 * @param {ReadonlyVec2} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec2} out
 */

function rotate(out, a, b, rad) {
  //Translate point to the origin
  var p0 = a[0] - b[0],
      p1 = a[1] - b[1],
      sinC = Math.sin(rad),
      cosC = Math.cos(rad); //perform rotation and translate to correct position

  out[0] = p0 * cosC - p1 * sinC + b[0];
  out[1] = p0 * sinC + p1 * cosC + b[1];
  return out;
}
/**
 * Get the angle between two 2D vectors
 * @param {ReadonlyVec2} a The first operand
 * @param {ReadonlyVec2} b The second operand
 * @returns {Number} The angle in radians
 */

function angle(a, b) {
  var x1 = a[0],
      y1 = a[1],
      x2 = b[0],
      y2 = b[1],
      // mag is the product of the magnitudes of a and b
  mag = Math.sqrt(x1 * x1 + y1 * y1) * Math.sqrt(x2 * x2 + y2 * y2),
      // mag &&.. short circuits if mag == 0
  cosine = mag && (x1 * x2 + y1 * y2) / mag; // Math.min(Math.max(cosine, -1), 1) clamps the cosine between -1 and 1

  return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
/**
 * Set the components of a vec2 to zero
 *
 * @param {vec2} out the receiving vector
 * @returns {vec2} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec2} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return "vec2(" + a[0] + ", " + a[1] + ")";
}
/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec2} a The first vector.
 * @param {ReadonlyVec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec2} a The first vector.
 * @param {ReadonlyVec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1];
  var b0 = b[0],
      b1 = b[1];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1));
}
/**
 * Alias for {@link vec2.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec2.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec2.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec2.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec2.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec2.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 2;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
    }

    return a;
  };
}();

/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "clone": () => (/* binding */ clone),
/* harmony export */   "length": () => (/* binding */ length),
/* harmony export */   "fromValues": () => (/* binding */ fromValues),
/* harmony export */   "copy": () => (/* binding */ copy),
/* harmony export */   "set": () => (/* binding */ set),
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "subtract": () => (/* binding */ subtract),
/* harmony export */   "multiply": () => (/* binding */ multiply),
/* harmony export */   "divide": () => (/* binding */ divide),
/* harmony export */   "ceil": () => (/* binding */ ceil),
/* harmony export */   "floor": () => (/* binding */ floor),
/* harmony export */   "min": () => (/* binding */ min),
/* harmony export */   "max": () => (/* binding */ max),
/* harmony export */   "round": () => (/* binding */ round),
/* harmony export */   "scale": () => (/* binding */ scale),
/* harmony export */   "scaleAndAdd": () => (/* binding */ scaleAndAdd),
/* harmony export */   "distance": () => (/* binding */ distance),
/* harmony export */   "squaredDistance": () => (/* binding */ squaredDistance),
/* harmony export */   "squaredLength": () => (/* binding */ squaredLength),
/* harmony export */   "negate": () => (/* binding */ negate),
/* harmony export */   "inverse": () => (/* binding */ inverse),
/* harmony export */   "normalize": () => (/* binding */ normalize),
/* harmony export */   "dot": () => (/* binding */ dot),
/* harmony export */   "cross": () => (/* binding */ cross),
/* harmony export */   "lerp": () => (/* binding */ lerp),
/* harmony export */   "hermite": () => (/* binding */ hermite),
/* harmony export */   "bezier": () => (/* binding */ bezier),
/* harmony export */   "random": () => (/* binding */ random),
/* harmony export */   "transformMat4": () => (/* binding */ transformMat4),
/* harmony export */   "transformMat3": () => (/* binding */ transformMat3),
/* harmony export */   "transformQuat": () => (/* binding */ transformQuat),
/* harmony export */   "rotateX": () => (/* binding */ rotateX),
/* harmony export */   "rotateY": () => (/* binding */ rotateY),
/* harmony export */   "rotateZ": () => (/* binding */ rotateZ),
/* harmony export */   "angle": () => (/* binding */ angle),
/* harmony export */   "zero": () => (/* binding */ zero),
/* harmony export */   "str": () => (/* binding */ str),
/* harmony export */   "exactEquals": () => (/* binding */ exactEquals),
/* harmony export */   "equals": () => (/* binding */ equals),
/* harmony export */   "sub": () => (/* binding */ sub),
/* harmony export */   "mul": () => (/* binding */ mul),
/* harmony export */   "div": () => (/* binding */ div),
/* harmony export */   "dist": () => (/* binding */ dist),
/* harmony export */   "sqrDist": () => (/* binding */ sqrDist),
/* harmony export */   "len": () => (/* binding */ len),
/* harmony export */   "sqrLen": () => (/* binding */ sqrLen),
/* harmony export */   "forEach": () => (/* binding */ forEach)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);

/**
 * 3 Dimensional Vector
 * @module vec3
 */

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }

  return out;
}
/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {ReadonlyVec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Calculates the length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return Math.hypot(x, y, z);
}
/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */

function fromValues(x, y, z) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the source vector
 * @returns {vec3} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */

function set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}
/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}
/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}
/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to ceil
 * @returns {vec3} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}
/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to floor
 * @returns {vec3} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}
/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}
/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}
/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to round
 * @returns {vec3} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}
/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}
/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return Math.hypot(x, y, z);
}
/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return x * x + y * y + z * z;
}
/**
 * Calculates the squared length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return x * x + y * y + z * z;
}
/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to negate
 * @returns {vec3} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}
/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to invert
 * @returns {vec3} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}
/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to normalize
 * @returns {vec3} out
 */

function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var len = x * x + y * y + z * z;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  out[2] = a[2] * len;
  return out;
}
/**
 * Calculates the dot product of two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function cross(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2];
  var bx = b[0],
      by = b[1],
      bz = b[2];
  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}
/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}
/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function hermite(out, a, b, c, d, t) {
  var factorTimes2 = t * t;
  var factor1 = factorTimes2 * (2 * t - 3) + 1;
  var factor2 = factorTimes2 * (t - 2) + t;
  var factor3 = factorTimes2 * (t - 1);
  var factor4 = factorTimes2 * (3 - 2 * t);
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function bezier(out, a, b, c, d, t) {
  var inverseFactor = 1 - t;
  var inverseFactorTimesTwo = inverseFactor * inverseFactor;
  var factorTimes2 = t * t;
  var factor1 = inverseFactorTimesTwo * inverseFactor;
  var factor2 = 3 * t * inverseFactorTimesTwo;
  var factor3 = 3 * factorTimes2 * inverseFactor;
  var factor4 = factorTimes2 * t;
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */

function random(out, scale) {
  scale = scale || 1.0;
  var r = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2.0 * Math.PI;
  var z = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2.0 - 1.0;
  var zScale = Math.sqrt(1.0 - z * z) * scale;
  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale;
  return out;
}
/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec3} out
 */

function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}
/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */

function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}
/**
 * Transforms the vec3 with a quat
 * Can also be used for dual quaternions. (Multiply it with the real part)
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyQuat} q quaternion to transform with
 * @returns {vec3} out
 */

function transformQuat(out, a, q) {
  // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3];
  var x = a[0],
      y = a[1],
      z = a[2]; // var qvec = [qx, qy, qz];
  // var uv = vec3.cross([], qvec, a);

  var uvx = qy * z - qz * y,
      uvy = qz * x - qx * z,
      uvz = qx * y - qy * x; // var uuv = vec3.cross([], qvec, uv);

  var uuvx = qy * uvz - qz * uvy,
      uuvy = qz * uvx - qx * uvz,
      uuvz = qx * uvy - qy * uvx; // vec3.scale(uv, uv, 2 * w);

  var w2 = qw * 2;
  uvx *= w2;
  uvy *= w2;
  uvz *= w2; // vec3.scale(uuv, uuv, 2);

  uuvx *= 2;
  uuvy *= 2;
  uuvz *= 2; // return vec3.add(out, a, vec3.add(out, uv, uuv));

  out[0] = x + uvx + uuvx;
  out[1] = y + uvy + uuvy;
  out[2] = z + uvz + uuvz;
  return out;
}
/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function rotateX(out, a, b, rad) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0];
  r[1] = p[1] * Math.cos(rad) - p[2] * Math.sin(rad);
  r[2] = p[1] * Math.sin(rad) + p[2] * Math.cos(rad); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function rotateY(out, a, b, rad) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[2] * Math.sin(rad) + p[0] * Math.cos(rad);
  r[1] = p[1];
  r[2] = p[2] * Math.cos(rad) - p[0] * Math.sin(rad); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function rotateZ(out, a, b, rad) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0] * Math.cos(rad) - p[1] * Math.sin(rad);
  r[1] = p[0] * Math.sin(rad) + p[1] * Math.cos(rad);
  r[2] = p[2]; //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Get the angle between two 3D vectors
 * @param {ReadonlyVec3} a The first operand
 * @param {ReadonlyVec3} b The second operand
 * @returns {Number} The angle in radians
 */

function angle(a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2],
      bx = b[0],
      by = b[1],
      bz = b[2],
      mag1 = Math.sqrt(ax * ax + ay * ay + az * az),
      mag2 = Math.sqrt(bx * bx + by * by + bz * bz),
      mag = mag1 * mag2,
      cosine = mag && dot(a, b) / mag;
  return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
/**
 * Set the components of a vec3 to zero
 *
 * @param {vec3} out the receiving vector
 * @returns {vec3} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  out[2] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return "vec3(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2));
}
/**
 * Alias for {@link vec3.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec3.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec3.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec3.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec3.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 3;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
    }

    return a;
  };
}();

/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Shape": () => (/* binding */ Shape)
/* harmony export */ });
/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _SceneChild__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _ShapeBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);



/**
 * Container of ShapeBase or Group, it applies transformations on each repetition
 *
 * @category Core.Shapes
 */
class Shape extends _ShapeBase__WEBPACK_IMPORTED_MODULE_2__.ShapeBase {
    /**
     * Creates an instance of Shape.
     *
     * @param {ShapeSettings} [settings={}]
     */
    constructor(settings) {
        settings.type = settings.type || 'Shape';
        super(settings);
        if (settings.shape instanceof _SceneChild__WEBPACK_IMPORTED_MODULE_1__.SceneChild) {
            this.shape = settings.shape;
        }
        else {
            console.warn("[Urpflanze:Shape] requires the 'shape' property to be instance of SceneChild,\nYou passed:", settings.shape);
        }
        this.shapeUseParent = !!settings.shapeUseParent;
        this.bStatic = this.isStatic();
        this.bStaticIndexed = this.isStaticIndexed();
    }
    /**
     * Check if shape is static
     *
     * @returns {boolean}
     */
    isStatic() {
        // return super.isStatic() && !this.shapeUseParent
        return super.isStatic() && (this.shape ? this.shape.isStatic() : true);
    }
    /**
     * Check if shape has static index
     *
     * @returns {boolean}
     */
    isStaticIndexed() {
        return super.isStaticIndexed() && (this.shape ? this.shape.isStaticIndexed() : true);
    }
    /**
     * Find shape by id or name
     *
     * @param {number | string} idOrName
     * @returns {(SceneChild | null)}
     */
    find(idOrName) {
        if (this.id === idOrName || this.name === idOrName)
            return this;
        if (this.shape)
            return this.shape.find(idOrName);
        return null;
    }
    /**
     * Return length of buffer
     *
     * @param {PropArguments} propArguments
     * @returns {number}
     */
    getBufferLength(propArguments) {
        if (this.bStatic && this.buffer && this.buffer.length > 0)
            return this.buffer.length;
        const childBufferLength = this.shape ? this.shape.getBufferLength(propArguments) : 0;
        return childBufferLength * this.getRepetitionCount();
    }
    /**
     * Return a buffer of children shape or loop generated buffer
     *
     * @protected
     * @param {number} generateId
     * @param {PropArguments} propArguments
     * @returns {Float32Array}
     */
    generateBuffer(generateId, propArguments) {
        if (this.shape) {
            if (this.shapeUseParent || this.shape.generateId !== generateId) {
                if (this.shapeUseParent) {
                    this.shape.clearBuffer(true, false);
                }
                this.shape.generate(generateId, false, propArguments);
            }
            return this.shape.getBuffer();
        }
        return Shape.EMPTY_BUFFER;
    }
    /**
     * Return bounding
     *
     * @param {boolean} bDirectSceneChild
     * @returns {IShapeBounding}
     */
    getShapeBounding() {
        if (this.shape) {
            return this.shape.getBounding();
        }
        return this.bounding; // empty bounding defined in ShapeBase
    }
    /**
     * Add to indexed buffer
     *
     * @protected
     * @param {number} frameLength
     * @param {IRepetition} repetition
     * @returns {number} nextIndex
     */
    addIndex(frameLength, repetition, singleRepetitionBounding) {
        if (this.shape) {
            const childIndexedBuffer = this.shape.getIndexedBuffer() || [];
            const parentBufferIndex = {
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
            };
            for (let i = 0, len = childIndexedBuffer.length; i < len; i++) {
                const currentIndexed = { ...childIndexedBuffer[i] };
                const parent = currentIndexed.parent
                    ? Shape.setIndexedParent(currentIndexed.parent, parentBufferIndex)
                    : parentBufferIndex;
                this.indexedBuffer.push({ ...currentIndexed, parent });
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
    static setIndexedParent(current, parent) {
        const index = {
            ...current,
        };
        index.parent = current.parent ? Shape.setIndexedParent(current.parent, parent) : parent;
        return index;
    }
    /**
     * Set shape
     *
     * @param {(SceneChild | undefined)} [shape]
     */
    setShape(shape) {
        if (typeof shape === 'undefined') {
            this.shape = undefined;
            this.clearBuffer(true, true);
        }
        else {
            this.scene && _Scene__WEBPACK_IMPORTED_MODULE_0__.Scene.propagateToChilden(shape, this.scene);
            this.shape = shape;
            this.shape.clearBuffer(true, true);
        }
    }
}

//# sourceMappingURL=Shape.js.map

/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShapePrimitive": () => (/* binding */ ShapePrimitive)
/* harmony export */ });
/* harmony import */ var _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _ShapeBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _modifiers_Modifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _modifiers_Adapt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);




/**
 * @category Core.Abstract
 */
class ShapePrimitive extends _ShapeBase__WEBPACK_IMPORTED_MODULE_1__.ShapeBase {
    /**
     * Creates an instance of ShapePrimitive.
     *
     * @param {IShapePrimitiveSettings} [settings={}]
     */
    constructor(settings = {}) {
        super(settings);
        /**
         * Contain the bounding of the last generated buffer
         *
         * @type {IShapeBounding}
         */
        this.currentGenerationPrimitiveBounding = _modifiers_Adapt__WEBPACK_IMPORTED_MODULE_3__.Bounding.empty();
        this.props.sideLength =
            typeof settings.sideLength === 'undefined'
                ? undefined
                : typeof settings.sideLength === 'function'
                    ? settings.sideLength
                    : _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_0__.toVec2(settings.sideLength);
        this.drawer = settings.drawer || {};
        this.modifiers = settings.modifiers;
        this.bClosed = settings.bClosed ?? true;
    }
    /**
     * Check if shape is static
     *
     * @returns {boolean}
     * @memberof ShapePrimitive
     */
    isStatic() {
        return typeof this.props.sideLength !== 'function' && super.isStatic();
    }
    /**
     * Return sideLength for current repetition
     *
     * @param propArguments
     * @returns
     */
    getRepetitionSideLength(propArguments) {
        if (this.bStatic) {
            // not set default value into constructor because it can be overridden by group
            if (typeof this.props.sideLength === 'undefined') {
                this.props.sideLength = [50, 50];
            }
            else if (typeof this.props.sideLength === 'number') {
                this.props.sideLength = [this.props.sideLength, this.props.sideLength];
            }
            return this.props.sideLength;
        }
        return _math_gl_matrix_extensions__WEBPACK_IMPORTED_MODULE_0__.toVec2(this.getProp('sideLength', propArguments, [50, 50]));
    }
    /**
     * Apply modifiers on single repetition buffer
     *
     * @param buffer
     * @returns
     */
    applyModifiers(buffer, propArguments) {
        if (typeof this.modifiers === 'undefined')
            return buffer;
        let modified = buffer;
        const modifiers = Array.isArray(this.modifiers) ? this.modifiers : [this.modifiers];
        for (let i = 0, len = modifiers.length; i < len; i++) {
            const modifier = modifiers[i] instanceof _modifiers_Modifier__WEBPACK_IMPORTED_MODULE_2__.Modifier
                ? modifiers[i]
                : modifiers[i](propArguments);
            //@ts-ignore
            modified = modifier.apply(modified, this.bClosed, this);
        }
        return modified;
    }
    /**
     * Return a bounding of generated buffer if is direct scene child
     *
     * @returns {IShapeBounding}
     * @memberof ShapePrimitive
     */
    getShapeBounding() {
        return this.currentGenerationPrimitiveBounding;
    }
    /**
     * Add this to indexedBuffer
     *
     * @protected
     * @param {number} frameLength
     * @param {IRepetition} repetition
     * @returns {number} nextIndex
     */
    addIndex(frameLength, repetition, singleRepetitionBounding) {
        const index = {
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
        };
        this.indexedBuffer.push(index);
    }
    /**
     * Return bClosed
     *
     * @returns {boolean}
     * @memberof ShapePrimitive
     */
    isClosed() {
        return this.bClosed;
    }
    /**
     * Set bClosed
     *
     * @param {boolean} bClosed
     * @memberof ShapePrimitive
     */
    setClosed(bClosed) {
        this.bClosed = bClosed;
    }
}

//# sourceMappingURL=ShapePrimitive.js.map

/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShapeLoop": () => (/* binding */ ShapeLoop)
/* harmony export */ });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _modifiers_Adapt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _shapes_ShapePrimitive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26);
/* harmony import */ var _ShapeBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);




/**
 * Shape Loop
 *
 * @category Core.Shapes
 * @public
 * @class ShapeLoop
 * @extends {ShapePrimitive}
 */
class ShapeLoop extends _shapes_ShapePrimitive__WEBPACK_IMPORTED_MODULE_2__.ShapePrimitive {
    /**
     * Creates an instance of ShapeLoop.
     *
     * @param {IShapeLoopSettings} [settings={}]
     * @param {boolean} [bPreventGeneration=false]
     */
    constructor(settings = {}, bPreventGeneration = false) {
        settings.type = settings.type || 'ShapeLoop';
        super(settings);
        this.loopDependencies = (settings.loopDependencies || []).concat('sideLength');
        this.props.loop = settings.loop;
        if (!bPreventGeneration) {
            this.loop = {
                start: 0,
                end: _math__WEBPACK_IMPORTED_MODULE_0__.PI2,
                inc: _math__WEBPACK_IMPORTED_MODULE_0__.PI2 / 10,
                vertex: () => [0, 0],
            };
            this.bStaticLoop = this.isStaticLoop();
            this.bStatic = this.isStatic();
            this.bStaticIndexed = this.isStaticIndexed();
        }
    }
    /**
     * Check if currentOrSingleLoopBuffer is static
     *
     * @returns {boolean}
     */
    isStaticLoop() {
        if (this.loopDependencies.includes('propArguments'))
            return false;
        for (let i = 0, len = this.loopDependencies.length; i < len; i++)
            if (typeof this.props[this.loopDependencies[i]] === 'function')
                return false;
        return true;
    }
    /**
     * Check if shape is static
     *
     * @returns {boolean}
     */
    isStatic() {
        return this.bStaticLoop && super.isStatic();
    }
    /**
     * Check if shape has static indexed
     * The number of vertices is defined by number of loop iteration
     *
     * @returns {boolean}
     */
    isStaticIndexed() {
        // return this.bStaticLoop && super.isStaticIndexed()
        return (super.isStaticIndexed() &&
            (typeof this.props.loop !== 'undefined'
                ? typeof this.props.loop.start !== 'function' &&
                    typeof this.props.loop.end !== 'function' &&
                    typeof this.props.loop.inc !== 'function'
                : true));
    }
    /**
     *  Unset buffer
     *
     * @param {boolean} [bClearIndexed=false]
     * @param {boolean} [bPropagateToParents=false]
     */
    clearBuffer(bClearIndexed = false, bPropagateToParents = true) {
        this.bStaticLoop = this.isStaticLoop();
        if (bClearIndexed) {
            this.currentOrSingleLoopBuffer = undefined;
        }
        super.clearBuffer(bClearIndexed, bPropagateToParents);
    }
    /**
     * Set single or multiple props
     *
     * @param {(Props)} key
     * @param {*} [value]
     * @param {boolean} [bClearIndexed=false]
     */
    setProp(key, value) {
        let bClearIndexed = false;
        const keys = (typeof key === 'string' ? { [key]: value } : key);
        for (let i = this.loopDependencies.length - 1; i >= 0; i--) {
            if (this.loopDependencies[i] in keys) {
                // this.props.loop = undefined
                bClearIndexed = true;
                break;
            }
        }
        if ('loop' in keys) {
            keys.loop = { ...this.props.loop, ...keys.loop };
            bClearIndexed = true;
        }
        super.setProp(keys, value, bClearIndexed);
    }
    /**
     * Return length of buffer
     *
     * @param {PropArguments} [propArguments]
     * @returns {number}
     */
    getBufferLength(propArguments) {
        if (this.bStatic && typeof this.buffer !== 'undefined')
            return this.buffer.length;
        if (this.bStaticLoop && typeof this.currentOrSingleLoopBuffer !== 'undefined')
            return this.currentOrSingleLoopBuffer.length * this.getRepetitionCount();
        const { count } = this.getLoop(propArguments || _ShapeBase__WEBPACK_IMPORTED_MODULE_3__.ShapeBase.getEmptyPropArguments(this));
        return this.getRepetitionCount() * count * 2;
    }
    /**
     * Return a buffer of children shape or loop generated buffer
     *
     * @protected
     * @param {number} generateId
     * @param {PropArguments} propArguments
     * @returns {Float32Array}
     */
    generateBuffer(generateId, propArguments) {
        if (!this.bStaticLoop)
            return this.generateLoopBuffer(propArguments);
        if (typeof this.props.sideLength === 'function' || typeof this.currentOrSingleLoopBuffer === 'undefined')
            this.currentOrSingleLoopBuffer = this.generateLoopBuffer(propArguments);
        return this.currentOrSingleLoopBuffer;
    }
    /**
     * Generate loop buffer
     *
     * @protected
     * @param {PropArguments} propArguments
     * @returns {Float32Array}
     */
    generateLoopBuffer(propArguments) {
        const { start, inc, /*end,*/ count } = this.getLoop(propArguments);
        const sideLength = this.getRepetitionSideLength(propArguments);
        const getVertex = (this.props.loop && this.props.loop.vertex ? this.props.loop.vertex : this.loop.vertex);
        const shapeLoop = {
            index: 0,
            offset: 0,
            current: 0,
            count: count,
        };
        const vertexLength = shapeLoop.count;
        const bufferLength = vertexLength * 2;
        const currentOrSingleLoopBuffer = new Float32Array(bufferLength);
        for (let i = 0, j = 0; i < vertexLength; i++, j += 2) {
            const current = start + inc * i;
            const offset = shapeLoop.count > 1 ? i / (shapeLoop.count - 1) : 1;
            // const angle = (end - start) * offset + start
            shapeLoop.current = current;
            shapeLoop.index = i + 1;
            shapeLoop.offset = offset;
            const vertex = getVertex(shapeLoop, propArguments);
            currentOrSingleLoopBuffer[j] = vertex[0];
            currentOrSingleLoopBuffer[j + 1] = vertex[1];
            // currentOrSingleLoopBuffer[j] *= sideLength[0]
            // currentOrSingleLoopBuffer[j + 1] *= sideLength[1]
            // Bounding.add(tmpBounding, currentOrSingleLoopBuffer[j], currentOrSingleLoopBuffer[j + 1])
        }
        const tmpBounding = [undefined, undefined, undefined, undefined];
        const buffer = this.applyModifiers(currentOrSingleLoopBuffer, propArguments);
        for (let i = 0, len = buffer.length; i < len; i += 2) {
            buffer[i] = buffer[i] * sideLength[0];
            buffer[i + 1] = buffer[i + 1] * sideLength[1];
            _modifiers_Adapt__WEBPACK_IMPORTED_MODULE_1__.Bounding.add(tmpBounding, buffer[i], buffer[i + 1]);
        }
        _modifiers_Adapt__WEBPACK_IMPORTED_MODULE_1__.Bounding.bind(this.currentGenerationPrimitiveBounding, tmpBounding);
        return buffer;
    }
    /**
     * Return information about a client loop gnerator
     *
     * @public
     * @param {PropArguments} propArguments
     * @returns {ShapeLoopInformation}
     */
    getLoop(propArguments) {
        let start = this.props.loop?.start ?? this.loop.start;
        let end = this.props.loop?.end ?? this.loop.end;
        let inc = this.props.loop?.inc ?? this.loop.inc;
        start = (typeof start === 'function' ? start(propArguments) : start);
        end = (typeof end === 'function' ? end(propArguments) : end);
        inc = (typeof inc === 'function' ? inc(propArguments) : inc);
        const count = Math.ceil((end - start) / inc);
        return { start, end, inc, count: count <= 0 ? 0 : count };
    }
    /**
     * Set shape from loop generator
     *
     * @param {(IShapeLoopGenerator)} [shape]
     */
    setShape(loop) {
        this.setProp('loop', loop);
    }
    /**
     * Get static buffer
     *
     * @param sideLength
     * @returns
     */
    static getBuffer(props) {
        const shape = new this({ ...props, sideLength: props.sideLength || 1 });
        shape.generate();
        return shape.getBuffer() || new Float32Array();
    }
}
ShapeLoop.PId2 = Math.PI / 2;

//# sourceMappingURL=ShapeLoop.js.map

/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShapeBuffer": () => (/* binding */ ShapeBuffer)
/* harmony export */ });
/* harmony import */ var _modifiers_Adapt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _shapes_ShapePrimitive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);


/**
 * @category Core.Shapes
 */
class ShapeBuffer extends _shapes_ShapePrimitive__WEBPACK_IMPORTED_MODULE_1__.ShapePrimitive {
    /**
     * Creates an instance of ShapeBuffer.
     *
     * @param {IShapeBufferSettings} [settings={}]
     */
    constructor(settings = {}) {
        settings.type = settings.type || 'ShapeBuffer';
        settings.adaptMode = settings.adaptMode ?? _modifiers_Adapt__WEBPACK_IMPORTED_MODULE_0__.EAdaptMode.Scale;
        super(settings);
        this.adaptMode = settings.adaptMode ?? _modifiers_Adapt__WEBPACK_IMPORTED_MODULE_0__.EAdaptMode.Fill;
        if (typeof settings.shape === 'undefined') {
            console.warn('[Urpflanze:ShapeBuffer] ShapeBuffer require a buffer passed from `shape` property');
            this.shape = ShapeBuffer.EMPTY_BUFFER;
        }
        else {
            this.shape = typeof settings.shape !== 'function' ? _modifiers_Adapt__WEBPACK_IMPORTED_MODULE_0__.Adapt.adapt(settings.shape, this.adaptMode) : settings.shape;
        }
        this.bStatic = this.isStatic();
        this.bStaticIndexed = this.isStaticIndexed();
    }
    /**
     * Check shape is static
     *
     * @returns boolean
     */
    isStatic() {
        return typeof this.shape !== 'function' && super.isStatic();
    }
    /**
     * Check shape is static indexed
     *
     * @returns boolean
     */
    isStaticIndexed() {
        return typeof this.shape !== 'function' && super.isStaticIndexed();
    }
    /**
     *  Unset buffer
     *
     * @param {boolean} [bClearIndexed=false]
     * @param {boolean} [bPropagateToParents=false]
     */
    clearBuffer(bClearIndexed = false, bPropagateToParents = true) {
        super.clearBuffer(bClearIndexed, bPropagateToParents);
        this.shapeBuffer = undefined;
    }
    /**
     * Apply sideLength on <mark>.shape</mark> buffer and calculate bounding
     *
     * @protected
     */
    bindBuffer(propArguments) {
        const sideLength = this.getRepetitionSideLength(propArguments);
        const shapeBuffer = this.applyModifiers(Float32Array.from(typeof this.shape === 'function' ? this.shape(propArguments) : this.shape), propArguments);
        const tmpBounding = [undefined, undefined, undefined, undefined];
        for (let i = 0, len = shapeBuffer.length; i < len; i += 2) {
            shapeBuffer[i] = shapeBuffer[i] * sideLength[0];
            shapeBuffer[i + 1] = shapeBuffer[i + 1] * sideLength[1];
            _modifiers_Adapt__WEBPACK_IMPORTED_MODULE_0__.Bounding.add(tmpBounding, shapeBuffer[i], shapeBuffer[i + 1]);
        }
        _modifiers_Adapt__WEBPACK_IMPORTED_MODULE_0__.Bounding.bind(this.currentGenerationPrimitiveBounding, tmpBounding);
        this.shapeBuffer = shapeBuffer;
    }
    /**
     * Return length of buffer
     *
     * @param {IPropArguments} propArguments
     * @returns {number}
     */
    getBufferLength( /*propArguments?: IPropArguments*/) {
        if (this.buffer && this.buffer.length > 0)
            return this.buffer.length;
        return this.shape.length * this.getRepetitionCount();
    }
    /**
     * Return a buffer of children shape or loop generated buffer
     *
     * @protected
     * @param {number} generateId
     * @param {PropArguments} propArguments
     * @returns {Float32Array}
     */
    generateBuffer(generateId, propArguments) {
        if (typeof this.shapeBuffer === 'undefined' ||
            typeof this.props.sideLength === 'function' ||
            typeof this.shape === 'function') {
            this.bindBuffer(propArguments);
        }
        return this.shapeBuffer;
    }
    /**
     * Set shape
     *
     * @param {(Float32Array)} [shape]
     */
    setShape(shape) {
        this.shape = _modifiers_Adapt__WEBPACK_IMPORTED_MODULE_0__.Adapt.adapt(shape, this.adaptMode);
        this.clearBuffer(true);
    }
    /**
     * Return adaptMode
     *
     * @returns {EAdaptMode}
     * @memberof ShapeBase
     */
    getAdaptMode() {
        return this.adaptMode;
    }
    /**
     * Get static buffer
     *
     * @param sideLength
     * @returns
     */
    static getBuffer(props = {}) {
        const shape = new this({ ...props, sideLength: props.sideLength || 1 });
        shape.generate();
        return shape.getBuffer() || new Float32Array();
    }
}

//# sourceMappingURL=ShapeBuffer.js.map

/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShapeRecursive": () => (/* binding */ ShapeRecursive)
/* harmony export */ });
/* harmony import */ var _Shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);

/**
 * @category Core.Shapes
 */
class ShapeRecursive extends _Shape__WEBPACK_IMPORTED_MODULE_0__.Shape {
    /**
     * Creates an instance of ShapeRecursive.
     *
     * @param {IShapeRecursiveSettings} [settings={}]
     */
    constructor(settings) {
        settings.type = settings.type || 'ShapeRecursive';
        super(settings);
        this.props.recursions = settings.recursions || 1;
        this.props.recursionScale = settings.recursionScale || 2;
        this.props.recursionVertex = settings.recursionVertex || 0;
        // this.bInner = settings.bInner ?? false
        this.bStatic = this.isStatic();
        this.bStaticIndexed = this.isStaticIndexed();
        this.shapeUseRecursion = !!settings.shapeUseRecursion;
        // this.currentGenerationRecursiveBounding = Bounding.empty()
    }
    /**
     *  Unset buffer
     *
     * @param {boolean} [bClearIndexed=false]
     * @param {boolean} [bPropagateToParents=false]
     * @param {boolean} [bPropagateToChildren=false]
     */
    clearBuffer(bClearIndexed = false, bPropagateToParents = true) {
        if (bClearIndexed) {
            this.shapeRecursiveBuffer = undefined;
        }
        super.clearBuffer(bClearIndexed, bPropagateToParents);
    }
    /**
     * Set type of recursion
     *
     * @param {boolean} inner
     */
    // public setRecursionnInner(inner: boolean): void {
    // 	this.bInner = inner
    // 	this.clearBuffer(true)
    // }
    /**
     *
     * @returns {boolean}
     */
    isStatic() {
        return (typeof this.props.recursions !== 'function' &&
            typeof this.props.recursionScale !== 'function' &&
            typeof this.props.recursionVertex !== 'function' &&
            super.isStatic());
    }
    /**
     *
     * @returns {boolean}
     */
    isStaticIndexed() {
        return (typeof this.props.recursions !== 'function' &&
            typeof this.props.recursionVertex !== 'function' &&
            super.isStaticIndexed());
    }
    /**
     * Return a buffer of children shape with recursion
     *
     * @protected
     * @param {number} generateId
     * @param {PropArguments} propArguments
     * @returns {Float32Array}
     */
    generateBuffer(generateId, propArguments) {
        if (this.shape) {
            if (typeof this.shapeRecursiveBuffer === 'undefined' ||
                this.shapeUseParent ||
                this.shape.generateId !== generateId) {
                this.bindBuffer(generateId, propArguments);
            }
            return this.shapeRecursiveBuffer;
        }
        return _Shape__WEBPACK_IMPORTED_MODULE_0__.Shape.EMPTY_BUFFER;
    }
    /**
     * Generate Recoursive shape buffer
     *
     * @protected
     * @param {number} generateId
     * @param {PropArguments} propArguments
     */
    bindBuffer(generateId, propArguments) {
        const recursions = Math.floor(this.getProp('recursions', propArguments, 1));
        const recursionVertex = Math.floor(this.getProp('recursionVertex', propArguments, 0));
        const recursionScale = this.getProp('recursionScale', propArguments, 2);
        const childShape = this.shape;
        let currentRecursionRepetition = {
            index: 1,
            offset: 1,
            count: 1,
            level: { index: 1, offset: recursions > 1 ? 0 : 1, count: 1 },
        };
        const recursionPropArguments = {
            ...propArguments,
            recursion: currentRecursionRepetition,
        };
        childShape.generate(generateId, false, recursionPropArguments);
        const firstGenerationChildBuffer = childShape.getBuffer();
        if (recursions <= 1) {
            // this.currentGenerationRecursiveBounding = this.shape.getBounding()
            this.shapeRecursiveBuffer = firstGenerationChildBuffer;
            return;
        }
        let shapeBuffer = firstGenerationChildBuffer;
        const storedRecursion = [currentRecursionRepetition];
        let paretRecursionIndex = 0, added = 1;
        // const tmpBounding = [undefined, undefined, undefined, undefined]
        const singleShapeBufferLength = shapeBuffer.length;
        const realVertexCount = singleShapeBufferLength / 2;
        const singleShapeVertexCount = recursionVertex <= 0 ? realVertexCount : Math.min(recursionVertex, realVertexCount);
        const recursionOffsetMultiplier = recursionVertex === 0 ? 1 : realVertexCount / Math.min(recursionVertex, realVertexCount);
        const recusiveShapeBuffer = new Float32Array(ShapeRecursive.summmation(recursions, singleShapeVertexCount) * singleShapeBufferLength);
        for (let i = 0; i < singleShapeBufferLength; i += 2) {
            recusiveShapeBuffer[i] = shapeBuffer[i];
            recusiveShapeBuffer[i + 1] = shapeBuffer[i + 1];
            // Bounding.add(tmpBounding, recusiveShapeBuffer[i], recusiveShapeBuffer[i + 1])
        }
        for (let currentRecursion = 1; currentRecursion < recursions; currentRecursion++) {
            const level_offset = recursions > 1 ? currentRecursion / (recursions - 1) : 1;
            const currentRecursionVertexCount = ShapeRecursive.summmation(currentRecursion, singleShapeVertexCount);
            const recursionBufferStartIndex = currentRecursionVertexCount * singleShapeBufferLength;
            const parentRecursion = currentRecursion - 1;
            const parentRecursionBufferStartIndex = parentRecursion === 0
                ? 0
                : ShapeRecursive.summmation(parentRecursion, singleShapeVertexCount) * singleShapeBufferLength;
            for (let currentShapeRecursionRepetition = 0, totalRecursionRepetitions = singleShapeVertexCount ** currentRecursion; currentShapeRecursionRepetition < totalRecursionRepetitions; currentShapeRecursionRepetition++, added++) {
                currentRecursionRepetition = {
                    index: currentShapeRecursionRepetition + 1,
                    offset: totalRecursionRepetitions > 1 ? currentShapeRecursionRepetition / (totalRecursionRepetitions - 1) : 1,
                    count: totalRecursionRepetitions,
                    level: { index: currentRecursion + 1, offset: level_offset, count: recursions },
                    parent: storedRecursion[paretRecursionIndex],
                };
                storedRecursion.push(currentRecursionRepetition);
                if (this.shapeUseRecursion) {
                    recursionPropArguments.recursion = currentRecursionRepetition;
                    childShape.generate(generateId, false, recursionPropArguments);
                    shapeBuffer = childShape.getBuffer();
                }
                const shapeVertexBufferIndex = recursionBufferStartIndex + currentShapeRecursionRepetition * singleShapeBufferLength;
                // const centerVertexIndex = parentRecursionBufferStartIndex + currentShapeRecursionRepetition * 2
                const centerVertexIndex = Math.floor(parentRecursionBufferStartIndex + currentShapeRecursionRepetition * 2 * recursionOffsetMultiplier);
                const centerX = recusiveShapeBuffer[centerVertexIndex];
                const centerY = recusiveShapeBuffer[centerVertexIndex + 1];
                const currentRecursionScale = recursionScale ** currentRecursion;
                for (let i = 0, len = singleShapeBufferLength; i < len; i += 2) {
                    // if (this.bInner) {
                    // 	const parentCurrentVertex =
                    // 		parentRecursionBufferStartIndex +
                    // 		Math.floor(currentShapeRecursionRepetition / singleShapeVertexCount) *
                    // 			singleShapeVertexCount *
                    // 			recursionOffsetMultiplier *
                    // 			2
                    // 	const parentX = recusiveShapeBuffer[parentCurrentVertex + i]
                    // 	const parentY = recusiveShapeBuffer[parentCurrentVertex + i + 1]
                    // 	recusiveShapeBuffer[shapeVertexBufferIndex + i] = (centerX - parentX) / recursionScale + parentX
                    // 	recusiveShapeBuffer[shapeVertexBufferIndex + i + 1] = (centerY - parentY) / recursionScale + parentY
                    // const parentX = shapeBuffer[i] / recursionScale ** currentRecursion
                    // const parentY = shapeBuffer[i + 1] / recursionScale ** currentRecursion
                    // recusiveShapeBuffer[shapeVertexBufferIndex + i] = (centerX - parentX) / recursionScale + parentX
                    // recusiveShapeBuffer[shapeVertexBufferIndex + i + 1] = (centerY - parentY) / recursionScale + parentY
                    // } else {
                    const parentXScaled = shapeBuffer[i] / currentRecursionScale;
                    const parentYScaled = shapeBuffer[i + 1] / currentRecursionScale;
                    recusiveShapeBuffer[shapeVertexBufferIndex + i] = centerX + parentXScaled;
                    recusiveShapeBuffer[shapeVertexBufferIndex + i + 1] = centerY + parentYScaled;
                    // }
                    // Bounding.add(
                    // 	tmpBounding,
                    // 	recusiveShapeBuffer[shapeVertexBufferIndex + i],
                    // 	recusiveShapeBuffer[shapeVertexBufferIndex + i + 1]
                    // )
                }
                if (added % singleShapeVertexCount === 0) {
                    paretRecursionIndex += 1;
                }
            }
        }
        // Bounding.bind(this.currentGenerationRecursiveBounding, tmpBounding)
        this.shapeRecursiveBuffer = recusiveShapeBuffer;
    }
    /**
     * Add this to indexedBuffer
     *
     * @protected
     * @param {number} frameLength
     * @param {IRepetition} repetition
     * @returns {number} nextIndex
     */
    addIndex(frameLength, repetition, singleRepetitionBounding) {
        if (this.shape) {
            const propArguments = { repetition, shape: this };
            const recursions = Math.floor(this.getProp('recursions', propArguments, 1));
            const recursionVertex = Math.floor(this.getProp('recursionVertex', propArguments, 0));
            // const realFrameLength = ShapeRecursive.summmation(recursions, this.shape.getBufferLength() / 2)
            const bufferIndex = {
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
                recursion: {
                    index: 1,
                    offset: 1,
                    count: 1,
                    level: { index: 1, offset: recursions > 1 ? 0 : 1, count: recursions },
                },
            };
            const childIndexedBuffer = this.shape.getIndexedBuffer() || [];
            for (let childIndexed = 0, childIndexedLen = childIndexedBuffer.length; childIndexed < childIndexedLen; childIndexed++) {
                const currentIndexed = { ...childIndexedBuffer[childIndexed] };
                const currentRecursionRepetition = {
                    index: 1,
                    offset: 1,
                    count: 1,
                    level: { index: 1, offset: recursions > 1 ? 0 : 1, count: recursions },
                };
                const recursionBufferIndex = {
                    ...bufferIndex,
                    recursion: currentRecursionRepetition,
                };
                const parent = (currentIndexed.parent
                    ? _Shape__WEBPACK_IMPORTED_MODULE_0__.Shape.setIndexedParent(currentIndexed.parent, recursionBufferIndex)
                    : recursionBufferIndex);
                this.indexedBuffer.push({
                    ...currentIndexed,
                    parent,
                });
            }
            if (recursions > 1) {
                const realVertexCount = this.shape.getBufferLength({ ...propArguments, parent: { ...bufferIndex } }) / 2;
                const vertexCount = recursionVertex <= 0 ? realVertexCount : Math.min(recursionVertex, realVertexCount);
                const storedRecursion = this.indexedBuffer.map(indexed => [indexed.parent.recursion]);
                let paretRecursionIndex = 0, added = 1;
                for (let i = 1; i < recursions; i++) {
                    const level_offset = recursions > 1 ? i / (recursions - 1) : 1;
                    for (let j = 0, len = vertexCount ** i; j < len; j++, added++) {
                        const recursionOffset = len > 1 ? j / (len - 1) : 1;
                        for (let childIndexed = 0, childIndexedLen = childIndexedBuffer.length; childIndexed < childIndexedLen; childIndexed++) {
                            const currentIndexed = { ...childIndexedBuffer[childIndexed] };
                            const currentRecursionRepetition = {
                                index: j + 1,
                                offset: recursionOffset,
                                count: len,
                                level: { index: i + 1, offset: level_offset, count: recursions },
                                parent: storedRecursion[childIndexed][paretRecursionIndex],
                            };
                            const recursionBufferIndex = { ...bufferIndex, recursion: currentRecursionRepetition };
                            const parent = currentIndexed.parent
                                ? _Shape__WEBPACK_IMPORTED_MODULE_0__.Shape.setIndexedParent(currentIndexed.parent, recursionBufferIndex)
                                : recursionBufferIndex;
                            this.indexedBuffer.push({ ...currentIndexed, parent });
                            storedRecursion[childIndexed].push(currentRecursionRepetition);
                            if (added % vertexCount === 0) {
                                paretRecursionIndex += 1;
                            }
                        }
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
    static summmation(recursion, vertexCount) {
        if (recursion === 1)
            return 1;
        let result = 1;
        for (let i = 1; i < recursion; i++)
            result += vertexCount ** i;
        return result;
    }
    /**
     * Empty recursion repetition
     *
     * @static
     * @return {*}  {IRecursionRepetition}
     */
    static getEmptyRecursion() {
        return {
            index: 1,
            offset: 1,
            count: 1,
            level: { index: 1, offset: 1, count: 1 },
        };
    }
}

//# sourceMappingURL=ShapeRecursive.js.map

/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShapeFollow": () => (/* binding */ ShapeFollow)
/* harmony export */ });
/* harmony import */ var _Shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);

/**
 * @category Core.Shapes
 */
class ShapeFollow extends _Shape__WEBPACK_IMPORTED_MODULE_0__.Shape {
    /**
     * Creates an instance of ShapeFollow.
     *
     * @param {IShapeFollowSettings} [settings={}]
     */
    constructor(settings) {
        settings.type = settings.type || 'ShapeFollow';
        super(settings);
        this.follow = settings.follow || settings.shape;
        this.bStatic = this.isStatic();
        this.bStaticIndexed = this.isStaticIndexed();
        this.shapeUseFollow = !!settings.shapeUseFollow;
        // this.currentGenerationRecursiveBounding = Bounding.empty()
    }
    /**
     *  Unset buffer
     *
     * @param {boolean} [bClearIndexed=false]
     * @param {boolean} [bPropagateToParents=false]
     * @param {boolean} [bPropagateToChildren=false]
     */
    clearBuffer(bClearIndexed = false, bPropagateToParents = true) {
        if (bClearIndexed) {
            this.shapeFollowBuffer = undefined;
        }
        super.clearBuffer(bClearIndexed, bPropagateToParents);
    }
    /**
     *
     * @returns {boolean}
     */
    isStatic() {
        return (this.follow ? this.follow.isStatic() : true) && super.isStatic();
    }
    /**
     *
     * @returns {boolean}
     */
    isStaticIndexed() {
        return (this.follow ? this.follow.isStaticIndexed() : true) && super.isStaticIndexed();
    }
    /**
     * Return a buffer of children shape with recursion
     *
     * @protected
     * @param {number} generateId
     * @param {PropArguments} propArguments
     * @returns {Float32Array}
     */
    generateBuffer(generateId, propArguments) {
        if (this.shape && this.follow) {
            if (typeof this.shapeFollowBuffer === 'undefined' ||
                this.shapeUseParent ||
                this.shape.generateId !== generateId ||
                this.follow.generateId !== generateId) {
                this.bindBuffer(generateId, propArguments);
            }
            return this.shapeFollowBuffer;
        }
        return _Shape__WEBPACK_IMPORTED_MODULE_0__.Shape.EMPTY_BUFFER;
    }
    /**
     * Generate Recoursive shape buffer
     *
     * @protected
     * @param {number} generateId
     * @param {PropArguments} propArguments
     */
    bindBuffer(generateId, propArguments) {
        const followShape = this.follow;
        followShape.generate(generateId, false, propArguments);
        const followBuffer = followShape.getBuffer();
        // const followIndexed = followShape.getIndexedBuffer() as Array<IBufferIndex>
        const followPropArguments = {
            ...propArguments,
            follow: {
                index: 1,
                offset: 1,
                count: 1,
            },
            // follow_repetition: followIndexed[0].repetition,
        };
        const childShape = this.shape;
        childShape.generate(generateId, false, followPropArguments);
        let shapeBuffer = childShape.getBuffer();
        // const tmpBounding = [undefined, undefined, undefined, undefined]
        const singleShapeBufferLength = shapeBuffer.length;
        const followShapeBuffer = new Float32Array(singleShapeBufferLength * (followBuffer.length / 2));
        const totalFollowVertexCount = followBuffer.length / 2;
        for (let currentShapeFollowRepetition = 0; currentShapeFollowRepetition < totalFollowVertexCount; currentShapeFollowRepetition++) {
            const currentFollowRepetition = {
                index: currentShapeFollowRepetition + 1,
                offset: totalFollowVertexCount > 1 ? currentShapeFollowRepetition / (totalFollowVertexCount - 1) : 1,
                count: totalFollowVertexCount,
            };
            if (this.shapeUseFollow) {
                followPropArguments.follow = currentFollowRepetition;
                // followPropArguments.follow_repetition = followIndexed[currentShapeFollowRepetition].repetition
                childShape.generate(generateId, false, followPropArguments);
                shapeBuffer = childShape.getBuffer();
            }
            const shapeVertexBufferIndex = currentShapeFollowRepetition * singleShapeBufferLength;
            // const centerVertexIndex = parentRecursionBufferStartIndex + currentShapeRecursionRepetition * 2
            const centerVertexIndex = currentShapeFollowRepetition * 2;
            const centerX = followBuffer[centerVertexIndex];
            const centerY = followBuffer[centerVertexIndex + 1];
            for (let i = 0, len = shapeBuffer.length; i < len; i += 2) {
                followShapeBuffer[shapeVertexBufferIndex + i] = centerX + shapeBuffer[i];
                followShapeBuffer[shapeVertexBufferIndex + i + 1] = centerY + shapeBuffer[i + 1];
                // Bounding.add(
                // 	tmpBounding,
                // 	followShapeBuffer[shapeVertexBufferIndex + i],
                // 	followShapeBuffer[shapeVertexBufferIndex + i + 1]
                // )
            }
        }
        // Bounding.bind(this.currentGenerationRecursiveBounding, tmpBounding)
        this.shapeFollowBuffer = followShapeBuffer;
    }
    /**
     * Add this to indexedBuffer
     *
     * @protected
     * @param {number} frameLength
     * @param {IRepetition} repetition
     * @returns {number} nextIndex
     */
    addIndex(frameLength, repetition, singleRepetitionBounding) {
        if (this.shape) {
            const propArguments = { repetition, shape: this };
            const bufferIndex = {
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
            };
            const childIndexedBuffer = this.shape.getIndexedBuffer() || [];
            for (let childIndexed = 0, childIndexedLen = childIndexedBuffer.length; childIndexed < childIndexedLen; childIndexed++) {
                const vertexCount = this.follow.getBuffer().length / 2; // this.follow.getBufferLength({ ...propArguments, parent: { ...bufferIndex } }) / 2
                for (let j = 0, len = vertexCount; j < len; j++) {
                    const followOffset = len > 1 ? j / (len - 1) : 1;
                    for (let childIndexed = 0, childIndexedLen = childIndexedBuffer.length; childIndexed < childIndexedLen; childIndexed++) {
                        const currentIndexed = { ...childIndexedBuffer[childIndexed] };
                        const currentFollowRepetition = {
                            index: j + 1,
                            offset: followOffset,
                            count: len,
                        };
                        const followBufferIndex = { ...bufferIndex, follow: currentFollowRepetition };
                        const parent = currentIndexed.parent
                            ? _Shape__WEBPACK_IMPORTED_MODULE_0__.Shape.setIndexedParent(currentIndexed.parent, followBufferIndex)
                            : followBufferIndex;
                        this.indexedBuffer.push({ ...currentIndexed, parent });
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
    static summmation(recursion, vertexCount) {
        if (recursion === 1)
            return 1;
        let result = 1;
        for (let i = 1; i < recursion; i++)
            result += vertexCount ** i;
        return result;
    }
    /**
     * Empty recursion repetition
     *
     * @static
     * @return {*}  {IRecursionRepetition}
     */
    static getEmptyRecursion() {
        return {
            index: 1,
            offset: 1,
            count: 1,
            level: { index: 1, offset: 1, count: 1 },
        };
    }
}

//# sourceMappingURL=ShapeFollow.js.map

/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Line": () => (/* binding */ Line)
/* harmony export */ });
/* harmony import */ var _modifiers_Adapt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _ShapeBuffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);


/**
 *
 * @category Core.Primitives
 * @class Line
 * @extends {ShapeBuffer}
 */
class Line extends _ShapeBuffer__WEBPACK_IMPORTED_MODULE_1__.ShapeBuffer {
    /**
     * Two point, based on ShapeBuffer
     *
     * @param {ShapeBaseSettings} [settings={}]
     * @memberof Line
     */
    constructor(settings = {}) {
        settings.type = 'Line';
        settings.shape = [-1, 0, 1, 0];
        settings.adaptMode = _modifiers_Adapt__WEBPACK_IMPORTED_MODULE_0__.EAdaptMode.None;
        settings.bClosed = false;
        super(settings);
    }
    /**
     * @link https://gist.github.com/pborissow/5c92b77a804688385c77749d1187ba07
     */
    static toPolygon(buffer, thickness) {
        const solidified = [];
        //Convert thickness into an array as needed
        if (!Array.isArray(thickness)) {
            const _thickness = thickness;
            const points = buffer.length / 2;
            thickness = new Array(points);
            for (let i = 0; i < points; i++) {
                thickness[i] = _thickness;
            }
        }
        function getOffsets(ax, ay, bx, by, thickness) {
            const dx = bx - ax, dy = by - ay, len = Math.sqrt(dx * dx + dy * dy), scale = thickness / (2 * len);
            return [-scale * dy, scale * dx];
        }
        function getIntersection(a1, b1, a2, b2) {
            // directional constants
            const k1 = (b1[1] - a1[1]) / (b1[0] - a1[0]), k2 = (b2[1] - a2[1]) / (b2[0] - a2[0]);
            // if the directional constants are equal, the lines are parallel
            if (Math.abs(k1 - k2) < 0.00001) {
                return;
            }
            // y offset constants for both lines
            const m1 = a1[1] - k1 * a1[0];
            const m2 = a2[1] - k2 * a2[0];
            // compute x
            const x = (m1 - m2) / (k2 - k1);
            // use y = k * x + m to get y coordinate
            const y = k1 * x + m1;
            return [x, y];
        }
        let bFirst, bLast, prevA = [
            [0, 0],
            [0, 0],
        ], prevB = [
            [0, 0],
            [0, 0],
        ];
        for (let i = 0, len = buffer.length - 2; i < len; i += 2) {
            bFirst = i === 0;
            bLast = i === len - 2;
            const off = getOffsets(buffer[i], buffer[i + 1], buffer[i + 2], buffer[i + 3], thickness[i]);
            const p0a = [buffer[i] + off[0], buffer[i + 1] + off[1]];
            const p1a = [buffer[i + 2] + off[0], buffer[i + 3] + off[1]];
            const p0b = [buffer[i] - off[0], buffer[i + 1] - off[1]];
            const p1b = [buffer[i + 2] - off[0], buffer[i + 3] - off[1]];
            if (!bFirst) {
                const interA = getIntersection(prevA[0], prevA[1], p0a, p1a);
                if (interA) {
                    solidified.unshift(interA[1]);
                    solidified.unshift(interA[0]);
                }
                const interB = getIntersection(prevB[0], prevB[1], p0b, p1b);
                if (interB) {
                    solidified.push(interB[0]);
                    solidified.push(interB[1]);
                }
            }
            if (bFirst) {
                solidified.unshift(p0a[1]);
                solidified.unshift(p0a[0]);
                solidified.push(p0b[0]);
                solidified.push(p0b[1]);
            }
            if (bLast) {
                solidified.unshift(p1a[1]);
                solidified.unshift(p1a[0]);
                solidified.push(p1b[0]);
                solidified.push(p1b[1]);
            }
            if (!bLast) {
                prevA = [p0a, p1a];
                prevB = [p0b, p1b];
            }
        }
        return Float32Array.from(solidified);
    }
}

//# sourceMappingURL=Line.js.map

/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Triangle": () => (/* binding */ Triangle)
/* harmony export */ });
/* harmony import */ var _modifiers_Adapt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _ShapeBuffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);


/**
 * Triangle ShapeBuffer
 *
 * @category Core.Primitives
 */
class Triangle extends _ShapeBuffer__WEBPACK_IMPORTED_MODULE_1__.ShapeBuffer {
    /**
     * Creates an instance of Triangleeee.
     *
     * @param {ShapeBaseSettings} [settings={}]
     * @memberof Triangle
     */
    constructor(settings = {}) {
        settings.type = 'Triangle';
        settings.shape = [1, 0, -1, 1, -1, -1];
        settings.adaptMode = _modifiers_Adapt__WEBPACK_IMPORTED_MODULE_0__.EAdaptMode.None;
        super(settings);
    }
}

//# sourceMappingURL=Triangle.js.map

/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rect": () => (/* binding */ Rect)
/* harmony export */ });
/* harmony import */ var _modifiers_Adapt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _ShapeBuffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);


/**
 *
 * @category Core.Primitives
 * @class Rect
 * @extends {ShapeBuffer}
 */
class Rect extends _ShapeBuffer__WEBPACK_IMPORTED_MODULE_1__.ShapeBuffer {
    /**
     * Creates an instance of Rect.
     *
     * @param {ShapeBaseSettings} [settings={}]
     * @memberof Rect
     */
    constructor(settings = {}) {
        settings.type = 'Rect';
        settings.shape = [1, 1, -1, 1, -1, -1, 1, -1];
        settings.adaptMode = _modifiers_Adapt__WEBPACK_IMPORTED_MODULE_0__.EAdaptMode.None;
        super(settings);
    }
}

//# sourceMappingURL=Rect.js.map

/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Polygon": () => (/* binding */ Polygon)
/* harmony export */ });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _shapes_ShapeLoop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);


/**
 * Polygon shape
 *
 * @category Core.Primitives
 * @class Polygon
 * @extends {ShapeLoop}
 */
class Polygon extends _shapes_ShapeLoop__WEBPACK_IMPORTED_MODULE_1__.ShapeLoop {
    /**
     * Is based on ShapeLoop and you can pass `sideNumber` property to define
     * a number of sides.
     *
     * @param settings
     */
    constructor(settings = {}) {
        settings.type = settings.type || 'Polygon';
        settings.loopDependencies = (settings.loopDependencies || []).concat(['sideNumber']);
        super(settings, true);
        this.props.sideNumber = settings.sideNumber;
        this.loop = {
            start: 0,
            end: _math__WEBPACK_IMPORTED_MODULE_0__.PI2,
            inc: (propArguments) => {
                return _math__WEBPACK_IMPORTED_MODULE_0__.PI2 / this.getProp('sideNumber', propArguments, 5);
            },
            vertex: shapeLoopRepetition => {
                return [Math.cos(shapeLoopRepetition.current), Math.sin(shapeLoopRepetition.current)];
            },
        };
        this.bStaticLoop = this.isStaticLoop();
        this.bStatic = this.isStatic();
        this.bStaticIndexed = this.isStaticIndexed();
    }
}

//# sourceMappingURL=Polygon.js.map

/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Circle": () => (/* binding */ Circle)
/* harmony export */ });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _ShapeLoop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);


/**
 *
 * @category Core.Primitives
 * @class Circle
 * @extends {ShapeLoop}
 */
class Circle extends _ShapeLoop__WEBPACK_IMPORTED_MODULE_1__.ShapeLoop {
    /**
     * Based on ShapeLoop, the number of point (resolution) is based on sideLength.
     *
     * @param {ShapeLoopSettings} [settings={}]
     * @memberof Circle
     */
    constructor(settings = {}) {
        settings.type = 'Circle';
        super(settings, true);
        this.loop = {
            start: 0,
            end: _math__WEBPACK_IMPORTED_MODULE_0__.PI2,
            inc: propArguments => {
                const sideLength = this.getRepetitionSideLength(propArguments);
                return (1 / Math.pow(sideLength[0] * sideLength[1], 0.25)) * _ShapeLoop__WEBPACK_IMPORTED_MODULE_1__.ShapeLoop.PId2;
            },
            vertex: shapeLoopRepetition => [Math.cos(shapeLoopRepetition.current), Math.sin(shapeLoopRepetition.current)],
        };
        this.bStaticLoop = this.isStaticLoop();
        this.bStatic = this.isStatic();
        this.bStaticIndexed = this.isStaticIndexed();
    }
}

//# sourceMappingURL=Circle.js.map

/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Star": () => (/* binding */ Star)
/* harmony export */ });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _shapes_ShapeLoop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);


/**
 * Polygon shape
 *
 * @category Core.Primitives
 * @class Polygon
 * @extends {ShapeLoop}
 */
class Star extends _shapes_ShapeLoop__WEBPACK_IMPORTED_MODULE_1__.ShapeLoop {
    /**
     * Is based on ShapeLoop and you can pass `spikes` property to define
     * a number of spikes and `innerRadius`
     *
     * @param settings
     */
    constructor(settings = {}) {
        settings.type = settings.type || 'Polygon';
        settings.loopDependencies = (settings.loopDependencies || []).concat(['spikes', 'innerRadius']);
        super(settings, true);
        this.props.spikes = settings.spikes;
        this.props.innerRadius = settings.innerRadius;
        this.loop = {
            start: 0,
            end: _math__WEBPACK_IMPORTED_MODULE_0__.PI2,
            inc: (propArguments) => {
                // dyamic binding in `generateLoopBuffer`
                return this.inc;
            },
            vertex: shapeLoopRepetition => {
                const angle = (Math.PI / this.spikes) * shapeLoopRepetition.index;
                const radius = shapeLoopRepetition.index % 2 === 0 ? 1 : this.innerRadius;
                return [Math.cos(angle) * radius, Math.sin(angle) * radius];
            },
        };
        this.bStaticLoop = this.isStaticLoop();
        this.bStatic = this.isStatic();
        this.bStaticIndexed = this.isStaticIndexed();
    }
    generateLoopBuffer(propArguments) {
        this.spikes = this.getProp('spikes', propArguments, 5);
        this.innerRadius = this.getProp('innerRadius', propArguments, 0.5);
        this.inc = Math.PI / this.spikes;
        return super.generateLoopBuffer(propArguments);
    }
}

//# sourceMappingURL=Star.js.map

/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rose": () => (/* binding */ Rose)
/* harmony export */ });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _shapes_ShapeLoop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);


/**
 * Rose shape
 *
 * @category Core.Primitives
 * @class Rose
 * @extends {ShapeLoop}
 */
class Rose extends _shapes_ShapeLoop__WEBPACK_IMPORTED_MODULE_1__.ShapeLoop {
    /**
     * Creates an instance of Rose.
     *
     * @param {IRoseSettings} [settings={}]
     * @memberof Rose
     */
    constructor(settings = {}) {
        settings.type = 'Rose';
        settings.loopDependencies = (settings.loopDependencies || []).concat(['n', 'd']);
        super(settings, true);
        this.props.n = settings.n ?? 1;
        this.props.d = settings.d ?? 2;
        this.loop = {
            start: 0,
            end: (propArguments) => Rose.getFinalAngleFromK(this.getProp('n', propArguments), this.getProp('d', propArguments)),
            inc: (propArguments) => {
                const n = this.getProp('n', propArguments);
                const d = this.getProp('d', propArguments);
                const sideLength = this.getRepetitionSideLength(propArguments);
                const sides = Math.pow(sideLength[0] * sideLength[1], 0.45);
                const k = d < n ? n / d : 1.5;
                return _math__WEBPACK_IMPORTED_MODULE_0__.PI2 / (sides * k);
            },
            vertex: (shapeLoopRepetition) => {
                const f = Math.cos(this.k * shapeLoopRepetition.current);
                return [f * Math.cos(shapeLoopRepetition.current), f * Math.sin(shapeLoopRepetition.current)];
            },
        };
        this.bStaticLoop = this.isStaticLoop();
        this.bStatic = this.isStatic();
        this.bStaticIndexed = this.isStaticIndexed();
    }
    generateLoopBuffer(propArguments) {
        this.k = this.getProp('n', propArguments) / this.getProp('d', propArguments);
        return super.generateLoopBuffer(propArguments);
    }
    /**
     * Return end angle of rose
     *
     * @static
     * @param {number} n
     * @param {number} d
     * @returns {number}
     * @memberof Rose
     */
    static getFinalAngleFromK(n, d) {
        if (n == d)
            return _math__WEBPACK_IMPORTED_MODULE_0__.PI2;
        const k = n / d;
        const p = n * d;
        if (!Number.isInteger(k) && k % 0.5 == 0)
            return 4 * Math.PI;
        return Math.PI * d * (p % 2 == 0 ? 2 : 1);
    }
}

//# sourceMappingURL=Rose.js.map

/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Spiral": () => (/* binding */ Spiral)
/* harmony export */ });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _ShapeLoop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);


/**
 * Spiral shape
 *
 * @category Core.Primitives
 * @class Spiral
 * @extends {ShapeLoop}
 */
class Spiral extends _ShapeLoop__WEBPACK_IMPORTED_MODULE_1__.ShapeLoop {
    /**
     * Creates an instance of Spiral.
     *
     * @param {SpiralSettings} [settings={}]
     * @memberof Spiral
     */
    constructor(settings = {}) {
        settings.type = 'Spiral';
        settings.bClosed = false;
        settings.loopDependencies = (settings.loopDependencies || []).concat(['twists', 'twistsStart', 'spiral']);
        super(settings, true);
        this.props.spiral = settings.spiral ?? Spiral.types.ARCHIMEDE;
        this.props.twists = settings.twists ?? 2;
        this.props.twistsStart = settings.twistsStart ?? 0;
        this.loop = {
            start: (propArguments) => _math__WEBPACK_IMPORTED_MODULE_0__.PI2 * this.getProp('twistsStart', propArguments),
            end: (propArguments) => _math__WEBPACK_IMPORTED_MODULE_0__.PI2 *
                (this.getProp('twistsStart', propArguments) + this.getProp('twists', propArguments)),
            inc: (propArguments) => {
                const twists = this.getProp('twists', propArguments);
                const rep = _math__WEBPACK_IMPORTED_MODULE_0__.PI2 * twists;
                const sideLength = this.getRepetitionSideLength(propArguments);
                const radius = 4 + Math.sqrt(sideLength[0] * sideLength[1]);
                return rep / (radius * twists);
            },
            vertex: (shapeLoopRepetition) => {
                const r = this.r(shapeLoopRepetition.current);
                return [r * Math.cos(shapeLoopRepetition.current), r * Math.sin(shapeLoopRepetition.current)];
            },
        };
        this.bStaticLoop = this.isStaticLoop();
        this.bStatic = this.isStatic();
        this.bStaticIndexed = this.isStaticIndexed();
    }
    generateLoopBuffer(propArguments) {
        this.spiral = this.getProp('spiral', propArguments);
        this.r = Spiral.getRFromTSpiralType(this.spiral);
        return super.generateLoopBuffer(propArguments);
    }
    /**
     * Point position and scale factor for spiral types
     *
     * @static
     * @param {TSpiralType} spiral
     * @returns {number}
     * @memberof Spiral
     */
    static getRFromTSpiralType(spiral) {
        switch (spiral) {
            case Spiral.types.ARCHIMEDE:
                return angle => angle / 10;
            case Spiral.types.HYPERBOLIC:
                return angle => (1 / angle) * 3;
            case Spiral.types.FERMAT:
                return angle => angle ** 0.5 / 3;
            case Spiral.types.LITUUS:
                return angle => angle ** -0.5;
            case Spiral.types.LOGARITHMIC:
                return angle => Math.E ** (angle * 0.2) / 10;
        }
        return angle => angle;
    }
}
/**
 * Spural types
 *
 * @static
 * @type {{ [name in TSpiralType]: TSpiralType }}
 * @memberof Spiral
 */
Spiral.types = {
    ARCHIMEDE: 'ARCHIMEDE',
    HYPERBOLIC: 'HYPERBOLIC',
    FERMAT: 'FERMAT',
    LITUUS: 'LITUUS',
    LOGARITHMIC: 'LOGARITHMIC',
};

//# sourceMappingURL=Spiral.js.map

/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lissajous": () => (/* binding */ Lissajous)
/* harmony export */ });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _shapes_ShapeLoop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);


/**
 * Lissajous shape
 *
 * @category Core.Primitives
 * @class Lissajous
 * @extends {ShapeLoop}
 */
class Lissajous extends _shapes_ShapeLoop__WEBPACK_IMPORTED_MODULE_1__.ShapeLoop {
    /**
     * Creates an instance of Lissajous.
     *
     * @param {ILissajousSettings} [settings={}]
     * @memberof Lissajous
     */
    constructor(settings = {}) {
        settings.type = 'Lissajous';
        settings.loopDependencies = (settings.loopDependencies || []).concat(['wx', 'wy', 'wz']);
        super(settings, true);
        this.props.wx = settings.wx || 1;
        this.props.wy = settings.wy || 2;
        this.props.wz = settings.wz || 0;
        this.loop = {
            start: 0,
            end: _math__WEBPACK_IMPORTED_MODULE_0__.PI2,
            inc: propArguments => {
                const wx = this.getProp('wx', propArguments);
                const wy = this.getProp('wy', propArguments);
                const ratio = wx == wy ? _shapes_ShapeLoop__WEBPACK_IMPORTED_MODULE_1__.ShapeLoop.PId2 : 0.5 - Math.min(49, wx + wy) * 0.01;
                const sideLength = this.getRepetitionSideLength(propArguments);
                return (1 / Math.pow(sideLength[0] * sideLength[1], 0.25)) * ratio;
            },
            vertex: (shapeLoopRepetition) => {
                return this.wx === this.wy
                    ? [Math.cos(shapeLoopRepetition.current + this.wz), Math.sin(shapeLoopRepetition.current)]
                    : [Math.cos(this.wx * shapeLoopRepetition.current + this.wz), Math.sin(this.wy * shapeLoopRepetition.current)];
            },
        };
        this.bStaticLoop = this.isStaticLoop();
        this.bStatic = this.isStatic();
        this.bStaticIndexed = this.isStaticIndexed();
    }
    generateLoopBuffer(propArguments) {
        this.wx = this.getProp('wx', propArguments, 1);
        this.wy = this.getProp('wy', propArguments, 2);
        this.wz = this.getProp('wz', propArguments, 2);
        return super.generateLoopBuffer(propArguments);
    }
}

//# sourceMappingURL=Lissajous.js.map

/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuperShape": () => (/* binding */ SuperShape)
/* harmony export */ });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _ShapeLoop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);


/**
 * ShperShape
 *
 * @category Core.Primitives
 * @class SuperShape
 * @extends {ShapeLoop}
 */
class SuperShape extends _ShapeLoop__WEBPACK_IMPORTED_MODULE_1__.ShapeLoop {
    /**
     * Creates an instance of SuperShape.
     *
     * @param {ISuperShapeSettings} [settings={}]
     * @memberof SuperShape
     */
    constructor(settings = {}) {
        settings.type = 'SuperShape';
        settings.loopDependencies = (settings.loopDependencies || []).concat(['a', 'b', 'm', 'n1', 'n2', 'n3']);
        super(settings, true);
        this.props.a = settings.a ?? 1;
        this.props.b = settings.b ?? 1;
        this.props.m = settings.m ?? 6;
        this.props.n1 = settings.n1 ?? 1;
        this.props.n2 = settings.n2 ?? 1;
        this.props.n3 = settings.n3 ?? 1;
        this.loop = {
            start: 0,
            end: _math__WEBPACK_IMPORTED_MODULE_0__.PI2,
            inc: propArguments => {
                const sideLength = this.getRepetitionSideLength(propArguments);
                return Math.PI / Math.pow(sideLength[0] * sideLength[1], 0.5);
            },
            vertex: (shapeLoopRepetition) => {
                const angle = shapeLoopRepetition.current;
                const m = (this.m * angle) / 4;
                const a = Math.abs(Math.cos(m) / this.a) ** this.n2;
                const b = Math.abs(Math.sin(m) / this.b) ** this.n3;
                const raux = (a + b) ** (1 / this.n1);
                const r = raux === 0 ? 1 : 1 / raux;
                return [r * Math.cos(angle), r * Math.sin(angle)];
            },
        };
        this.bStaticLoop = this.isStaticLoop();
        this.bStatic = this.isStatic();
        this.bStaticIndexed = this.isStaticIndexed();
    }
    generateLoopBuffer(propArguments) {
        this.a = this.getProp('a', propArguments);
        this.b = this.getProp('b', propArguments);
        this.m = this.getProp('m', propArguments);
        this.n1 = this.getProp('n1', propArguments);
        this.n2 = this.getProp('n2', propArguments);
        this.n3 = this.getProp('n3', propArguments);
        return super.generateLoopBuffer(propArguments);
    }
}

//# sourceMappingURL=SuperShape.js.map

/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Modifiers": () => (/* binding */ Modifiers)
/* harmony export */ });
/* harmony import */ var _Adapt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _Mirror__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);
/* harmony import */ var _Smooth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43);
/* harmony import */ var _Solidify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45);
/* harmony import */ var _Subdivide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46);
/* harmony import */ var _Close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44);
/* harmony import */ var _Offset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47);







const Modifiers = {
    Adapt: _Adapt__WEBPACK_IMPORTED_MODULE_0__.Adapt,
    Mirror: _Mirror__WEBPACK_IMPORTED_MODULE_1__.Mirror,
    Smooth: _Smooth__WEBPACK_IMPORTED_MODULE_2__.Smooth,
    Solidify: _Solidify__WEBPACK_IMPORTED_MODULE_3__.Solidify,
    Subdivide: _Subdivide__WEBPACK_IMPORTED_MODULE_4__.Subdivide,
    Close: _Close__WEBPACK_IMPORTED_MODULE_5__.Close,
    Offset: _Offset__WEBPACK_IMPORTED_MODULE_6__.Offset,
};

//# sourceMappingURL=index.js.map

/***/ }),
/* 42 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mirror": () => (/* binding */ Mirror)
/* harmony export */ });
/* harmony import */ var _Modifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);

class Mirror extends _Modifier__WEBPACK_IMPORTED_MODULE_0__.Modifier {
    constructor(args = { x: true, y: true }) {
        super();
        this.x = args.x === true;
        this.y = args.y === true;
    }
    apply(buffer, bClosed) {
        const bufferLength = buffer.length;
        const mirror = new Float32Array(bufferLength * (this.x ? 2 : 1) * (this.y ? 2 : 1));
        const sideLengthX = 1;
        const sideLengthY = 1;
        if (this.x && this.y) {
            const bufferLengthX2 = bufferLength + bufferLength;
            const bufferLengthX3 = bufferLengthX2 + bufferLength;
            // |1|2|
            // |4|3|
            for (let i = 0; i < bufferLength; i += 2) {
                mirror[i] = buffer[i] - sideLengthX;
                mirror[i + 1] = buffer[i + 1] - sideLengthY;
                mirror[bufferLength + i] = buffer[bufferLength - 2 - i] * -1 + sideLengthX;
                mirror[bufferLength + i + 1] = buffer[bufferLength - 2 - i + 1] - sideLengthY;
                mirror[bufferLengthX2 + i] = buffer[i] * -1 + sideLengthX;
                mirror[bufferLengthX2 + i + 1] = buffer[i + 1] * -1 + sideLengthY;
                mirror[bufferLengthX3 + i] = buffer[bufferLength - 2 - i] - sideLengthX;
                mirror[bufferLengthX3 + i + 1] = buffer[bufferLength - 2 - i + 1] * -1 + sideLengthY;
            }
        }
        else if (this.x) {
            for (let i = 0; i < bufferLength; i += 2) {
                mirror[i] = buffer[i] - sideLengthX;
                mirror[i + 1] = buffer[i + 1];
                mirror[bufferLength + i] = buffer[bufferLength - 2 - i] * -1 + sideLengthX;
                mirror[bufferLength + i + 1] = buffer[bufferLength - 2 - i + 1];
            }
        }
        else if (this.y) {
            for (let i = 0; i < bufferLength; i += 2) {
                mirror[i] = buffer[i];
                mirror[i + 1] = buffer[i + 1] - sideLengthY;
                mirror[bufferLength + i] = buffer[bufferLength - 2 - i];
                mirror[bufferLength + i + 1] = buffer[bufferLength - 2 - i + 1] * -1 + sideLengthY;
            }
        }
        else {
            return buffer;
        }
        return mirror;
    }
}

//# sourceMappingURL=Mirror.js.map

/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Smooth": () => (/* binding */ Smooth)
/* harmony export */ });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _Close__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44);
/* harmony import */ var _Modifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);



class Smooth extends _Modifier__WEBPACK_IMPORTED_MODULE_2__.Modifier {
    constructor(args = {}) {
        super();
        this.level = args.level || 1;
        const tension = Array.isArray(args.tension) ? args.tension : [args.tension];
        this.tension = new Array(this.level).fill(0.5).map((v, i) => (0,_Utilities__WEBPACK_IMPORTED_MODULE_0__.clamp)(0, 1, tension[i] || v));
        this.level = this.level < 1 ? 1 : this.level;
        this.closed = args.closed === true;
    }
    apply(buffer, bClosed) {
        if (bClosed && !_Close__WEBPACK_IMPORTED_MODULE_1__.Close.isClosed(buffer)) {
            const bufferLen = buffer.length;
            const mofified = new Float32Array(bufferLen + 2);
            mofified.set(buffer, 0);
            mofified[bufferLen] = buffer[0];
            mofified[bufferLen + 1] = buffer[1];
            buffer = mofified;
        }
        let smoothed = buffer;
        for (let i = 0, len = this.level; i < len; i++)
            smoothed = Smooth.smooth(smoothed, this.tension[i], bClosed || this.closed);
        return smoothed;
    }
    /**
     * Chaikin smooth
     *
     * the tension factor defines a scale between corner cutting distance in segment half length,
     * i.e. between 0.05 and 0.45. The opposite corner will be cut by the inverse
     * (i.e. 1-cutting distance) to keep symmetry.
     * with a tension value of 0.5 this amounts to 0.25 = 1/4 and 0.75 = 3/4,
     * the original Chaikin values
     *
     * @link https://www.codeproject.com/Articles/1093960/D-Polyline-Vertex-Smoothing
     * @param buffer
     */
    static smooth(buffer, tension = 0.5, bClosed = false) {
        const bufferLength = buffer.length;
        const smoothed = new Float32Array((buffer.length - (bClosed ? 1 : 0)) * 2);
        if (!bClosed) {
            smoothed[0] = buffer[0];
            smoothed[1] = buffer[1];
        }
        const cutdist = 0.05 + tension * 0.4;
        const ncutdist = 1 - cutdist;
        let smoothedLength = bClosed ? 0 : 2;
        for (let i = 0, len = bufferLength - 2; i < len; i += 2, smoothedLength += 4) {
            // q
            smoothed[smoothedLength] = ncutdist * buffer[i] + cutdist * buffer[i + 2];
            smoothed[smoothedLength + 1] = ncutdist * buffer[i + 1] + cutdist * buffer[i + 3];
            // r
            smoothed[smoothedLength + 2] = cutdist * buffer[i] + ncutdist * buffer[i + 2];
            smoothed[smoothedLength + 3] = cutdist * buffer[i + 1] + ncutdist * buffer[i + 3];
        }
        if (!bClosed) {
            smoothed[smoothedLength] = buffer[bufferLength - 2];
            smoothed[smoothedLength + 1] = buffer[bufferLength - 1];
        }
        else {
            smoothed[smoothedLength] = smoothed[0];
            smoothed[smoothedLength + 1] = smoothed[1];
        }
        return smoothed;
    }
}

//# sourceMappingURL=Smooth.js.map

/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Close": () => (/* binding */ Close)
/* harmony export */ });
/* harmony import */ var _Modifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);

class Close extends _Modifier__WEBPACK_IMPORTED_MODULE_0__.Modifier {
    constructor() {
        super();
    }
    apply(buffer, bClosed, shape) {
        return Close.call(buffer);
    }
    static call(buffer) {
        const len = buffer.length;
        if (Close.isClosed(buffer))
            return buffer;
        const result = new Float32Array(len + 2);
        result.set(buffer, 0);
        result[len] = result[0];
        result[len + 1] = result[1];
        return result;
    }
    static isClosed(buffer) {
        const len = buffer.length;
        return buffer[0] === buffer[len - 2] && buffer[1] === buffer[len - 1];
    }
}

//# sourceMappingURL=Close.js.map

/***/ }),
/* 45 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Solidify": () => (/* binding */ Solidify)
/* harmony export */ });
/* harmony import */ var _Modifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);

class Solidify extends _Modifier__WEBPACK_IMPORTED_MODULE_0__.Modifier {
    constructor(args = {}) {
        super();
        this.closed = args.closed === true;
        this.thickness = args.thickness || 0.2;
        this.error = args.error;
    }
    apply(buffer, bClosed) {
        return Solidify.solidify(buffer, this.thickness, this.closed, this.error);
    }
    /**
     * @link https://gist.github.com/kekscom/4194148
     */
    static solidify(buffer, thickness, bClosed = false, error) {
        const solidified = [];
        thickness = typeof thickness === 'number' ? [thickness] : thickness;
        const thicknessLength = thickness.length;
        let bFirst, bLast, prevA = [
            [0, 0],
            [0, 0],
        ], prevB = [
            [0, 0],
            [0, 0],
        ];
        for (let i = 0, t = 0, len = buffer.length - 2; i < len; i += 2, t++) {
            bFirst = i === 0;
            bLast = i === len - 2;
            const currentThicknessRep = {
                index: i + 1,
                offset: i / len,
                count: len,
            };
            const nextThicknessRep = {
                index: i + 2,
                offset: (i + 1) / len,
                count: len,
            };
            const currentThickness = typeof thickness === 'function' ? thickness(currentThicknessRep) : thickness[t % thicknessLength];
            const nextThickness = typeof thickness === 'function' ? thickness(nextThicknessRep) : thickness[(t + 1) % thicknessLength];
            const off = Solidify.getOffsets(buffer[i], buffer[i + 1], buffer[i + 2], buffer[i + 3], currentThickness);
            const off2 = Solidify.getOffsets(buffer[i], buffer[i + 1], buffer[i + 2], buffer[i + 3], nextThickness);
            const p0a = [buffer[i] + off[0], buffer[i + 1] + off[1]];
            const p1a = [buffer[i + 2] + off2[0], buffer[i + 3] + off2[1]];
            const p0b = [buffer[i] - off[0], buffer[i + 1] - off[1]];
            const p1b = [buffer[i + 2] - off2[0], buffer[i + 3] - off2[1]];
            if (!bFirst) {
                const interA = Solidify.getIntersection(prevA[0], prevA[1], p0a, p1a, error);
                if (interA) {
                    solidified.unshift(interA[1]);
                    solidified.unshift(interA[0]);
                }
                const interB = Solidify.getIntersection(prevB[0], prevB[1], p0b, p1b, error);
                if (interB) {
                    solidified.push(interB[0]);
                    solidified.push(interB[1]);
                }
            }
            if (bFirst) {
                solidified.unshift(p0a[1]);
                solidified.unshift(p0a[0]);
                solidified.push(p0b[0]);
                solidified.push(p0b[1]);
            }
            if (bLast) {
                solidified.unshift(p1a[1]);
                solidified.unshift(p1a[0]);
                solidified.push(p1b[0]);
                solidified.push(p1b[1]);
            }
            if (!bLast) {
                prevA = [p0a, p1a];
                prevB = [p0b, p1b];
            }
        }
        if (bClosed) {
            const centerIndex = buffer.length - 2;
            const lastIndex = solidified.length - 2;
            const x = 0.5 * solidified[0] + solidified[centerIndex] * 0.5;
            const y = 0.5 * solidified[1] + solidified[centerIndex + 1] * 0.5;
            const x2 = 0.5 * solidified[centerIndex + 2] + solidified[lastIndex] * 0.5;
            const y2 = 0.5 * solidified[centerIndex + 3] + solidified[lastIndex + 1] * 0.5;
            solidified[0] = x;
            solidified[1] = y;
            solidified[centerIndex] = x;
            solidified[centerIndex + 1] = y;
            solidified[centerIndex + 2] = x2;
            solidified[centerIndex + 3] = y2;
            solidified[lastIndex] = x2;
            solidified[lastIndex + 1] = y2;
        }
        return Float32Array.from(solidified);
    }
    static getOffsets(ax, ay, bx, by, thickness) {
        const dx = bx - ax, dy = by - ay, len = Math.sqrt(dx * dx + dy * dy), scale = thickness / (2 * len);
        return [-scale * dy, scale * dx];
    }
    static getIntersection(a1, b1, a2, b2, error = 0.00001) {
        // directional constants
        const k1 = (b1[1] - a1[1]) / (b1[0] - a1[0]), k2 = (b2[1] - a2[1]) / (b2[0] - a2[0]);
        // if the directional constants are equal, the lines are parallel
        // if (Math.abs(k1 - k2) < 0.00001) {
        if (Math.abs(k1 - k2) < error) {
            return;
        }
        // y offset constants for both lines
        const m1 = a1[1] - k1 * a1[0];
        const m2 = a2[1] - k2 * a2[0];
        // compute x
        const x = (m1 - m2) / (k2 - k1);
        // use y = k * x + m to get y coordinate
        const y = k1 * x + m1;
        return [x, y];
    }
}

//# sourceMappingURL=Solidify.js.map

/***/ }),
/* 46 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Subdivide": () => (/* binding */ Subdivide)
/* harmony export */ });
/* harmony import */ var _Modifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);

class Subdivide extends _Modifier__WEBPACK_IMPORTED_MODULE_0__.Modifier {
    constructor(args = {}) {
        super();
        this.level = args.level || 1;
        this.level = this.level < 1 ? 1 : this.level;
    }
    apply(buffer, bClosed) {
        const level = this.level;
        let subdivided = buffer;
        if (subdivided && subdivided.length > 0) {
            for (let i = 0; i < level; i++)
                subdivided = Subdivide.subdivide(subdivided, bClosed);
        }
        return subdivided;
    }
    /**
     * Subdivide buffer
     *
     * @static
     * @param {Float32Array} shape
     * @param {boolean} [bClosed=true]
     * @returns {(Float32Array)}
     */
    static subdivide(buffer, bClosed = false) {
        const bufferLength = buffer.length;
        const subdivided = new Float32Array(bufferLength * 2 - (bClosed ? 0 : 2));
        for (let i = 0; i < bufferLength; i += 2) {
            if (i === 0) {
                subdivided[0] = buffer[0];
                subdivided[1] = buffer[1];
            }
            else {
                const px = buffer[i - 2];
                const py = buffer[i - 1];
                const x = buffer[i];
                const y = buffer[i + 1];
                const nx = (x + px) / 2;
                const ny = (y + py) / 2;
                subdivided[(i - 1) * 2] = nx;
                subdivided[(i - 1) * 2 + 1] = ny;
                subdivided[i * 2] = x;
                subdivided[i * 2 + 1] = y;
            }
        }
        if (bClosed) {
            subdivided[(bufferLength - 1) * 2] = (buffer[0] + buffer[bufferLength - 2]) / 2;
            subdivided[(bufferLength - 1) * 2 + 1] = (buffer[1] + buffer[bufferLength - 1]) / 2;
        }
        return subdivided;
    }
}

//# sourceMappingURL=Subdivide.js.map

/***/ }),
/* 47 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Offset": () => (/* binding */ Offset)
/* harmony export */ });
/* harmony import */ var _Modifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);

class Offset extends _Modifier__WEBPACK_IMPORTED_MODULE_0__.Modifier {
    constructor(args = { from: 0, to: undefined }) {
        super();
        this.from = args.from;
        this.to = args.to;
    }
    apply(buffer, bClosed) {
        return buffer.subarray(this.from, this.to ? (this.to < 0 ? buffer.length + this.to : this.to) : undefined);
    }
}

//# sourceMappingURL=Offset.js.map

/***/ })
/******/ ]);
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EBoundingType": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.EBoundingType),
/* harmony export */   "ERepetitionType": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.ERepetitionType),
/* harmony export */   "Scene": () => (/* reexport safe */ _Scene__WEBPACK_IMPORTED_MODULE_2__.Scene),
/* harmony export */   "SceneChild": () => (/* reexport safe */ _SceneChild__WEBPACK_IMPORTED_MODULE_3__.SceneChild),
/* harmony export */   "Group": () => (/* reexport safe */ _Group__WEBPACK_IMPORTED_MODULE_4__.Group),
/* harmony export */   "ShapeBase": () => (/* reexport safe */ _shapes_ShapeBase__WEBPACK_IMPORTED_MODULE_5__.ShapeBase),
/* harmony export */   "ShapePrimitive": () => (/* reexport safe */ _shapes_ShapePrimitive__WEBPACK_IMPORTED_MODULE_6__.ShapePrimitive),
/* harmony export */   "ShapeLoop": () => (/* reexport safe */ _shapes_ShapeLoop__WEBPACK_IMPORTED_MODULE_7__.ShapeLoop),
/* harmony export */   "ShapeBuffer": () => (/* reexport safe */ _shapes_ShapeBuffer__WEBPACK_IMPORTED_MODULE_8__.ShapeBuffer),
/* harmony export */   "Shape": () => (/* reexport safe */ _shapes_Shape__WEBPACK_IMPORTED_MODULE_9__.Shape),
/* harmony export */   "ShapeRecursive": () => (/* reexport safe */ _shapes_ShapeRecursive__WEBPACK_IMPORTED_MODULE_10__.ShapeRecursive),
/* harmony export */   "ShapeFollow": () => (/* reexport safe */ _shapes_ShapeFollow__WEBPACK_IMPORTED_MODULE_11__.ShapeFollow),
/* harmony export */   "Line": () => (/* reexport safe */ _shapes_primitives_Line__WEBPACK_IMPORTED_MODULE_12__.Line),
/* harmony export */   "Triangle": () => (/* reexport safe */ _shapes_primitives_Triangle__WEBPACK_IMPORTED_MODULE_13__.Triangle),
/* harmony export */   "Rect": () => (/* reexport safe */ _shapes_primitives_Rect__WEBPACK_IMPORTED_MODULE_14__.Rect),
/* harmony export */   "Polygon": () => (/* reexport safe */ _shapes_primitives_Polygon__WEBPACK_IMPORTED_MODULE_15__.Polygon),
/* harmony export */   "Circle": () => (/* reexport safe */ _shapes_primitives_Circle__WEBPACK_IMPORTED_MODULE_16__.Circle),
/* harmony export */   "Star": () => (/* reexport safe */ _shapes_primitives_Star__WEBPACK_IMPORTED_MODULE_17__.Star),
/* harmony export */   "Rose": () => (/* reexport safe */ _shapes_primitives_Rose__WEBPACK_IMPORTED_MODULE_18__.Rose),
/* harmony export */   "Spiral": () => (/* reexport safe */ _shapes_primitives_Spiral__WEBPACK_IMPORTED_MODULE_19__.Spiral),
/* harmony export */   "Lissajous": () => (/* reexport safe */ _shapes_primitives_Lissajous__WEBPACK_IMPORTED_MODULE_20__.Lissajous),
/* harmony export */   "SuperShape": () => (/* reexport safe */ _shapes_primitives_SuperShape__WEBPACK_IMPORTED_MODULE_21__.SuperShape),
/* harmony export */   "Modifier": () => (/* reexport safe */ _modifiers_Modifier__WEBPACK_IMPORTED_MODULE_22__.Modifier),
/* harmony export */   "Modifiers": () => (/* reexport safe */ _modifiers__WEBPACK_IMPORTED_MODULE_23__.Modifiers),
/* harmony export */   "lerp": () => (/* reexport safe */ _Utilities__WEBPACK_IMPORTED_MODULE_24__.lerp),
/* harmony export */   "clamp": () => (/* reexport safe */ _Utilities__WEBPACK_IMPORTED_MODULE_24__.clamp),
/* harmony export */   "relativeClamp": () => (/* reexport safe */ _Utilities__WEBPACK_IMPORTED_MODULE_24__.relativeClamp),
/* harmony export */   "toDegrees": () => (/* reexport safe */ _Utilities__WEBPACK_IMPORTED_MODULE_24__.toDegrees),
/* harmony export */   "toRadians": () => (/* reexport safe */ _Utilities__WEBPACK_IMPORTED_MODULE_24__.toRadians),
/* harmony export */   "now": () => (/* reexport safe */ _Utilities__WEBPACK_IMPORTED_MODULE_24__.now),
/* harmony export */   "noise": () => (/* reexport safe */ _Utilities__WEBPACK_IMPORTED_MODULE_24__.noise),
/* harmony export */   "random": () => (/* reexport safe */ _Utilities__WEBPACK_IMPORTED_MODULE_24__.random),
/* harmony export */   "angleFromRepetition": () => (/* reexport safe */ _Utilities__WEBPACK_IMPORTED_MODULE_24__.angleFromRepetition),
/* harmony export */   "angle2FromRepetition": () => (/* reexport safe */ _Utilities__WEBPACK_IMPORTED_MODULE_24__.angle2FromRepetition),
/* harmony export */   "distanceFromRepetition": () => (/* reexport safe */ _Utilities__WEBPACK_IMPORTED_MODULE_24__.distanceFromRepetition),
/* harmony export */   "interpolate": () => (/* reexport safe */ _Utilities__WEBPACK_IMPORTED_MODULE_24__.interpolate),
/* harmony export */   "prepareBufferForInterpolation": () => (/* reexport safe */ _Utilities__WEBPACK_IMPORTED_MODULE_24__.prepareBufferForInterpolation),
/* harmony export */   "distributePointsInBuffer": () => (/* reexport safe */ _Utilities__WEBPACK_IMPORTED_MODULE_24__.distributePointsInBuffer),
/* harmony export */   "Vec2": () => (/* reexport safe */ _math_Vec2__WEBPACK_IMPORTED_MODULE_25__.default),
/* harmony export */   "PHI": () => (/* reexport safe */ _math__WEBPACK_IMPORTED_MODULE_26__.PHI),
/* harmony export */   "PI2": () => (/* reexport safe */ _math__WEBPACK_IMPORTED_MODULE_26__.PI2),
/* harmony export */   "log": () => (/* reexport safe */ _math__WEBPACK_IMPORTED_MODULE_26__.log),
/* harmony export */   "mod": () => (/* reexport safe */ _math__WEBPACK_IMPORTED_MODULE_26__.mod)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _SceneChild__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _Group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _shapes_ShapeBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
/* harmony import */ var _shapes_ShapePrimitive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26);
/* harmony import */ var _shapes_ShapeLoop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27);
/* harmony import */ var _shapes_ShapeBuffer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(28);
/* harmony import */ var _shapes_Shape__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25);
/* harmony import */ var _shapes_ShapeRecursive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(29);
/* harmony import */ var _shapes_ShapeFollow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(30);
/* harmony import */ var _shapes_primitives_Line__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(31);
/* harmony import */ var _shapes_primitives_Triangle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(32);
/* harmony import */ var _shapes_primitives_Rect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(33);
/* harmony import */ var _shapes_primitives_Polygon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(34);
/* harmony import */ var _shapes_primitives_Circle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(35);
/* harmony import */ var _shapes_primitives_Star__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(36);
/* harmony import */ var _shapes_primitives_Rose__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(37);
/* harmony import */ var _shapes_primitives_Spiral__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(38);
/* harmony import */ var _shapes_primitives_Lissajous__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(39);
/* harmony import */ var _shapes_primitives_SuperShape__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(40);
/* harmony import */ var _modifiers_Modifier__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(19);
/* harmony import */ var _modifiers__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(41);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(20);
/* harmony import */ var _math_Vec2__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(16);
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(17);
/**
 * Types & Interface
 */

// Set glMatrixArrayType

gl_matrix__WEBPACK_IMPORTED_MODULE_1__.setMatrixArrayType(Array);
/**
 * Core
 */



// Shapes

















// Modifiers


// Utilities



//# sourceMappingURL=index.js.map
})();

var __webpack_exports__Circle = __webpack_exports__.Circle;
var __webpack_exports__EBoundingType = __webpack_exports__.EBoundingType;
var __webpack_exports__ERepetitionType = __webpack_exports__.ERepetitionType;
var __webpack_exports__Group = __webpack_exports__.Group;
var __webpack_exports__Line = __webpack_exports__.Line;
var __webpack_exports__Lissajous = __webpack_exports__.Lissajous;
var __webpack_exports__Modifier = __webpack_exports__.Modifier;
var __webpack_exports__Modifiers = __webpack_exports__.Modifiers;
var __webpack_exports__PHI = __webpack_exports__.PHI;
var __webpack_exports__PI2 = __webpack_exports__.PI2;
var __webpack_exports__Polygon = __webpack_exports__.Polygon;
var __webpack_exports__Rect = __webpack_exports__.Rect;
var __webpack_exports__Rose = __webpack_exports__.Rose;
var __webpack_exports__Scene = __webpack_exports__.Scene;
var __webpack_exports__SceneChild = __webpack_exports__.SceneChild;
var __webpack_exports__Shape = __webpack_exports__.Shape;
var __webpack_exports__ShapeBase = __webpack_exports__.ShapeBase;
var __webpack_exports__ShapeBuffer = __webpack_exports__.ShapeBuffer;
var __webpack_exports__ShapeFollow = __webpack_exports__.ShapeFollow;
var __webpack_exports__ShapeLoop = __webpack_exports__.ShapeLoop;
var __webpack_exports__ShapePrimitive = __webpack_exports__.ShapePrimitive;
var __webpack_exports__ShapeRecursive = __webpack_exports__.ShapeRecursive;
var __webpack_exports__Spiral = __webpack_exports__.Spiral;
var __webpack_exports__Star = __webpack_exports__.Star;
var __webpack_exports__SuperShape = __webpack_exports__.SuperShape;
var __webpack_exports__Triangle = __webpack_exports__.Triangle;
var __webpack_exports__Vec2 = __webpack_exports__.Vec2;
var __webpack_exports__angle2FromRepetition = __webpack_exports__.angle2FromRepetition;
var __webpack_exports__angleFromRepetition = __webpack_exports__.angleFromRepetition;
var __webpack_exports__clamp = __webpack_exports__.clamp;
var __webpack_exports__distanceFromRepetition = __webpack_exports__.distanceFromRepetition;
var __webpack_exports__distributePointsInBuffer = __webpack_exports__.distributePointsInBuffer;
var __webpack_exports__interpolate = __webpack_exports__.interpolate;
var __webpack_exports__lerp = __webpack_exports__.lerp;
var __webpack_exports__log = __webpack_exports__.log;
var __webpack_exports__mod = __webpack_exports__.mod;
var __webpack_exports__noise = __webpack_exports__.noise;
var __webpack_exports__now = __webpack_exports__.now;
var __webpack_exports__prepareBufferForInterpolation = __webpack_exports__.prepareBufferForInterpolation;
var __webpack_exports__random = __webpack_exports__.random;
var __webpack_exports__relativeClamp = __webpack_exports__.relativeClamp;
var __webpack_exports__toDegrees = __webpack_exports__.toDegrees;
var __webpack_exports__toRadians = __webpack_exports__.toRadians;
export { __webpack_exports__Circle as Circle, __webpack_exports__EBoundingType as EBoundingType, __webpack_exports__ERepetitionType as ERepetitionType, __webpack_exports__Group as Group, __webpack_exports__Line as Line, __webpack_exports__Lissajous as Lissajous, __webpack_exports__Modifier as Modifier, __webpack_exports__Modifiers as Modifiers, __webpack_exports__PHI as PHI, __webpack_exports__PI2 as PI2, __webpack_exports__Polygon as Polygon, __webpack_exports__Rect as Rect, __webpack_exports__Rose as Rose, __webpack_exports__Scene as Scene, __webpack_exports__SceneChild as SceneChild, __webpack_exports__Shape as Shape, __webpack_exports__ShapeBase as ShapeBase, __webpack_exports__ShapeBuffer as ShapeBuffer, __webpack_exports__ShapeFollow as ShapeFollow, __webpack_exports__ShapeLoop as ShapeLoop, __webpack_exports__ShapePrimitive as ShapePrimitive, __webpack_exports__ShapeRecursive as ShapeRecursive, __webpack_exports__Spiral as Spiral, __webpack_exports__Star as Star, __webpack_exports__SuperShape as SuperShape, __webpack_exports__Triangle as Triangle, __webpack_exports__Vec2 as Vec2, __webpack_exports__angle2FromRepetition as angle2FromRepetition, __webpack_exports__angleFromRepetition as angleFromRepetition, __webpack_exports__clamp as clamp, __webpack_exports__distanceFromRepetition as distanceFromRepetition, __webpack_exports__distributePointsInBuffer as distributePointsInBuffer, __webpack_exports__interpolate as interpolate, __webpack_exports__lerp as lerp, __webpack_exports__log as log, __webpack_exports__mod as mod, __webpack_exports__noise as noise, __webpack_exports__now as now, __webpack_exports__prepareBufferForInterpolation as prepareBufferForInterpolation, __webpack_exports__random as random, __webpack_exports__relativeClamp as relativeClamp, __webpack_exports__toDegrees as toDegrees, __webpack_exports__toRadians as toRadians };

//# sourceMappingURL=urpflanze.js.map