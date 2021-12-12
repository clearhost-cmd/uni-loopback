"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsTagsController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PostsTagsController = class PostsTagsController {
    constructor(postsRepository) {
        this.postsRepository = postsRepository;
    }
    async getTags(id) {
        return this.postsRepository.tag(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/posts/{id}/tags', {
        responses: {
            '200': {
                description: 'Tags belonging to Posts',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Tags) },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PostsTagsController.prototype, "getTags", null);
PostsTagsController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.PostsRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.PostsRepository])
], PostsTagsController);
exports.PostsTagsController = PostsTagsController;
//# sourceMappingURL=posts-tags.controller.js.map