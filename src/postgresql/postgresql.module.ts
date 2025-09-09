import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        host: configService.get<string>('postgres.host', '127.0.0.1'),
        database: configService.get<string>('postgres.dbname'),
        port: configService.get<number>('postgres.port', 27017),
        type: 'postgres',
        userName: configService.get<string>('postgres.username'),
        password: configService.get<string>('postgres.password'),
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class PostgresqlModule {}
