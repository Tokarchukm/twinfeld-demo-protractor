exports.config = {
    framework:'mocha',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['tests/todo-spec.js'],
    capabilities: {
        browserName: 'chrome'
    },
    mochaOpts: {
        timeout: 150000
      }
  };