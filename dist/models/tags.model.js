"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tags = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const users_model_1 = require("./users.model");
const posts_model_1 = require("./posts.model");
let Tags = class Tags extends repository_1.Entity {
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
], Tags.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: false,
        default: () => new Date(),
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], Tags.prototype, "created", void 0);
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
            minLength: 25,
            errorMessage: 'Tag title must be at least 25 characters and maximum 50 characters',
        },
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Tags.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        length: 100,
        index: {
            unique: true
        },
        jsonSchema: {
            maxLength: 100,
            minLength: 25,
            errorMessage: 'Tag body must be at least 10 characters and maximum 350 characters',
        },
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Tags.prototype, "body", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => users_model_1.Users, {
        name: 'user'
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Tags.prototype, "user_id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => posts_model_1.Posts, {
        keyTo: 'tag_id'
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], Tags.prototype, "posts", void 0);
Tags = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            foreignKeys: {
                fk_user_cascades_tags: {
                    name: 'fk_user_cascades_tags',
                    entity: 'Users',
                    entityKey: 'id',
                    foreignKey: 'user_id',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                }
            }
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Tags);
exports.Tags = Tags;
//# sourceMappingURL=tags.model.js.map