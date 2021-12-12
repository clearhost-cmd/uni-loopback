"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsRepliesController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PostsRepliesController = class PostsRepliesController {
    constructor(postsRepository) {
        this.postsRepository = postsRepository;
    }
    async find(id, filter) {
        return this.postsRepository.replies(id).find(filter);
    }
    async create(id, replies) {
        return this.postsRepository.replies(id).create(replies);
    }
    async patch(id, replies, where) {
        return this.postsRepository.replies(id).patch(replies, where);
    }
    async delete(id, where) {
        return this.postsRepository.replies(id).delete(where);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/posts/{id}/replies', {
        responses: {
            '200': {
                description: 'Array of Posts has many Replies',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Replies) },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('filter')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PostsRepliesController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/posts/{id}/replies', {
        responses: {
            '200': {
                description: 'Posts model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Replies) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Replies, {
                    title: 'NewRepliesInPosts',
                    exclude: ['id'],
                    optional: ['post_id']
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PostsRepliesController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/posts/{id}/replies', {
        responses: {
            '200': {
                description: 'Posts.Replies PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Replies, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Replies))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PostsRepliesController.prototype, "patch", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/posts/{id}/replies', {
        responses: {
            '200': {
                description: 'Posts.Replies DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Replies))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PostsRepliesController.prototype, "delete", null);
PostsRepliesController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.PostsRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.PostsRepository])
], PostsRepliesController);
exports.PostsRepliesController = PostsRepliesController;
//# sourceMappingURL=posts-replies.controller.js.map