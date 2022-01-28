"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const posts_model_1 = require("./posts.model");
const replies_model_1 = require("./replies.model");
const tags_model_1 = require("./tags.model");
let Users = class Users extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Users.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: false,
        default: () => new Date(),
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], Users.prototype, "created", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        length: 20,
        index: {
            unique: true
        },
        jsonSchema: {
            maxLength: 20,
            minLength: 10,
            errorMessage: 'User Name must be 10 to 20 characters long.',
        },
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Users.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        length: 50,
        index: {
            unique: true
        },
        jsonSchema: {
            maxLength: 50,
            minLength: 20,
            errorMessage: 'User Password must be 20 to 50 characters long.',
        },
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Users.prototype, "password", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => posts_model_1.Posts, {
        keyTo: 'user_id'
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], Users.prototype, "posts", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => replies_model_1.Replies, {
        keyTo: 'user_id'
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], Users.prototype, "replies", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => tags_model_1.Tags, {
        keyTo: 'user_id'
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], Users.prototype, "tags", void 0);
Users = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Users);
exports.Users = Users;
//# sourceMappingURL=users.model.js.map