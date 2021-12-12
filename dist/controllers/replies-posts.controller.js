"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepliesPostsController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let RepliesPostsController = class RepliesPostsController {
    constructor(repliesRepository) {
        this.repliesRepository = repliesRepository;
    }
    async getPosts(id) {
        return this.repliesRepository.posts(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/replies/{id}/posts', {
        responses: {
            '200': {
                description: 'Posts belonging to Replies',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Posts) },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RepliesPostsController.prototype, "getPosts", null);
RepliesPostsController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.RepliesRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.RepliesRepository])
], RepliesPostsController);
exports.RepliesPostsController = RepliesPostsController;
//# sourceMappingURL=replies-posts.controller.js.map