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
  Tags,
} from '../models';
import {UsersRepository} from '../repositories';

export class UsersTagsController {
  constructor(
    @repository(UsersRepository) protected usersRepository: UsersRepository,
  ) { }

  @get('/users/{id}/tags', {
    responses: {
      '200': {
        description: 'Array of Users has many Tags',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Tags)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Tags>,
  ): Promise<Tags[]> {
    return this.usersRepository.tags(id).find(filter);
  }

  @post('/users/{id}/tags', {
    responses: {
      '200': {
        description: 'Users model instance',
        content: {'application/json': {schema: getModelSchemaRef(Tags)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Users.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tags, {
            title: 'NewTagsInUsers',
            exclude: ['id'],
            optional: ['user_id']
          }),
        },
      },
    }) tags: Omit<Tags, 'id'>,
  ): Promise<Tags> {
    return this.usersRepository.tags(id).create(tags);
  }

  @patch('/users/{id}/tags', {
    responses: {
      '200': {
        description: 'Users.Tags PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tags, {partial: true}),
        },
      },
    })
    tags: Partial<Tags>,
    @param.query.object('where', getWhereSchemaFor(Tags)) where?: Where<Tags>,
  ): Promise<Count> {
    return this.usersRepository.tags(id).patch(tags, where);
  }

  @del('/users/{id}/tags', {
    responses: {
      '200': {
        description: 'Users.Tags DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Tags)) where?: Where<Tags>,
  ): Promise<Count> {
    return this.usersRepository.tags(id).delete(where);
  }
}
