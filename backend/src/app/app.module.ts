import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { StarshipsModule } from '@src/starships/starships.module';
import { PlanetsModule } from '@src/planets/planets.module';
import { PeopleModule } from '@src/people/people.module';
import { FilmsModule } from '@src/films/films.module';

import config from '@src/config';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			cache: true,
			load: [config],
		}),
		PeopleModule,
		FilmsModule,
		StarshipsModule,
		PlanetsModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
