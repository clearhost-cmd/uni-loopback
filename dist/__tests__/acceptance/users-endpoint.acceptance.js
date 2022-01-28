"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helper_1 = require("./test-helper");
const database_helpers_1 = require("../helpers/database.helpers");
describe('UsersEndpoint', () => {
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
//# sourceMappingURL=users-endpoint.acceptance.js.map