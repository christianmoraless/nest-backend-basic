import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
export declare class CarsController {
    private readonly carsService;
    constructor(carsService: CarsService);
    getAllCars(): import("./interfaces/car.interface").Car[];
    getCarById(id: string): any;
    createCar(createCarDto: CreateCarDto): import("./interfaces/car.interface").Car;
    updateCar(id: string, updateCarDto: UpdateCarDto): any;
    deleteCar(id: string): void;
}
