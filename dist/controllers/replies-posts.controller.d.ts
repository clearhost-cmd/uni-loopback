import { Replies, Posts } from '../models';
import { RepliesRepository } from '../repositories';
export declare class RepliesPostsController {
    repliesRepository: RepliesRepository;
    constructor(repliesRepository: RepliesRepository);
    getPosts(id: typeof Replies.prototype.id): Promise<Posts>;
}
