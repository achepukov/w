import { Post } from '../db/models/Post';
import { getCrudRoutes } from './_crud';

export default getCrudRoutes(Post);