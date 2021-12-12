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
  Tags,
} from '../models';
import {PostsRepository} from '../repositories';

export class PostsTagsController {
  constructor(
    @repository(PostsRepository)
    public postsRepository: PostsRepository,
  ) { }

  @get('/posts/{id}/tags', {
    responses: {
      '200': {
        description: 'Tags belonging to Posts',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Tags)},
          },
        },
      },
    },
  })
  async getTags(
    @param.path.number('id') id: typeof Posts.prototype.id,
  ): Promise<Tags> {
    return this.postsRepository.tag(id);
  }
}
