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
  Posts,
  Replies,
} from '../models';
import {PostsRepository} from '../repositories';

export class PostsRepliesController {
  constructor(
    @repository(PostsRepository) protected postsRepository: PostsRepository,
  ) { }

  @get('/posts/{id}/replies', {
    responses: {
      '200': {
        description: 'Array of Posts has many Replies',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Replies)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Replies>,
  ): Promise<Replies[]> {
    return this.postsRepository.replies(id).find(filter);
  }

  @post('/posts/{id}/replies', {
    responses: {
      '200': {
        description: 'Posts model instance',
        content: {'application/json': {schema: getModelSchemaRef(Replies)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Posts.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Replies, {
            title: 'NewRepliesInPosts',
            exclude: ['id'],
            optional: ['post_id']
          }),
        },
      },
    }) replies: Omit<Replies, 'id'>,
  ): Promise<Replies> {
    return this.postsRepository.replies(id).create(replies);
  }

  @patch('/posts/{id}/replies', {
    responses: {
      '200': {
        description: 'Posts.Replies PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Replies, {partial: true}),
        },
      },
    })
    replies: Partial<Replies>,
    @param.query.object('where', getWhereSchemaFor(Replies)) where?: Where<Replies>,
  ): Promise<Count> {
    return this.postsRepository.replies(id).patch(replies, where);
  }

  @del('/posts/{id}/replies', {
    responses: {
      '200': {
        description: 'Posts.Replies DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Replies)) where?: Where<Replies>,
  ): Promise<Count> {
    return this.postsRepository.replies(id).delete(where);
  }
}
