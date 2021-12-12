import { Posts, Replies, Tags, Users } from "../../models";
export declare function givenEmptyDatabase(): Promise<void>;
export declare function givenUserData(data?: Partial<Users>): {
    name: string;
    password: string;
} & Partial<Users>;
export declare function givenTagData(data?: Partial<Tags>): {
    title: string;
    body: string;
    user_id: number;
} & Partial<Tags>;
export declare function givenPostData(data?: Partial<Posts>): {
    title: string;
    body: string;
    user_id: number;
    tag_id: number;
} & Partial<Posts>;
export declare function givenReplyData(data?: Partial<Replies>): {
    title: string;
    body: string;
    user_id: number;
    post_id: number;
} & Partial<Replies>;
export declare function givenUser(data?: Partial<Users>): Promise<Users>;
export declare function givenTag(data?: Partial<Tags>): Promise<Tags>;
export declare function givenPost(data?: Partial<Posts>): Promise<Posts>;
export declare function givenReply(data?: Partial<Replies>): Promise<Replies>;
