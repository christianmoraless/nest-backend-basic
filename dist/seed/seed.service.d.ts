import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
export declare class SeedService {
    private readonly carsService;
    private readonly brandsService;
    constructor(carsService: CarsService, brandsService: BrandsService);
    populateDB(): import("../cars/interfaces/car.interface").Car[];
}
