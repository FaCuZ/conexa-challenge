import { Module } from '@nestjs/common';

import { FilmsService } from './films.service';
import { FilmsController } from './films.controller';

import { SwapiRepository } from '@swapi/swapi.repository';

import { HttpModule } from '@nestjs/axios';

@Module({
	controllers: [FilmsController],
	providers: [FilmsService, SwapiRepository],
	imports: [HttpModule],
})
export class FilmsModule {}
