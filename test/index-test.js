
const test = require('tape');
const version = require('../index.js');

test('version test', function (t) {
    t.plan(1);
    t.equal(version, require('@maxmil7/greenkeeper_mod'), 'should return version');
});