// This file isn't transpiled, so must use COMMONJS and ES5

// Register babel to run before our tests run
require('babel-register')();

// Disable webpack features that mocha does not understand
require.extensions['.css'] = function() {};
