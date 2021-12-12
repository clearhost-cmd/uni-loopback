"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepliesController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let UsersRepliesController = class UsersRepliesController {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async find(id, filter) {
        return this.usersRepository.replies(id).find(filter);
    }
    async create(id, replies) {
        return this.usersRepository.replies(id).create(replies);
    }
    async patch(id, replies, where) {
        return this.usersRepository.replies(id).patch(replies, where);
    }
    async delete(id, where) {
        return this.usersRepository.replies(id).delete(where);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/users/{id}/replies', {
        responses: {
            '200': {
                description: 'Array of Users has many Replies',
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
], UsersRepliesController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/users/{id}/replies', {
        responses: {
            '200': {
                description: 'Users model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Replies) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Replies, {
                    title: 'NewRepliesInUsers',
                    exclude: ['id'],
                    optional: ['user_id']
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsersRepliesController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/users/{id}/replies', {
        responses: {
            '200': {
                description: 'Users.Replies PATCH success count',
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
], UsersRepliesController.prototype, "patch", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/users/{id}/replies', {
        responses: {
            '200': {
                description: 'Users.Replies DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Replies))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsersRepliesController.prototype, "delete", null);
UsersRepliesController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.UsersRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.UsersRepository])
], UsersRepliesController);
exports.UsersRepliesController = UsersRepliesController;
//# sourceMappingURL=users-replies.controller.js.map