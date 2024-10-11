import { Body, Controller, Get, Param, Patch, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { PostFilterDto } from './dto/post-filter.dto';
import { UpdateReviewStatusDto } from './dto/update-review-status.dto';

@Controller('posts')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async findAll(@Query() filterDto: PostFilterDto) {
    return this.appService.findAll(filterDto);
  }

  @Patch(':id')
  async updateReviewStatus(
    @Param() params: { id: string },
    @Body() updateReviewStatusDto: UpdateReviewStatusDto,
  ) {
    return this.appService.updateReviewStatus(params.id, updateReviewStatusDto);
  }
}
