const log = require('@ajar/marker');
const {slugger} = require('./index');
//or const slugger = require('./index).slugger;

const result = slugger('hello', 'my name is', 'nitzan wagner');

log.magenta(result)