import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { ThrottlerModule } from '@nestjs/throttler';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { StarshipsModule } from '@src/starships/starships.module';
import { PlanetsModule } from '@src/planets/planets.module';
import { PeopleModule } from '@src/people/people.module';
import { FilmsModule } from '@src/films/films.module';
import config from '@src/config';

import { ThrottlerBehindProxyGuard } from './throttler.guard';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			cache: true,
			load: [config],
		}),
		CacheModule.registerAsync({
			useFactory: async (config: ConfigService) => config.get('cache'),
			inject: [ConfigService],
			isGlobal: true,
		}),
		ThrottlerModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: async (config: ConfigService) => config.get('throttle.list'),
			inject: [ConfigService],
		}),
		PeopleModule,
		FilmsModule,
		StarshipsModule,
		PlanetsModule,
		TerminusModule,
		HttpModule,
	],
	controllers: [AppController],
	providers: [
		AppService,
		{
			provide: APP_INTERCEPTOR,
			useClass: CacheInterceptor,
		},
		{
			provide: APP_GUARD,
			useClass: ThrottlerBehindProxyGuard,
		},
	],
})
export class AppModule {}
