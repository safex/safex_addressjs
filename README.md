# Safex Address Util (javascript)

```
npm i --save safex-addressjs
```

### Usage

#### Generate wallet

```javascript
const sa = require('safex-addressjs');

const seed = sa.sc_reduce32(wg.rand_32());
const keys = sa.create_address(seed);
const pubkey = sa.pubkeys_to_string(keys.spend.pub, keys.view.pub);

console.log(keys);
console.log(pubkey);
```

### License

[MIT](LICENSE)




