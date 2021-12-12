"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_helpers_1 = require("../../helpers/database.helpers");
describe('TagsController (integration)', () => {
    before(database_helpers_1.givenEmptyDatabase);
    after(database_helpers_1.givenTag);
});
//# sourceMappingURL=tags.controller.integration.js.map