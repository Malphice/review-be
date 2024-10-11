import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post, PostDocument } from './schemas/post.schema';
import { PostFilterDto } from './dto/post-filter.dto';
import { PaginatedPostResultDto } from './dto/paginated-post-result.dto';
import { UpdateReviewStatusDto } from './dto/update-review-status.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('Post') private readonly postModel: Model<PostDocument>,
  ) {}

  async findAll(filterDto: PostFilterDto): Promise<PaginatedPostResultDto> {
    const { page, limit, status } = filterDto;
    const offset = (page - 1) * limit;

    const filter = status ? { reviewStatus: status } : {};

    const [items, total] = await Promise.all([
      this.postModel.find(filter).skip(offset).limit(limit).exec(),
      this.postModel.countDocuments(filter).exec(),
    ]);

    return {
      items,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async updateReviewStatus(
    id: string,
    updateReviewStatusDto: UpdateReviewStatusDto,
  ): Promise<Post> {
    //TODO: only update review status if status was previously open
    return this.postModel
      .findByIdAndUpdate(id, updateReviewStatusDto, { new: true })
      .exec();
  }
}
