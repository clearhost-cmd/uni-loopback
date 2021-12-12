import { Count, Filter, Where } from '@loopback/repository';
import { Users, Posts } from '../models';
import { UsersRepository } from '../repositories';
export declare class UsersPostsController {
    protected usersRepository: UsersRepository;
    constructor(usersRepository: UsersRepository);
    find(id: number, filter?: Filter<Posts>): Promise<Posts[]>;
    create(id: typeof Users.prototype.id, posts: Omit<Posts, 'id'>): Promise<Posts>;
    patch(id: number, posts: Partial<Posts>, where?: Where<Posts>): Promise<Count>;
    delete(id: number, where?: Where<Posts>): Promise<Count>;
}
