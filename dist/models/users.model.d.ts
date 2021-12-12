import { Entity } from '@loopback/repository';
import { Posts } from './posts.model';
import { Replies } from './replies.model';
import { Tags } from './tags.model';
export declare class Users extends Entity {
    id?: number;
    created?: Date;
    name: string;
    password: string;
    posts: Posts[];
    replies: Replies[];
    tags: Tags[];
    constructor(data?: Partial<Users>);
}
export interface UsersRelations {
}
export declare type UsersWithRelations = Users & UsersRelations;
