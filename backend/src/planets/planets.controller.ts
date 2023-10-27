import { Controller } from '@nestjs/common';

import { PlanetsService } from './planets.service';

import { SwapiController } from '@swapi/swapi.controller';
import { SwapiService } from '@swapi/swapi.service';

@Controller('planets')
export class PlanetsController extends SwapiController {
	constructor(private readonly planetsService: PlanetsService) {
		super();
	}

	getService(): SwapiService {
		return this.planetsService;
	}
}
