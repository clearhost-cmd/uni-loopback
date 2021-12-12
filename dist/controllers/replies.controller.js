"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepliesController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let RepliesController = class RepliesController {
    constructor(repliesRepository) {
        this.repliesRepository = repliesRepository;
    }
    async create(replies) {
        return this.repliesRepository.create(replies);
    }
    async count(where) {
        return this.repliesRepository.count(where);
    }
    async find(filter) {
        return this.repliesRepository.find(filter);
    }
    async updateAll(replies, where) {
        return this.repliesRepository.updateAll(replies, where);
    }
    async findById(id, filter) {
        return this.repliesRepository.findById(id, filter);
    }
    async updateById(id, replies) {
        await this.repliesRepository.updateById(id, replies);
    }
    async replaceById(id, replies) {
        await this.repliesRepository.replaceById(id, replies);
    }
    async deleteById(id) {
        await this.repliesRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/replies'),
    (0, rest_1.response)(200, {
        description: 'Replies model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Replies) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Replies, {
                    title: 'NewReplies',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RepliesController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/replies/count'),
    (0, rest_1.response)(200, {
        description: 'Replies model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Replies)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RepliesController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/replies'),
    (0, rest_1.response)(200, {
        description: 'Array of Replies model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Replies, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Replies)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RepliesController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/replies'),
    (0, rest_1.response)(200, {
        description: 'Replies PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Replies, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Replies)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Replies, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RepliesController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/replies/{id}'),
    (0, rest_1.response)(200, {
        description: 'Replies model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Replies, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Replies, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RepliesController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/replies/{id}'),
    (0, rest_1.response)(204, {
        description: 'Replies PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Replies, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.Replies]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RepliesController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/replies/{id}'),
    (0, rest_1.response)(204, {
        description: 'Replies PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.Replies]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RepliesController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/replies/{id}'),
    (0, rest_1.response)(204, {
        description: 'Replies DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RepliesController.prototype, "deleteById", null);
RepliesController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.RepliesRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.RepliesRepository])
], RepliesController);
exports.RepliesController = RepliesController;
//# sourceMappingURL=replies.controller.js.map