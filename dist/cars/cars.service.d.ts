import { CreateCarDto, UpdateCarDto } from './dto/';
import { Car } from './interfaces/car.interface';
export declare class CarsService {
    private cars;
    findAll(): Car[];
    findById(id: string): any;
    create(createCarDto: CreateCarDto): Car;
    update(id: string, updateCarDto: UpdateCarDto): any;
    delete(id: string): void;
    fillCars(cars: Car[]): void;
}
