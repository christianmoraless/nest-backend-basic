import { CarsService } from 'src/cars/cars.service';
import { SeedService } from './seed.service';
export declare class SeedController {
    private readonly seedService;
    private readonly carsService;
    constructor(seedService: SeedService, carsService: CarsService);
    runSeed(): import("../cars/interfaces/car.interface").Car[];
}
