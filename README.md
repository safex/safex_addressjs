# Safex Address Util (javascript)

This utility allows you to generate safex addresses and their checksums. The utility is self-contained, there are no external dependencies.

Based on [monero-wallet-generator](https://github.com/moneromooo-monero/monero-wallet-generator) (original copyright notices are available [here](copyrights.md))

### Usage

```
npm i --save safex-addressjs
```

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
