# chebyshev
![Chebyshev distance from the square F6](diagram.png)

This module exposes the function `chebyshev(a, b)`, which determines the [Chebyshev distance](https://en.wikipedia.org/wiki/Chebyshev_distance) between points `a` and `b`.

```js
> const chebyshev = require('chebyshev')
> chebyshev([6, 6], [5, 2])
4
```
[![NPM](https://nodei.co/npm/chebyshev.png?mini)](https://www.npmjs.com/package/chebyshev)

## see also
- [`semibran/vector`](https://github.com/semibran/vector) - more vector math
- [`hughsk/moore`](https://github.com/hughsk/moore) - find all points within a given Chebyshev distance

## license
[MIT](https://opensource.org/licenses/MIT) © [Brandon Semilla](https://git.io/semibran)
