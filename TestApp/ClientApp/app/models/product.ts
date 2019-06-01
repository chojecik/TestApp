import { CategoryType } from "./enums/category-type.enum";

export class Product {
    constructor();

    constructor(
        public id?: number,
        public articleNo?: string,
        public articleName?: string,
        public description?: string,
        public category?: CategoryType,
        public grossPrice?: number
    ) { };
}
