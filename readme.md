# chebyshev
[![NPM](https://nodei.co/npm/chebyshev.png?mini)](https://www.npmjs.com/package/chebyshev)

This module exposes the function `chebyshev(a, b)` for determining the [Chebyshev distance](https://en.wikipedia.org/wiki/Chebyshev_distance) between points `a` and `b`.

![Chebyshev distance from the square F6](diagram.png)

```js
> const chebyshev = require('chebyshev')
> chebyshev([6, 6], [5, 2])
4
```

## see also
- [`semibran/vector`](https://github.com/semibran/vector) - more vector math
- [`hughsk/moore`](https://github.com/hughsk/moore) - find all points within a Chebyshev distance of 1

## license
[MIT](https://opensource.org/licenses/MIT) © [Brandon Semilla](https://git.io/semibran)
