import { Model } from 'mongoose';
import { Product } from './interfaces/product.interface';
import { ProductClass } from './schemas/product.schema';
export declare class ProductsService {
    private productModel;
    constructor(productModel: Model<ProductClass>);
    findAll(): Promise<Product[]>;
    findOne(id: string): Promise<Product>;
    create(product: Product): Promise<Product>;
    delete(id: string): Promise<Product>;
    update(id: string, product: Product): Promise<Product>;
}
