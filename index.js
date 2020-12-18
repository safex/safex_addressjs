const cnUtil = require('./lib/cnUtil');
const {
    cn_fast_hash_safex,
    check_signature,
    sign_message,
    sc_reduce32,
    rand_32,
    create_address,
    pubkeys_to_string,
    address_checksum,
    sec_key_to_pub,
    structure_keys,
    decode_address,
    verify_checksum,
    initialize
} = cnUtil;

module.exports = {
    sc_reduce32,
    rand_32,
    create_address,
    pubkeys_to_string,
    sec_key_to_pub,
    structure_keys,
    address_checksum,
    decode_address,
    verify_checksum,
    sign_message,
    check_signature,
    cn_fast_hash_safex,
    initialize
};

// Bind the exports to cnUtil
for (const key in module.exports) {
    module.exports[key] = module.exports[key].bind(cnUtil);
}
