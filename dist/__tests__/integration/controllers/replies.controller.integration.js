"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_helpers_1 = require("../../helpers/database.helpers");
describe('RepliesController (integration)', () => {
    before(database_helpers_1.givenEmptyDatabase);
    after(database_helpers_1.givenReply);
});
//# sourceMappingURL=replies.controller.integration.js.map