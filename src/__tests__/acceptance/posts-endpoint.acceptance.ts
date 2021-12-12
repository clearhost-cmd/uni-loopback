import {Client} from '@loopback/testlab';
import {BackendApplication} from '../..';
import {setupApplication} from './test-helper';

describe('PostsEndpoint', () => {
  let app: BackendApplication;
  let client: Client;

  let ranId = Math.floor(Math.random() * 16) + 5;

  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  it('exposes endpoint', async () => {
    await client
      .get('/posts')
      .expect(200);
  });

  it('tests body is not-nullable', async () => {
    await client
      .post('/posts')
      .send({
        "title": 'some Title Text as an example for test'
      })
      .expect(422);
  });

  it('tests title is not-nullables', async () => {
    await client
      .post('/posts')
      .send({
        "body": 'some Body Text as an example for test'
      })
      .expect(422);
  });

  it('tests min title character limit', async () => {
    await client
      .post('/posts')
      .send({
        "title": 'Less than 25 min-length',
        "body": 'some new body text as an example for test'
      })
      .expect(422);
  });

  it('tests min body character limit', async () => {
    await client
      .post('/posts')
      .send({
        "title": 'some new title text as an example for test',
        "body": 'Less than 25 min-length'
      })
      .expect(422);
  });
});
