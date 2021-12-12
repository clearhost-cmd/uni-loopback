import { Count, Filter, Where } from '@loopback/repository';
import { Posts, Replies } from '../models';
import { PostsRepository } from '../repositories';
export declare class PostsRepliesController {
    protected postsRepository: PostsRepository;
    constructor(postsRepository: PostsRepository);
    find(id: number, filter?: Filter<Replies>): Promise<Replies[]>;
    create(id: typeof Posts.prototype.id, replies: Omit<Replies, 'id'>): Promise<Replies>;
    patch(id: number, replies: Partial<Replies>, where?: Where<Replies>): Promise<Count>;
    delete(id: number, where?: Where<Replies>): Promise<Count>;
}
