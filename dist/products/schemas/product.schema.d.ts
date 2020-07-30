import { Document } from 'mongoose';
export declare class ProductClass extends Document {
    name: string;
    qty: number;
    description: string;
}
export declare const ProductSchema: import("mongoose").Schema<any>;
