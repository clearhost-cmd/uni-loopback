"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Replies = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const users_model_1 = require("./users.model");
const posts_model_1 = require("./posts.model");
let Replies = class Replies extends repository_1.Entity {
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
], Replies.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: false,
        default: () => new Date(),
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], Replies.prototype, "created", void 0);
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
            errorMessage: 'Reply Title must be 10 to 20 characters long.',
        },
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Replies.prototype, "title", void 0);
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
            minLength: 10,
            errorMessage: 'Reply Body must be 10 to 100 characters long.',
        },
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Replies.prototype, "body", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => users_model_1.Users, {
        name: 'user'
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Replies.prototype, "user_id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => posts_model_1.Posts, {
        name: 'posts'
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Replies.prototype, "post_id", void 0);
Replies = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            foreignKeys: {
                fk_posts_cascades_replies: {
                    name: 'fk_posts_cascades_replies',
                    entity: 'Posts',
                    entityKey: 'id',
                    foreignKey: 'post_id',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                },
                fk_user_cascades_posts: {
                    name: 'fk_user_cascades_replies',
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
], Replies);
exports.Replies = Replies;
//# sourceMappingURL=replies.model.js.map