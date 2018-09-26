const expect = require('chai').expect;

const wg = require('../index');
const { poor_mans_kdf } = require('../lib/Keccak');

describe('safex-addressjs', () => {
  it('can generate wallet keys with random entropy', () => {
    const seed = wg.sc_reduce32(wg.rand_32());
    const keys = wg.create_address(seed);
    
    expect(keys.public_addr.length).to.equal(101);
    expect(keys.spend.pub.length).to.equal(64);
    expect(keys.spend.sec.length).to.equal(64);
    expect(keys.view.pub.length).to.equal(64);
    expect(keys.view.sec.length).to.equal(64);
    
    expect(wg.pubkeys_to_string(keys.spend.pub, keys.view.pub).length).to.equal(101);
  });
  
  it('can generate wallet keys with predetermined entropy', () => {
    const entropy = 'some entropy string';
    
    const seed = wg.sc_reduce32(poor_mans_kdf(entropy));
    const keys = wg.create_address(seed);
    
    expect(keys).to.eql({
      'spend': {
        'sec': '0fc6036f59ac0feb8a371bc2f6d998a1b0134ee9b0e437d7bd77015d22d1ad0e',
        'pub': 'c81869389d5dbb71256f588a3e1db7ac27e3e2bd2c00a15bbe3243c773f2066e'
      },
      'view': {
        'sec': '3523c3439dfa3b831a923989f6d4a8239e5b5d6455e8a36017886ce72adef007',
        'pub': '3244d3263ca61a96d0dc87e734808b9453a59b4f693f01908e69a2c89bc11b4e'
      },
      'public_addr': 'Safex611rcxAUEYu3tg4yuQ88MWfg3ASuYeCr64kAeFkaMwhYyFTvpA7Pws5MjacwQffynDQhbiUAEHPTvvFS8eVaZ9sRiLfuuN3V'
    });
    
    expect(wg.pubkeys_to_string(keys.spend.pub, keys.view.pub)).to.equal(
      'Safex611rcxAUEYu3tg4yuQ88MWfg3ASuYeCr64kAeFkaMwhYyFTvpA7Pws5MjacwQffynDQhbiUAEHPTvvFS8eVaZ9sRiLfuuN3V'
    );
  });
});
