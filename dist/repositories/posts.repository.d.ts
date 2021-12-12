import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor, HasManyRepositoryFactory } from '@loopback/repository';
import { ForumDataSource } from '../datasources';
import { Posts, PostsRelations, Users, Tags, Replies } from '../models';
import { UsersRepository } from './users.repository';
import { TagsRepository } from './tags.repository';
import { RepliesRepository } from './replies.repository';
export declare class PostsRepository extends DefaultCrudRepository<Posts, typeof Posts.prototype.id, PostsRelations> {
    protected usersRepositoryGetter: Getter<UsersRepository>;
    protected tagsRepositoryGetter: Getter<TagsRepository>;
    protected repliesRepositoryGetter: Getter<RepliesRepository>;
    readonly user: BelongsToAccessor<Users, typeof Posts.prototype.id>;
    readonly tag: BelongsToAccessor<Tags, typeof Posts.prototype.id>;
    readonly replies: HasManyRepositoryFactory<Replies, typeof Posts.prototype.id>;
    constructor(dataSource: ForumDataSource, usersRepositoryGetter: Getter<UsersRepository>, tagsRepositoryGetter: Getter<TagsRepository>, repliesRepositoryGetter: Getter<RepliesRepository>);
}
