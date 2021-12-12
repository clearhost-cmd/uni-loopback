import { Tags, Users } from '../models';
import { TagsRepository } from '../repositories';
export declare class TagsUsersController {
    tagsRepository: TagsRepository;
    constructor(tagsRepository: TagsRepository);
    getUsers(id: typeof Tags.prototype.id): Promise<Users>;
}
