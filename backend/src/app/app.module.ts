import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

import config from '@src/config';
import { PeopleModule } from '@src/people/people.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			cache: true,
			load: [config],
		}),
		PeopleModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
