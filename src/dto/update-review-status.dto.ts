import { ReviewStatus } from '../schemas/post.schema';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateReviewStatusDto {
  @IsNotEmpty()
  @IsEnum(ReviewStatus)
  @Type(() => String)
  reviewStatus: ReviewStatus;
}
