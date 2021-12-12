import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { ForumDataSource } from '../datasources';
import { Replies, RepliesRelations, Users, Posts } from '../models';
import { UsersRepository } from './users.repository';
import { PostsRepository } from './posts.repository';
export declare class RepliesRepository extends DefaultCrudRepository<Replies, typeof Replies.prototype.id, RepliesRelations> {
    protected usersRepositoryGetter: Getter<UsersRepository>;
    protected postsRepositoryGetter: Getter<PostsRepository>;
    readonly user: BelongsToAccessor<Users, typeof Replies.prototype.id>;
    readonly posts: BelongsToAccessor<Posts, typeof Replies.prototype.id>;
    constructor(dataSource: ForumDataSource, usersRepositoryGetter: Getter<UsersRepository>, postsRepositoryGetter: Getter<PostsRepository>);
}
