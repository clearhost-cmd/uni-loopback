import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Tags } from '../models';
import { TagsRepository } from '../repositories';
export declare class TagsController {
    tagsRepository: TagsRepository;
    constructor(tagsRepository: TagsRepository);
    create(tags: Omit<Tags, 'id'>): Promise<Tags>;
    count(where?: Where<Tags>): Promise<Count>;
    find(filter?: Filter<Tags>): Promise<Tags[]>;
    updateAll(tags: Tags, where?: Where<Tags>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Tags>): Promise<Tags>;
    updateById(id: number, tags: Tags): Promise<void>;
    replaceById(id: number, tags: Tags): Promise<void>;
    deleteById(id: number): Promise<void>;
}
