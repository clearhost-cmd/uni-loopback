import { Replies, Users } from '../models';
import { RepliesRepository } from '../repositories';
export declare class RepliesUsersController {
    repliesRepository: RepliesRepository;
    constructor(repliesRepository: RepliesRepository);
    getUsers(id: typeof Replies.prototype.id): Promise<Users>;
}
