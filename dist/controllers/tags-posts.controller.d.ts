import { Count, Filter, Where } from '@loopback/repository';
import { Tags, Posts } from '../models';
import { TagsRepository } from '../repositories';
export declare class TagsPostsController {
    protected tagsRepository: TagsRepository;
    constructor(tagsRepository: TagsRepository);
    find(id: number, filter?: Filter<Posts>): Promise<Posts[]>;
    create(id: typeof Tags.prototype.id, posts: Omit<Posts, 'id'>): Promise<Posts>;
    patch(id: number, posts: Partial<Posts>, where?: Where<Posts>): Promise<Count>;
    delete(id: number, where?: Where<Posts>): Promise<Count>;
}
