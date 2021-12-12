"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForumDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'forum',
    connector: 'mysql',
    url: '',
    host: 'eu-cdbr-west-02.cleardb.net',
    port: 3306,
    user: 'b79c1ba9690de3',
    password: 'dcf66a74',
    database: 'heroku_453bf256b559c63'
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let ForumDataSource = class ForumDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
ForumDataSource.dataSourceName = 'forum';
ForumDataSource.defaultConfig = config;
ForumDataSource = (0, tslib_1.__decorate)([
    (0, core_1.lifeCycleObserver)('datasource'),
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.config.forum', { optional: true })),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], ForumDataSource);
exports.ForumDataSource = ForumDataSource;
//# sourceMappingURL=forum.datasource.js.map