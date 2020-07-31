import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

let mongod: MongoMemoryServer;

export default (customOpts: MongooseModuleOptions = {}) =>
  MongooseModule.forRootAsync({
    useFactory: async () => {
      mongod = new MongoMemoryServer();
      const uri = await mongod.getUri();
      return {
        uri,
        ...customOpts,
      };
    },
  });

export const closeMongoConnection = async () => {
  if (mongod) await mongod.stop();
};
