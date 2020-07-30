import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [
    {
      id: '87658765876587658765',
      description: 'Desc of joy 1',
      qty: 23,
      name: 'My product 1',
    },
    {
      id: '66654567456745674567',
      description: 'Desc of joy 2',
      qty: 3,
      name: 'My product 2',
    },
  ];

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: string): Product {
    return this.products.find(product => product.id === id);
  }
}
