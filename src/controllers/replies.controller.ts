import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Replies} from '../models';
import {RepliesRepository} from '../repositories';

export class RepliesController {
  constructor(
    @repository(RepliesRepository)
    public repliesRepository : RepliesRepository,
  ) {}

  @post('/replies')
  @response(200, {
    description: 'Replies model instance',
    content: {'application/json': {schema: getModelSchemaRef(Replies)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Replies, {
            title: 'NewReplies',
            exclude: ['id'],
          }),
        },
      },
    })
    replies: Omit<Replies, 'id'>,
  ): Promise<Replies> {
    return this.repliesRepository.create(replies);
  }

  @get('/replies/count')
  @response(200, {
    description: 'Replies model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Replies) where?: Where<Replies>,
  ): Promise<Count> {
    return this.repliesRepository.count(where);
  }

  @get('/replies')
  @response(200, {
    description: 'Array of Replies model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Replies, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Replies) filter?: Filter<Replies>,
  ): Promise<Replies[]> {
    return this.repliesRepository.find(filter);
  }

  @patch('/replies')
  @response(200, {
    description: 'Replies PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Replies, {partial: true}),
        },
      },
    })
    replies: Replies,
    @param.where(Replies) where?: Where<Replies>,
  ): Promise<Count> {
    return this.repliesRepository.updateAll(replies, where);
  }

  @get('/replies/{id}')
  @response(200, {
    description: 'Replies model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Replies, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Replies, {exclude: 'where'}) filter?: FilterExcludingWhere<Replies>
  ): Promise<Replies> {
    return this.repliesRepository.findById(id, filter);
  }

  @patch('/replies/{id}')
  @response(204, {
    description: 'Replies PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Replies, {partial: true}),
        },
      },
    })
    replies: Replies,
  ): Promise<void> {
    await this.repliesRepository.updateById(id, replies);
  }

  @put('/replies/{id}')
  @response(204, {
    description: 'Replies PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() replies: Replies,
  ): Promise<void> {
    await this.repliesRepository.replaceById(id, replies);
  }

  @del('/replies/{id}')
  @response(204, {
    description: 'Replies DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.repliesRepository.deleteById(id);
  }
}
