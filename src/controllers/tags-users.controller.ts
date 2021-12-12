import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Tags,
  Users,
} from '../models';
import {TagsRepository} from '../repositories';

export class TagsUsersController {
  constructor(
    @repository(TagsRepository)
    public tagsRepository: TagsRepository,
  ) { }

  @get('/tags/{id}/users', {
    responses: {
      '200': {
        description: 'Users belonging to Tags',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Users)},
          },
        },
      },
    },
  })
  async getUsers(
    @param.path.number('id') id: typeof Tags.prototype.id,
  ): Promise<Users> {
    return this.tagsRepository.user(id);
  }
}
