"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let TagsRepository = class TagsRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, usersRepositoryGetter, postsRepositoryGetter) {
        super(models_1.Tags, dataSource);
        this.usersRepositoryGetter = usersRepositoryGetter;
        this.postsRepositoryGetter = postsRepositoryGetter;
        this.posts = this.createHasManyRepositoryFactoryFor('posts', postsRepositoryGetter);
        this.registerInclusionResolver('posts', this.posts.inclusionResolver);
        this.user = this.createBelongsToAccessorFor('user', usersRepositoryGetter);
        this.registerInclusionResolver('user', this.user.inclusionResolver);
    }
};
TagsRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.forum')),
    (0, tslib_1.__param)(1, repository_1.repository.getter('UsersRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('PostsRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.ForumDataSource, Function, Function])
], TagsRepository);
exports.TagsRepository = TagsRepository;
//# sourceMappingURL=tags.repository.js.map