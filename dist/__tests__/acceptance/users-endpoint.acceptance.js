"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testlab_1 = require("@loopback/testlab");
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
    /**
     * Integration Testing
     */
    it('tests user creation', async () => {
        const user = await (0, database_helpers_1.givenUser)({
            name: 'Jonah',
            password: 'password'
        });
        const expected = Object.assign({ id: user.id }, user);
        const response = await client.get('/users');
        (0, testlab_1.expect)(response.body).to.containEql(expected);
    });
});
//# sourceMappingURL=users-endpoint.acceptance.js.map