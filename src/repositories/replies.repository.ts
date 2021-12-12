import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {ForumDataSource} from '../datasources';
import {Replies, RepliesRelations, Users, Posts} from '../models';
import {UsersRepository} from './users.repository';
import {PostsRepository} from './posts.repository';

export class RepliesRepository extends DefaultCrudRepository<
  Replies,
  typeof Replies.prototype.id,
  RepliesRelations
> {

  public readonly user: BelongsToAccessor<Users, typeof Replies.prototype.id>;

  public readonly posts: BelongsToAccessor<Posts, typeof Replies.prototype.id>;

  constructor(
    @inject('datasources.forum') dataSource: ForumDataSource, @repository.getter('UsersRepository') protected usersRepositoryGetter: Getter<UsersRepository>, @repository.getter('PostsRepository') protected postsRepositoryGetter: Getter<PostsRepository>,
  ) {
    super(Replies, dataSource);
    this.posts = this.createBelongsToAccessorFor('posts', postsRepositoryGetter,);
    this.registerInclusionResolver('posts', this.posts.inclusionResolver);
    this.user = this.createBelongsToAccessorFor('user', usersRepositoryGetter,);
    this.registerInclusionResolver('user', this.user.inclusionResolver);
  }
}
