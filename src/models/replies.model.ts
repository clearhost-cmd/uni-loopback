import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Users} from './users.model';
import {Posts} from './posts.model';

@model({
  settings: {
    foreignKeys: {
      fk_posts_cascades_replies: {
        name: 'fk_posts_cascades_replies',
        entity: 'Posts',
        entityKey: 'id',
        foreignKey: 'post_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      fk_user_cascades_posts: {
        name: 'fk_user_cascades_replies',
        entity: 'Users',
        entityKey: 'id',
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    }
  }
})
export class Replies extends Entity {
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
      errorMessage: 'Reply title must be at least 25 characters and maximum 50 characters',
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
      errorMessage: 'Reply body must be at least 25 characters and maximum 350 characters',
    },
  })
  body: string;

  @belongsTo(() => Users, {
    name: 'user'
  })
  user_id: number;

  @belongsTo(() => Posts, {
    name: 'posts'
  })
  post_id: number;

  constructor(data?: Partial<Replies>) {
    super(data);
  }
}

export interface RepliesRelations {
  // describe navigational properties here
}

export type RepliesWithRelations = Replies & RepliesRelations;
