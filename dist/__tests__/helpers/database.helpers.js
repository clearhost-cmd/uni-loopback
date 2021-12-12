"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.givenReply = exports.givenPost = exports.givenTag = exports.givenUser = exports.givenReplyData = exports.givenPostData = exports.givenTagData = exports.givenUserData = exports.givenEmptyDatabase = void 0;
const repositories_1 = require("../../repositories");
const testdb_datasource_1 = require("../fixtures/datasources/testdb.datasource");
let userRepository;
let postRepository;
let tagsRepository;
let replRepository;
async function givenEmptyDatabase() {
    userRepository = new repositories_1.UsersRepository(testdb_datasource_1.testdb, async () => postRepository, async () => replRepository, async () => tagsRepository);
    tagsRepository = new repositories_1.TagsRepository(testdb_datasource_1.testdb, async () => userRepository, async () => postRepository);
    postRepository = new repositories_1.PostsRepository(testdb_datasource_1.testdb, async () => userRepository, async () => tagsRepository, async () => replRepository);
    replRepository = new repositories_1.RepliesRepository(testdb_datasource_1.testdb, async () => userRepository, async () => postRepository);
    await userRepository.deleteAll();
    await tagsRepository.deleteAll();
    await postRepository.deleteAll();
    await replRepository.deleteAll();
}
exports.givenEmptyDatabase = givenEmptyDatabase;
function givenUserData(data) {
    return Object.assign({
        name: 'Jonah',
        password: 'Password'
    }, data);
}
exports.givenUserData = givenUserData;
function givenTagData(data) {
    return Object.assign({
        title: "Jonah's Tag",
        body: 'Jonah has made a tag',
        user_id: 1
    }, data);
}
exports.givenTagData = givenTagData;
function givenPostData(data) {
    return Object.assign({
        title: "Jonah's Tag",
        body: 'Jonah has made a tag',
        user_id: 1,
        tag_id: 1
    }, data);
}
exports.givenPostData = givenPostData;
function givenReplyData(data) {
    return Object.assign({
        title: "Jonah's Tag",
        body: 'Jonah has made a tag',
        user_id: 1,
        post_id: 1
    }, data);
}
exports.givenReplyData = givenReplyData;
async function givenUser(data) {
    return new repositories_1.UsersRepository(testdb_datasource_1.testdb, async () => postRepository, async () => replRepository, async () => tagsRepository).create(givenUserData(data));
}
exports.givenUser = givenUser;
async function givenTag(data) {
    return new repositories_1.TagsRepository(testdb_datasource_1.testdb, async () => userRepository, async () => postRepository).create(givenUserData(data));
}
exports.givenTag = givenTag;
async function givenPost(data) {
    return new repositories_1.PostsRepository(testdb_datasource_1.testdb, async () => userRepository, async () => tagsRepository, async () => replRepository).create(givenUserData(data));
}
exports.givenPost = givenPost;
async function givenReply(data) {
    return new repositories_1.RepliesRepository(testdb_datasource_1.testdb, async () => userRepository, async () => postRepository).create(givenUserData(data));
}
exports.givenReply = givenReply;
//# sourceMappingURL=database.helpers.js.map