"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersTagsController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let UsersTagsController = class UsersTagsController {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async find(id, filter) {
        return this.usersRepository.tags(id).find(filter);
    }
    async create(id, tags) {
        return this.usersRepository.tags(id).create(tags);
    }
    async patch(id, tags, where) {
        return this.usersRepository.tags(id).patch(tags, where);
    }
    async delete(id, where) {
        return this.usersRepository.tags(id).delete(where);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/users/{id}/tags', {
        responses: {
            '200': {
                description: 'Array of Users has many Tags',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Tags) },
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
], UsersTagsController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/users/{id}/tags', {
        responses: {
            '200': {
                description: 'Users model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Tags) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Tags, {
                    title: 'NewTagsInUsers',
                    exclude: ['id'],
                    optional: ['user_id']
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsersTagsController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/users/{id}/tags', {
        responses: {
            '200': {
                description: 'Users.Tags PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Tags, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Tags))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsersTagsController.prototype, "patch", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/users/{id}/tags', {
        responses: {
            '200': {
                description: 'Users.Tags DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Tags))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsersTagsController.prototype, "delete", null);
UsersTagsController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.UsersRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.UsersRepository])
], UsersTagsController);
exports.UsersTagsController = UsersTagsController;
//# sourceMappingURL=users-tags.controller.js.map