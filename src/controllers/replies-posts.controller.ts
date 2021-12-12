import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Replies,
  Posts,
} from '../models';
import {RepliesRepository} from '../repositories';

export class RepliesPostsController {
  constructor(
    @repository(RepliesRepository)
    public repliesRepository: RepliesRepository,
  ) { }

  @get('/replies/{id}/posts', {
    responses: {
      '200': {
        description: 'Posts belonging to Replies',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Posts)},
          },
        },
      },
    },
  })
  async getPosts(
    @param.path.number('id') id: typeof Replies.prototype.id,
  ): Promise<Posts> {
    return this.repliesRepository.posts(id);
  }
}
