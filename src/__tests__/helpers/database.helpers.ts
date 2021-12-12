import {PostsRepository, RepliesRepository, TagsRepository, UsersRepository} from '../../repositories';
import {testdb} from '../fixtures/datasources/testdb.datasource';
import {Posts, Replies, Tags, Users} from "../../models";

let userRepository: UsersRepository;
let postRepository: PostsRepository;
let tagsRepository: TagsRepository;
let replRepository: RepliesRepository;

export async function givenEmptyDatabase() {
    userRepository = new UsersRepository(
        testdb,
        async () => postRepository,
        async () => replRepository,
        async () => tagsRepository,
    );

    tagsRepository = new TagsRepository(
        testdb,
        async () => userRepository,
        async () => postRepository,
    );

    postRepository = new PostsRepository(
        testdb,
        async () => userRepository,
        async () => tagsRepository,
        async () => replRepository,
    );

    replRepository = new RepliesRepository(
        testdb,
        async () => userRepository,
        async () => postRepository,
    );

    await userRepository.deleteAll();
    await tagsRepository.deleteAll();
    await postRepository.deleteAll();
    await replRepository.deleteAll();
}

export function givenUserData(data?: Partial<Users>) {
    return Object.assign(
        {
            name: 'Jonah',
            password: 'Password'
        },
        data,
    );
}

export function givenTagData(data?: Partial<Tags>) {
    return Object.assign(
        {
            title: "Jonah's Tag",
            body: 'Jonah has made a tag',
            user_id: 1
        },
        data,
    );
}

export function givenPostData(data?: Partial<Posts>) {
    return Object.assign(
        {
            title: "Jonah's Tag",
            body: 'Jonah has made a tag',
            user_id: 1,
            tag_id: 1
        },
        data,
    );
}

export function givenReplyData(data?: Partial<Replies>) {
    return Object.assign(
        {
            title: "Jonah's Tag",
            body: 'Jonah has made a tag',
            user_id: 1,
            post_id: 1
        },
        data,
    );
}

export async function givenUser(data?: Partial<Users>) {
    return new UsersRepository(
        testdb,
        async () => postRepository,
        async () => replRepository,
        async () => tagsRepository,
    ).create(givenUserData(data));
}

export async function givenTag(data?: Partial<Tags>) {
    return new TagsRepository(
        testdb,
        async () => userRepository,
        async () => postRepository,
    ).create(givenUserData(data));
}

export async function givenPost(data?: Partial<Posts>) {
    return new PostsRepository(
        testdb,
        async () => userRepository,
        async () => tagsRepository,
        async () => replRepository,
    ).create(givenUserData(data));
}

export async function givenReply(data?: Partial<Replies>) {
    return new RepliesRepository(
        testdb,
        async () => userRepository,
        async () => postRepository,
    ).create(givenUserData(data));
}