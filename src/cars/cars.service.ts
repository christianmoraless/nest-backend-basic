import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto/';

import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        // {
        //     id: uuid(),
        //     model: 'Cherokee',
        //     brand: 'Chevrolet',
        // },
    ];


    findAll() {
        return this.cars;
    }
    
    findById(id: string) {
        const car = this.cars.find(car => car.id === id)
        if (!car) throw new NotFoundException(`Car with id ${id} not found`)
        return this.cars[id]
    }

    create(createCarDto:CreateCarDto){
        const car: Car = {
            id:uuid(),
            ...createCarDto
        }
        this.cars.push(car)
        return car;
    }

    update(id:string, updateCarDto:UpdateCarDto){
        let carDB = this.findById(id);
        this.cars = this.cars.map( car => {
            if(car.id === id) {
                carDB = {
                    ...carDB,
                    ...updateCarDto,
                    id}
                return carDB;
            }
        })
        return carDB;
    }

    delete(id:string) {
        const car = this.findById(id)
        this.cars = this.cars.filter(car=>car.id !== id);
    }



    fillCars(cars:Car[]){
        this.cars = cars
    }

}
