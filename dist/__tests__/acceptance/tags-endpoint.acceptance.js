"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testlab_1 = require("@loopback/testlab");
const test_helper_1 = require("./test-helper");
const database_helpers_1 = require("../helpers/database.helpers");
describe('TagsEndpoint', () => {
    let app;
    let client;
    before('setupApplication', async () => {
        ({ app, client } = await (0, test_helper_1.setupApplication)());
    });
    after(async () => {
        await app.stop();
    });
    /**
     * Setting Test Environment
     */
    (0, database_helpers_1.givenEmptyDatabase)();
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
        const user = await (0, database_helpers_1.givenUser)({
            name: 'Jonah',
            password: 'password'
        });
        const tag = await (0, database_helpers_1.givenTag)({
            created: null,
            title: 'Some Title',
            body: 'Some Body',
        });
        const expected = Object.assign({ id: tag.id }, tag);
        const response = await client.get('/tags');
        (0, testlab_1.expect)(response.body).to.containEql(expected);
    });
});
//# sourceMappingURL=tags-endpoint.acceptance.js.map