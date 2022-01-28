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
  created?: Date;

  @property({
    type: 'string',
    required: true,
    length: 20,

    index: {
      unique: true
    },

    jsonSchema: {
      maxLength: 20,
      minLength: 10,
      errorMessage: 'Tag Title must be 10 to 20 characters long.',
    },
  })
  title: string;

  @property({
    type: 'string',
    required: true,
    length: 100,

    index: {
      unique: true
    },

    jsonSchema: {
      maxLength: 100,
      minLength: 10,
      errorMessage: 'Tag Body must be 10 to 100 characters long.',
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
