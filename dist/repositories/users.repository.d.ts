import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { ForumDataSource } from '../datasources';
import { Users, UsersRelations, Posts, Replies, Tags } from '../models';
import { PostsRepository } from './posts.repository';
import { RepliesRepository } from './replies.repository';
import { TagsRepository } from './tags.repository';
export declare class UsersRepository extends DefaultCrudRepository<Users, typeof Users.prototype.id, UsersRelations> {
    protected postsRepositoryGetter: Getter<PostsRepository>;
    protected repliesRepositoryGetter: Getter<RepliesRepository>;
    protected tagsRepositoryGetter: Getter<TagsRepository>;
    readonly posts: HasManyRepositoryFactory<Posts, typeof Users.prototype.id>;
    readonly replies: HasManyRepositoryFactory<Replies, typeof Users.prototype.id>;
    readonly tags: HasManyRepositoryFactory<Tags, typeof Users.prototype.id>;
    constructor(dataSource: ForumDataSource, postsRepositoryGetter: Getter<PostsRepository>, repliesRepositoryGetter: Getter<RepliesRepository>, tagsRepositoryGetter: Getter<TagsRepository>);
}
