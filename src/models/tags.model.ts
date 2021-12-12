import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Users} from './users.model';
import {Posts} from './posts.model';

@model({
  settings: {
    foreignKeys: {
      fk_user_cascades_tags: {
        name: 'fk_user_cascades_tags',
        entity: 'Users',
        entityKey: 'id',
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    }
  }
})
export class Tags extends Entity {
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
  created?: any;

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
      errorMessage: 'Tag title must be at least 25 characters and maximum 50 characters',
    },
  })
  title: string;

  @property({
    type: 'string',
    required: true,
    length: 350,

    index: {
      unique: true
    },

    jsonSchema: {
      maxLength: 350,
      minLength: 25,
      errorMessage: 'Tag body must be at least 10 characters and maximum 350 characters',
    },
  })
  body: string;

  @belongsTo(() => Users, {
    name: 'user'
  })
  user_id: number;

  @hasMany(() => Posts, {
    keyTo: 'tag_id'
  })
  posts: Posts[];

  constructor(data?: Partial<Tags>) {
    super(data);
  }
}

export interface TagsRelations {
  // describe navigational properties here
}

export type TagsWithRelations = Tags & TagsRelations;
