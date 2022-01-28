import {juggler} from '@loopback/repository';

export const testdb: juggler.DataSource = new juggler.DataSource({
    name: 'forum',
    connector: 'mysql',
    url: '',
    host: 'eu-cdbr-west-02.cleardb.net',
    port: 3306,
    user: 'b79c1ba9690de3',
    password: 'dcf66a74',
    database: 'heroku_453bf256b559c63'
});