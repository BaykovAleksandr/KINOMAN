import { generateComments } from '../mock/comment.js';

class CommentsModel {
  comments = generateComments();

  get = () => this.comments;
}

export { CommentsModel };
