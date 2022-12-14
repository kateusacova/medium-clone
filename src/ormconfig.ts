import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import * as fs from 'fs';
import * as dotenv from 'dotenv';

const environment = process.env.NODE_ENV || 'development';
const data: any = dotenv.parse(fs.readFileSync(`${environment}.env`));

const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: data.DB_USERNAME,
  password: data.DB_PASSWORD,
  database: 'mediumclone',
  entities: [__dirname + '/**/*.entity{.ts,.js}'], // all files with extension .entity
  synchronize: false, 
  migrations: [__dirname + '/migrations/**/*{.ts,.js}']

};

export default config;