import { IsEnum, IsInt, IsOptional, Min } from 'class-validator';
import { ReviewStatus } from '../schemas/post.schema';
import { Type } from 'class-transformer';

export class PostFilterDto {
  @IsOptional()
  @IsInt()
  @Min(1)
  @Type(() => Number)
  page?: number = 1;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  limit?: number = 15;

  @IsOptional()
  @IsEnum(ReviewStatus)
  status?: ReviewStatus;
}
