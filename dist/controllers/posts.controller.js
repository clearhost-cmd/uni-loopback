"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PostsController = class PostsController {
    constructor(postsRepository) {
        this.postsRepository = postsRepository;
    }
    async create(posts) {
        return this.postsRepository.create(posts);
    }
    async count(where) {
        return this.postsRepository.count(where);
    }
    async find(filter) {
        return this.postsRepository.find(filter);
    }
    async updateAll(posts, where) {
        return this.postsRepository.updateAll(posts, where);
    }
    async findById(id, filter) {
        return this.postsRepository.findById(id, filter);
    }
    async updateById(id, posts) {
        await this.postsRepository.updateById(id, posts);
    }
    async replaceById(id, posts) {
        await this.postsRepository.replaceById(id, posts);
    }
    async deleteById(id) {
        await this.postsRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/posts'),
    (0, rest_1.response)(200, {
        description: 'Posts model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Posts) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Posts, {
                    title: 'NewPosts',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PostsController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/posts/count'),
    (0, rest_1.response)(200, {
        description: 'Posts model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Posts)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PostsController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/posts'),
    (0, rest_1.response)(200, {
        description: 'Array of Posts model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Posts, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Posts)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PostsController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/posts'),
    (0, rest_1.response)(200, {
        description: 'Posts PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Posts, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Posts)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Posts, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PostsController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/posts/{id}'),
    (0, rest_1.response)(200, {
        description: 'Posts model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Posts, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Posts, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PostsController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/posts/{id}'),
    (0, rest_1.response)(204, {
        description: 'Posts PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Posts, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.Posts]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PostsController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/posts/{id}'),
    (0, rest_1.response)(204, {
        description: 'Posts PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.Posts]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PostsController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/posts/{id}'),
    (0, rest_1.response)(204, {
        description: 'Posts DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PostsController.prototype, "deleteById", null);
PostsController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.PostsRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.PostsRepository])
], PostsController);
exports.PostsController = PostsController;
//# sourceMappingURL=posts.controller.js.map