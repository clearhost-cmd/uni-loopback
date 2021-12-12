import {givenEmptyDatabase, givenReply} from '../../helpers/database.helpers';

describe('RepliesController (integration)', () => {
    before(givenEmptyDatabase);
    after(givenReply)
});