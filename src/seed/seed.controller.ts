import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { SeedService } from './seed.service';

@Controller('seed')
export class SeedController {
  constructor(
    private readonly seedService: SeedService,
    private readonly carsService: CarsService
    ) {

  }

  @Get()
  runSeed() {
    return this.seedService.populateDB();
  }

}
