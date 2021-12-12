import {givenEmptyDatabase, givenPost} from '../../helpers/database.helpers';

describe('PostsController (integration)', () => {
    before(givenEmptyDatabase);
    after(givenPost)
});