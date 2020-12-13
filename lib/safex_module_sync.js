const sleep = require('system-sleep');

const initModule = require('./safex_module');

var Module;
initModule().then((loadedModule) => {
    Module = loadedModule;
}, err => {
    // Nothing we can do
    console.error("Failed to load safex module", err);
    Module = {};
});

while (!Module) {
    sleep(10);
}

module.exports = Module;
