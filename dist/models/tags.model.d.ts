import { Entity } from '@loopback/repository';
import { Posts } from './posts.model';
export declare class Tags extends Entity {
    id?: number;
    created?: any;
    title: string;
    body: string;
    user_id: number;
    posts: Posts[];
    constructor(data?: Partial<Tags>);
}
export interface TagsRelations {
}
export declare type TagsWithRelations = Tags & TagsRelations;
