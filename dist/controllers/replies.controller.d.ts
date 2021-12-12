import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Replies } from '../models';
import { RepliesRepository } from '../repositories';
export declare class RepliesController {
    repliesRepository: RepliesRepository;
    constructor(repliesRepository: RepliesRepository);
    create(replies: Omit<Replies, 'id'>): Promise<Replies>;
    count(where?: Where<Replies>): Promise<Count>;
    find(filter?: Filter<Replies>): Promise<Replies[]>;
    updateAll(replies: Replies, where?: Where<Replies>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Replies>): Promise<Replies>;
    updateById(id: number, replies: Replies): Promise<void>;
    replaceById(id: number, replies: Replies): Promise<void>;
    deleteById(id: number): Promise<void>;
}
