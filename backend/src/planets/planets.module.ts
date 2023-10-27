import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { PlanetsController } from './planets.controller';
import { PlanetsService } from './planets.service';

import { SwapiRepository } from '@swapi/swapi.repository';

@Module({
	controllers: [PlanetsController],
	providers: [PlanetsService, SwapiRepository],
	imports: [HttpModule],
})
export class PlanetsModule {}
