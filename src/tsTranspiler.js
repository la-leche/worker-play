// tsTranspiler.js

require('ts-node').register({ transpileOnly: true });

const { AppWorker } = require('./AppWorker.ts');

const add = new AppWorker().add;
const multiply = new AppWorker().multiply;
const doTask = new AppWorker().doTask;

module.exports = {
    add, multiply, doTask
};
