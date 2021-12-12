import { Posts, Tags } from '../models';
import { PostsRepository } from '../repositories';
export declare class PostsTagsController {
    postsRepository: PostsRepository;
    constructor(postsRepository: PostsRepository);
    getTags(id: typeof Posts.prototype.id): Promise<Tags>;
}
