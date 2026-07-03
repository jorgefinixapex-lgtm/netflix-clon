import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MoviesService } from './services/movies.services';

@Controller("movies")
export class AppController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get("get_movies")
  async getHello(): Promise<any> {
    return await this.moviesService.getMovies();
  }
}
