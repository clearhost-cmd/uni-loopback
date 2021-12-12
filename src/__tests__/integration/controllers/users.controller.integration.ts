import {givenEmptyDatabase, givenUser} from '../../helpers/database.helpers';

describe('UsersController (integration)', () => {
    before(givenEmptyDatabase);
    after(givenUser)
});