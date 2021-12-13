import {Entity, model, property, hasMany} from '@loopback/repository';
import {Posts} from './posts.model';
import {Replies} from './replies.model';
import {Tags} from './tags.model';

@model()
export class Users extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'date',
    required: false,
    default: () => new Date(),
  })
  created?: Date;

  @property({
    type: 'string',
    required: true,
    length: 50,

    index: {
      unique: true
    },

    jsonSchema: {
      maxLength: 50,
      minLength: 25,
      errorMessage: 'User Name must be 25 to 100 characters long.',
    },
  })
  name: string;

  @property({
    type: 'string',
    required: true,
    length: 100,

    index: {
      unique: true
    },

    jsonSchema: {
      maxLength: 100,
      minLength: 25,
      errorMessage: 'User Password must be 25 to 100 characters long.',
    },
  })
  password: string;

  @hasMany(() => Posts, {
    keyTo: 'user_id'
  })
  posts: Posts[];

  @hasMany(() => Replies, {
    keyTo: 'user_id'
  })
  replies: Replies[];

  @hasMany(() => Tags, {
    keyTo: 'user_id'
  })
  tags: Tags[];

  constructor(data?: Partial<Users>) {
    super(data);
  }
}

export interface UsersRelations {
  // describe navigational properties here
}

export type UsersWithRelations = Users & UsersRelations;
