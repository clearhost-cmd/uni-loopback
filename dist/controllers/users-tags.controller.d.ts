import { Count, Filter, Where } from '@loopback/repository';
import { Users, Tags } from '../models';
import { UsersRepository } from '../repositories';
export declare class UsersTagsController {
    protected usersRepository: UsersRepository;
    constructor(usersRepository: UsersRepository);
    find(id: number, filter?: Filter<Tags>): Promise<Tags[]>;
    create(id: typeof Users.prototype.id, tags: Omit<Tags, 'id'>): Promise<Tags>;
    patch(id: number, tags: Partial<Tags>, where?: Where<Tags>): Promise<Count>;
    delete(id: number, where?: Where<Tags>): Promise<Count>;
}
