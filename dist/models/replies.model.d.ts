import { Entity } from '@loopback/repository';
export declare class Replies extends Entity {
    id?: number;
    created?: Date;
    title: string;
    body: string;
    user_id: number;
    post_id: number;
    constructor(data?: Partial<Replies>);
}
export interface RepliesRelations {
}
export declare type RepliesWithRelations = Replies & RepliesRelations;
