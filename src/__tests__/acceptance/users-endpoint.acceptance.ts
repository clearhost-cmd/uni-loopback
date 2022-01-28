import {Client, expect} from '@loopback/testlab';
import {BackendApplication} from '../..';
import {setupApplication} from './test-helper';
import {givenEmptyDatabase, givenUser} from "../helpers/database.helpers";

describe('UsersEndpoint', () => {
  let app: BackendApplication;
  let client: Client;

  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  /**
   * Setting Test Environment
   */
  givenEmptyDatabase();

  it('exposes endpoint', async () => {
    await client
        .get('/users')
        .expect(200);
  });

 /**
  * Test Nullable Fields
  */

  it('tests name is not-nullable', async () => {
    await client
        .post('/users')
        .send({
          "password": 'some Title Text as an example for test'
        })
        .expect(422);
  });

  it('tests password is not-nullables', async () => {
    await client
        .post('/users')
        .send({
          "name": 'some Body Text as an example for test'
        })
        .expect(422);
  });

 /**
  * Test Min Character Fields
  */

  it('tests min name character limit', async () => {
    await client
        .post('/users')
        .send({
          "name": 'Less than 25 min-length',
          "password": 'some new body text as an example for test'
        })
        .expect(422);
  });

  it('tests min password character limit', async () => {
    await client
        .post('/users')
        .send({
          "name": 'some new title text as an example for test',
          "password": 'Less than 25 min-length'
        })
        .expect(422);
  });
});
