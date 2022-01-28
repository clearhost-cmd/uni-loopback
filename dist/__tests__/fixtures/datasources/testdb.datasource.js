"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testdb = void 0;
const repository_1 = require("@loopback/repository");
exports.testdb = new repository_1.juggler.DataSource({
    name: 'forum',
    connector: 'mysql',
    url: '',
    host: 'eu-cdbr-west-02.cleardb.net',
    port: 3306,
    user: 'b79c1ba9690de3',
    password: 'dcf66a74',
    database: 'heroku_453bf256b559c63'
});
//# sourceMappingURL=testdb.datasource.js.map