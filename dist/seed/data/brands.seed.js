"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BRANDS_SEED = void 0;
const uuid_1 = require("uuid");
exports.BRANDS_SEED = [
    {
        id: (0, uuid_1.v4)(),
        name: 'Volvo',
        createdAt: new Date().getTime()
    },
    {
        id: (0, uuid_1.v4)(),
        name: 'Tesla',
        createdAt: new Date().getTime()
    },
    {
        id: (0, uuid_1.v4)(),
        name: 'VW',
        createdAt: new Date().getTime()
    },
    {
        id: (0, uuid_1.v4)(),
        name: 'Mazda',
        createdAt: new Date().getTime()
    },
    {
        id: (0, uuid_1.v4)(),
        name: 'Ferrari',
        createdAt: new Date().getTime()
    },
];
//# sourceMappingURL=brands.seed.js.map