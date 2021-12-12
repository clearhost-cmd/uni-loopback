"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let TagsController = class TagsController {
    constructor(tagsRepository) {
        this.tagsRepository = tagsRepository;
    }
    async create(tags) {
        return this.tagsRepository.create(tags);
    }
    async count(where) {
        return this.tagsRepository.count(where);
    }
    async find(filter) {
        return this.tagsRepository.find(filter);
    }
    async updateAll(tags, where) {
        return this.tagsRepository.updateAll(tags, where);
    }
    async findById(id, filter) {
        return this.tagsRepository.findById(id, filter);
    }
    async updateById(id, tags) {
        await this.tagsRepository.updateById(id, tags);
    }
    async replaceById(id, tags) {
        await this.tagsRepository.replaceById(id, tags);
    }
    async deleteById(id) {
        await this.tagsRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/tags'),
    (0, rest_1.response)(200, {
        description: 'Tags model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Tags) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Tags, {
                    title: 'NewTags',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TagsController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/tags/count'),
    (0, rest_1.response)(200, {
        description: 'Tags model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Tags)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TagsController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/tags'),
    (0, rest_1.response)(200, {
        description: 'Array of Tags model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Tags, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Tags)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TagsController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/tags'),
    (0, rest_1.response)(200, {
        description: 'Tags PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Tags, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Tags)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Tags, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TagsController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/tags/{id}'),
    (0, rest_1.response)(200, {
        description: 'Tags model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Tags, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Tags, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TagsController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/tags/{id}'),
    (0, rest_1.response)(204, {
        description: 'Tags PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Tags, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.Tags]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TagsController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/tags/{id}'),
    (0, rest_1.response)(204, {
        description: 'Tags PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.Tags]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TagsController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/tags/{id}'),
    (0, rest_1.response)(204, {
        description: 'Tags DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TagsController.prototype, "deleteById", null);
TagsController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.TagsRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.TagsRepository])
], TagsController);
exports.TagsController = TagsController;
//# sourceMappingURL=tags.controller.js.map