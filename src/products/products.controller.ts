import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './interfaces/product.interface';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll(): Product[] {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param() param): Product {
    return this.productsService.findOne(param.id);
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto): string {
    return `name: ${createProductDto.name}, description: ${
      createProductDto.description
    }`;
  }

  @Delete(':id')
  delete(@Param() param): string {
    return `Deleted Product ${param.id}`;
  }

  @Put(':id')
  update(@Param() param, @Body() updateProductDto: CreateProductDto): string {
    return `Update Product ${param.id} - name: ${
      updateProductDto.name
    }, description: ${updateProductDto.description}`;
  }
}
