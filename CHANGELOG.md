# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.5.10](https://github.com/urpflanze-org/core/compare/v0.5.9...v0.5.10) (2021-11-01)

### [0.5.9](https://github.com/urpflanze-org/core/compare/v0.5.8...v0.5.9) (2021-08-23)


### Bug Fixes

* **utilities:** :bug: fix noise function ([6c9ac3a](https://github.com/urpflanze-org/core/commits/6c9ac3a959a9b5c1f9b0cac1482873a82d58b470))

### [0.5.8](https://github.com/urpflanze-org/core/compare/v0.5.7...v0.5.8) (2021-08-23)


### Features

* add loopMeta to ShapeLoop loop vertex callback ([414a2fd](https://github.com/urpflanze-org/core/commits/414a2fdcee146ee7017bd5b7c2784368c9cd8051))
* add noise min max value ([71d6523](https://github.com/urpflanze-org/core/commits/71d6523224772ba0c6e197b9c112a4a78740cfb4))


### Bug Fixes

* :bug: fix anchor when resize ([13579e0](https://github.com/urpflanze-org/core/commits/13579e0bc52051ab260cfdfa1de53c453029ea16))
* fix static getBuffer argument ([853cffb](https://github.com/urpflanze-org/core/commits/853cffb6134208cc3a99a4a2e246901f62a07068))

### [0.5.7](https://github.com/urpflanze-org/core/compare/v0.5.6...v0.5.7) (2021-07-29)

### 0.5.6 (2021-07-27)

- Fix drawer type

### 0.5.5 (2021-07-17)

- Add anchor to ShapeBase

### 0.5.4 (2021-07-17)

- Fix anchor settings
- Fix module path for cdn

### 0.5.3 (2021-07-17)

- Add "build" folder to files in package.json

### 0.5.2 (2021-07-17)

- Improve building system (ESM/CJS/Browser)

### 0.5.1 (2021-06-27)

- Fix absolute imports

### 0.5.0 (2021-06-25)

- Add ShapeFollow
- Fix ShapeLoop isStaticIndexed
- Add 'interpolate' utility for buffer morphing
- ShapeBuffer add dynamic shape
- Add Modifiers
- Add SingleRepetitionBounding in indexedBuffer

### 0.4.6 (2021-03-29)

- Fix typescript import path

### 0.4.5 (2021-03-24)

- Interface refactoring

### 0.4.4 (2021-03-18)

- Remove buffer adaption when generate ShapeLoop or ShapeBuffer

### 0.4.3 (2021-03-17)

- Change module exports

### 0.4.2 (2021-03-16)

- Change build target from CJS to ES6

### 0.4.1 (2021-03-01)

- Rename 'style' to 'drawer' property for shape primitive

### 0.4.0 (2021-03-05)

- Adapt buffer moved in shape buffer
- Rename 'angle' to 'current' into IShapeLoopRepetition

### 0.3.3 (2021-02-24)

- Fix recursion on not primitive shape

### 0.3.2 (2021-02-11)

- Fix getBufferLength
- Fix clearBuffer for ShapeRecursive
- Add ShapeLoop subdivide for static inc

### 0.3.0 (2021-01-25)

- Remove time and Context from IPropArguments

### 0.2.4 (2021-01-24)

- Minor fix

### 0.2.3 (2021-01-09)

- Fix parent when indexing

### 0.2.2 (2020-12-14)

- Add RecoursiveShape
- Move to 'style' the properties used by drawer
- Rename RegularPolygon to Polygon

### 0.1.0-alpha.2 (2020-11-12)

- In the generation of the shapes the 'squeeze' was moved before apply the transformations
