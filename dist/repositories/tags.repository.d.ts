import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor, HasManyRepositoryFactory } from '@loopback/repository';
import { ForumDataSource } from '../datasources';
import { Tags, TagsRelations, Users, Posts } from '../models';
import { UsersRepository } from './users.repository';
import { PostsRepository } from './posts.repository';
export declare class TagsRepository extends DefaultCrudRepository<Tags, typeof Tags.prototype.id, TagsRelations> {
    protected usersRepositoryGetter: Getter<UsersRepository>;
    protected postsRepositoryGetter: Getter<PostsRepository>;
    readonly user: BelongsToAccessor<Users, typeof Tags.prototype.id>;
    readonly posts: HasManyRepositoryFactory<Posts, typeof Tags.prototype.id>;
    constructor(dataSource: ForumDataSource, usersRepositoryGetter: Getter<UsersRepository>, postsRepositoryGetter: Getter<PostsRepository>);
}
