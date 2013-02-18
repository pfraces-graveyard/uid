# Uid

Unique identifiers generator

## Examples

```javascript
var uid = require('uid');
var id = uid();
id(); // -> 0
id(); // -> 1
id(); // -> 2
```

```javascript
var uid = require('uid');
var id = uid(function (id) {
  return 'foo' + id;
});

id(); // -> 'foo0'
id(); // -> 'foo1'
id(); // -> 'foo2'
```

## Install

    $ component install corejs/uid
