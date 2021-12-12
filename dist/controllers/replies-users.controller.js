"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepliesUsersController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let RepliesUsersController = class RepliesUsersController {
    constructor(repliesRepository) {
        this.repliesRepository = repliesRepository;
    }
    async getUsers(id) {
        return this.repliesRepository.user(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/replies/{id}/users', {
        responses: {
            '200': {
                description: 'Users belonging to Replies',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Users) },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RepliesUsersController.prototype, "getUsers", null);
RepliesUsersController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.RepliesRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.RepliesRepository])
], RepliesUsersController);
exports.RepliesUsersController = RepliesUsersController;
//# sourceMappingURL=replies-users.controller.js.map