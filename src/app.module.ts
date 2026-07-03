import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesService } from './services/movies.services';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [MoviesService],
})
export class AppModule {}
