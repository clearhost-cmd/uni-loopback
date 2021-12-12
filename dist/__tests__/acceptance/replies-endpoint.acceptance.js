"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helper_1 = require("./test-helper");
describe('RepliesEndpoint', () => {
    let app;
    let client;
    before('setupApplication', async () => {
        ({ app, client } = await (0, test_helper_1.setupApplication)());
    });
    after(async () => {
        await app.stop();
    });
    it('exposes endpoint', async () => {
        await client
            .get('/replies')
            .expect(200);
    });
    it('tests body is not-nullable', async () => {
        await client
            .post('/replies')
            .send({
            "title": 'some Title Text as an example for test'
        })
            .expect(422);
    });
    it('tests title is not-nullables', async () => {
        await client
            .post('/replies')
            .send({
            "body": 'some Body Text as an example for test'
        })
            .expect(422);
    });
    it('tests min title character limit', async () => {
        await client
            .post('/replies')
            .send({
            "title": 'Less than 25 min-length',
            "body": 'some new body text as an example for test'
        })
            .expect(422);
    });
    it('tests min body character limit', async () => {
        await client
            .post('/replies')
            .send({
            "title": 'some new title text as an example for test',
            "body": 'Less than 25 min-length'
        })
            .expect(422);
    });
});
//# sourceMappingURL=replies-endpoint.acceptance.js.map