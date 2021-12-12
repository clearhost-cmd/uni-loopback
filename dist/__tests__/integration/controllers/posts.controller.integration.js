"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_helpers_1 = require("../../helpers/database.helpers");
describe('PostsController (integration)', () => {
    before(database_helpers_1.givenEmptyDatabase);
    after(database_helpers_1.givenPost);
});
//# sourceMappingURL=posts.controller.integration.js.map