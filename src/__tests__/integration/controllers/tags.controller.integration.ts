import {givenEmptyDatabase, givenTag} from '../../helpers/database.helpers';

describe('TagsController (integration)', () => {
    before(givenEmptyDatabase);
    after(givenTag)
});