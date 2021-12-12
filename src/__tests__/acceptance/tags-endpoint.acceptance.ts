import {Client, expect} from '@loopback/testlab';
import {BackendApplication} from '../..';
import {setupApplication} from './test-helper';
import {givenEmptyDatabase, givenTag, givenUser} from "../helpers/database.helpers";

describe('TagsEndpoint', () => {
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
        .get('/tags')
        .expect(200);
  });

  it('tests body is not-nullable', async () => {
    await client
        .post('/tags')
        .send({
          "title": 'some Title Text as an example for test'
        })
        .expect(422);
  });

  it('tests title is not-nullables', async () => {
    await client
        .post('/tags')
        .send({
          "body": 'some Body Text as an example for test'
        })
        .expect(422);
  });

  it('tests min title character limit', async () => {
    await client
        .post('/tags')
        .send({
          "title": 'Less than 25 min-length',
          "body": 'some new body text as an example for test'
        })
        .expect(422);
  });

  it('tests min body character limit', async () => {
    await client
        .post('/tags')
        .send({
          "title": 'some new title text as an example for test',
          "body": 'Less than 25 min-length'
        })
        .expect(422);
  });

    it('tests tag creation', async () => {
        const user = await givenUser({
            name: 'Jonah',
            password: 'password'
        });

        const tag = await givenTag({
            created: null,
            title: 'Some Title',
            body: 'Some Body',
        });

        const expected = Object.assign({id: tag.id}, tag);

        const response = await client.get('/tags');

        expect(response.body).to.containEql(expected);
    });
});
