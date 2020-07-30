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

@Controller('products')
export class ProductsController {
  @Get()
  findAll(): string {
    return 'Get all products';
  }

  @Get(':id')
  findOne(@Param() param): string {
    return `Get product ${param.id}`;
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
