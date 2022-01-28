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
      errorMessage: 'Reply Title must be 10 to 20 characters long.',
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
      errorMessage: 'Reply Body must be 10 to 100 characters long.',
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
