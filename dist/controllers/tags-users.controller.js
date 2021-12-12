"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsUsersController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let TagsUsersController = class TagsUsersController {
    constructor(tagsRepository) {
        this.tagsRepository = tagsRepository;
    }
    async getUsers(id) {
        return this.tagsRepository.user(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/tags/{id}/users', {
        responses: {
            '200': {
                description: 'Users belonging to Tags',
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
], TagsUsersController.prototype, "getUsers", null);
TagsUsersController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.TagsRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.TagsRepository])
], TagsUsersController);
exports.TagsUsersController = TagsUsersController;
//# sourceMappingURL=tags-users.controller.js.map