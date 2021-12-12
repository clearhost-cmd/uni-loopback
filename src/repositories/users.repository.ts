import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {ForumDataSource} from '../datasources';
import {Users, UsersRelations, Posts, Replies, Tags} from '../models';
import {PostsRepository} from './posts.repository';
import {RepliesRepository} from './replies.repository';
import {TagsRepository} from './tags.repository';

export class UsersRepository extends DefaultCrudRepository<
  Users,
  typeof Users.prototype.id,
  UsersRelations
> {

  public readonly posts: HasManyRepositoryFactory<Posts, typeof Users.prototype.id>;

  public readonly replies: HasManyRepositoryFactory<Replies, typeof Users.prototype.id>;

  public readonly tags: HasManyRepositoryFactory<Tags, typeof Users.prototype.id>;

  constructor(
    @inject('datasources.forum') dataSource: ForumDataSource, @repository.getter('PostsRepository') protected postsRepositoryGetter: Getter<PostsRepository>, @repository.getter('RepliesRepository') protected repliesRepositoryGetter: Getter<RepliesRepository>, @repository.getter('TagsRepository') protected tagsRepositoryGetter: Getter<TagsRepository>,
  ) {
    super(Users, dataSource);
    this.tags = this.createHasManyRepositoryFactoryFor('tags', tagsRepositoryGetter,);
    this.registerInclusionResolver('tags', this.tags.inclusionResolver);
    this.replies = this.createHasManyRepositoryFactoryFor('replies', repliesRepositoryGetter,);
    this.registerInclusionResolver('replies', this.replies.inclusionResolver);
    this.posts = this.createHasManyRepositoryFactoryFor('posts', postsRepositoryGetter,);
    this.registerInclusionResolver('posts', this.posts.inclusionResolver);
  }
}
