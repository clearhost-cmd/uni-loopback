"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let UsersRepository = class UsersRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, postsRepositoryGetter, repliesRepositoryGetter, tagsRepositoryGetter) {
        super(models_1.Users, dataSource);
        this.postsRepositoryGetter = postsRepositoryGetter;
        this.repliesRepositoryGetter = repliesRepositoryGetter;
        this.tagsRepositoryGetter = tagsRepositoryGetter;
        this.tags = this.createHasManyRepositoryFactoryFor('tags', tagsRepositoryGetter);
        this.registerInclusionResolver('tags', this.tags.inclusionResolver);
        this.replies = this.createHasManyRepositoryFactoryFor('replies', repliesRepositoryGetter);
        this.registerInclusionResolver('replies', this.replies.inclusionResolver);
        this.posts = this.createHasManyRepositoryFactoryFor('posts', postsRepositoryGetter);
        this.registerInclusionResolver('posts', this.posts.inclusionResolver);
    }
};
UsersRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.forum')),
    (0, tslib_1.__param)(1, repository_1.repository.getter('PostsRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('RepliesRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('TagsRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.ForumDataSource, Function, Function, Function])
], UsersRepository);
exports.UsersRepository = UsersRepository;
//# sourceMappingURL=users.repository.js.map