# chebyshev
> Determines the [Chebyshev distance](https://en.wikipedia.org/wiki/Chebyshev_distance) between two points in two-dimensional space

## install
```sh
npm install chebyshev
```

## usage
```js
const chebyshev = require('chebyshev')
```

### `chebyshev(a, b)`
Determines the Chebyshev distance between points `a` and `b`, where a point is an object with the fields `x` and `y`.
```js
> chebyshev({ x: 6, y: 6 }, { x: 5, y: 2 })
4
```

## license
[MIT](https://opensource.org/licenses/MIT) © [Brandon Semilla](https://git.io/semibran)
