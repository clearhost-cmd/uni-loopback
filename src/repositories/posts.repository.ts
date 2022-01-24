import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {ForumDataSource} from '../datasources';
import {Posts, PostsRelations, Users, Tags, Replies} from '../models';
import {UsersRepository} from './users.repository';
import {TagsRepository} from './tags.repository';
import {RepliesRepository} from './replies.repository';

export class PostsRepository extends DefaultCrudRepository<
  Posts,
  typeof Posts.prototype.id,
  PostsRelations
> {

  public readonly user: BelongsToAccessor<Users, typeof Posts.prototype.id>;

  public readonly tag: BelongsToAccessor<Tags, typeof Posts.prototype.id>;

  public readonly replies: HasManyRepositoryFactory<Replies, typeof Posts.prototype.id>;

  constructor(
    @inject('datasources.forum') dataSource: ForumDataSource, @repository.getter('UsersRepository') 
    protected usersRepositoryGetter: Getter<UsersRepository>, @repository.getter('TagsRepository') 
    protected tagsRepositoryGetter: Getter<TagsRepository>, @repository.getter('RepliesRepository') 
    protected repliesRepositoryGetter: Getter<RepliesRepository>,
  ) {
    super(Posts, dataSource);
    this.replies = this.createHasManyRepositoryFactoryFor('replies', repliesRepositoryGetter,);
    this.registerInclusionResolver('replies', this.replies.inclusionResolver);
    this.tag = this.createBelongsToAccessorFor('tag', tagsRepositoryGetter,);
    this.registerInclusionResolver('tag', this.tag.inclusionResolver);
    this.user = this.createBelongsToAccessorFor('user', usersRepositoryGetter,);
    this.registerInclusionResolver('user', this.user.inclusionResolver);
  }
}
