"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersPostsController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let UsersPostsController = class UsersPostsController {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async find(id, filter) {
        return this.usersRepository.posts(id).find(filter);
    }
    async create(id, posts) {
        return this.usersRepository.posts(id).create(posts);
    }
    async patch(id, posts, where) {
        return this.usersRepository.posts(id).patch(posts, where);
    }
    async delete(id, where) {
        return this.usersRepository.posts(id).delete(where);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/users/{id}/posts', {
        responses: {
            '200': {
                description: 'Array of Users has many Posts',
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
], UsersPostsController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/users/{id}/posts', {
        responses: {
            '200': {
                description: 'Users model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Posts) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Posts, {
                    title: 'NewPostsInUsers',
                    exclude: ['id'],
                    optional: ['user_id']
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsersPostsController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/users/{id}/posts', {
        responses: {
            '200': {
                description: 'Users.Posts PATCH success count',
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
], UsersPostsController.prototype, "patch", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/users/{id}/posts', {
        responses: {
            '200': {
                description: 'Users.Posts DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Posts))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsersPostsController.prototype, "delete", null);
UsersPostsController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.UsersRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.UsersRepository])
], UsersPostsController);
exports.UsersPostsController = UsersPostsController;
//# sourceMappingURL=users-posts.controller.js.map