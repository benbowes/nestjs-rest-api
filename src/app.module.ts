import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { ItemsModule } from './items/items.module';
import { ProductsModule } from './products/products.module';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import config from './config/keys';

@Module({
  imports: [
    ItemsModule,
    ProductsModule,
    MongooseModule.forRoot(config.mongoURI),
  ],
  controllers: [AppController, ItemsController, ProductsController],
  providers: [AppService, ItemsService, ProductsService],
})
export class AppModule {}
