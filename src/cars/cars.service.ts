import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars = [
        {
            id: 1,
            model: 'Cherokee',
            brand: 'Chevrolet'
        },
        {
            id: 2,
            model: 'rubicok',
            brand: 'Jeep'
        },
        {
            id: 3,
            model: 'Cruze',
            brand: 'Chevrolet'
        },
    ];


    findAll() {
        return this.cars;
    }

    findById(id: number) {
        const car = this.cars.find(car => car.id === id)
        if (!car) throw new NotFoundException(`Car with id ${id} not found`)
        return this.cars[id]
    }


}
