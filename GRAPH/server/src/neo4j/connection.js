const bluebird = require('bluebird');
const graphDB = bluebird.promisifyAll(require('seraph')({
    server: 'http://10.0.7.11:7474',
    user: 'neo4j',
    pass: 'test123'
}));

module.exports = graphDB;