// post-response.dto.ts
import { Post } from '../schemas/post.schema'; // or wherever your Post model/schema is

export class PaginatedPostResultDto {
  items: Post[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
