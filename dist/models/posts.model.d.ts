import { Entity } from '@loopback/repository';
import { Replies } from './replies.model';
export declare class Posts extends Entity {
    id?: number;
    created?: Date;
    title: string;
    body: string;
    user_id: number;
    tag_id: number;
    replies: Replies[];
    constructor(data?: Partial<Posts>);
}
export interface PostsRelations {
}
export declare type PostsWithRelations = Posts & PostsRelations;
