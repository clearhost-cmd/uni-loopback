import {juggler} from '@loopback/repository';

export const testdb: juggler.DataSource = new juggler.DataSource({
    name: 'forum',
    connector: 'mysql',
    url: '',
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'forum'
});