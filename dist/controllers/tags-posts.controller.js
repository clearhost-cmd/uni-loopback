"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsPostsController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let TagsPostsController = class TagsPostsController {
    constructor(tagsRepository) {
        this.tagsRepository = tagsRepository;
    }
    async find(id, filter) {
        return this.tagsRepository.posts(id).find(filter);
    }
    async create(id, posts) {
        return this.tagsRepository.posts(id).create(posts);
    }
    async patch(id, posts, where) {
        return this.tagsRepository.posts(id).patch(posts, where);
    }
    async delete(id, where) {
        return this.tagsRepository.posts(id).delete(where);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/tags/{id}/posts', {
        responses: {
            '200': {
                description: 'Array of Tags has many Posts',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Posts) },
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
], TagsPostsController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/tags/{id}/posts', {
        responses: {
            '200': {
                description: 'Tags model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Posts) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Posts, {
                    title: 'NewPostsInTags',
                    exclude: ['id'],
                    optional: ['tag_id']
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TagsPostsController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/tags/{id}/posts', {
        responses: {
            '200': {
                description: 'Tags.Posts PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Posts, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Posts))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TagsPostsController.prototype, "patch", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/tags/{id}/posts', {
        responses: {
            '200': {
                description: 'Tags.Posts DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Posts))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TagsPostsController.prototype, "delete", null);
TagsPostsController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.TagsRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.TagsRepository])
], TagsPostsController);
exports.TagsPostsController = TagsPostsController;
//# sourceMappingURL=tags-posts.controller.js.map