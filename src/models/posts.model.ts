import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Users} from './users.model';
import {Tags} from './tags.model';
import {Replies} from './replies.model';

@model({
  settings: {
    foreignKeys: {
      fk_user_cascades_posts: {
        name: 'fk_user_cascades_posts',
        entity: 'Users',
        entityKey: 'id',
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      fk_tags_cascades_posts: {
        name: 'fk_tags_cascades_posts',
        entity: 'Tags',
        entityKey: 'id',
        foreignKey: 'tag_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    }
  }
})
export class Posts extends Entity {
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
      errorMessage: 'Post Title must be 25 to 50 characters long.',
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
      errorMessage: 'Post Body must be 25 to 350 characters long.',
    },
  })
  body: string;

  @belongsTo(() => Users, {
    name: 'user'
  })
  user_id: number;

  @belongsTo(() => Tags, {
    name: 'tag'
  })
  tag_id: number;

  @hasMany(() => Replies, {
    keyTo: 'post_id'
  })
  replies: Replies[];

  constructor(data?: Partial<Posts>) {
    super(data);
  }
}

export interface PostsRelations {
  // describe navigational properties here
}

export type PostsWithRelations = Posts & PostsRelations;
