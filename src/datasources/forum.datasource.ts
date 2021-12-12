import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'forum',
  connector: 'mysql',
  url: '',
  host: 'dj1699768-001.dbaas.ovh.net',
  port: 35710,
  user: 's78zjaxa',
  password: 'jUSkja71j',
  database: 'aj7shAAs'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class ForumDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'forum';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.forum', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
