import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import config from './config/keys';

@Module({
  imports: [MongooseModule.forRoot(config.mongoURI), ProductsModule],
})
export class AppModule {}
