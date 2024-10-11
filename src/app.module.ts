import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PostSchema } from './schemas/post.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.local',
    }),
    MongooseModule.forRoot(process.env['MONGO_CONN_STRING'], {
      dbName: 'postsdb',
    }),
    MongooseModule.forFeature([{ name: 'Post', schema: PostSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
