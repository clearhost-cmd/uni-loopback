import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {ForumDataSource} from '../datasources';
import {Tags, TagsRelations, Users, Posts} from '../models';
import {UsersRepository} from './users.repository';
import {PostsRepository} from './posts.repository';

export class TagsRepository extends DefaultCrudRepository<
  Tags,
  typeof Tags.prototype.id,
  TagsRelations
> {

  public readonly user: BelongsToAccessor<Users, typeof Tags.prototype.id>;

  public readonly posts: HasManyRepositoryFactory<Posts, typeof Tags.prototype.id>;

  constructor(
    @inject('datasources.forum') dataSource: ForumDataSource, @repository.getter('UsersRepository') protected usersRepositoryGetter: Getter<UsersRepository>, @repository.getter('PostsRepository') protected postsRepositoryGetter: Getter<PostsRepository>,
  ) {
    super(Tags, dataSource);
    this.posts = this.createHasManyRepositoryFactoryFor('posts', postsRepositoryGetter,);
    this.registerInclusionResolver('posts', this.posts.inclusionResolver);
    this.user = this.createBelongsToAccessorFor('user', usersRepositoryGetter,);
    this.registerInclusionResolver('user', this.user.inclusionResolver);
  }
}
