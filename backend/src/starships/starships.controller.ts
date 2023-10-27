import { Controller } from '@nestjs/common';

import { StarshipsService } from './starships.service';

import { SwapiService } from '@swapi/swapi.service';
import { SwapiController } from '@swapi/swapi.controller';

@Controller('starships')
export class StarshipsController extends SwapiController {
	constructor(private readonly starshipsService: StarshipsService) {
		super();
	}

	getService(): SwapiService {
		return this.starshipsService;
	}
}
