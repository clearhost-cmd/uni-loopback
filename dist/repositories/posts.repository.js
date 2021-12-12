"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let PostsRepository = class PostsRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, usersRepositoryGetter, tagsRepositoryGetter, repliesRepositoryGetter) {
        super(models_1.Posts, dataSource);
        this.usersRepositoryGetter = usersRepositoryGetter;
        this.tagsRepositoryGetter = tagsRepositoryGetter;
        this.repliesRepositoryGetter = repliesRepositoryGetter;
        this.replies = this.createHasManyRepositoryFactoryFor('replies', repliesRepositoryGetter);
        this.registerInclusionResolver('replies', this.replies.inclusionResolver);
        this.tag = this.createBelongsToAccessorFor('tag', tagsRepositoryGetter);
        this.registerInclusionResolver('tag', this.tag.inclusionResolver);
        this.user = this.createBelongsToAccessorFor('user', usersRepositoryGetter);
        this.registerInclusionResolver('user', this.user.inclusionResolver);
    }
};
PostsRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.forum')),
    (0, tslib_1.__param)(1, repository_1.repository.getter('UsersRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('TagsRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('RepliesRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.ForumDataSource, Function, Function, Function])
], PostsRepository);
exports.PostsRepository = PostsRepository;
//# sourceMappingURL=posts.repository.js.map