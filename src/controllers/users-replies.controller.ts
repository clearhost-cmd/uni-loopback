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
  Users,
  Replies,
} from '../models';
import {UsersRepository} from '../repositories';

export class UsersRepliesController {
  constructor(
    @repository(UsersRepository) protected usersRepository: UsersRepository,
  ) { }

  @get('/users/{id}/replies', {
    responses: {
      '200': {
        description: 'Array of Users has many Replies',
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
    return this.usersRepository.replies(id).find(filter);
  }

  @post('/users/{id}/replies', {
    responses: {
      '200': {
        description: 'Users model instance',
        content: {'application/json': {schema: getModelSchemaRef(Replies)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Users.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Replies, {
            title: 'NewRepliesInUsers',
            exclude: ['id'],
            optional: ['user_id']
          }),
        },
      },
    }) replies: Omit<Replies, 'id'>,
  ): Promise<Replies> {
    return this.usersRepository.replies(id).create(replies);
  }

  @patch('/users/{id}/replies', {
    responses: {
      '200': {
        description: 'Users.Replies PATCH success count',
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
    return this.usersRepository.replies(id).patch(replies, where);
  }

  @del('/users/{id}/replies', {
    responses: {
      '200': {
        description: 'Users.Replies DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Replies)) where?: Where<Replies>,
  ): Promise<Count> {
    return this.usersRepository.replies(id).delete(where);
  }
}
