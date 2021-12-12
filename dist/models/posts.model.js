"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Posts = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const users_model_1 = require("./users.model");
const tags_model_1 = require("./tags.model");
const replies_model_1 = require("./replies.model");
let Posts = class Posts extends repository_1.Entity {
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
], Posts.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: false,
        default: () => new Date(),
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], Posts.prototype, "created", void 0);
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
            errorMessage: 'Post Title must be 25 to 50 characters long.',
        },
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Posts.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        length: 350,
        index: {
            unique: true
        },
        jsonSchema: {
            maxLength: 350,
            minLength: 25,
            errorMessage: 'Post Body must be 25 to 350 characters long.',
        },
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Posts.prototype, "body", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => users_model_1.Users, {
        name: 'user'
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Posts.prototype, "user_id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => tags_model_1.Tags, {
        name: 'tag'
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Posts.prototype, "tag_id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => replies_model_1.Replies, {
        keyTo: 'post_id'
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], Posts.prototype, "replies", void 0);
Posts = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            foreignKeys: {
                fk_user_cascades_posts: {
                    name: 'fk_user_cascades_posts',
                    entity: 'Users',
                    entityKey: 'id',
                    foreignKey: 'user_id',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                },
                fk_tags_cascades_posts: {
                    name: 'fk_tags_cascades_posts',
                    entity: 'Tags',
                    entityKey: 'id',
                    foreignKey: 'tag_id',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                }
            }
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Posts);
exports.Posts = Posts;
//# sourceMappingURL=posts.model.js.map