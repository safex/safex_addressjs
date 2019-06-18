const cnUtil = require('./lib/cnUtil');
const { sc_reduce32, rand_32, create_address, pubkeys_to_string, address_checksum, sec_key_to_pub, structure_keys, decode_address, verify_checksum } = cnUtil;

module.exports = {
    sc_reduce32,
    rand_32,
    create_address,
    pubkeys_to_string,
    sec_key_to_pub,
    structure_keys,
    address_checksum,
    decode_address,
    verify_checksum
};

// Bind the exports to cnUtil
for (const key in module.exports) {
  module.exports[key] = module.exports[key].bind(cnUtil);
}
