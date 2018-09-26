const cnUtil = require('./lib/cnUtil');
const { sc_reduce32, rand_32, create_address, pubkeys_to_string, address_checksum } = cnUtil;

module.exports = {
    sc_reduce32,
    rand_32,
    create_address,
    pubkeys_to_string,
    address_checksum
};

// Bind the exports to cnUtil
for (const key in module.exports) {
  module.exports[key] = module.exports[key].bind(cnUtil);
}