import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Tags,
  Posts,
} from '../models';
import {TagsRepository} from '../repositories';

export class TagsPostsController {
  constructor(
    @repository(TagsRepository) protected tagsRepository: TagsRepository,
  ) { }

  @get('/tags/{id}/posts', {
    responses: {
      '200': {
        description: 'Array of Tags has many Posts',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Posts)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Posts>,
  ): Promise<Posts[]> {
    return this.tagsRepository.posts(id).find(filter);
  }

  @post('/tags/{id}/posts', {
    responses: {
      '200': {
        description: 'Tags model instance',
        content: {'application/json': {schema: getModelSchemaRef(Posts)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Tags.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Posts, {
            title: 'NewPostsInTags',
            exclude: ['id'],
            optional: ['tag_id']
          }),
        },
      },
    }) posts: Omit<Posts, 'id'>,
  ): Promise<Posts> {
    return this.tagsRepository.posts(id).create(posts);
  }

  @patch('/tags/{id}/posts', {
    responses: {
      '200': {
        description: 'Tags.Posts PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Posts, {partial: true}),
        },
      },
    })
    posts: Partial<Posts>,
    @param.query.object('where', getWhereSchemaFor(Posts)) where?: Where<Posts>,
  ): Promise<Count> {
    return this.tagsRepository.posts(id).patch(posts, where);
  }

  @del('/tags/{id}/posts', {
    responses: {
      '200': {
        description: 'Tags.Posts DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Posts)) where?: Where<Posts>,
  ): Promise<Count> {
    return this.tagsRepository.posts(id).delete(where);
  }
}
