import { Count, Filter, Where } from '@loopback/repository';
import { Users, Replies } from '../models';
import { UsersRepository } from '../repositories';
export declare class UsersRepliesController {
    protected usersRepository: UsersRepository;
    constructor(usersRepository: UsersRepository);
    find(id: number, filter?: Filter<Replies>): Promise<Replies[]>;
    create(id: typeof Users.prototype.id, replies: Omit<Replies, 'id'>): Promise<Replies>;
    patch(id: number, replies: Partial<Replies>, where?: Where<Replies>): Promise<Count>;
    delete(id: number, where?: Where<Replies>): Promise<Count>;
}
