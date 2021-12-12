import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Posts,
  Users,
} from '../models';
import {PostsRepository} from '../repositories';

export class PostsUsersController {
  constructor(
    @repository(PostsRepository)
    public postsRepository: PostsRepository,
  ) { }

  @get('/posts/{id}/users', {
    responses: {
      '200': {
        description: 'Users belonging to Posts',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Users)},
          },
        },
      },
    },
  })
  async getUsers(
    @param.path.number('id') id: typeof Posts.prototype.id,
  ): Promise<Users> {
    return this.postsRepository.user(id);
  }
}
