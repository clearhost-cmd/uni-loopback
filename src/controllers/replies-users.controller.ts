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
  Users,
} from '../models';
import {RepliesRepository} from '../repositories';

export class RepliesUsersController {
  constructor(
    @repository(RepliesRepository)
    public repliesRepository: RepliesRepository,
  ) { }

  @get('/replies/{id}/users', {
    responses: {
      '200': {
        description: 'Users belonging to Replies',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Users)},
          },
        },
      },
    },
  })
  async getUsers(
    @param.path.number('id') id: typeof Replies.prototype.id,
  ): Promise<Users> {
    return this.repliesRepository.user(id);
  }
}
